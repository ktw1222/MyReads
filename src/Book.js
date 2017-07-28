import React, { Component } from 'react';
import BookshelfChanger from './BookshelfChanger';
import PropTypes from 'prop-types';


class Book extends Component {
  static proptypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
  };

  render() {

    const { book, moveBook, name } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.thumbnail}")`
          }}>
          </div>
          <div>
            <BookshelfChanger
              book={book}
              moveBook={moveBook}
              bookshelfName={book.shelf}
            />
          </div>
        </div>

        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  };
};

export default Book
