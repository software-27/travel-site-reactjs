import React from "react";
import { BiTime } from "react-icons/bi";


  const Time= ()=> {
 
     return(
         <> 
         <div class="container flex mx-auto  ">
         <div class="flex border-[1.5px] border-gray-300 w-[100%] h-9">
             <button class="flex border-gray-300 items-center justify-center px-4 border-r bg-gray_100">
             <BiTime/>
             </button>
             <input type="text" class="w-[100%] border-0 placeholder-bluegray_400 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="Min Availability"/>
         </div>
     </div>
         </>
     )
 }
 
 export default Time;