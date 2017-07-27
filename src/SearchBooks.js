import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'



class SearchBooks extends Component {

  state = {
    books:[],
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query })


    BooksAPI.search(query.trim()).then((response) => {
      let books = response.map((book) => {
      let foundBook = this.props.books.find(
          (bookInShelves) => (bookInShelves.id === book.id)
        )

        if (foundBook) {
          book.shelf = foundBook.shelf
        }

        return book
      })

      this.setState({ books })
    })
  }



  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>

          <div className="search-books-input-wrapper">
            <input
              onChange={(e) => this.updateQuery(e.target.value)}
              value={this.state.query}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  moveBook={this.props.moveBook}
                  bookshelfName={book.shelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  };
}

export default SearchBooks
