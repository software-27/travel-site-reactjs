import React from "react";
import { SelectBook } from "components/SelectBook/index";
import { Row } from "components/index";
import { AiFillTags } from "react-icons/ai";


  const Bookinglabel= ()=> {
 
     return(
         <>
       
         <Row className="mt-2 items-center w-[100%]">
                      <button class="flex border-[1.5px] border-gray_700_33 border-r-0 h-9 bg-gray_100 items-center justify-center px-4 border-r">
                        <AiFillTags/>
                      </button>
                      <SelectBook
                        className="px-4 w-[100%] h-9 text-[13px] focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                        placeholderClassName="text-bluegray_400"
                        name="GroupSixtyThree"
                        placeholder="Booking Labels"
                        isSearchable={true}
                        isMulti={true}
                        shape="RoundedBorder2"
                        size="sm"
                        variant="OutlineGray700"
                      >
                      </SelectBook>
                    </Row>
         </>
     )
 }
 
 export default Bookinglabel;