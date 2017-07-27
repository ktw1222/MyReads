import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'


class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBook = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update({id: book.id}, shelf).then(() => {
      let books = this.state.books
      let bookInData = this.state.books.find((dataBook) => {
        return dataBook.id === book.id
      })

      if (bookInData) {
        books = this.state.books.map((mapBook) => {
          if (mapBook.id === book.id) {
            mapBook.shelf = shelf
          }

          return mapBook
        })
      } else {
        books = [...books, book]
      }

      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            moveBook={this.moveBook}

          />
        )}/>

        <Route path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            moveBook={this.moveBook}
          />

        )}/>
      </div>
    )
  }
}

export default BooksApp
