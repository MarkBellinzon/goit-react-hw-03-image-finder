import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { image, modalImage, description } = this.props;

    return (
      <li className={s.ImageGalleryItem} onClick={this.props.onModalClick}>
        <img
          src={image}
          data-src={modalImage}
          alt={description}
          className={s.ImageGalleryItemImage}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
