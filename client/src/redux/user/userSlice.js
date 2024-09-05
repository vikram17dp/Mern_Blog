import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    currentuser:null,
    loading:false,
    error:null
}
const userSlice = createSlice({
    name:'user',
    initialState ,
    reducers:{
        SignInStart: (state)=>{
            state.loading = true,
            state.error = null
        },
        SignInSuccess:(state,action)=>{
            state.currentuser = action.payload,
            state.loading= false,
            state.error = null
        },
        SignInFailure:(state,action)=>{
            state.loading =false,
            state.error = action.payload

        },
        

    }
})
export const  {SignInStart,SignInSuccess,SignInFailure} = userSlice.actions;
export default userSlice.reducer;
