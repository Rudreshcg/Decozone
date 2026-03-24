import { motion, AnimatePresence } from 'framer-motion';
import WatermarkedImage from './WatermarkedImage';
import './ImageModal.css';

const ImageModal = ({ isOpen, onClose, images, currentIndex, setCurrentIndex }) => {
    if (!isOpen) return null;
    const blockImageSave = (e) => e.preventDefault();

    const handlePrevious = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="image-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="image-modal-content"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close-btn" onClick={onClose}>
                            &times;
                        </button>

                        {images && images.length > 1 && (
                            <>
                                <button className="modal-nav-btn prev" onClick={handlePrevious}>
                                    &#10094;
                                </button>
                                <button className="modal-nav-btn next" onClick={handleNext}>
                                    &#10095;
                                </button>
                            </>
                        )}

                        <div className="modal-image-wrapper">
                            <WatermarkedImage
                                src={images[currentIndex]}
                                alt={`Gallery image ${currentIndex + 1}`}
                                className="modal-image"
                                useLogo={false}
                                watermarkText="TVASHTA INTERIOR"
                                objectFit="contain"
                                onContextMenu={blockImageSave}
                                onDragStart={blockImageSave}
                            />
                            <div className="modal-watermark-text" aria-hidden="true">
                                TVASHTA INTERIOR
                            </div>
                        </div>

                        <div className="modal-counter">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ImageModal;
