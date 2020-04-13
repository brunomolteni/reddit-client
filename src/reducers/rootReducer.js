import { combineReducers } from "@reduxjs/toolkit";

// Import Reducers
import redditReducer from "./redditSlice";
import uiReducer from "./uiSlice";

export const rootReducer = combineReducers({
  reddit: redditReducer,
  ui: uiReducer,
});
