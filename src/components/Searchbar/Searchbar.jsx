import { Component } from 'react';
import s from './Searchbar.module.css';

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
      <header className={s.Searchbar}>
 

        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
        <button className={s.SearchFormButtonLabel}>Search</button>
                   

          <input
            className={s.SearchFormInput}
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
