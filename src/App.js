import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import Bookshelf from './Bookshelf'


class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBook = (book, shelf) => {
    book.shelf = shelf;
    BookAPI.update(book, shelf).then(() => {
      const updateBooks = this.state.books.filter((b) => b.id !== book.id)
      this.setState({books: updateBooks.concat([ book ])});
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            // books={this.state.books}
          />
        )}/>

        <Route path="/search" render={() => (
          <SearchBooks />

        )}/>
      </div>
    )
  }
}

export default BooksApp
