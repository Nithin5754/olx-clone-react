
import { createSlice } from "@reduxjs/toolkit";


const userSLice=createSlice({
  name:'user',
  initialState:{
    userStore:null
  },
  reducers:{
    addUsers:(state,action)=>{
      state.userStore=action.payload
    },
    removeUser:(state,action)=>{
      state.userStore=null
    }
  }
})



export const {addUsers,removeUser}=userSLice.actions

export default userSLice.reducer