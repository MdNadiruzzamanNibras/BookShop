/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from '../../type/booktype';
interface IFilter {
  books: IBook[];
  publicationYear:  number | null;
  genre:  string | null,
  searchQuery:  string,
  }

const initialState:IFilter = {
    books: [], 
   publicationYear: null,
    genre: null,
    searchQuery: '',
    
};


const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
   setBooks(state, action) {
            state.books = action.payload;
        },
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
export const {setBooks, setPublicationYear, setGenre, setSearchQuery } = filtersSlice.actions;
export default filtersSlice.reducer;
