import React from "react";
import Bookshelf from "../containers/Bookshelf";

export default class Book extends React.Component {

  // likeBook = (book) => {
  //   console.log(book.props);
  // }

  // handleClick = () => {
  //   this.likeBook(this)
  // }  

  render() {

    return (
      <div className="card" onClick={this.clickHandler}>
        <h2 className="card-title">{this.props.title}</h2>
        <img src={this.props.img} className="card-img-top"/>
      </div>
    );
  }
};
