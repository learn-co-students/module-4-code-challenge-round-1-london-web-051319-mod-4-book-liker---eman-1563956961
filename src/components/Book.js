import React from "react";

const Book = ({id, title, author, img, toggleOnBookShelf, toggleOffBookShelf, onShelf }) => {
  const selectedBook = {id, title, author, img}

  const bookOnShelf = (onShelf.length > 1) ? (onShelf.map(book => book.title === selectedBook.title) ? true : false) : false
  return (
    <div onClick={bookOnShelf ? () => toggleOffBookShelf(selectedBook) : () => toggleOnBookShelf(selectedBook)} >
      <h2>{title}</h2>
      <img src={img} alt={title}/>
    </div>
  );
};

export default Book;
