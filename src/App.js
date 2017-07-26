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
    // showSearchPage: false
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
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
