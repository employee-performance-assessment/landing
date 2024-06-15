import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [position, setPosition] = useState(0);
  const listRef = useRef(null);
  const listItemsRef = useRef([]);
  const positionWindowRef = useRef(null);

  useEffect(() => {
    const carousel = document.querySelector('.carousel__gallery');
    carousel.addEventListener('wheel', handleScroll, { passive: false });
    carousel.addEventListener('click', handleScroll);
    // Помечаем картинки для удобства разработки
    listItemsRef.current.forEach((item, index) => {
      item.style.position = 'relative';
    });
    return () => {
      carousel.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const handlePrevClick = () => {
    const width = 130;
    const count = 1;
    setPosition((prevPosition) => {
      const newPosition = prevPosition + width * count;
      return Math.min(newPosition, 0);
    });
  };

  const handleNextClick = () => {
    const width = 130;
    const count = 1;
    setPosition((prevPosition) => {
      const newPosition = prevPosition - width * count;
      return Math.max(
        newPosition,
        -width * (listItemsRef.current.length - count)
      );
    });
  };

  const handleScroll = (e) => {
    e.preventDefault();
    if ((e.deltaY || e.detail || e.wheelDelta) > 0) {
      handlePrevClick();
    } else {
      handleNextClick();
    }
  };

  return (
    <div id="carousel" className="carousel" onWheel={handleScroll}>
      <div className="carousel__gallery" ref={positionWindowRef}>
        <ul ref={listRef} style={{ marginLeft: `${position}px` }}>
          {[
            'https://ru.js.cx/carousel/1.png',
            'https://ru.js.cx/carousel/2.png',
            'https://ru.js.cx/carousel/3.png',
            'https://ru.js.cx/carousel/4.png',
            'https://ru.js.cx/carousel/5.png',
            'https://ru.js.cx/carousel/6.png',
            'https://ru.js.cx/carousel/7.png',
            'https://ru.js.cx/carousel/8.png',
            'https://ru.js.cx/carousel/9.png',
            'https://ru.js.cx/carousel/10.png',
          ].map((src, index) => (
            <li key={index} ref={(el) => (listItemsRef.current[index] = el)}>
              <img src={src} alt={`hbf ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
