import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'; // <-- important
import './ImageGallery.css';

import image1 from '../../assets/ImageGallery/image1.png';
import image2 from '../../assets/ImageGallery/image2.png';
import image3 from '../../assets/ImageGallery/image3.png';
import image4 from '../../assets/ImageGallery/image4.png';
import image5 from '../../assets/ImageGallery/image5.png';

const imageList = [image1, image2, image3, image4, image5];

const ImageGallery = () => {
  const [bgImage, setBgImage] = useState(imageList[0]);
  const swiperRef = useRef(null);

  const updateBackground = (swiper) => {
    const activeIndex = swiper.realIndex;
    setBgImage(imageList[activeIndex % imageList.length]);
  };

  useEffect(() => {
    setBgImage(imageList[0]);
  }, []);

  return (
    <div
      className="gallery-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.6s ease-in-out',
      }}
    >
      <div className="gallery-overlay">
        {/* Left Text Section */}
        <div className="gallery-left">
          <h2>Trimurti Watch and Company</h2>
          <p>
            We value your time!!!!!
          </p>
        </div>

        {/* Right Swiper Section */}
        <div className="gallery-swiper">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Autoplay, Scrollbar]}
            slidesPerView={3.5}
            spaceBetween={25}
            loop={true}
            speed={1000}
            simulateTouch={false}
            autoplay={{ delay: 10000 }}
            scrollbar={{ draggable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            onSlideChange={updateBackground}
          >
            {imageList.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Image ${index + 1}`} />
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
