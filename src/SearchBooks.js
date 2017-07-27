import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
  static propTypes = {
    moveBook: PropTypes.func.isRequired
  };

  state = {
    books:[],
    query: ''
  };

  updateQuery = (query) => {
    this.setState({ query })

    BooksAPI.search(query.trim()).then((response) => {
      const books = response.map((book) => {
        const foundBook = this.props.books.find(
          (bookInShelves) => (bookInShelves.id === book.id)
        );

        if (foundBook) {
          book.shelf = foundBook.shelf
        };

        return book;
      });

      this.setState({ books })
    });
  };

  render() {
    const { moveBook } = this.props;
    const { query, books } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>

          <div className="search-books-input-wrapper">
            <input
              onChange={(event) => this.updateQuery(event.target.value)}
              value={query}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  moveBook={moveBook}
                  bookshelfName={book.shelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  };
};

export default SearchBooks
