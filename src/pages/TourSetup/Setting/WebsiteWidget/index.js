import React, { useState } from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Button, Line, Switch } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaCheck, FaGlobeAmericas, FaTimes } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";




const WebsiteWidget = () => {
    //for popup
    const [showModal2, setShowModal2] = React.useState(false);
    const navigate = useNavigate();

    // navigate to Edit button of company info 
    function handleNavigateEdit() {
        navigate("/t48");
    }

    //for dropdown list
    const [isVisible, setIsVisible] = useState("");

    const changeHandler = e => {
        const getshow = e.target.value;
        setIsVisible(getshow);
    }



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
                            <Column class="w-[100%]">
                                <Row>
                                    <Text className="font-light text-[#4C8FBD] text-2xl" >
                                        Setting
                                    </Text>
                                    <AiOutlineDoubleRight class="ml-2 mt-3 text-[#667E99]" />
                                    <Text className="font-light text-[#667E99] text-base mt-2 pl-1" >
                                        Website & Widget
                                    </Text>
                                </Row>
                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%]" />

                                <Column>
                                    <Row class="mt-4">
                                        <Text className="font-light text-[#4C8FBD] text-2xl " >
                                            xxxx
                                        </Text>
                                        <Text className="font-light text-black text-2xl" >
                                            .rezgo.com
                                        </Text>
                                    </Row>
                                </Column>

                            </Column>



                            <Text className="font-light text-black text-xl mt-4" >
                                Custom Domain Names
                            </Text>
                            <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%]" />
                            <Text className="mb-2 font-light text-black text-xs mt-2 " >
                                Your domain must be pointed at app.rezgo.com before it can be attached. For more information about attaching a custom domain, click here
                            </Text>


                            <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[17%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                onClick={() => setShowModal2(true)}
                            >
                                <Row>
                                    <FaGlobeAmericas className="h-5 w-4 text-white font-light " />
                                    <Text
                                        className="pl-1 font-light text-white cursor-pointer pr-1 "
                                        variant="body4"
                                    >
                                        Attach Custom Domain
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

                            <Text className="font-light text-black text-xl mt-4" >
                                Widget Builder
                            </Text>
                            <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%]" />
                            <Text className="mb-2 font-light text-black text-xs mt-2 " >
                                The Rezgo Widget allows you to embed your tours and activities on any existing site with just a few lines of javascript.
                            </Text>



                            <Column class="w-[100%]">
                                <Row className="mb-1">
                                    <Column class="w-[20%] text-right mr-3 mt-2">
                                        <Text className="text-[#667E99] text-sm" >
                                            Button Text
                                        </Text>
                                    </Column>
                                    <Column class="w-[30%]">
                                        <input placeholder="The text for your button" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " />
                                    </Column>
                                </Row>

                                <Row className="mb-1">
                                    <Column class="w-[20%] text-right mr-3 mt-2">
                                        <Text className="text-[#667E99] text-sm" >
                                            Button Style
                                        </Text>
                                    </Column>
                                    <Column class="w-[30%]">
                                        <select placeholder="Primary Email" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-[#858585] border border-gray-300 focus:ring-blue-500">
                                            <option className="common-pointer">Button</option>
                                            <option className="common-pointer">Link</option>
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mb-1">
                                    <Column class="w-[20%] text-right mr-3 mt-2">
                                        <Text className="text-[#667E99] text-sm" >
                                            Button Class
                                        </Text>
                                    </Column>
                                    <Column class="w-[30%]">
                                        <input placeholder="A class name that you can use" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " />
                                    </Column>
                                </Row>

                                <Row className="mb-1">
                                    <Column class="w-[20%] text-right mr-3 mt-2">
                                        <Text className="text-[#667E99] text-sm" >
                                            Ref ID
                                        </Text>
                                    </Column>
                                    <Column class="w-[30%]">
                                        <input placeholder="A Ref ID passed to widget bookings" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " />
                                    </Column>
                                </Row>

                            </Column>

                            <Column class="w-[100%]">
                                <Row className="mb-1">
                                    <Column class="w-[20%] text-right mr-3 mt-2">
                                        <Text className="text-[#667E99] text-sm" >
                                            Promo Code
                                        </Text>
                                    </Column>
                                    <Column class="w-[40%]">
                                        <input placeholder="A Promo Code passed to widget bookings" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                    </Column>
                                </Row>

                                <Row className="mb-1">
                                    <Column class="w-[20%] text-right mr-3 mt-2">
                                        <Text className="text-[#667E99] text-sm" >
                                            Display Mode
                                        </Text>
                                    </Column>
                                    <Column class="w-[40%]">
                                        <select
                                            placeholder="Primary Email"
                                            class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-[#858585] border border-gray-300 focus:ring-blue-500"
                                            onChange={changeHandler}
                                        >
                                            <option disabled selected hidden className="common-pointer">Select</option>
                                            <option disabled className="common-pointer text-[#428bca] font-bold">Inventory</option>
                                            <option value="a" className="common-pointer">Show a list of inventory</option>
                                            <option value="b" className="common-pointer">Show a single inventory item</option>
                                            <option disabled className="common-pointer text-[#428bca] font-bold">Review</option>
                                            <option value="c" className="common-pointer">Show a list of all reviews</option>
                                            <option value="d" className="common-pointer">Show reviews for a single inventory item</option>
                                        </select>
                                    </Column>
                                </Row>

                                {isVisible === 'a' && (

                                    <Row className="mb-1">
                                        <Column class="w-[20%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Select tags
                                            </Text>
                                        </Column>
                                        <Column class="w-[40%]">
                                            <input placeholder="Primary Email" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                )

                                }

                                {isVisible === 'b' && (

                                    <Row className="mb-1">
                                        <Column class="w-[20%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Select inventory
                                            </Text>
                                        </Column>
                                        <Column class="w-[40%]">
                                            <input placeholder="Primary Email" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                )

                                }

                                {isVisible === 'c' && (

                                    <Row className="mb-1">
                                        <Column class="w-[20%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Select tags
                                            </Text>
                                        </Column>
                                        <Column class="w-[40%]">
                                            <input placeholder="Primary Email" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                )

                                }

                                {isVisible === 'd' && (

                                    <Row className="mb-1">
                                        <Column class="w-[20%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Select tags
                                            </Text>
                                        </Column>
                                        <Column class="w-[40%]">
                                            <input placeholder="Primary Email" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                )

                                }

                            </Column>


                            <Row className="mb-1">
                                <Column class="w-[20%] text-right mr-3 mt-2">

                                </Column>
                                <Column class="w-[40%]">
                                    <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[55%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                    >
                                        <Row>
                                            <FaCheck className="h-5 w-4 text-white font-light " />
                                            <Text
                                                className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                variant="body4"
                                            >
                                                Generate and Copy to Clipboard
                                            </Text>
                                        </Row>
                                    </Button>
                                    <Row>
                                        <Text className="font-light text-black pr-1 mt-2 ">
                                            Place this code on your site where you would like the button to appear
                                        </Text>
                                    </Row>
                                    <input class="mb-9 w-[100%] h-[70%] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


                                </Column>
                            </Row>




                        </Column>
                    </Row>

                </Row>
            </Column>

        </>
    )
}
export default WebsiteWidget;