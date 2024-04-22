import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async ({ query, filterOptions }, thunkAPI) => {
    const {  category, source } = filterOptions;

    try {
      let Key = "&apiKey=3a013799228649bcba4bf848ce5c71bb";
      let url = query
        ? `everything?q=${query}&from=2024-03-19&sortBy=publishedAt`
        : source && !category
        ? `top-headlines?sources=${source}`
        : category && !source
        ? `top-headlines/sources?category=${category}`
        : source && category
        ? `top-headlines/sources?${source}&category=${category}`
        : `everything?q=tesla&from=2024-03-19&sortBy=publishedAt`;
      const response = await axios.get(`https://newsapi.org/v2/${url + Key}`);
      console.log(response);
      return thunkAPI.fulfillWithValue(response?.data?.articles || response?.data?.sources);
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.data);
    }
  }
);
