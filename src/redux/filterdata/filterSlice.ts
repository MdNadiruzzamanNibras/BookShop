/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    publicationYear: null,
    genre: null,
    searchQuery: '',
  },
  reducers: {
   
    setPublicationYear: (state, action: PayloadAction<any>) => {
      state.publicationYear = action.payload;
    },
    setGenre: (state, action: PayloadAction<any>) => {
      state.genre = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<any>) => {
      state.searchQuery = action.payload;
    },
  },
});
export const { setPublicationYear, setGenre, setSearchQuery } = filtersSlice.actions;
export default filtersSlice.reducer;
