import { useRef, useState } from "react"
import { validateForm } from "../utils/validate"
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"


const Form = () => {

const [isLogin,setLogin]=useState(false)
const [isError,setError]=useState('')

const name=useRef(null)
const email=useRef(null)
const password=useRef(null)




const handleChangeFormPage=()=>{
   if(validateForm(email?.current?.value,password?.current?.value)){
    console.log(validateForm(email?.current?.value,password?.current?.value));
    return setError(validateForm(email?.current?.value,password?.current?.value))
   }else{
      if(!isLogin){
        createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode+" "+errorMessage)
        });
      }else{
        signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+" "+errorMessage)
  });
      }
    setError('')
   }
}

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="https://www.liblogo.com/img-logo/ol8430f3c1-olx-logo-file-olx-new-logo-png-wikimedia-commons.png" alt="nithin olx" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>


   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST"  onSubmit={(e)=>e.preventDefault()}>
      {
        !isLogin&&(
          <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
          <div className="mt-2">
            <input ref={name} id="name" name="name" type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        )
      }
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input ref={email} id="email" name="email" type="email" autoComplete="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div  className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
     {
      isLogin&&(
        <div className="text-sm">
        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
      </div>
      )
     }
          </div>
          <div className="mt-2">
            <input ref={password} id="password" name="password" type="password" autoComplete="current-password"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button onClick={handleChangeFormPage} type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> {isLogin?'sign in':'sign up'}</button>
        </div>
      </form>

    {
      isLogin?(
        <p>create new user<span className="text-blue-700 font-bold hover:text-blue-500 cursor-pointer ml-2"><button onClick={()=>setLogin(!isLogin)}>sign up</button></span></p>
      ):(
  <>
        <p>Already registred <span className="text-blue-700 font-bold hover:text-blue-500 cursor-pointer ml-2"><button onClick={()=>setLogin(!isLogin)}>login</button></span></p>
  </>
      )
    }

{
  isError&&<p className="text-red-800 font-extrabold">{isError}</p>
}
  
    </div>

  </div>
  )
}
export default Form