import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ img, modalImg, handleToggleModal }) {
  return (
    <div>
      <li
        onClick={() => handleToggleModal(modalImg)}
        className={s.ImageGalleryItem}
      >
        <img className={s.ImageGalleryItemImage} src={img} alt="" />
      </li>
    </div>
  );
}
