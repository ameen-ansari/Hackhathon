import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

let initialState: any = [];
let user: any = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    updateJoinedEvents: (
      state,
      action: PayloadAction<{ userJoinedEvents: string[] }>
    ) => {
      const { userJoinedEvents } = action.payload;
      state.joinedEvents = userJoinedEvents;
    },
  },
});

let events: any = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvents: (state, action) => {
      return action.payload;
    },
    updateEvents: (state, action) => {
      let events = [...state, action.payload];
      return events;
    },
    updateEntries: (state, action: PayloadAction<{ entries: string[] }>) => {
      const { entries } = action.payload;
      state.antries = entries;
    },
  },
});

export default combineReducers({
  user: user.reducer,
  events: events.reducer,
});

export const { addEvents, updateEvents, updateEntries } = events.actions;
export const { addUser, updateJoinedEvents } = user.actions;
