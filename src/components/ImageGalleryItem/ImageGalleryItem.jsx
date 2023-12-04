import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { image, modalImage, description } = this.props;

    return (
      <li className={css.ImageGalleryItem} onClick={this.props.onModalClick}>
        <img
          src={image}
          data-src={modalImage}
          alt={description}
          className={css.ImageGalleryItemImage}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
