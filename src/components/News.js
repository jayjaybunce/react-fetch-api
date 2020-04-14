import React from "react";
import 'semantic-ui-css/semantic.min.css';
import getDataFromApi from '../services/fetcher'
import CREDS from '../creds'


class News extends React.Component{
  state = {
    articles: []
  }
  async componentDidMount(){
    let api_creds = CREDS['news']
    let articles = await getDataFromApi(api_creds)
    this.setState({
      articles: articles.articles
    })
    
    
  }
  render(){
    return(
      <div>
        <h1>News Api</h1>
        <div className="row">
        {this.state.articles.map((article,index)=>{
          return(
            
              <div key={index}  className="col s12 m7 l3" >
                <div className="card">
                  <div className="card-image">
                    <img  src={article.urlToImage}/>
                    
                  </div>
                  <div className="card-content">
                    <p>{article.title}</p>
                  </div>
                  <div className="card-action">
                    {article.author}
                    <a class="btn-floating halfway-fab waves-effect waves-light red" href={article.url} target='_blank'><i class="material-icons">O</i></a>
                  </div>
                </div>
              </div>
            
          )
        })}
        </div>
      </div>
    )
  }
}


export default News;