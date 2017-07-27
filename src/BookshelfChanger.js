import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

class BookshelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookshelfName: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired,
  }

  render() {
    const { bookshelfName, book, moveBook } = this.props

    return (
      <div className="book-shelf-changer">
        <select
          value={bookshelfName}
          onChange={(event) => {
          const bookshelfName = event.target.value;
          moveBook(book, bookshelfName)
          }}>

          <option value="none" disabled>Move to...</option>
            {Bookshelf.bookshelves.map((bookshelf) => ((
              <option key={bookshelf.name} value={bookshelf.name}>{bookshelf.title}</option>
            )))}

          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger
