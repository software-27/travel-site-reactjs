import React from "react";
import { Row } from "components/index";
import { BiSearchAlt2 } from "react-icons/bi";


  const SearchInput= ()=> {
    return(
        <> 
            <Row className="w-[100%]">
            <div class="container flex mx-auto  ">
                    <div class="flex border-[1.5px] border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-[100%] h-9">
                        <button class="flex items-center border-[#ccc] justify-center px-4 border-r bg-[#eee]">
                        <BiSearchAlt2/>
                        </button>
                        <input type="text" class="w-[100%] border-0 placeholder-bluegray_400 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="Search Items, Options, Location"/>
                    </div>
                </div>
            </Row>
        </>
    )
}

export default SearchInput;