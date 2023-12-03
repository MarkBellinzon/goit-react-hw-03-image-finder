import { Component } from "react";
import s from "./Modal.module.css";

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

  closeModalByBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onModalClick();
    }
  };

  render() {
    return (
      <div className={s.Overlay} onClick={this.closeModalByBackdropClick}>
        <div className={s.Modal}>
          <img src={this.props.modalImage} alt={this.props.modalAltText} />
        </div>
      </div>
    );
  }
}


