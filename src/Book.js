import React, { Component } from 'react'
import Bookshelf from './Bookshelf'


class Book extends Component {
  render() {


    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`
          }}>
          </div>

          <div className="book-shelf-changer">
              <select value={this.props.bookshelfName} onChange={(event => {
                let bookshelfName = event.target.value;
                this.props.moveBook(this.props.book, bookshelfName)
                })}>

                <option value="none" disabled>Move to...</option>
                {Bookshelf.bookshelves.map((bookshelf) => ((
                  <option key={bookshelf.name} value={bookshelf.name}>{bookshelf.title}</option>
                )))}


                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.authors}</div>
        </div>

    )
  }
}

export default Book
