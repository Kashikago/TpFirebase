import {configureStore} from '@reduxjs/toolkit'
import userSlice from './Signin/userSlice';
export default configureStore({
    reducer:{
        userSlice: userSlice,
    }
});