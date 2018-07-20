import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SciencePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scienceNews: []
    }
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=a78e0b2dba4b489eb46d9605ed082d65')
    .then(response => response.json())
    .then(data => {
      console.log(data.articles)
      this.setState({
        scienceNews: data.articles
    })
  })
  }
  render() {
    return (
      <div className='SciencePage'>
        <nav className='nav'>
          <p><Link className='home' to='/'>Home</Link></p>
            <nav className='nav-categories'>
              <Link to="/technology" className="technology-link">Technology</Link>
              <Link to="/business" className="business-link">Business</Link>
              <Link to="/politics" className="politics-link">Politics</Link>
              <Link to="/entertainment" className="entertainment-link">Entertainment</Link>
              <Link to="/sports" className="sports-link">Sports</Link>
            </nav>
        </nav>
        <h2 className='page-title'>Science</h2>
          <div className='container'> 
            {this.state.scienceNews.map(article => 
             <div className='science-news'>
                <a href={article.url} target="_blank"><h2 className='title'>{article.title}</h2></a>
                <h4 className='time'>{article.publishedAt = moment(article.publishedAt).format('LL')}</h4>
                <div className='img-description'>
                  <a href={article.url} target="_blank"><img className='img' src={article.urlToImage || 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'}  /></a>
                  <h3 className='description'>{article.description || 'Sorry, no description available.'}</h3>
                </div>
              </div>
            )}
          </div>
      </div>
    )
  }
}

export default SciencePage;
