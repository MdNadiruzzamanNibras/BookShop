/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Iwish {
    books: any[];
  }
  
  const initialState: Iwish = {
    books: [],
  };

const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWish: (state, action: PayloadAction<any>) => {
            const existing = state.books.find(
              (book) => book._id === action.payload._id
            );
      
            if (existing) {
              existing.quantity = existing.quantity! + 1;
            } else {
              state.books.push({ ...action.payload, quantity: 1 });
            }
      
    
          },
         
 
           
    }
})

export const { addToWish } = wishSlice.actions; 
export default wishSlice.reducer;