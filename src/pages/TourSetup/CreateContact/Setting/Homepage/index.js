import React from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Img, Line, Button } from "components";
import Search from "components/Searchbtn/index";
import HomeButtonSetting from "components/HomeButtonSetting/index";




const Homepage = () => {


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
                                        Settings
                                    </Text>
                                </Row>
                            </Row>

                            <Line className=" bg-gray_700_33 h-[0.5px] mt-4 w-[100%]" />

                            <Row className="mt-5">
                                <Column className=" w-[100%] text-[20px] font-regular">
                                    <Text class="font-light">
                                        Company Code (CID) 33420
                                    </Text>

                                    <Text class="font-light text-base">
                                        Reseller Code 33420-1670-3136
                                    </Text>

                                    <Row className="w-[100%] h-9 mt-5 mb-7">
                                        <input type="text" id="booked" class=" w-[70%] bg-white border placeholder-bluegray_400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                            placeholder="Search all settings"
                                        />
                                        <Search />
                                    </Row>

                                    <HomeButtonSetting/>

                                </Column>

                            </Row>

                        </Column>
                    </Row>




                </Row>
            </Column>



        </>
    )
}

export default Homepage;