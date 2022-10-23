

function PostItems(Items) {

    return (`
        <ul class="list-group">
            <li class="list-group-item" style="background-color:white;">
                <div class = "row">
                    <div class = "col-1">
                        <img src = ${Items.icon} style = "border-radius:50%; height:50px; width:50px;">
                    </div>
                    <div class = "col-11">
                        <p style = "color:black; font-size:14px; font-weight:bold; margin-bottom:0;">${Items.userName}
                            <i class = "fas fa-check-circle"></i>
                        <span style = "margin-bottom:0; color:gray;font-size:12px">@${Items.handle}
                        <span style = "display:inline; font-weight:normal; font-size:12px">${Items.time}</span>
                        </span></p>
                        <p>${Items.tuit} <span style = "color:blue">${Items.link}</span></p>
                        <img src=${Items.image} style = "height:70%;width:100%; border-radius:3%";>
                        <div class = "row justify-content-start">
                            <div class = "col-3" style = "color:gray;">
                                <i class="far fa-comment"></i>&nbsp;${Items.comment}
                            </div>
                            <div class = "col-3" style = "color:gray;">
                                <i class="fas fa-retweet"></i>&nbsp;${Items.tuit}
                            </div>
                            <div class = "col-2" style = "color:gray;">
                                <i class="far fa-heart"></i>&nbsp;${Items.likes}
                            </div>
                            <div class = "col-2" style = "color:gray;">
                                <i class="fas fa-upload"></i>
                            </div>
                            <br></br><br></br>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    `);
}

export default PostItems;