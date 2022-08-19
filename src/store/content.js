import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
const api_key = "892afd68c77e0b0640953b7d3f1d71b0";

export const getContentRequest = createAsyncThunk("CONTENT", () => {
  return axios.get("/api/content").then((r) => r.data);
});

export const getMoviesSearchRequest = createAsyncThunk(
  "MOVIES_SEARCH",
  (searchInput) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}`
      )
      .then((r) => r.data.results);
  }
);

const contentReducer = createReducer([], {
  [getContentRequest.fulfilled]: (state, action) => action.payload,
  [getMoviesSearchRequest.fulfilled]: (state, action) => action.payload,
});

export default contentReducer;
