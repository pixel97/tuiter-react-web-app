import NavigationSidebar from "../navigation-sidebar";
import ProfileComp from "./profileComponent.js";
import WhoToFollowList from "../who-to-follow-list";
import { Routes, Route } from "react-router";
import whoReducer from "../reducers/who-reducer";
import tuitsReducer from "../tuits/tuits-reducer";
import profileReducer from "../reducers/profile-reducer";
//import { configureStore } from '@reduxjs/toolkit';

function Profile() {
  return (
    <div className="row">
      <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
        <NavigationSidebar active="profile" />
      </div>
      <div className="col-10 col-md-10 col-lg-7 col-xl-6">
        <ProfileComp />
      </div>
      <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
        <WhoToFollowList />
      </div>
    </div>
  );
}

export default Profile;
