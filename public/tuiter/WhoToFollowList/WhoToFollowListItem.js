
function WhoToFollowListItem(who) {
return (`
<div>
            <li class="list-group-item">
                <div class = "row">
                    <div class = "col-2">
                        <img src = ${who.avatarIcon} style="width:50px; height:50px; border-radius:50%;margin-right:0;">
                    </div>
                    <div class = "col-6">
                        <p style="font-weight:bold; display:inline; margin-left:10px;">
                        ${who.userName}
                        <i class = "fas fa-check-circle"></i></p>
                        <p style="color:gray; margin-left:10px;">@${who.handle}</p>
                    </div>
                    <div class = "col-4">
                        <button type="button" class="btn btn-primary rounded-pill">Follow</button>
                    </div>
                </div>
            </li>
<div>
`);
}

export default WhoToFollowListItem;