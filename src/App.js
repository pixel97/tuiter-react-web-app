import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/A6/hello-world";
import Tuiter from "./tuiter/explore";
import Home from "./tuiter/home";
import Profile from "./tuiter/profile";
import EditProfile from "./tuiter/editProfile";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import tuitsReducer from "./tuiter/tuits/tuits-reducer";
import hometuitsReducer from "./tuiter/tuits/home-tuits-reducer";
import whoReducer from "./tuiter/reducers/who-reducer";
import profileReducer from "./tuiter/reducers/profile-reducer";
import { configureStore } from '@reduxjs/toolkit';

import {Provider} from "react-redux";
const store = configureStore({reducer: {who: whoReducer, hometuits: hometuitsReducer, tuits: tuitsReducer, profile: profileReducer}});

function App() {

  return (
   <Provider store={store}>
    <BrowserRouter>
    <Routes>
   <Route path="/*" element={<Labs/>}/>
   <Route path="/hello" element={<HelloWorld/>}/>
   <Route path="/tuiter/explore" element={<Tuiter/>}/>
   <Route path="/tuiter/home" element={<Home/>}/>
   <Route path="/tuiter/profile" element={<Profile/>}/>
   <Route path="/tuiter/edit" element={<EditProfile/>}/>
   </Routes>
    </BrowserRouter>
  </Provider>
  );

}

export default App;
