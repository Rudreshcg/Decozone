import { useEffect, useRef, useState } from 'react';
import LogoPng from '../../assets/companyLogo/Logo.png';

// Pre-load logo image globally
const logoImage = new Image();
logoImage.src = LogoPng;
logoImage.crossOrigin = 'anonymous';

let globalProcessedLogo = null;
let isProcessingLogo = false;
let logoListeners = [];

const notifyLogoListeners = (logo) => {
    console.log('Watermark Logo: Notifying listeners', logo ? 'with logo' : 'without logo');
    globalProcessedLogo = logo;
    isProcessingLogo = false; // Reset processing flag
    logoListeners.forEach(listener => listener(logo));
    logoListeners = [];
};

const processLogoGlobal = () => {
    if (globalProcessedLogo) return;
    if (isProcessingLogo) return;
    
    if (!logoImage.complete || logoImage.width === 0) {
        logoImage.onload = () => processLogoGlobal();
        logoImage.onerror = () => notifyLogoListeners(null);
        return;
    }
    
    isProcessingLogo = true;
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = logoImage.width;
    tempCanvas.height = logoImage.height;
    const tCtx = tempCanvas.getContext('2d');
    tCtx.drawImage(logoImage, 0, 0);
    
    try {
        const imageData = tCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
            if (a < 10) continue;
            // Remove white background but keep original logo colors (green)
            if (r > 200 && g > 200 && b > 200) {
                data[i+3] = 0;
            }
        }
        tCtx.putImageData(imageData, 0, 0);
        notifyLogoListeners(tempCanvas);
    } catch (e) {
        console.warn('Watermark Logo: Processing failed, using original', e);
        notifyLogoListeners(logoImage);
    }
};

let logoPromise = null;

const getProcessedLogo = () => {
    if (globalProcessedLogo) return Promise.resolve(globalProcessedLogo);
    if (logoPromise) return logoPromise;
    
    logoPromise = new Promise((resolve) => {
        const listener = (logo) => resolve(logo);
        logoListeners.push(listener);
        processLogoGlobal();
    });
    
    return logoPromise;
};

const WatermarkedImage = ({ 
    src, 
    alt, 
    className, 
    style, 
    watermarkText = 'TVASHTA INTERIOR',
    useLogo = true,
    objectFit = 'cover',
    ...props 
}) => {
    const canvasRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [logo, setLogo] = useState(globalProcessedLogo);

    useEffect(() => {
        if (!useLogo) return;
        
        let mounted = true;
        getProcessedLogo().then((processedLogo) => {
            if (mounted) setLogo(processedLogo);
        });
        
        return () => { mounted = false; };
    }, [useLogo]);

    useEffect(() => {
        // Ensure each source redraw starts from loading state.
        setImageLoaded(false);
    }, [src]);

    useEffect(() => {
        const image = new Image();
        image.src = src;
        // Comment out crossOrigin for local assets to avoid potential CORS issues if server isn't configured
        // image.crossOrigin = 'anonymous';
        
        const draw = () => {
            const canvas = canvasRef.current;
            if (!canvas || !image.complete) return;

            const ctx = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height;
            
            // Clear and draw image
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0);
            
            const margin = Math.max(20, image.width * 0.04);
            
            if (useLogo && logo) {
                // Ensure logo has dimensions
                const lWidth = logo.width || logo.naturalWidth || 100;
                const lHeight = logo.height || logo.naturalHeight || 100;
                
                const targetLogoWidth = image.width * 0.18;
                const scaleFactor = targetLogoWidth / lWidth;
                const targetLogoHeight = lHeight * scaleFactor;
                
                ctx.save();
                ctx.globalAlpha = 1.0;
                ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
                ctx.shadowBlur = Math.max(4, image.width * 0.005);
                ctx.shadowOffsetX = Math.max(2, image.width * 0.002);
                ctx.shadowOffsetY = Math.max(2, image.width * 0.002);
                
                ctx.drawImage(
                    logo, 
                    canvas.width - targetLogoWidth - margin, 
                    canvas.height - targetLogoHeight - margin,
                    targetLogoWidth,
                    targetLogoHeight
                );
                ctx.restore();
                console.log('Watermark Logo: Logo drawn on canvas', { targetLogoWidth, targetLogoHeight });
            } else {
                // Fallback to text watermark when logo is disabled or unavailable.
                const fontSize = Math.max(24, Math.floor(image.width / 30));
                ctx.font = `700 ${fontSize}px "Playfair Display", "Montserrat", sans-serif`;
                
                ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                ctx.shadowBlur = fontSize / 4;
                ctx.shadowOffsetX = fontSize / 10;
                ctx.shadowOffsetY = fontSize / 10;
                
                const textWidth = ctx.measureText(watermarkText).width;
                
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fillRect(
                    canvas.width - textWidth - margin - 15, 
                    canvas.height - fontSize - margin - 10, 
                    textWidth + 30, 
                    fontSize + 20
                );
                
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.textAlign = 'right';
                ctx.textBaseline = 'bottom';
                ctx.fillText(watermarkText, canvas.width - margin, canvas.height - margin);
            }
            
            setImageLoaded(true);
        };

        image.onload = draw;
        if (image.complete) draw();
        
        // Safety timeout for large images or slow processing
        const timeoutId = setTimeout(() => {
            if (!imageLoaded && image.complete) draw();
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [src, watermarkText, useLogo, logo]);

    return (
        <div 
            className={`watermark-wrapper ${className || ''}`} 
            style={{ ...style, position: 'relative', overflow: 'hidden' }}
            {...props}
        >
            <canvas
                ref={canvasRef}
                style={{ 
                    display: imageLoaded ? 'block' : 'none', 
                    width: '100%', 
                    height: '100%',
                    objectFit: objectFit // Use the prop
                }}
            />
            {!imageLoaded && <div className="loading-placeholder" style={{ width: '100%', height: '100%', background: '#f5f5f5' }}></div>}
        </div>
    );
};

export default WatermarkedImage;
