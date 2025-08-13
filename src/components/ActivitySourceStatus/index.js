import React from "react";
import { SelectFlag } from "components/SelectFlag/index";
import { Row } from "components/index";
import { BsFillFlagFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { SelectActivitySource } from "components/SelectActivitySource/index";


const ActivitySourceStatus = () => {


  return (
    <>

      <Row className="flex w-[100%] h-9">
        <button class="flex border-[1.5px] border-gray_700_33 border-r-0 h-9 bg-gray_100 items-center justify-center px-4 border-r">
          <FaUser className="w-4 text-black" />
        </button>
        <SelectActivitySource
          className="w-[100%] bg-white border placeholder-bluegray_400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
          placeholderClassName="text-bluegray_400"
          placeholder="Activity Source"
          isSearchable={true}
          isMulti={true}
          shape="RoundedBorder2"
          size="sm"
        >
        </SelectActivitySource>
      </Row>
    </>
  )
}

export default ActivitySourceStatus;