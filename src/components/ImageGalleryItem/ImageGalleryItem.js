import React from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ img, modalImg, handleToggleModal }) {
  return (
    <ul>
      <li
        onClick={() => handleToggleModal(modalImg)}
        className={s.ImageGalleryItem}
      >
        <img className={s.ImageGalleryItemImage} src={img} alt="" />
      </li>
    </ul>
  );
}
ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  modalImg: PropTypes.string.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
