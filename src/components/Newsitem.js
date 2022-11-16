import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Newsitem extends Component {
  static propTypes = {};

  render() {
   
    
    let {title,description,imageUrl,url}=this.props;
    return (
      <div className="my-3" >
        
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-primary btn-dark">
              Read More
            </a>
          </div>
        </div>
        {/* This is news item. */}
      </div>
    );
  }
}
