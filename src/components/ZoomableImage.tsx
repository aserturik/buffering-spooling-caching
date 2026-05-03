import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ZoomableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const ZoomableImage: React.FC<ZoomableImageProps> = (props) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <img
        {...props}
        onClick={() => setIsZoomed(true)}
        style={{ cursor: "zoom-in", ...props.style }}
      />
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isZoomed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsZoomed(false)}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  zIndex: 999999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "zoom-out",
                }}
              >
                <motion.img
                  src={props.src}
                  alt={props.alt}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  style={{
                    maxWidth: "95vw",
                    maxHeight: "95vh",
                    objectFit: "contain",
                    borderRadius: "12px",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
