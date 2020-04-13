import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../util";

const asyncActions = {
  update: createAsyncThunk("reddit/update", async (data) =>
    post(`/api/update/`, data)
  ),
};

const redditSlice = createSlice({
  name: "reddit",
  initialState: {
    token: sessionStorage.getItem("token"),
  },
  reducers: {
    setToken: (reddit, action) => {
      reddit.token = action.payload;
    },
  },
  extraReducers: {},
});

export const actions = {
  ...redditSlice.actions,
  ...asyncActions,
};

export default redditSlice.reducer;
