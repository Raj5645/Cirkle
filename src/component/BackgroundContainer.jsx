import React, { useEffect, useState } from "react";
import "./BackgroundContainer.css";

function BackgroundContainer() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    // Generate 24 random positioned images
    const imagePositions = Array.from({ length: 24 }, (_, i) => ({
      src: `/pics/${i + 1}.png`,
      top: Math.random() * 100,
      left: Math.random() * 100,
      scale: 0.5 + Math.random() * 0.7,
      rotation: Math.random() * 10 - 5,
    }));
    
    setImages(imagePositions);
  }, []);

  return (
    <div className="background-container">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt=""
          className="background-image"
          style={{
            top: `${img.top}%`,
            left: `${img.left}%`,
            transform: `scale(${img.scale}) rotate(${img.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundContainer;