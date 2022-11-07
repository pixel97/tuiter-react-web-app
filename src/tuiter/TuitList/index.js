import React from "react";
import {useSelector} from "react-redux";
import PostListItem from "../TuitItem";

function TuitList() {
const postsArray = useSelector(state => state.hometuits)
    return (
            <ul className = "list-group">
             {
            postsArray.map(Items=>
            <PostListItem key = {Items.id} Items = {Items}/>)
            }
            </ul>
    );

}

export default TuitList;

