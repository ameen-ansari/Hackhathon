import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const slice1:any = createSlice({
    name: "slice1",
    initialState: [],
    reducers: {},
});



export default combineReducers({
    slice1: slice1.reducer,
});