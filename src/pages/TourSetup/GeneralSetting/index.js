import React, { useState } from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Button, Line, Switch, Input } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaCheck, FaGlobeAmericas, FaTimes, FaPlus } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

const GeneralSetting = () => {
    //for popup
    const [showModal, setShowModal] = React.useState(false);
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
    //for switch 
    const [enabled, setEnabled] = useState(false);
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
                        <Column className="mx-3 w-[100%] mb-[100px]">
                            <Column class="w-[100%]">
                                <Row>
                                    <Column class="w-[100%]">
                                        <Row>
                                            <Text className="font-light text-[#4C8FBD] text-2xl" >
                                                Setting
                                            </Text>
                                            <AiOutlineDoubleRight class="ml-2 mt-3 text-[#667E99]" />
                                            <Text className="font-light text-[#667E99] text-base mt-2 pl-1" >
                                                General Setting
                                            </Text>
                                        </Row>
                                    </Column>
                                </Row>

                            </Column>
                            <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%]" />

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Analytics Codes
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-4 " />

                                <Text className="font-light text-black text-sm mt-3 ml-2" >
                                    Set an analytics code for all your front-end pages. Click here for more information about analytics and Rezgo
                                </Text>


                                <Row className="mt-1 mb-2">
                                    <Column class="w-[100%]">
                                        <div class="">

                                            <input
                                                type="checkbox"
                                                name="agree"
                                                id="agree"
                                                class="ml-[10px] peer h-4 w-4 border border-gray_501 focus:border-gray_501 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-gray_501 mt-0.5 align-top bg-no-repeat float-left mr-2 cursor-pointer"
                                            />

                                            <label for="agree" className="text-[14px] text-[#667E99] mt-1">
                                                General Code
                                            </label>

                                            <div class="mt-2 ml-[30px] hidden peer-checked:block">
                                                <Column className="w-[100%]">
                                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
                                                </Column>
                                            </div>
                                        </div>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[100%]">
                                        <div class="">

                                            <input
                                                type="checkbox"
                                                name="agree"
                                                id="agree"
                                                class="ml-[10px] peer h-4 w-4 border border-gray_501 focus:border-gray_501 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-gray_501 mt-0.5 align-top bg-no-repeat float-left mr-2 cursor-pointer"
                                            />

                                            <label for="agree" className="text-[14px] text-[#667E99] mt-1">
                                                Use Google Analytics 4
                                            </label>

                                            <div class="mt-2 ml-[30px] hidden peer-checked:block">
                                                <Column className="w-[30%]">
                                                    <textarea id="message" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Google Analytics 4 ID"></textarea>
                                                </Column>
                                            </div>
                                        </div>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[100%]">
                                        <div class="">

                                            <input
                                                type="checkbox"
                                                name="agree"
                                                id="agree"
                                                class="ml-[10px] peer h-4 w-4 border border-gray_501 focus:border-gray_501 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-gray_501 mt-0.5 align-top bg-no-repeat float-left mr-2 cursor-pointer"
                                            />

                                            <label for="agree" className="text-[14px] text-[#667E99] mt-1">
                                                Use Google Tag Manager
                                            </label>

                                            <div class="mt-2 ml-[30px] hidden peer-checked:block">
                                                <Column className="w-[30%]">
                                                    <textarea id="message" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Google Tag Manager ID"></textarea>
                                                </Column>
                                            </div>
                                        </div>
                                    </Column>
                                </Row>

                                <Text className="font-light text-black text-sm mt-3 ml-2" >
                                    Set an analytics code to be displayed when a customer books an item. You can use the codes below to add additional details.
                                </Text>


                                <Row className="mt-1 mb-2">
                                    <Column class="w-[100%]">
                                        <div class="">

                                            <input
                                                type="checkbox"
                                                name="agree"
                                                id="agree"
                                                class="ml-[10px] peer h-4 w-4 border border-gray_501 focus:border-gray_501 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-gray_501 mt-0.5 align-top bg-no-repeat float-left mr-2 cursor-pointer"
                                            />

                                            <label for="agree" className="text-[14px] text-[#667E99] mt-1">
                                                Conversion Code
                                            </label>

                                            <div class="mt-2 ml-[30px] hidden peer-checked:block">
                                                <Column className="w-[100%]">
                                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
                                                </Column>
                                            </div>
                                        </div>
                                    </Column>
                                </Row>

                                <Text className="font-light text-black text-sm mt-2 ml-2" >
                                    Set a Google e-Commerce tracking code. Click here for more information about using an e-Commerce code
                                </Text>


                                <Row className="mt-1 mb-2">
                                    <Column class="w-[100%]">
                                        <div class="">

                                            <input
                                                type="checkbox"
                                                name="agree"
                                                id="agree"
                                                class="ml-[10px] peer h-4 w-4 border border-gray_501 focus:border-gray_501 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-gray_501 mt-0.5 align-top bg-no-repeat float-left mr-2 cursor-pointer"
                                            />

                                            <label for="agree" className="text-[14px] text-[#667E99] mt-1">
                                                Google e-Commerce Code
                                            </label>

                                            <div class="mt-2 ml-[30px] hidden peer-checked:block">
                                                <Column className="w-[30%]">
                                                    <textarea id="message" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e-Commerce Account ID "></textarea>
                                                </Column>
                                            </div>
                                        </div>
                                    </Column>
                                </Row>


                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        TourShield
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Text className="font-light text-black text-sm mt-2 ml-2" >
                                    Reduce cancellations and chargebacks and allow customers to protect their bookings with TourShield. Click here for more information
                                </Text>

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            TourShield
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Enables TourShield for users paying with Credit Card </option>
                                            <option>Do not use TourShield</option>
                                        </select>
                                    </Column>
                                </Row>
                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Verified Guest Reviews
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Text className="font-light text-black text-sm mt-2 ml-2" >
                                    Collect reviews from your guests with HalalHoliday Verified Guest Reviews. Click here for more information
                                </Text>

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Reviews
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Enables Verified Guest Reviews</option>
                                            <option>Do not use Verified Guest Reviews</option>
                                        </select>
                                    </Column>
                                </Row>
                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Other Accounts
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6">
                                    <Column class="w-[20%] text-right ml-3 mt-3">
                                        <Text className="text-[#667E99] text-sm " >
                                            Twitter Name
                                        </Text>
                                    </Column>
                                    <Column class="w-[55%]">
                                        <Button class="mx-2 mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[33%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <Row>
                                                <BsFillPlusCircleFill className="h-5 w-4 text-white font-light " />
                                                <Text
                                                    className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                    variant="body4"
                                                >
                                                    Attach Twitter Account
                                                </Text>
                                            </Row>
                                        </Button>

                                        {showModal ? (
                                            <>
                                                <div
                                                    className="justify-center items-center mx-[370px] my-[120px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                >
                                                    {/*Header*/}
                                                    <Column classname="w-[100%]">
                                                        <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                                            <Text className="pl-3 py-5 text-xl text-white font-light">
                                                                Attach a Twitter Account
                                                            </Text>
                                                            <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                                                onClick={() => setShowModal(false)} />
                                                        </Row>
                                                    </Column>


                                                    {/*Body*/}

                                                    <Column className="bg-white w-[100%] mr-4">
                                                        <Row className=" mr-2 mt-6">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                Account
                                                            </Text>
                                                            <input
                                                                className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                                type="text"
                                                                size="smSrc"
                                                                required
                                                                placeholder="@name"
                                                            ></input>
                                                        </Row>

                                                        <Row className=" mt-6 my-3 ml-3 flex items-end justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8] mr-3 ">
                                                            <button

                                                                className="bg-[#4C8FBD] hover:bg-[#006BB8] ring ring-[#4C8FBD] ring-inset text-white text-sm px-6 py-3 ring-3"
                                                                type="button"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                <Row>
                                                                    <FaCheck className="h-5 w-4 text-white font-light " />
                                                                    <Text
                                                                        className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                                        variant="body4"
                                                                    >
                                                                        Attach Account
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

                                <Row className="">
                                    <Column class="w-[20%] text-right ml-3 mt-3">
                                        <Text className="text-[#667E99] text-sm " >
                                            TripAdvisor ID
                                        </Text>
                                    </Column>
                                    <Column class="w-[55%]">
                                        <Button class="mx-2 mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[33%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <Row>
                                                <BsFillPlusCircleFill className="h-5 w-4 text-white font-light " />
                                                <Text
                                                    className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                    variant="body4"
                                                >
                                                    Attach TripAdvisor URL
                                                </Text>
                                            </Row>
                                        </Button>

                                        {showModal ? (
                                            <>
                                                <div
                                                    className="justify-center items-center mx-[370px] my-[120px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                >
                                                    {/*Header*/}
                                                    <Column classname="w-[100%]">
                                                        <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                                            <Text className="pl-3 py-5 text-xl text-white font-light">
                                                                Attach a TripAdvisor URL
                                                            </Text>
                                                            <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                                                onClick={() => setShowModal(false)} />
                                                        </Row>
                                                    </Column>

                                                    {/*Body*/}

                                                    <Column className="bg-white w-[100%] mr-4">
                                                        <Row className=" mr-2 mt-6">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                Address
                                                            </Text>
                                                            <input
                                                                className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                                type="text"
                                                                size="smSrc"
                                                                required
                                                                placeholder="Full TripAdvisor URL or Account ID"
                                                            ></input>
                                                        </Row>

                                                        <Row className=" mt-6 my-3 ml-3 flex items-end justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8] mr-3 ">
                                                            <button

                                                                className="bg-[#4C8FBD] hover:bg-[#006BB8] ring ring-[#4C8FBD] ring-inset text-white text-sm px-6 py-3 ring-3"
                                                                type="button"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                <Row>
                                                                    <FaCheck className="h-5 w-4 text-white font-light " />
                                                                    <Text
                                                                        className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                                        variant="body4"
                                                                    >
                                                                        Attach Account
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

                                <Row className="">
                                    <Column class="w-[20%] text-right ml-3 mt-3">
                                        <Text className="text-[#667E99] text-sm " >
                                            SeaWorld
                                        </Text>
                                    </Column>
                                    <Column class="w-[55%]">
                                        <Button class="mx-2 mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[33%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <Row>
                                                <BsFillPlusCircleFill className="h-5 w-4 text-white font-light " />
                                                <Text
                                                    className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                    variant="body4"
                                                >
                                                    Attach SeaWorld
                                                </Text>
                                            </Row>
                                        </Button>

                                        {showModal ? (
                                            <>
                                                <div
                                                    className="justify-center items-center mx-[370px] my-[120px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                >
                                                    {/*Header*/}
                                                    <Column classname="w-[100%]">
                                                        <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                                            <Text className="pl-3 py-5 text-xl text-white font-light">
                                                                Attach SeaWorld Credentials
                                                            </Text>
                                                            <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                                                onClick={() => setShowModal(false)} />
                                                        </Row>
                                                    </Column>

                                                    {/*Body*/}

                                                    <Column className="bg-white w-[100%] mr-4">
                                                        <Row className=" mr-2 mt-6">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                User Name
                                                            </Text>
                                                            <input
                                                                className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                                type="text"
                                                                size="smSrc"
                                                                required
                                                                placeholder="SeaWorld Username"
                                                            ></input>
                                                        </Row>

                                                        <Row className="mt-2 mr-2">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                Password
                                                            </Text>
                                                            <input
                                                                className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                                type="text"
                                                                size="smSrc"
                                                                required
                                                                placeholder="SeaWorld Password"
                                                            ></input>
                                                        </Row>

                                                        <Row className=" mt-6 my-3 ml-3 flex items-end justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8] mr-3 ">
                                                            <button

                                                                className="bg-[#4C8FBD] hover:bg-[#006BB8] ring ring-[#4C8FBD] ring-inset text-white text-sm px-6 py-3 ring-3"
                                                                type="button"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                <Row>
                                                                    <FaCheck className="h-5 w-4 text-white font-light " />
                                                                    <Text
                                                                        className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                                        variant="body4"
                                                                    >
                                                                        Attach Account
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

                                <Row className="">
                                    <Column class="w-[20%] text-right ml-3 mt-3">
                                        <Text className="text-[#667E99] text-sm " >
                                            Universal SmartOrder
                                        </Text>
                                    </Column>
                                    <Column class="w-[55%]">
                                        <Button class="mx-2 mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[33%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <Row>
                                                <BsFillPlusCircleFill className="h-5 w-4 text-white font-light " />
                                                <Text
                                                    className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                    variant="body4"
                                                >
                                                    Attach Universal
                                                </Text>
                                            </Row>
                                        </Button>

                                        {showModal ? (
                                            <>
                                                <div
                                                    className="justify-center items-center mx-[370px] my-[120px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                >
                                                    {/*Header*/}
                                                    <Column classname="w-[100%]">
                                                        <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                                            <Text className="pl-3 py-5 text-xl text-white font-light">
                                                                Attach Universal Credentials
                                                            </Text>
                                                            <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                                                onClick={() => setShowModal(false)} />
                                                        </Row>
                                                    </Column>

                                                    {/*Body*/}

                                                    <Column className="bg-white w-[100%] mr-4">
                                                        <Row className=" mr-2 mt-6">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                User Name
                                                            </Text>
                                                            <input
                                                                className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                                type="text"
                                                                size="smSrc"
                                                                required
                                                                placeholder="Universal Username"
                                                            ></input>
                                                        </Row>

                                                        <Row className="mt-2 mr-2">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                Secret
                                                            </Text>
                                                            <input
                                                                className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                                type="text"
                                                                size="smSrc"
                                                                required
                                                                placeholder="Universal Secret"
                                                            ></input>
                                                        </Row>

                                                        <Row className="mt-2 mr-2">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                Suffix
                                                            </Text>
                                                            <input
                                                                className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                                type="text"
                                                                size="smSrc"
                                                                required
                                                                placeholder="Universal Suffix"
                                                            ></input>
                                                        </Row>

                                                        <Row className="mt-2 mr-2">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                Customer ID
                                                            </Text>
                                                            <input
                                                                className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                                type="text"
                                                                size="smSrc"
                                                                required
                                                                placeholder="Universal Customer ID"
                                                            ></input>
                                                        </Row>

                                                        <Row className=" mt-6 my-3 ml-3 flex items-end justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8] mr-3 ">
                                                            <button

                                                                className="bg-[#4C8FBD] hover:bg-[#006BB8] ring ring-[#4C8FBD] ring-inset text-white text-sm px-6 py-3 ring-3"
                                                                type="button"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                <Row>
                                                                    <FaCheck className="h-5 w-4 text-white font-light " />
                                                                    <Text
                                                                        className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                                        variant="body4"
                                                                    >
                                                                        Attach Account
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
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Distribution Fields
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-4 " />

                                <Text className="font-light text-black text-sm mt-2 ml-2" >
                                    Enable fields in option details that allow you to enter third-party ID numbers.
                                </Text>

                                <Row className="mb-2">
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                        Vendors
                                    </Text>
                                    <Switch className="ml-2 mt-1" />
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[50%] text-left ">
                                        Expedia
                                    </Text>

                                </Row>

                                <Row className="mb-2">
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right "></Text>
                                    <Switch className="ml-2 mt-1" />
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[50%] text-left ">
                                        Viator
                                    </Text>
                                </Row>
                            </Column>



                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        System Formatting
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Date Format

                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>2023-05-09     (YYYY-MM-DD)</option>
                                            <option>05/09/2023     (MM/DD/YYYY)</option>
                                            <option>09-05-2023     (DD/MM/YYYY)</option>
                                            <option>May 09 2023     (MM DD YYYY)</option>
                                            <option>09 May 2023     (DD MM YYYY)</option>
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Time Zone
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>UTC-11:00 - Midway Island, Samoa (May 09,2023 08:42 pm)</option>
                                            <option>UTC-10:00 - Hawaii (May 09,2023 09:42 pm)</option>
                                            <option>UTC-09:30 - Marquesas Islands (May 09,2023 11:12 pm)</option>
                                            <option>UTC-09:00 - Alaska (May 09,2023 10:42 pm)</option>
                                            <option>UTC-08:00 - Pacific Time, US & Canada (May 09,2023 11:42 pm)</option>
                                            <option>UTC-07:00 - Arizona (May 09,2023 12:42 pm)</option>
                                            <option>UTC-06:00 - Central Time, US & Canada (May 09,2023 01:42 pm)</option>
                                            <option>UTC-05:00 - Bogota, Lima, Quito, Rio Branco (May 10,2023 02:42 pm)</option>
                                            <option>UTC-04:30 - Caracas (May 10,2023 03:12 am)</option>
                                            <option>UTC-04:00 - Atlantic Time, Canada (May 10,2023 03:42 am)</option>
                                            <option>UTC-03:30 - Newfoundland (May 10,2023 04:12 am)</option>
                                            <option>UTC-02:00 - Mid-Atlantic (May 10,2023 05:42 am)</option>
                                            <option>UTC-04:30 - Azores (May 10,2023 06:42 am)</option>
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Start of Week
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Sunday</option>
                                            <option>Monday</option>
                                        </select>
                                    </Column>
                                </Row>

                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Distribution Fields
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-4 " />

                                <Text className="font-light text-black text-sm mt-2 ml-2" >
                                    Forward HalalHoliday booking fees along to the customer. Fees will show up as a 4.9% (Front End) or 0.9% (Back End) line-item.
                                </Text>

                                <Row className="mb-2">
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                        Forward Fees for Front End
                                    </Text>
                                    <Switch className="ml-2 mt-1" />
                                </Row>

                                <Row className="mb-2">
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                        Forward Fees for Point of Sale
                                    </Text>
                                    <Switch className="ml-2 mt-1" />

                                </Row>

                                <Row className="mb-2">
                                    <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                    Booking Fees Label	

                                    </Text>
                                    <input
                                        className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[50%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Booking Fee"
                                    ></input>
                                </Row>
                            </Column>


                        </Column>


                    </Row>

                </Row>
            </Column>

        </>
    )
}
export default GeneralSetting;