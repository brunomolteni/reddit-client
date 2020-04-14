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
    seen: [],
    category: "top",
  },
  reducers: {
    // save read posts id's to visualize in the app
    setAsRead: (reddit, action) => {
      reddit.read.push(action.payload);
    },
    // set the page query strings to fetch new posts
    setPage: (reddit, action) => {
      reddit.page = action.payload;
    },
    // set the open post id
    openPost: (reddit, action) => {
      reddit.open = action.payload;
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
