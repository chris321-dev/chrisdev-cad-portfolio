import { useEffect, useRef, useState } from "react";
import styles from "./DrawingViewer.module.css";

const DrawingViewer = ({ title, imageSrc, pdfSrc, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const modalRef = useRef(null);
  const dragRef = useRef(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Zoom controls
  const zoomIn = () => {
    setZoom((current) => Math.min(current + 0.25, 4));
  };

  const zoomOut = () => {
    setZoom((current) => Math.max(current - 0.25, 1));
  };

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Pan controls
  const handlePointerDown = (event) => {
    if (zoom <= 1) return;

    event.currentTarget.setPointerCapture(event.pointerId);

    dragRef.current = {
      startX: event.clientX - position.x,
      startY: event.clientY - position.y,
    };
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current) return;

    setPosition({
      x: event.clientX - dragRef.current.startX,
      y: event.clientY - dragRef.current.startY,
    });
  };

  const handlePointerUp = () => {
    dragRef.current = null;
  };

  // Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <h2>{title}</h2>

          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close drawing viewer"
          >
            &times;
          </button>
        </header>

        <div className={styles.toolbar}>
          <button onClick={zoomOut} disabled={zoom <= 1}>
            −
          </button>

          <span>{Math.round(zoom * 100)}%</span>

          <button onClick={zoomIn} disabled={zoom >= 4}>
            +
          </button>

          <button onClick={resetZoom}>
            Reset
          </button>

          <button onClick={toggleFullscreen}>
            Full screen
          </button>
        </div>

        <div
          className={styles.drawingStage}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={(event) => {
            if (event.deltaY < 0) zoomIn();
            else zoomOut();
          }}
          style={{
            cursor: zoom > 1 ? "grab" : "default",
          }}
        >
          <img
            src={imageSrc}
            alt={title}
            draggable="false"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            }}
          />
        </div>

        <footer className={styles.footer}>
          <a
            href={pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open original PDF
          </a>
        </footer>
      </div>
    </div>
  );
};

export default DrawingViewer;