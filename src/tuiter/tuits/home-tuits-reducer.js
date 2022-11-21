import { createSlice } from "@reduxjs/toolkit";
import hometuits from "./tuits.json";
import {
  deleteTuitThunk,
  findTuitsThunk,
  createTuitThunk,
  updateTuitThunk,
} from "../../services/tuits-thunks";
import tuitsReducer from "./tuits-reducer";

const initialState = {
  tuits: [],
  loading: false,
};

const currentUser = {
  userName: "NASA",
  handle: "nasa",
};

const templateTuit = {
  ...currentUser,
  icon: "../../images/spacexLogo.jpg",
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const hometuitsSlice = createSlice({
  name: "hometuits",
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state) => {
      state.tuits = [];
      state.loading = false;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      console.log("Tuits reducer" + payload);
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      console.log("Inside reducer---updating" + JSON.stringify(payload));
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      console.log("Inside reducer---id" + tuitNdx);
      console.log("Inside reducer---tuits---" + JSON.stringify(state.tuits));

      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
      console.log(
        "Inside reducer---tuit" + JSON.stringify(state.tuits[tuitNdx])
      );
      console.log(
        "Inside reducer---tuits---after update" + JSON.stringify(state.tuits[0])
      );
      //state.tuits[tuitNdx]
    },
  },

  reducers: {
    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit.id === action.payload);
      state.splice(index, 1);
    },

    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        id: new Date().getTime(),
      });
    },
  },
});
export const { createTuit, deleteTuit } = hometuitsSlice.actions;
export default hometuitsSlice.reducer;
