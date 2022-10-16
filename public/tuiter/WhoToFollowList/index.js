import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

function WhoToFollowList() {
    return (`
               <div class="list-group">
                    <div class="list-group-item">
                        <li class="list-group-item" style = "font-weight:bold;">Who to follow</li>
                    </div>
                        ${
                            who.map(whoItem=>{
                                return WhoToFollowListItem(whoItem);
                            }).join('')
                        }
                </div>
    `);
}

export default WhoToFollowList;