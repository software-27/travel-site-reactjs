import React from "react";
import { Row,Img } from "components/index";
import Icon from '@mdi/react'
import { mdiMapMarker } from '@mdi/js';
import { SelectFlagStatus } from "components/SelectFlagStatus/index";

  const Location= ()=> {
 
 
     return(
         <>
       
       <Row className=" mt-2 items-center w-[50%]">
            <button class="flex border-[1.5px] border-gray_700_33 border-r-0 h-9 bg-gray_100 items-center justify-center px-4 border-r">
            <Icon path={mdiMapMarker}
                title="Bag"
                size={0.8}
                color="black"
            />
            </button>
            <input type="text" id="booked" class="h-9 w-[100%] bg-white border placeholder-bluegray_400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" 
            placeholder="Locations" />
        </Row> 
         </>
     )
 }
 
 export default Location;