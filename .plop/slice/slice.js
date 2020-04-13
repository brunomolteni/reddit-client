import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
{{#if async }}
import { post } from '../util';

const asyncActions = {
  update: createAsyncThunk("{{ camelCase name }}/update", async (data) =>
    post(`/api/update/`,data)
  ),
};
{{else }}

const asyncActions = {};
{{/if}}

const {{ camelCase name }}Slice = createSlice({
  name: "{{ camelCase name }}",
  initialState: {
    loading: true    
  },
  reducers: {
    demoAction: ({{ camelCase name }}, action) => {
      {{ camelCase name }}.loading = false;
    }    
  },
  extraReducers: {}
});

export const actions = {
  ...{{ camelCase name }}Slice.actions,
  ...asyncActions,
};

export default {{ camelCase name }}Slice.reducer;