import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const BOOK_URL = "http://localhost:3005/books"
class App extends Component {

  state = {
    books: [],
    onShelf: [],
  }

  componentDidMount() {
    fetch(BOOK_URL)
    .then(res => res.json())
    .then(data => this.setState({
      books: data
    }))
  }

  addNewBook = newBook => {
    this.setState({
      books: [...this.state.books, newBook]
    })
  }

  toggleOnBookShelf = (selectedBook) => {
    const booksArray = this.state.books.map(book => 
      {
        if(book !== selectedBook) return book;
      })
      this.setState({
        books: booksArray,
        onShelf: [...this.state.onShelf, selectedBook]
      })  
  }

  toggleOffBookShelf = (selectedBook) => {
    const booksArray = this.state.books.map(book => 
      {
        if(book !== selectedBook) return book;
      })
      this.setState({
        onShelf: booksArray,
        books: [...this.state.books, selectedBook]
      })  
  }

  // toggleBookShelf = (selectedBook) => {
  //   return this.state.onShelf.map(book => book.title !== selectedBook.title) ? () => this.toggleOffBookShelf(selectedBook) : () => this.toggleOnBookShelf(selectedBook)
  // }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} onShelf={this.state.onShelf} toggleOnBookShelf={this.toggleOnBookShelf} toggleOffBookShelf={this.toggleOffBookShelf} addNewBook={this.addNewBook}/>
        <Bookshelf onShelf={this.state.onShelf} toggleOnBookShelf={this.toggleOnBookShelf} toggleOffBookShelf={this.toggleOffBookShelf}/>
      </div>
    );
  }
}

export default App;
