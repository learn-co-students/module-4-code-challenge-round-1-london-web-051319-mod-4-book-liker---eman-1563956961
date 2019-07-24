import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const newBook = this.state
    this.props.addNewBook(newBook);
    this.setState({
      title: "",
      author: "",
      img: ""
    })
  }

  render() {
    return (
      <div>
        <h1>New Book</h1>
        <form onSubmit={this.handleSubmit}> 
          <input name="title" value={this.state.title} placeholder="title"onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
          <input name="author" value={this.state.author} placeholder="author"onChange={(e) => this.handleChange(e.target.name, e.target.value) }/>
          <input name="img" value={this.state.img} placeholder="img"onChange={(e) => this.handleChange(e.target.name, e.target.value) }/>
          <input type="submit" value="submit" />
        </form>
      </div>
      )
    ;
  }
}

export default Form;
