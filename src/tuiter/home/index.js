
import NavigationSidebar from "../navigation-sidebar";
import PostList from "../post-list";
import PostSummaryList from "../post-summary-list";



function Home() {
 return (
   <div className="row">
       <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
           <NavigationSidebar active='home'/>
       </div>
       <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                  <PostList/>
       </div>
       <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
           <PostSummaryList/>
       </div>
   </div>
 );
}

export default Home