import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showAuth: false },
  reducers: {
    toggleAuth(state, action) {
      state.showAuth(action.payload);
    },
  },
});

export const uiActions = uiSlice.actions;

const store = configureStore({
    reducer: { ui: uiSlice.reducer }});

export default store;
