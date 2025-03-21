import React, { useState } from 'react';


const Carousel = ({ images }) => {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle edge case: if images array is empty or undefined
  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  // Handle clicking the left button
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => {
      // If at the first image, loop to the last image
      if (prevIndex === 0) {
        return images.length - 1;
      }
      // Otherwise, go to the previous image
      return prevIndex - 1;
    });
  };

  // Handle clicking the right button
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => {
      // If at the last image, loop to the first image
      if (prevIndex === images.length - 1) {
        return 0;
      }
      // Otherwise, go to the next image
      return prevIndex + 1;
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
      {/* Left Arrow Button */}
      <button
        onClick={handleLeftClick}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-label="Previous image"
      >
        <FaArrowLeft size={24} color="#333" />
      </button>

      {/* Current Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
      />

      {/* Right Arrow Button */}
      <button
        onClick={handleRightClick}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-label="Next image"
      >
        <FaArrowRight size={24} color="#333" />
      </button>
    </div>
  );
};

export default Carousel;