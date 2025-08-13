import React from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Img, Line, Button } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import CZmenu from "components/CZmenu/index";




const CustomizeLayout = () => {


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
                            <Row>
                                <Text className="font-light text-[#4C8FBD] text-2xl" >
                                    Setting
                                </Text>
                                <AiOutlineDoubleRight class="ml-2 mt-3 text-[#667E99]" />
                                <Text className="font-light text-[#667E99] text-base mt-2 pl-1" >
                                    Customize Layout
                                </Text>
                            </Row>

                            <Line className=" bg-gray_700_33 h-[0.5px] mt-4 w-[100%]" />

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Sidebar Quick Links
                                    </Text>

                                    <Text className="font-light text-[#777] text-xs mt-2 ml-2" >
                                        Set the quick link buttons that appear at the top of the left sidebar.
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />
                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Layout
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <input placeholder="Company Name" class="placeholder-[#d5d5d5] text-sm block w-full p-1 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Button 1
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <input placeholder="Point of Sale" class="placeholder-[#d5d5d5] text-sm block w-full p-1 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Button 2
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <input placeholder="Pinned" class="placeholder-[#d5d5d5] text-sm block w-full p-1 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </Column>
                                </Row>

                            </Column>

                            <CZmenu />

                            <Column class="w-[100%] mt-6  mr-2 mb-[90px]">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Header
                                    </Text>

                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Tittle Text
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <input placeholder="x" class="placeholder-[#d5d5d5] text-sm block w-full p-1 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </Column>
                                </Row>

                                <Row className="mt-6 flex items-center justify-starts p-3 border-t border-solid border-slate-200 bg-[#EFF3F8]">


                                    <button

                                        className="bg-[#4C8FBD] hover:bg-[#006BB8] ring ring-[#4C8FBD] ring-inset text-white text-sm px-6 py-3 ring-3"
                                        type="button"
                                    >
                                        <Row>
                                            <FaCheck className="h-5 w-4 text-white font-light " />
                                            <Text
                                                className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                variant="body4"
                                            >
                                                Save Changes
                                            </Text>
                                        </Row>


                                    </button>

                                </Row>

                            </Column>



                        </Column>
                    </Row>




                </Row>
            </Column>



        </>
    )
}

export default CustomizeLayout;