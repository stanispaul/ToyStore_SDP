import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getImageSize } from 'react-image-size';
import { Maincarouseldata } from './Maincarouseldata';

const MainCarousel = () => {
  const [imageDimensions, setImageDimensions] = useState([]);

  useEffect(() => {
    const fetchImageDimensions = async () => {
      const dimensionsPromises = Maincarouseldata.map(async (item) => {
        const dimensions = await getImageSize(item.Image);
        return { src: item.Image, dimensions };
      });

      const resolvedDimensions = await Promise.all(dimensionsPromises);
      setImageDimensions(resolvedDimensions);
    };

    fetchImageDimensions();
  }, []);

  const items = imageDimensions.map((item) => (
    <div
      key={item.src}
      style={{
        position: 'relative',
        width: '100%',
        height: '0',
        paddingBottom: '40%', // Decreased height
      }}
    >
      <img
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the image covers the container
        }}
        role="presentation"
        src={item.src}
        alt=""
      />
    </div>
  ));

  return (
    <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableDotsControls
      />
    </div>
  );
};

export default MainCarousel;