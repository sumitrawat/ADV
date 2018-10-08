import React from 'react';
const style={
  article:{
    marginBottom: 10,
    color:'#333',
    padding:10
  },
  title:{
    fontSize:'1.6em',
    marginBottom:4,
    color:'#d11'
  }
};
const displayDate=(date)=>{
  return new Date(date).toDateString();
};

const Article=(props)=>{
  const {article, actions}=props;
  const author=actions.lookupAuthor(article.authorId);
  return(
    <div style={style.article}>
      <div style={style.title}> {article.title}</div>
      <div style={style.date}>Published: {displayDate(article.date)}</div>
      <div style={style.author}>Author: <a href={author.website}>{author.firstName+' '+author.lastName}</a></div>
      <div style={style.body}> {article.body}</div>
      <hr />
    </div>   
  );
};

export default Article;
