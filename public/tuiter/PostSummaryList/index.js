
import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

function PostSummaryList() {

    return (`
            <div class = "list-group">
             ${
            posts.map(p=>{
                return PostSummaryItem(p);
            }).join('')
            }
            </div>
    `);

}

export default PostSummaryList;