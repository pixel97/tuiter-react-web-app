
function PostSummaryItem(post) {

    return (`
         <div class="list-group">
                        <li class="list-group-item mt-2">
                            <div class = "row">
                            <div class = "col-10">
                            <p style = "color:gray; font-size:12px; margin-bottom:0;">${post.topic}</p>
                            <p style = "font-weight:bold; margin-bottom:0;">${post.userName}
                            <i class = "fas fa-check-circle"></i>
                            <span style = "display:inline; font-weight:normal;">${post.time}</span>
                            </p>
                            <p style = "font-weight:bold; margin-bottom:0;">${post.title}</p>
                            </div>
                            <div class = "col-2">
                            <img src = ${post.image} style = "width:100%; height:100%; display:inline; float:right;">
                            </div>
                            </div>
                        </li>
        </div>
    `);
}

export default PostSummaryItem;