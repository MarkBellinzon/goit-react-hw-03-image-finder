import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

export class ImageGallery extends Component {
  render() {
    return (
      <ul className={s.ImageGallery}>
        {this.props.images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            onModalClick={this.props.onModalClick}
            key={id}
            image={webformatURL}
            modalImage={largeImageURL}
            description={tags.split(",")[0]}
          />
        ))}
      </ul>
    );
  }
}


