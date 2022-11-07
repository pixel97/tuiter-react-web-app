import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import {useRef,useEffect} from 'react';
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/home-tuits-reducer";
import hometuits from '../tuits/tuits.json';
import TuitStats from '../TuitStats'

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
        "comment":"42k",
        "tuits":"4.3k",
        "likes":"300"
   }
}
) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {dispatch(deleteTuit(id));}
    return (

                <li className="list-group-item" style={{backgroundColor:"white"}}>
                    <div className = "row">
                        <div className = "col-1">
                            <img src = {Items.icon} style = {{borderRadius:"50%", height:"50px", width:"50px"}}/>
                        </div>
                        <div className = "col-11">
                            <p style = {{color:"black", fontSize:"14px", fontWeight:"bold", marginBottom:0}}>{Items.userName}&nbsp;
                                <i className = "fa fa-check-circle" style = {{color : "blue"}}></i>&nbsp;
                            <span style = {{marginBottom:0, color:"gray",fontSize:"12px"}}>@{Items.handle}&nbsp;
                            <span style = {{display:"inline", fontWeight:"normal", fontSize:"12px"}}>-{Items.time}</span>
                            </span></p>
                 <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(hometuits.id)}></i>

                            <p>{Items.tuit} <span style = {{color:"blue"}}>{Items.link}</span></p>

                            {Items.image && <img src={Items.image} style = {{height:"60%",width:"100%", borderRadius:"3%"}}/>}
                            <TuitStats tuitstat = {{"replies": Items.replies, "retuits": Items.retuits , "likes": Items.likes, "liked": Items.liked }}/>
                        </div>
                    </div>
                </li>
        );
}


export default PostListItem;