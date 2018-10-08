import DataApi from '../DataApi';
import {data} from '../testdata';
const api = new DataApi(data);

describe('DataApi',()=>{
  it('expose Articles as an object',()=>{
    const articles=api.getArticles();
    const articleID=data.articles[0].id;
    const articleTitle=data.articles[0].title;
    expect(articles).toHaveProperty(articleID);
    expect(articles[articleID].title).toBe(articleTitle);
  });

  it('expose Author as an object',()=>{
    const authors=api.getAuthors();
    const authorID=data.authors[0].id;
    const authorfirstname=data.authors[0].title;
    expect(authors).toHaveProperty(authorID);
    expect(authors[authorID].firstname).toBe(authorfirstname);
  });
});