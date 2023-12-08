import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';
import * as basicLightbox from 'basiclightbox';

export class Modal extends Component {
  static propTypes = {
    currentImageUrl: PropTypes.string,
    currentImageDescription: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  };

  handleClickImage = () => {
    const { currentImageUrl, currentImageDescription } = this.props;

    const instance = basicLightbox.create(`
      <img src="${currentImageUrl}" alt="${currentImageDescription}" width="800" height="600">
    `);

    instance.show();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { currentImageUrl, currentImageDescription, onClose } = this.props;

    return (
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img
            src={currentImageUrl}
            alt={currentImageDescription}
            loading="lazy"
            onClick={this.handleClickImage}
          />
        </div>
      </div>
    );
  }
}

// import PropTypes from 'prop-types';
// import { Component } from 'react';
// // import { createPortal } from 'react-dom';
// // import { BsXLg } from 'react-icons/bs';
// import css from './Modal.module.css';
// // import * as basicLightbox from 'basiclightbox';

// const modalRoot = document.querySelector('#modal-root');

// export class Modal extends Component {
//   static propTypes = {
//     // title: PropTypes.string,
//     // onClose: PropTypes.func.isRequired,
//     currentImageUrl: PropTypes.string,
//     currentImageDescription: PropTypes.string,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleClickBackdrop = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { currentImageUrl, currentImageDescription } = this.props;

//     return (
//       (
//         <div className={css.backdrop} onClick={this.handleClickBackdrop}>
//           <div className={css.modal}>
//             <img
//               src={currentImageUrl}
//               alt={currentImageDescription}
//               loading="lazy"
//             />
//           </div>
//         </div>
//       ),
//       modalRoot
//     );
//   }
// }
