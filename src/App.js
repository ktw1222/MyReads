import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';


class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  };

  moveBook = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update({id: book.id}, shelf).then(() => {
      let books = this.state.books;
      let bookInData = books.find((dataBook) => {
        return dataBook.id === book.id;
      });

      if (bookInData) {
        books = books.map((mapBook) => {
          if (mapBook.id === book.id) {
            mapBook.shelf = shelf
          };

          return mapBook;
        })
      } else {
        books = [...books, book]
      };

      this.setState({ books });
    });
  };

  render() {

    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={books}
            moveBook={this.moveBook}
          />
        )}/>

        <Route path="/search" render={() => (
          <SearchBooks
            books={books}
            moveBook={this.moveBook}
          />
        )}/>
      </div>
    );
  };
};

export default BooksApp
