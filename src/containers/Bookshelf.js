import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.onShelf.map(book => <Book {...book} toggleOnBookShelf={props.toggleOnBookShelf} toggleOffBookShelf={props.toggleOffBookShelf} onShelf={props.onShelf} key={book.id}/>)}</ul>
    </div>
  );
};

export default Bookshelf;
