import React from "react";
import Icon from "@mdi/react";
import {mdiTagMultiple} from "@mdi/js";

  const PackageTags= ()=> {
 
 
     return(
         <> 
            <div class="flex w-[100%] h-9">
                <span class="inline-flex items-center px-4 text-sm text-gray-900 bg-gray_100 border border-r-0 border-gray-300">
                <Icon
                          path={mdiTagMultiple}
                          title="Search"
                          className="w-2 h-2 text-bold items-center text-black"
                          size={0.8}
                          horizontal-180
                        />
                </span>
                <input type="text" id="booked" class="w-[100%] bg-white border placeholder-bluegray_400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" 
                placeholder="Package Tags"
                />
            </div>
         </>
     )
 }
 
 export default PackageTags;