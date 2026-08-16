import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText?: string;
}

export default function ImageLightbox({ isOpen, onClose, imageSrc, altText = "Enlarged view" }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 sm:p-8 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 text-cream/70 hover:text-amber bg-black/20 hover:bg-black/40 rounded-full transition-all border border-white/10 z-50"
            aria-label="Close floor plan"
          >
            <X size={28} />
          </button>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to backdrop
          >
            <img 
              src={imageSrc} 
              alt={altText}
              className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10 bg-white/5"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
