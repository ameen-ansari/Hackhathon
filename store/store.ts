import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store:any = configureStore({
  reducer: {
    reducers,
  },
});

export default store;