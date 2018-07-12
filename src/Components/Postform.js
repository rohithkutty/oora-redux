import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';

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

    this.props.createPost(post);
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

PostForm.prototypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);
