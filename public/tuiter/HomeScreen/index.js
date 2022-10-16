import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

function homeComponent() {
   $('#wd-home').append(`
  <div class="row mt-2">
   <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
    ${NavigationSidebar('home')}
   </div>
   <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
   ${PostList()}
   </div>
   <div class="col-xxl-4 col-xl-4 col-lg-3 d-none d-lg-block">
    ${PostSummaryList()}
   </div>
  </div>
   `);
}
$(homeComponent);