import React from "react";
import { Img } from "components/index";


  const ActivitySource= ()=> {
 
 
     return(
         <> 
            <div class="flex w-[100%] h-9">
                <span class="inline-flex items-center px-4 text-sm text-gray-900 bg-gray_100 border border-r-0 border-gray-300">
                <Img
                    src="images/baggage.png"
                    className="baggage h-4 w-4 mt-0.5 text-white"
                    alt="baggage"
                />
                </span>
                <input type="text" id="booked" class="w-[100%] bg-white border placeholder-bluegray_400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" 
                placeholder="Triggers and Actions"
                />
            </div>
         </>
     )
 }
 
 export default ActivitySource;