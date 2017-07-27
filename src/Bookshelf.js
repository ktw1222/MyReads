import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  }

  static bookshelves = [
    { title: "Currently Reading",
      name: "currentlyReading"
    },
    { title: "Want to Read",
      name: "wantToRead"
    },
    { title: "Read",
      name: "read"
    }
  ];

  render() {
    const { title, books, moveBook, name } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  moveBook={moveBook}
                  bookshelfName={name}
                  />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
