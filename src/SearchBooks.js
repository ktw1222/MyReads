import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
  static propTypes = {
    moveBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  };

  state = {
    books:[],
    query: ""
  };

  updateQuery = (query) => {
    this.setState({ query })

    BooksAPI.search(query).then((books) => {

      if (this.state.query === query) {
        if (typeof books === "undefined") {
          books = []
        };

        this.setState({ books })
      }
    })
};

  render() {
    const { moveBook } = this.props;
    const { books } = this.state;

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
              value={this.updateQuery.query}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            { books.length > 0 ?
              books.map((book) => {
                return (
                  <li key={book.id}>
                    <Book
                      book={book}
                      moveBook={moveBook}
                      bookshelfName={book.shelf}
                    />
                  </li>
                )
              }) : (<div className="no-result">No Result</div>)
            }
          </ol>
        </div>
      </div>
    );
  };
};

export default SearchBooks
