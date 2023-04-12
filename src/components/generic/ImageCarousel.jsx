import classNames from 'classnames';
import React, { useState } from 'react';

export const ImageCarousel = ({ images, title }) => {
  const [imagesList] = useState(images || []);
  const [selectedImage, setSelectedImage] = useState(images[0] || null);

  const selectedImageIndex = imagesList.findIndex(
    (img) => img === selectedImage
  );

  const getPrevIndex = () => {
    return (selectedImageIndex - 1 + imagesList.length) % imagesList.length;
  };

  const getNextIndex = () => {
    return (selectedImageIndex + 1) % imagesList.length;
  };

  const getPrevImage = () => {
    const prevIndex = getPrevIndex();
    setSelectedImage(imagesList[prevIndex]);
  };

  const getNextImage = () => {
    const nextIndex = getNextIndex();
    setSelectedImage(imagesList[nextIndex]);
  };

  const imageSelectButtonsJsx = () => {
    const indicies = [...imagesList.keys()];
    if (indicies.length <= 1) {
      return null;
    }
    return indicies.map((index) => (
      <button
        key={index}
        className={classNames({ active: selectedImageIndex === index })}
        onClick={() => setSelectedImage(imagesList[index])}
      >
        {index + 1}
      </button>
    ));
  };

  return (
    <div className='image-carousel'>
      <img src={selectedImage} alt={title} />
      {imagesList.length > 1 && (
        <>
          <button onClick={getPrevImage}>{`<`}</button>
          <button onClick={getNextImage}>{`>`}</button>
        </>
      )}
      <div className='select-image-buttons'>{imageSelectButtonsJsx()}</div>
    </div>
  );
};
