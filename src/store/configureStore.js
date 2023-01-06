import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./../movies/movieSlice";

export const storeV2 = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
