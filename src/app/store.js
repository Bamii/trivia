import { configureStore } from '@reduxjs/toolkit';
import triviaReducer from '../features/trivia/triviaSlice';
import { CacheMiddleware } from "../utils";

export const store = configureStore({
  reducer: { trivia: triviaReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CacheMiddleware)
});
