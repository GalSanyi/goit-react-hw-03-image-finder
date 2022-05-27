import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchImages from '../services/api';
import Modal from './Modal/Modal';
import '../components/App.css';
import Loader from './Loader/Loader';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    isPending: false,
    isModalOpen: false,
    images: [],
    modalImg: '',
  };

  formSubmitHandler = query => {
    console.log('query', query);
    this.setState({ query, isPending: true, images: [], page: 1 });
  };
  componentDidUpdate() {
    const { isPending, query, page } = this.state;
    if (isPending) {
      fetchImages(query, page).then(img => {
        this.setState(prev => ({
          images: page > 1 ? [...prev.images, ...img] : img,
          isPending: false,
        }));
      });
    }
  }
  handleToggleModal = image => {
    this.setState(prev => ({
      isModalOpen: !prev.isModalOpen,
      modalImg: image,
    }));
  };
  handleLoadMore() {
    this.setState(prev => ({ page: prev.page + 1, isPending: true }));
  }
  render() {
    const { images, isModalOpen, modalImg, isPending } = this.state;
    const { handleToggleModal, handleLoadMore } = this;
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery handleToggleModal={handleToggleModal} images={images} />
        {images.length >= 12 && (
          <Button handleLoadMore={handleLoadMore.bind(this)} />
        )}

        {isPending && <Loader />}
        {isModalOpen && (
          <Modal modalImg={modalImg} handleToggleModal={handleToggleModal} />
        )}
      </div>
    );
  }
}
