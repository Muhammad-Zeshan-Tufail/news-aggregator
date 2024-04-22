import { createSlice } from "@reduxjs/toolkit";

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState: {
    sourceBaseUrl: "https://newsapi.org/v2/",
  },
  reducers: {
    updateResoures: (state, action) => {
      state.sourceBaseUrl = action.payload;
    },
  },
});

export const { updatePreferences } = preferencesSlice.actions;

export default preferencesSlice.reducer;
