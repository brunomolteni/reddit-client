import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { actions as redditActions } from "./redditSlice";

const asyncActions = {};

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    sidebar: true,
  },
  reducers: {
    toggleSidebar: (ui) => {
      ui.sidebar = !ui.sidebar;
    },
  },
  extraReducers: {
    [redditActions.openPost]: (ui) => {
      ui.sidebar = false;
    },
  },
});

export const actions = {
  ...uiSlice.actions,
  ...asyncActions,
};

export default uiSlice.reducer;
