import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Slipper from './Slipper';

import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export class Newscom extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 3,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0

    }

  }
  async updatenews() {
    this.props.setprogress(0);
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b36ffb104ea4761809a6a5c651bb18d&page=${this.state.page }&pageSize=${this.props.pagesize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    this.props.setprogress(30);
    let parsedata = await data.json();
    this.props.setprogress(70);
    this.setState({
      totalResults:parsedata.totalResults,
      articles: parsedata.articles,
      loading: false
    });
    this.props.setprogress(100);
  }

  async componentDidMount() {
    this.updatenews();
  }
  handleprev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updatenews();
  }

  handlenext = async () => {
    console.log("next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
      this.setState({ page: this.state.page + 1 });
      this.updatenews();
    }
  }
  fetchMoreData =async()=>{
    this.setState({page:this.state.page +1})
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8b36ffb104ea4761809a6a5c651bb18d&page=${this.state.page }&pageSize=${this.props.pagesize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    
    let parsedata = await data.json();
    
    this.setState({
      totalResults:parsedata.totalResults,
      articles: this.state.articles.concat(parsedata.articles),
      loading: false
    });
  };


render() {
  return (
    <div className="container my-3">
      
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader=<Slipper/>
        >
        <div className="container">
      <div className="row">
        {this.state.articles.map((element) => {
          return <div className="col md-4" key={element.url}>
            <Newsitem title={element.title} description={element.description} imgurl={element.urlToImage} urll={element.url} author={element.author} time={new Date(element.publishedAt).toUTCString()} />
          </div>


        })}

         
      </div>
      </div>
      
      </InfiniteScroll>


    </div>
  )
}
}
export default Newscom

