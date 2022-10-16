import PostSummaryList from "../PostSummaryList/index.js";

function ExploreComponent() {
    return(`
            <div class="row">
              <div class = "col-11 mt-2">
              <div class = "position-relative">
                  <input class="button-round form-control rounded-pill ps-4" placeholder="Search Twitter"/>
                  <span class="position-absolute" style="color:black; top:18%">O-</span>
              </div>
          </div>
          <div class = "col-1 mt-2">
              <i class="fas fa-cog" style="font-size:20px; color:blue"></i>
          </div>
           </div>

           <ul class="nav mt-2 mb-2 nav-tabs">
                <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
               <div class = "d-none d-md-block"><a class="nav-link" href="#">Entertainment</a></div>
            </li>
           </ul>


            <div class = " position-relative mt-2 mr-2">
             <img src = "../img/starship.jpg" alt="Starship Image" class = "img-responsive" style="width:100%; overflow:hidden;";>
           <h2 class = "position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h2>
           </div>

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
