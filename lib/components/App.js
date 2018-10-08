import React from 'react';
import DataApi from '../DataApi';
import {data} from '../testdata';
import ArticleList from './ArticleList';

const api=new DataApi(data);

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      name: 'Taprout Inc.',
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
    console.log(this.state);
  }
  articleActions={
    lookupAuthor: (authorId) => this.state.authors[authorId]
  }
  render(){
    return (
      <div>
        <h1>
          {this.state.name}
        </h1>
        <div>
          <ArticleList articles={this.state.articles} articleActions={this.articleActions} />
        </div>
      </div>
    );}
}
  