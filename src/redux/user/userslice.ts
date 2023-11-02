import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";



interface IUser{
    user: {
        email: string | null,
        
    },
    isLoading: boolean,
    isError: boolean,
    errorMassage: string | null
}

const initialState: IUser = {
   user: {
        email:null
    },
    isLoading: false,
    isError: false,
    errorMassage:null
}
 interface ICrendial {
    email: string,
    passward: string
}
export const createUser = createAsyncThunk(
    "user/create",
    async ({email, passward}: ICrendial) => {
        const data = await createUserWithEmailAndPassword(auth, email, passward);
        return data.user.email
    }
    
)
export const loginUser = createAsyncThunk(
    "user/login",
    async  ({email, passward}: ICrendial) => {
        const data = await signInWithEmailAndPassword(auth, email, passward);

        return data.user.email
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user.email =action.payload
        },
        setLoading: (state, action) => {
            state.isLoading =action.payload
        }
    },
     extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(createUser.fulfilled, (state, action) => {
            state.user.email = action.payload;
            state.isLoading = false;
        }).addCase(createUser.rejected, (state, action) => {
            state.user.email = null;
            state.isLoading = false;
            state.isError = true;
            state.errorMassage = action.error.message!
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.user.email = action.payload;
            state.isLoading = false;
        }).addCase(loginUser.rejected, (state, action) => {
            state.user.email = null;
            state.isLoading = false;
            state.isError = true;
            state.errorMassage = action.error.message!
        })
    }
})

export const {setUser, setLoading} = userSlice.actions
export default userSlice.reducer