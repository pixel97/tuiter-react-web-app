import React from "react";
import postsSummary from './postSummary.json';
import PostListItem from "./post-list-item";

function PostList() {

    return (
            <ul className = "list-group">
             {

            postsSummary.map(Items=>
            <PostListItem key = {Items.id} Items = {Items}/>)
            }
            </ul>
    );

}

export default PostList;

