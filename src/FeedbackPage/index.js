import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import CreatePost from '../CreatePost';


//adapted from building example
class FeedbackPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      topic_id: "",
      stars: "",
      author: "",
      created_at: "",
      title: "",
      body: ""
    }
  }

  // componentDidMount() {
  //   fetch(`/posts.json`) 
  //   .then(response => response.json())
  //   .then(posts => {
  //     console.log(feedback)
  //     this.setState({
  //       posts: posts
  //     })
  //   })
  // }

  render() {
    console.log(this.state)
    return (
          <div className='FeedbackPage'>
            <nav className='nav'>
              <p><Link className='home' to='/'>Home</Link></p>
              <nav className='nav-categories'>
                <Link to="/reviews" className="reviews-link">Reviews</Link>
                <Link to="/create-post" className="create-post-link">Create a Post!</Link>
                <Link to="/suggestions" className="suggestions-link">Suggestions</Link>
              </nav>
            </nav>

          <div className="post-feedback">
            <p>{this.props.author}</p>
            <p>{this.props.title}</p>
            <p>{this.props.body}</p>
            <p>{this.props.created_at}</p>
           <p>{this.props.stars}</p>
          </div>
        </div>
    );
  }
}


export default FeedbackPage;
