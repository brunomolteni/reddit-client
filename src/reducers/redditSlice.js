import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const asyncActions = {
  refreshToken: createAsyncThunk("reddit/refreshToken", async () =>
    fetch("/.netlify/functions/access_token", { method: "POST" }).then((res) =>
      res.json()
    )
  ),
};

const redditSlice = createSlice({
  name: "reddit",
  initialState: {
    read: [],
    category: "top",
  },
  reducers: {
    setAsRead: (reddit, action) => {
      reddit.read.push(action.payload);
    },
    setPage: (reddit, action) => {
      reddit.page = action.payload;
    },
  },
  extraReducers: {
    [asyncActions.refreshToken.fulfilled]: (reddit, action) => {
      reddit.token = action.payload;
    },
  },
});

export const actions = {
  ...redditSlice.actions,
  ...asyncActions,
};

export default redditSlice.reducer;
