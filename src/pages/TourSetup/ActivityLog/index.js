import React from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Img, Line } from "components";
import Search from "components/Searchbtn/index";
import ActivitySourceStatus from "components/ActivitySourceStatus/index";
import DateRange from "components/DateRange/index";
import ActivityDetailLogin from "components/ActivityDetailLogin/index";
import ActivityDetailLogout from "components/ActivityDetailLogout/index";
import ActivityDetailLogin2 from "components/ActivityDetailLogin2/index";
import ActivityDetailLogout2 from "components/ActivityDetailLogout2/index";



const ActivityLog = () => {


  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white h-fit w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Topbtns />
        </Row>
        <Row className="w-[100%]">
          <Sidebar />

          <Row className="p-2 w-[100%]">
            <Column className="mx-3 w-[100%]">
              <Row className="items-center w-[100%]">
                <Row className="items-start w-[100%]">
                  <Text className="font-light text-[#4C8FBD] text-2xl" >
                    Activity Log
                  </Text>
                </Row>
              </Row>

              <Line className=" bg-gray_700_33 h-[0.5px] mt-4 w-[100%]" />

              <Row className="mt-5">
                <Column className=" w-[100%] text-light_blue_600 text-[20px] font-regular">
                  <Row className="w-[70%] h-9">
                    <input type="text" id="booked" class=" w-[70%] bg-white border placeholder-bluegray_400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                      placeholder="Search actions, names...."
                    />
                    <Search />
                  </Row>

                  <Row className="w-[70%] mt-3 gap-4 ">
                    <DateRange />
                    <ActivitySourceStatus />
                  </Row>

                  <Row className="w-[100%] mt-5">
                    <Text className="items-start font-light text-black text-2xl" >
                      2023-03-16
                    </Text>
                  </Row>
                  <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%]" />

                  <ActivityDetailLogin />
                  <ActivityDetailLogout />

                  <Row className="w-[100%] mt-5">
                    <Text className="items-start font-light text-black text-2xl" >
                    2023-03-15
                    </Text>
                  </Row>
                  <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%]" />
                  
                  <ActivityDetailLogin2 />
                  <ActivityDetailLogout2 />
                </Column>

              </Row>

            </Column>
          </Row>




        </Row>
      </Column>



    </>
  )
}

export default ActivityLog;