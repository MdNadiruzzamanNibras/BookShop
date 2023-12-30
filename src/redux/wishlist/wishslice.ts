/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../type/booktype';

interface Iwish {
    books: IBook[];
  }
  
  const initialState: Iwish = {
    books: [],
  };

const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWish: (state, action: PayloadAction<IBook>) => {
            
              state.books.push({ ...action.payload, quantity: 1 });
            
      
    
          },
         
 
           
    }
})

export const { addToWish } = wishSlice.actions; 
export default wishSlice.reducer;