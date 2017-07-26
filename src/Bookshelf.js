import React, { Component } from 'react'

class Bookshelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
            </li>
          </ol>
        </div>

        <h2 className="bookshelf-title">Want To Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
            </li>
          </ol>
        </div>

        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
