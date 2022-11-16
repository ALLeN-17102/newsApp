import React, { Component } from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  static propTypes = {};
  //   articles = [
  //     {
  //       source: { id: "espn-cric-info", name: "ESPN Cric Info" },
  //       author: null,
  //       title:
  //         "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //       description:
  //         "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //       url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //       urlToImage:
  //         "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //       publishedAt: "2020-04-27T11:41:47Z",
  //       content:
  //         "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //     },
  //     {
  //       source: { id: "espn-cric-info", name: "ESPN Cric Info" },
  //       author: null,
  //       title:
  //         "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //       description:
  //         "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //       url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //       urlToImage:
  //         "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //       publishedAt: "2020-03-30T15:26:05Z",
  //       content:
  //         "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //     },
  //     {
  //       source: { id: "google-news-au", name: "Google News (Australia)" },
  //       author: "Tom Williams",
  //       title:
  //         "The Loop: Donald Trump announces 2024 presidential run, Russia tensions rise after missile hits Poland, and basketballer Isaac Humphries comes out as gay",
  //       description: "Get up to speed on today's headlines with The Loop.",
  //       url: "https://www.abc.net.au/news/2022-11-16/latest-news-the-loop-donald-trump-russia-poland-isaac-humphries/101660260",
  //       urlToImage:
  //         "https://live-production.wcms.abc-cdn.net.au/948ef941f3a24fff6faa98b2d57cb706?impolicy=wcms_crop_resize&cropH=2420&cropW=4302&xPos=0&yPos=81&width=862&height=485",
  //       publishedAt: "2022-11-16T07:46:08+00:00",
  //       content:
  //         "Hi there. It's Wednesday, November 16, and you're reading The Loop, a quick wrap-up of today's news.\r\nLet's start here: Donald Trump has announced his 2024 presidential run\r\nDonald Trump says he will… [+3362 chars]",
  //     },
  //     {

  //         "source": {
  //         "id": "google-news-uk",
  //         "name": "Google News (UK)"
  //         },
  //         "author": "Alix Culbertson",
  //         "title": "Dominic Raab denies bullying after requesting investigation into himself over two complaints",
  //         "description": "<ol><li>Dominic Raab denies bullying after requesting investigation into himself over two complaints  Sky News </li><li>Dominic Raab bullying claims to be examined by ‘independent investigator’, says No 10 – UK politics live  The Guardian </li><li>Suella Br…",
  //         "url": "https://news.sky.com/story/dominic-raab-requests-investigation-into-himself-over-two-complaints-against-him-12748689",
  //         "urlToImage": "https://e3.365dm.com/22/10/1600x900/skynews-dominic-raab-downing-street_5943239.jpg?20221116120119",
  //         "publishedAt": "2022-11-16T13:18:45+00:00",
  //         "content": "Dominic Raab has denied bullying claims and he requested an investigation into himself following two formal complaints made against him after days of allegations. Speaking at Prime Minister's Questi… [+3543 chars]"
  //         }
  //   ];
  constructor() {
    super();

    console.log("this is constructor from news component");
    this.state = {
      articles: [],
      //   articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e00e5c0645b9442599600c4c4877a1a9&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false });
  }
  handlePreviousClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e00e5c0645b9442599600c4c4877a1a9&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  };
  handleNextClick = async () => {
    console.log("next");
    if(this.state.page + 1>Math.ceil((this.state.totalResults/this.props.pageSize))){

    }
    else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e00e5c0645b9442599600c4c4877a1a9&page=${
            this.state.page + 1
          }&pageSize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData);
      
          this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false
          });
    }
   
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsApp - Top Headlines</h2>
        {this.state.loading&&<Spinner/>}
    
        <div className="row">
          {!this.state.loading&&this.state.articles.map((element) => {
            // console.log(element)
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  //   title={element.title?element.title.slice(0, 71):""}
                  description={element.description ? element.description : ""}
                  //   description={element.description?element.description.slice(0, 95):""}
                  imageUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
            disabled={this.state.page + 1>Math.ceil((this.state.totalResults/this.props.pageSize))}
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>

          {/* <div className="col-md-4">
            <Newsitem title="myTitle" description="myDesc"  />
            </div>
            <div className="col-md-4">
            <Newsitem title="myTitle" description="myDesc"/>
            </div> */}
        </div>

        {/* <Newsitem/>
        <Newsitem/>
        <Newsitem/> */}
        {/* This is news component. */}
      </div>
    );
  }
}

export default News;
