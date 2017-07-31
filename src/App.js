import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

const noMatch = () => {
  return (
    <div className="no-match"> 404 ERROR </div>
  );
};

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
    BooksAPI.update(book, shelf).then((s) => {
      book.shelf = shelf
      this.setState(
        { books: this.state.books.filter((b) => book.id !== b.id).concat(book) }
      );
    });
  };

  render() {

    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
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

          <Route component={noMatch} />
        </Switch>
      </div>
    );
  };
};

export default BooksApp
