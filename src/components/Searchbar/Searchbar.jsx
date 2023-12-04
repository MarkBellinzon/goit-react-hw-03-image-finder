import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChahge = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
      };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button className={css.SearchBtn}>Search</button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            name="query"
            value={this.state.query}
            placeholder="Search images and photos"
            onChange={this.handleChahge}
          />
        </form>
      </header>
    );
  }
}
