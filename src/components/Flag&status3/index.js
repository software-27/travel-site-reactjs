import React from "react";
import { SelectFlagIn } from "components/SelectFlagIn/index";
import { Row,Img } from "components/index";
import Icon from "@mdi/react";
import {
    mdiFlagVariant,
    mdiTagMultiple,
  } from "@mdi/js";

  const FlagStatus3= ()=> {
 
 
     return(
         <>
       
         <Row className="mt-1 w-[100%]">
                    <div className="flex 2xl:w-[31.45%]">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-r-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <Icon
                          path={mdiFlagVariant}
                          title="Search"
                          className="w-2 h-2 text-bold items-center text-black "
                          size={0.8}
                          horizontal-180
                        />
                      </span>
                      <SelectFlagIn
                        className="bg-white border placeholder-gray-400 text-gray-900 focus:ring-[#ed8709] focus:border-[#ed8709] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholderClassName="text-bluegray_400"
                        name="GroupSixtyThree"
                        placeholder="Flag and Status"
                        isSearchable={true}
                        isMulti={true}
                        indicator={
                          <Img
                            src="images/img_arrowdown_6X10.svg"
                            className="lg:w-[7px] lg:h-[5px] lg:mr-[8px] xl:w-[8px] xl:h-[6px] xl:mr-[10px] 2xl:w-[10px] 2xl:h-[7px] 2xl:mr-[12px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[14px]"
                            alt="arrow_down"
                          />
                        }
                        shape="RoundedBorder2"
                        size="md"
                        variant="OutlineGray700"
                        >
                      </SelectFlagIn>
                    </div>
                    
                    <div className="flex 2xl:w-[31.45%]">
                      <span class="ml-5 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-r-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <Icon
                          path={mdiTagMultiple}
                          title="Search"
                          className="w-2 h-2 text-bold items-center text-black"
                          size={0.8}
                          horizontal-180
                        />
                      </span>
                      <input
                        id="number"
                        className="font-normal text-black justify-center items-center not-italic border border-gray-300 text-[14px] placeholder:required  w-[100%]"
                        placeholder="Inventory Tags"
                        type="text"
                      />
                    </div>
                  </Row> 
         </>
     )
 }
 
 export default FlagStatus3;