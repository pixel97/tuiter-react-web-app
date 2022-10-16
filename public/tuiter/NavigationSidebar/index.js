
function NavigationSidebar(active) {
return(`
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
         <div class="list-group-item">
         <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active==='home'?'active':''}">
                        <div class="row">
                            <i class="fa fa-home col-xxl-2 col-xl-2"></i>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span>Home</span></div>
                        </div>


                    <a href="../explore/index.html" class="list-group-item list-group-item-action ${active==='explore'?'active':''}">
                        <div class="row">
                            <i class="fa fa-hashtag col-xxl-2 col-xl-2"></i>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span>Explore</span></div>
                        </div></a>

                    <a href="#" class="list-group-item list-group-item-action ${active==='notifications'?'active':''}">
                        <div class="row">
                            <i class="fa fa-bell col-xxl-2 col-xl-2"></i>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span>Notifications</span></div>
                        </div></a>

                    <a href="#" class="list-group-item list-group-item-action ${active==='messages'?'active':''}">
                        <div class="row">
                            <i class="fa fa-envelope col-xxl-2 col-xl-2"></i>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span>Messages</span></div>
                        </div></a>

                    <a href="#" class="list-group-item list-group-item-action ${active==='bookmarks'?'active':''}">
                        <div class="row">
                            <i class="fa fa-bookmark col-xxl-2 col-xl-2"></i>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span>Bookmarks</span></div>
                        </div></a>

                    <a href="#" class="list-group-item list-group-item-action ${active==='lists'?'active':''}">
                        <div class="row">
                            <i class="fa fa-list col-xxl-2 col-xl-2"></i>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span>Lists</span></div>
                        </div></a>

                    <a href="#" class="list-group-item list-group-item-action ${active==='profile'?'active':''}">
                        <div class="row">
                            <i class="fa fa-user col-xxl-2 col-xl-2"></i>
                            <div class="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1" style="bottom: 3px"><span>Profile</span></div>
                        </div></a>

                    <a href="#" class="list-group-item list-group-item-action ${active==='more'?'active':''}">
                        <i class='fas fa-info-circle'></i>
                        <span class="position-absolute d-none d-xl-block" style="left: 35px; top: 11px">More</span></a>
                </div>
    <div class="d-grid mt-2">
      <a href="tweet.html" class="btn btn-primary btn-block rounded-pill w-100"> Tweet</a>
    </div>
    </div>

  `);
}

export default NavigationSidebar;
