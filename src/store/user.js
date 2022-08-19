import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk(
  "LOGIN",
  ({ username, password }) => {
    return axios
      .post("/api/user/login", { username, password })
      .then((r) => r.data);
  }
);

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios.post("/api/user/logout").then(() => {
    return {};
  });
});

// export const fetchUserRequest = createAsyncThunk("FETCH_USER", () => {
//   return axios.get("/api/user/me").then((r) => r.data);
// });

export const addToFavorites = createAsyncThunk(
  "ADD_TO_FAVORITES",
  (movie, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in");
    return axios
      .put(`/api/user/favorites?userId=${user.id}&movieId=${movie.id}`)
      .then((r) => r.data);
  }
);

const userReducer = createReducer(
  {},
  {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
    // [fetchUserRequest.fulfilled]: (state, action) => action.payload,
    [addToFavorites.fulfilled]: (state, action) => {
      state.favorites.push(action.payload);
    },

    // [removeFromFavorites.fulfilled]: (state, action) => {
    //   state.favorites = state.favorites.filter(
    //     (fav) => fav.id !== action.payload.id
    //   );
    // },
  }
);

export default userReducer;
