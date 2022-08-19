import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contentReducer from "./content";
import userReducer from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    content: contentReducer,
    user: userReducer,
  },
});

export default store;
