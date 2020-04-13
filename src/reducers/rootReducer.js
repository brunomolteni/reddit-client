import { combineReducers } from "@reduxjs/toolkit";

// Import Reducers
import uiReducer from "./uiSlice";

export const rootReducer = combineReducers({
  ui: uiReducer,
});
