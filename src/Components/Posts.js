import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

class Posts extends Component {
  componentWillMount(){    
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    let postItem = this.props.posts.map((post) => {
      return (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>)
    });
    return (
      <div>
        <h1>Post</h1>
        {postItem}
      </div>
    )
  }
}

Posts.prototypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, {fetchPosts})(Posts);