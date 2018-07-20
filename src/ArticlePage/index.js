import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import moment from 'moment';

class ArticlePage extends Component {
    constructor(props) {
    super(props);

    this.state = {
      businessNews: []
    }
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a78e0b2dba4b489eb46d9605ed082d65')
    .then(response => response.json())
    .then(data => {
      console.log(data.articles)
      this.setState({
        businessNews: data.articles
    })
  })
  }
    render() {
      return( 
        <div className="SingleArticle">
            <div>
               <h1>Test</h1> 
            </div>
            <div className='container'> 
            {this.state.businessNews.map(article => 
             <div className='business-news'>
                <a href={article.url} target="_blank"><h2 className='title'>{article.title}</h2></a>
                <h4 className='time'>{article.publishedAt = moment(article.publishedAt).format('LL')}</h4>
                <div className='img-description'>
                  <a href={article.url} target="_blank"><img className='img' src={article.urlToImage || 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg'} /></a>
                  <h3 className='description'>{article.description || 'Sorry, no description available.'}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
        );
    }
}

export default ArticlePage;