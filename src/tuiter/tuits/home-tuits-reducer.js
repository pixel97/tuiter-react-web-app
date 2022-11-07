import { createSlice } from "@reduxjs/toolkit";
import hometuits from './tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "nasa",
};

const templateTuit = {
 ...currentUser,
 "icon": "../../images/spacexLogo.jpg",
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}

const hometuitsSlice = createSlice({
 name: 'hometuits',
 initialState: hometuits,
 reducers: {
     deleteTuit(state, action) {
         const index = state
            .findIndex(tuit =>
               tuit.id === action.payload);
         state.splice(index, 1);
       },

     createTuit(state, action) {
       state.unshift({
         ...action.payload,
         ...templateTuit,
         id: (new Date()).getTime(),
       })
     }
   }
});
export const {createTuit, deleteTuit} = hometuitsSlice.actions;
export default hometuitsSlice.reducer;