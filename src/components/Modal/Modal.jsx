import { Component } from "react";
import css from "./Modal.module.css";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeModalByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModalByEsc);
  }

  closeModalByEsc = (e) => {
    if (e.code !== "Escape") {
      return;
    }

    this.props.onModalClick();
  };

  closeModal = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onModalClick();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.closeModal}>
        <div className={css.Modal}>
          <img src={this.props.modalImage} alt={this.props.modalAltText} />
        </div>
      </div>
    );
  }
}


