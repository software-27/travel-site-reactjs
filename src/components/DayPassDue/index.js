import React from "react";
import { Img } from "components/index";
import { BiTime} from "react-icons/bi";



  const DpassDue= ()=> {
 
 
     return(
         <> 
            <div class="mt-2 flex w-[50%] h-9">
                <span class="inline-flex items-center px-4 text-sm text-gray-900 bg-gray_100 border border-r-0 border-gray-300">
                <BiTime className="text-black w-5 h-5"/>
                </span>
                <input type="number" id="booked" class="w-[100%] bg-white border placeholder-bluegray_400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" 
                placeholder="Days Pass Due"
                />
            </div>
         </>
     )
 }
 
 export default DpassDue;