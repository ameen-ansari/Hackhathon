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
      let { entries } = action.payload;
      state.antries = entries;
    },
  },
});

let entries: any = createSlice({
  name: "events",
  initialState,
  reducers: {
    calledEventEntries: (state, action) => {
      return action.payload;
    },
  },
});

export default combineReducers({
  user: user.reducer,
  events: events.reducer,
  entries: entries.reducer,
});

export const { addEvents, updateEvents, updateEntries } = events.actions;
export const { addUser, updateJoinedEvents } = user.actions;
export const { calledEventEntries } = entries.actions;
