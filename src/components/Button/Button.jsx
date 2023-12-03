import { Component } from 'react';
import s from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <button type="button" className={s.button} onClick={this.props.onSearch}>
        Load more
      </button>
    );
  }
}


