import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import img1 from '../../images/employee1.png';
import img2 from '../../images/employee2.png';
import img3 from '../../images/employee3.png';
import img4 from '../../images/employee4.png';
import img5 from '../../images/employee5.png';
import img6 from '../../images/employee6.png';
import img7 from '../../images/employee7.png';
import img8 from '../../images/employee8.png';
import img9 from '../../images/employee9.png';
import img10 from '../../images/employee10.png';
import img11 from '../../images/employee11.png';
import img12 from '../../images/employee12.png';
import img13 from '../../images/employee13.png';
import img14 from '../../images/employee14.png';
import img15 from '../../images/employee15.png';
import img16 from '../../images/employee16.png';
import img17 from '../../images/employee17.png';
import img18 from '../../images/employee18.png';
import img19 from '../../images/employee19.png';
import img20 from '../../images/employee20.png';
import img21 from '../../images/employee21.png';

const Carousel = () => {
  const arrImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
  ];

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
    const width = 300;
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
          {arrImages.map((src, index) => (
            <li
              key={index}
              ref={(el) => (listItemsRef.current[index] = el)}
              className="carousel__li"
            >
              <img
                src={src}
                alt={`hbf ${index + 1}`}
                className="carousel__image"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
