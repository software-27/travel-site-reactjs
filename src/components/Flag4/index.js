import React from "react";
import { Row,Img } from "components/index";
import { BsFillFlagFill} from "react-icons/bs";
import { SelectFlag6 } from "components/SelectFlag6/index";

  const Flag4= ()=> {
 
 
     return(
         <>
       
       <Row className=" mt-2 items-center w-[50%]">
                      <button class="flex border-[1.5px] border-gray_700_33 border-r-0 h-9 bg-gray_100 items-center justify-center px-4 border-r">
                        <BsFillFlagFill className="text-black"/>
                      </button>
                      <SelectFlag6
                        className="px-4 w-[100%] h-9 text-[13px] focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                        placeholderClassName="text-bluegray_400"
                        placeholder="Flag"
                        isSearchable={true}
                        isMulti={true}
                        shape="RoundedBorder2"
                        size="sm"
                        variant="OutlineGray700"
                        >
                      </SelectFlag6>
                    </Row> 
         </>
     )
 }
 
 export default Flag4;