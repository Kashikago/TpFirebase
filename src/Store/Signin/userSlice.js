import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        loggedIn:false,
        email:"",
    },
    reducers:{
        login: (state,action)=>{
            state.loggedIn = action.payload.loggedIn;
            state.email = action.payload.email;
        }
    }
})

export const {login} = userSlice.actions;
export default userSlice.reducer;