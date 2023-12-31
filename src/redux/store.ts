import { configureStore } from '@reduxjs/toolkit'
import {bookapi} from "./api/bookapi"
import userReducer from "./user/userslice"
import wishReducer from "./wishlist/wishslice"
import filterReducer from './filterdata/filterSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    wish: wishReducer,
    filter:filterReducer,
    [bookapi.reducerPath]:bookapi.reducer
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookapi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch