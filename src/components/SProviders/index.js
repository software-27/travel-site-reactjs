import React from "react";
import { Row } from "components/index";
import { FaCubes } from "react-icons/fa";
import { AiFillTags } from "react-icons/ai";


  const SP= ()=> {
 
 
     return(
         <> 
         <Row className="ml-2 mt-1 mr-2 space-x-3">
                
         <div class="container flex mx-auto  ">
               <div class="flex border border-gray-300 w-[100%] h-9">
                   <button class="flex items-center justify-center px-4 border-r">
                   <FaCubes/>
                   </button>
                   <input type="text" class="px-4 w-[100%] border-0 text-[12px]" placeholder="Provider Type..."/>
               </div>
           </div>
           <div class="container flex mx-auto  ">
               <div class="flex border border-gray-300 w-[100%] h-9">
                   <button class="flex items-center justify-center px-4 border-r">
                   <AiFillTags/>
                   </button>
                   <input type="text" class="px-4 w-[100%] border-0 text-[12px]" placeholder="Provider Tags..."/>
               </div>
           </div>
  
   </Row> 
         </>
     )
 }
 
 export default SP;


