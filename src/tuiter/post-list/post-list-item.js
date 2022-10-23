import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const PostListItem = (
{
Items = {
    "userName": "SpaceX",
        "handle":"SpaceX",
        "time": "23h",
        "tuit": "Dennis and Akiko Tito are the first two crew members on Starship's second commercial spaceflight around the Moon",
        "link": "spacex.com/updates",
        "icon": "././/img/spacexLogo.jpg",
        "image": "././img/customers.jpg",
        "subuserName": "",
        "subhandle": "",
        "subtime": "",
        "subicon":"",
        "subtuit": "",
        "comment":"42k",
        "tuits":"4.3k",
        "likes":"200"
   }
}
) => {
    return (
                <li className="list-group-item" style={{backgroundColor:"white"}}>
                    <div className = "row" style={{height:"35em"}}>
                        <div className = "col-1">
                            <img src = {Items.icon} style = {{borderRadius:"50%", height:"50px", width:"50px"}}/>
                        </div>
                        <div className = "col-11">
                            <p style = {{color:"black", fontSize:"14px", fontWeight:"bold", marginBottom:0}}>{Items.userName}&nbsp;
                                <i className = "fa fa-check-circle" style = {{color : "blue"}}></i>&nbsp;
                            <span style = {{marginBottom:0, color:"gray",fontSize:"12px"}}>@{Items.handle}&nbsp;
                            <span style = {{display:"inline", fontWeight:"normal", fontSize:"12px"}}>-{Items.time}</span>
                            </span></p>
                            <p>{Items.tuit} <span style = {{color:"blue"}}>{Items.link}</span></p>

                            <img src={Items.image} style = {{height:"60%",width:"100%", borderRadius:"3%"}}/>
                            <div className = "row justify-content-start">
                                <div className = "col-3" style = {{color:"gray"}}>
                                    <i className="fa fa-comment"></i>&nbsp;{Items.comment}
                                </div>
                                <div className = "col-3" style = {{color:"gray"}}>
                                    <i className="fa fa-retweet"></i>&nbsp;{Items.tuits}
                                </div>
                                <div className = "col-2" style = {{color:"gray"}}>
                                    <i className="fa fa-heart"></i>&nbsp;{Items.likes}
                                </div>
                                <div className = "col-2" style = {{color:"gray"}}>
                                    <i className="fa fa-upload"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
        );
}


export default PostListItem;