
import Tuiter from "./explore";
import hometuitsReducer from "../tuits/home-tuits-reducer";
import tuitsReducer from "../tuits/tuits-reducer";
import whoReducer from "../reducers/who-reducer";
import profileReducer from "../reducers/profile-reducer";
import { configureStore } from '@reduxjs/toolkit';

//import {Provider} from "react-redux";
//const store = configureStore({reducer: {who: whoReducer, hometuits: hometuitsReducer, tuits: tuitsReducer, profile: profileReducer}});

function TuiterPage() {
 return (
 //<Provider store={store}>
   <div>
     <Tuiter/>
   </div>
 //</Provider>
 );
}

export default TuiterPage