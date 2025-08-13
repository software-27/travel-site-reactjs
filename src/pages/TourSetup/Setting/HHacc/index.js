import React from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Img, Line, Button } from "components";
import Search from "components/Searchbtn/index";
import HomeButtonSetting from "components/HomeButtonSetting/index";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaCheck, FaGlobeAmericas, FaTimes } from "react-icons/fa";




const HHacc = () => {

    //for popup
    const [showModal2, setShowModal2] = React.useState(false);

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
                                    HalalHoliday Account
                                </Text>
                            </Row>

                            <Line className=" bg-gray_700_33 h-[0.5px] mt-4 w-[100%]" />

                            <Column class="w-[100%] mt-6  mr-2">
                                <Text className="font-light text-black text-xl" >
                                    Billing information
                                </Text>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row>
                                    <Column className="w-[50%]">
                                        <Row className="mt-6 mb-2">
                                            <Column class="w-[35%] text-right mr-3 ">
                                                <Text className="font-light text-[#667E99] text-sm" >
                                                    Company Name
                                                </Text>
                                            </Column>
                                            <Column class="w-[65%]">
                                                <Text className="font-light text-black text-sm" >
                                                    xxx
                                                </Text>
                                            </Column>
                                        </Row>

                                        <Row className="mb-2">
                                            <Column class="w-[35%] text-right mr-3 ">
                                                <Text className="font-light text-[#667E99] text-sm" >
                                                    Email
                                                </Text>
                                            </Column>
                                            <Column class="w-[65%]">
                                                <Text className="font-light text-black text-sm" >
                                                    xxnixx778@gmail.com
                                                </Text>
                                            </Column>
                                        </Row>

                                        <Row className="mb-2">
                                            <Column class="w-[35%] text-right mr-3 ">
                                                <Text className="font-light text-[#667E99] text-sm" >
                                                    Phone
                                                </Text>
                                            </Column>
                                            <Column class="w-[65%]">
                                                <Text className="font-light text-black text-sm" >
                                                    011721110xx
                                                </Text>
                                            </Column>
                                        </Row>

                                        <Row className="mb-2">
                                            <Column class="w-[35%] text-right mr-3 ">
                                                <Text className="font-light text-[#667E99] text-sm" >
                                                    Account
                                                </Text>
                                            </Column>
                                            <Column class="w-[65%]">
                                                <Text className="font-light text-black text-sm" >
                                                    #33420
                                                </Text>
                                            </Column>
                                        </Row>

                                        <Row className="mt-6 mb-2">
                                            <Column class="w-[35%] text-right mr-3 ">
                                                <Text className="font-light text-[#667E99] text-sm" >
                                                    Email
                                                </Text>
                                            </Column>
                                            <Column class="w-[65%]">
                                                <Text className="font-light text-black text-sm" >
                                                    xxnixx778@gmail.com
                                                </Text>
                                            </Column>
                                        </Row>

                                        <Row className="mb-2">
                                            <Column class="w-[35%] text-right mr-3 ">
                                                <Text className="font-light text-[#667E99] text-sm" >
                                                    Address 1
                                                </Text>
                                            </Column>
                                            <Column class="w-[65%]">
                                                <Text className="font-light text-black text-sm" >

                                                </Text>
                                            </Column>
                                        </Row>

                                        <Row className="mb-2">
                                            <Column class="w-[35%] text-right mr-3 ">
                                                <Text className="font-light text-[#667E99] text-sm" >
                                                    Address 2
                                                </Text>
                                            </Column>
                                            <Column class="w-[65%]">
                                                <Text className="font-light text-black text-sm" >

                                                </Text>
                                            </Column>
                                        </Row>

                                        <Row className="mb-2">
                                            <Column class="w-[35%] text-right mr-3 ">
                                                <Text className="font-light text-[#667E99] text-sm" >
                                                    Location
                                                </Text>
                                            </Column>
                                            <Column class="w-[65%]">
                                                <Text className="font-light text-black text-sm" >

                                                </Text>
                                            </Column>
                                        </Row>

                                        <Row className="mb-2">
                                            <Column class="w-[35%] text-right mr-3 ">
                                                <Text className="font-light text-[#667E99] text-sm" >
                                                    Postal
                                                </Text>
                                            </Column>
                                            <Column class="w-[65%]">
                                                <Text className="font-light text-black text-sm" >

                                                </Text>
                                            </Column>
                                        </Row>
                                    </Column>

                                    <Column className="w-[50%]">
                                        <div className="bg-[#e4e6e9] border mt-4">
                                            <Row className="mt-2 mb-2">
                                                <Column class="w-[20%] text-right mr-3 ">
                                                    <Text className="font-light text-[#667E99] text-sm" >
                                                        Front-End Rate
                                                    </Text>
                                                </Column>
                                                <Column class="w-[65%]">
                                                    <Text className="font-light text-black text-sm" >
                                                        4.90%
                                                    </Text>
                                                </Column>
                                            </Row>

                                            <Row className="mb-2">
                                                <Column class="w-[20%] text-right mr-3 ">
                                                    <Text className="font-light text-[#667E99] text-sm" >
                                                        Back-End Rate
                                                    </Text>
                                                </Column>
                                                <Column class="w-[65%]">
                                                    <Text className="font-light text-black text-sm" >
                                                        0.90%
                                                    </Text>
                                                </Column>
                                            </Row>

                                            <Row className="mb-2">
                                                <Column class="w-[20%] text-right mr-3 ">
                                                    <Text className="font-light text-[#667E99] text-sm" >
                                                        Payment Method
                                                    </Text>
                                                </Column>
                                                <Column class="w-[65%]">
                                                    <Text className="font-light text-black text-sm" >
                                                        Credit Card
                                                    </Text>
                                                </Column>
                                            </Row>

                                            <Text className="font-light text-[#667E99] text-sm mx-9 w-[100%]" >
                                                No Credit Card Entered
                                            </Text>
                                        </div>

                                        <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[43%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                            onClick={() => setShowModal2(true)}
                                        >
                                            <Row>
                                                <FaCheck className="h-5 w-4 text-white font-light " />
                                                <Text
                                                    className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                    variant="body4"
                                                >
                                                    Activate HalalHoliday Account
                                                </Text>
                                            </Row>
                                        </Button>

                                        {showModal2 ? (
                                            <>
                                                <div
                                                    className="justify-center items-center mx-[400px] my-[150px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                >
                                                    {/*Header*/}
                                                    <Column classname="w-[100%]">
                                                        <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                                            <Text className="pl-3 py-5 text-xl text-white font-light">
                                                                Attach a Domain Name
                                                            </Text>
                                                            <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                                                onClick={() => setShowModal2(false)} />
                                                        </Row>
                                                    </Column>


                                                    {/*Body*/}

                                                    <Column className="bg-white w-[100%]">
                                                        <Row className="mt-2">
                                                            <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[15%] text-right ">
                                                                Domain
                                                            </Text>
                                                            <input
                                                                className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                                type="text"
                                                                size="smSrc"
                                                                required
                                                                placeholder="https://www.domain.com"
                                                            ></input>
                                                        </Row>
                                                        <Row className="mt-6 flex items-center justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8]">


                                                            <button

                                                                className="bg-[#4C8FBD] hover:bg-[#006BB8] ring ring-[#4C8FBD] ring-inset text-white text-sm px-6 py-3 ring-3"
                                                                type="button"
                                                                onClick={() => setShowModal2(false)}
                                                            >
                                                                <Row>
                                                                    <FaCheck className="h-5 w-4 text-white font-light " />
                                                                    <Text
                                                                        className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                                        variant="body4"
                                                                    >
                                                                        Attach Domain
                                                                    </Text>
                                                                </Row>


                                                            </button>

                                                        </Row>
                                                    </Column>

                                                </div>

                                                <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>

                                            </>
                                        ) : null}
                                    </Column>
                                </Row>

                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Text className="font-light text-black text-xl" >
                                    Current Invoice
                                </Text>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Text className="font-light text-black text-xl" >
                                You do not have a current invoice
                                </Text>
                            </Column>




                        </Column>
                    </Row>




                </Row>
            </Column>



        </>
    )
}

export default HHacc;