import React from "react";
import { Row,Img } from "components/index";
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js';
import { SelectSearchDate2 } from "components/SelectSearchDate2/index";

  const SearchDate2= ()=> {
 
 
     return(
         <>
       
       <Row className=" items-center w-[50%]">
                      <button class="flex border-[1.5px] border-gray_700_33 border-r-0 h-9 bg-gray_100 items-center justify-center px-4 border-r">
                      <Icon path={mdiMagnify}
                        title="Bag"
                        size={0.8}
                        color="black"
                        />
                      </button>
                      <SelectSearchDate2
                       className="px-4 w-[100%] h-9 text-[13px] focus:ring-blue-500 focus:border-blue-500 border-slate-300"/>
                    </Row> 
         </>
     )
 }
 
 export default SearchDate2;