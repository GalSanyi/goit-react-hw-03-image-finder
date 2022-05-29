import React from 'react';
import s from './imageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, handleToggleModal }) => {
  return (
    <div className={s.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tag }) => (
        <ul>
          <ImageGalleryItem
            handleToggleModal={handleToggleModal}
            key={id}
            tag={tag}
            img={webformatURL}
            modalImg={largeImageURL}
          />
        </ul>
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
