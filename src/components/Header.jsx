import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useSelector } from "react-redux";
import {FaChevronDown, FaPlus, FaSearch} from 'react-icons/fa'
import {CategoryHeader  } from "./index";

const Header = () => {
  const isUser=useSelector((store)=>store.user.userStore)
 
   const handleLogout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("successfuly sign out");
    }).catch((error) => {
      console.log(error);
    });
   }
  return (
<div className="flex flex-col gap-4">

<div className={`bg-gray-50 flex flex-row ${isUser&& 'justify-around'} `}>
   <div className="w-20 ">
   <img className="w-full h-full" src="https://www.liblogo.com/img-logo/ol8430f3c1-olx-logo-file-olx-new-logo-png-wikimedia-commons.png" alt="" />
   </div>

   {isUser&&<div className="bg-gray-50 flex flex-row justify-between gap-4">
   <div className="flex my-auto"> 
     <input type="search" className="border-2 rounded-md p-2 w-[300px] border-black text-end pr-8 " placeholder="india"  />
      <div className="absolute top-5 ml-3 text-gray-400">
      <FaSearch />
      </div>
      <div className="absolute  ml-64 top-5 text-gray-400">
      <FaChevronDown />
      </div>

     </div>
     <div className="flex my-auto gap-1"> 
     <input type="search" className="border-2 rounded-md p-1 w-[450px] border-black text-center " placeholder="cars,bike,plot,refurbished electonics ..." />
       <div className="p-3 bg-black text-white rounded-md items-center my-auto ">
       <FaSearch />
       </div>
     </div>
    
     <div className="flex my-auto gap-3 bg-gray-100 p-3 rounded-lg">
        <h3>English </h3>
        <p><FaChevronDown/> </p>
     </div>
     <div className="bg-gray-50 flex flex-row justify-between gap-5">
 <button className="flex my-auto border-2 rounded-lg p-2 border-blue-300 bg-blue-700 text-white " onClick={handleLogout}>signout</button>
   <button className="flex my-auto border-2 rounded-lg p-2 border-yellow-300"><FaPlus/> <span>SELL</span></button>
   </div>
   </div>}

 
    </div>
    {isUser&&<CategoryHeader/>}
</div>
  )
}
export default Header