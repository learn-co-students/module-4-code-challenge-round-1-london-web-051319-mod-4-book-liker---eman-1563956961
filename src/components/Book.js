import React from "react";
import Bookshelf from "../containers/Bookshelf";

export default class Book extends React.Component {

  render() {

    return (
      <div className="card" onClick={this.props.clickHandler}>
        <h2 className="card-title">{this.props.title}</h2>
        <img src={this.props.img} className="card-img-top"/>
      </div>
    );
  }
};
