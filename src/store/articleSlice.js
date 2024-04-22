import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "./articleThunks";

const initialState = {
  articles: [],
  isLoading: false,
};

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.articles = payload;
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.articles = [];
        state.isLoading = false;
      });
  },
});

export const {} = articleSlice.actions;
export default articleSlice.reducer;
