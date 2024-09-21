import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme:'light'
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTeme:(state)=>{
            state.theme = state.theme === 'light' ? 'dark' :'light'
        }
    }
})

export const {toggleTeme} = themeSlice.actions;

export default themeSlice.reducer;