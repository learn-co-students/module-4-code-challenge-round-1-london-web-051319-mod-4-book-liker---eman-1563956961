import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {
  render() {
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{this.props.likedBooks.map(likedBook => <Book {...likedBook} />)}</ul>
      </div>
    );
  }
};

export default Bookshelf;
