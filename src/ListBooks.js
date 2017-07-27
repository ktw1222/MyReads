import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  };

  render() {
    const { moveBook, books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            {Bookshelf.bookshelves.map((bookshelf) => (
              <Bookshelf
                key={bookshelf.name}
                title={bookshelf.title}
                name={bookshelf.name}
                moveBook={moveBook}
                books={books.filter((book) =>
                  book.shelf === bookshelf.name)}
              />
            ))}
          </div>
        </div>

        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    );
  };
};

export default ListBooks
