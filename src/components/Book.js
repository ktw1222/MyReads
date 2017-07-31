import React, { Component } from 'react';
import BookshelfChanger from './BookshelfChanger';
import PropTypes from 'prop-types';


class Book extends Component {
  static proptypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
    bookImageLink: PropTypes.string.isRequired
  };

  render() {

    const { book, moveBook } = this.props;
    const bookImageLink = book.imageLinks ? book.imageLinks.thumbnail : " ";

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${bookImageLink}")`
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
        <div className="book-authors">
          { typeof book.authors === "object" ? book.authors.join(", ") : " " }
        </div>
      </div>
    );
  };
};

export default Book
