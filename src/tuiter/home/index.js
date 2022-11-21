import NavigationSidebar from "../navigation-sidebar";
import TuitList from "../TuitList";
import { Routes, Route } from "react-router";
import WhatsHappening from "./whats-happening";
import hometuitsReducer from "../tuits/home-tuits-reducer";
import tuitsReducer from "../tuits/tuits-reducer";
import PostSummaryList from "../post-summary-list";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: { hometuits: hometuitsReducer, tuits: tuitsReducer },
});

function Home() {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
          <NavigationSidebar active="home" />
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6">
          <WhatsHappening />
          <TuitList />
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
          <PostSummaryList />
        </div>
      </div>
    </Provider>
  );
}

export default Home;
