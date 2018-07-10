import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <h3>Add Posts</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Title</label>
            <input type="text" name='title' value={this.state.title} onChange={this.handleInput}/>
          </div>
          <br />
          <div>
            <label htmlFor="">Body</label>
            <textarea name='body' value={this.state.body} onChange={this.handleInput}/>
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
