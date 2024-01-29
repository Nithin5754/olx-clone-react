import { Outlet } from "react-router-dom"
import { Header } from "../components/index";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUsers,removeUser } from "../utils/userSlice"
import {  useDispatch } from "react-redux"

const SharedHeaderLayout = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUsers( {uid,email,displayName}))
        navigate('/browser')
  
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
        // ...
      }
    });
  },[])
  

  return (


    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}
export default SharedHeaderLayout