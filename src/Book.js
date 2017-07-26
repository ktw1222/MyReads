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
            backgroundImage: `url("${this.props.image}")`
          }}>
          </div>

          <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
                {Bookshelf.bookshelves.map((bookshelf) => (
                  <option key={bookshelf.name} value={bookshelf.name}>{bookshelf.title}</option>
                ))}
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{(typeof authors === 'object')? this.props.authors.join(', '):''}</div>
        </div>

    )
  }
}

export default Book
