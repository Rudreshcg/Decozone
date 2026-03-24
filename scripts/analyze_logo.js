const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const path = require('path');

const logoPath = path.resolve(__dirname, '../src/assets/companyLogo/Logo.png');

async function analyze() {
    try {
        const image = await loadImage(logoPath);
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        
        // Sample corners
        const corners = [
            ctx.getImageData(0, 0, 1, 1).data,
            ctx.getImageData(image.width - 1, 0, 1, 1).data,
            ctx.getImageData(0, image.height - 1, 1, 1).data,
            ctx.getImageData(image.width - 1, image.height - 1, 1, 1).data
        ];
        
        console.log('Corner Pixels (RGBA):');
        corners.forEach((c, i) => console.log(`Corner ${i}: ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]}`));
        
        // Sample center
        const center = ctx.getImageData(image.width / 2, image.height / 2, 1, 1).data;
        console.log(`Center Pixel: ${center[0]}, ${center[1]}, ${center[2]}, ${center[3]}`);
        
    } catch (e) {
        console.error(e);
    }
}

analyze();
