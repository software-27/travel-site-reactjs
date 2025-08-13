import React from "react";
import { SelectFlag2 } from "components/SelectFlag2/index";
import { Row } from "components/index";
import { BsFillFlagFill} from "react-icons/bs";


  const FlagStatus2= ()=> {
 
 
     return(
         <>
       
         <Row className="items-center">
                      <button class="flex border-[1.5px] border-gray_700_33 border-r-0 h-10 bg-gray_100 items-center justify-center px-4 border-r">
                        <BsFillFlagFill/>
                      </button>
                      <SelectFlag2
                        className="px-4 w-[100%] h-10 text-[13px] focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                        placeholderClassName="text-bluegray_400"
                        placeholder="Flag and Status"
                        isSearchable={true}
                        shape="RoundedBorder2"
                        size="sm"
                        variant="OutlineGray700"
                        >
                      </SelectFlag2>
                    </Row>    
         </>
     )
 }
 
 export default FlagStatus2;