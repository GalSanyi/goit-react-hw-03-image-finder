import React from 'react';
import s from './imageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images, handleToggleModal }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            handleToggleModal={handleToggleModal}
            key={id}
            img={webformatURL}
            modalImg={largeImageURL}
          />
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;
