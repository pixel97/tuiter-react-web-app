
import Items from "./Items.js";
import PostItems from "./PostItems.js";

function PostList() {

    return (`
            <div class = "list-group">
             ${
            Items.map(i=>{
                return PostItems(i);
            }).join('')
            }
            </div>
    `);

}

export default PostList;