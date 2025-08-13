import React from "react";
import { SelectFlag } from "components/SelectFlag/index";
import { Row } from "components/index";
import { BsFillFlagFill} from "react-icons/bs";


  const FlagStatus= ()=> {
 
 
     return(
         <>
       
         <Row className=" mt-2 items-center">
                      <button class="flex border-[1.5px] border-gray_700_33 border-r-0 h-9 bg-gray_100 items-center justify-center px-4 border-r">
                        <BsFillFlagFill/>
                      </button>
                      <SelectFlag
                        className="px-4 w-[100%] h-9 text-[13px] focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                        placeholderClassName="text-bluegray_400"
                        placeholder="Flag and Status"
                        isSearchable={true}
                        isMulti={true}
                        shape="RoundedBorder2"
                        size="sm"
                        variant="OutlineGray700"
                        >
                      </SelectFlag>
                    </Row>    
         </>
     )
 }
 
 export default FlagStatus;