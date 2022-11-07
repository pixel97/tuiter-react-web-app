import React from "react";
import hometuits from '../tuits/tuits.json';

const TuitStats = (
 {
   tuitstat = { "replies": 200, "retuits": 400 , "likes": "4k", "liked": true }
 }
) => {
 return(
  <div className = "row justify-content-start">
      <div className = "col-3" style = {{color:"black"}}>
          <i className="fa fa-comment"></i>
          &nbsp;{tuitstat.replies}
      </div>
      <div className = "col-3" style = {{color:"black"}}>
          <i className="fa fa-retweet"></i>

          &nbsp;{tuitstat.retuits}
      </div>
      <div className = "col-2" style = {{color:"black"}}>
          {tuitstat.liked ? <><i className="fa fa-heart" style = {{color:"red"}}></i></> : <><i className="fa fa-heart"></i></>}
          &nbsp;{tuitstat.likes}
      </div>
      <div className = "col-3" style = {{color:"black"}}>
          <i className="fa fa-share-alt"></i>
      </div>
  </div>
 );
};
export default TuitStats;