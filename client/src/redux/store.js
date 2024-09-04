import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user/userSlice'

export const store = configureStore({
    reducer:{
        user:userReducer,
    },
})
// store.subscribe(() => {
//     console.log('Store State:', store.getState());
// });