import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import API from "./adapters/API";

class App extends Component {

  state = {
    books: [],
    likedBooks: []
  }

  componentDidMount() {
    API.fetchBooks()
      .then(books => this.setState({ books }))
  }

  likeBook = (book) => {
    console.log('book liked')
  }

  render() {
    const {books, likedBooks} = this.state;

    return (
      <div className="book-container">
        <BookList books={books} bookLiker={this.likeBook}/>
        <Bookshelf likedBooks={likedBooks}/>
      </div>
    );
  }
}

export default App;
