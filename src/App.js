import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import Bookshelf from './Bookshelf'


class BooksApp extends React.Component {
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
            books={this.state.books}
          />
        )}/>
        
        <Bookshelf />
      </div>
    )
  }
}

export default BooksApp
