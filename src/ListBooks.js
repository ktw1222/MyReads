import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

  static bookshelves = [
    { title: "currentlyReading" },
    { title: "Want to Read" },
    { title: "Read" }
  ]

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {ListBooks.bookshelves.map((bookshelf) => (
              <Bookshelf
                key={bookshelf.title}

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
    )
  }
}

export default ListBooks
