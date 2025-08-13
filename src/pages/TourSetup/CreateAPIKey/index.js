import React, { useState } from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Button, Line, Switch } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaCheck, FaGlobeAmericas, FaTimes, FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";


const CreateAPIKey = () => {
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
                        <Column className="mx-3 w-[100%]">
                            <Column class="w-[100%]">
                                <Row>
                                    <Column class="w-[100%]">
                                        <Row>
                                            <Text className="font-light text-[#4C8FBD] text-2xl" >
                                                Create API Key
                                            </Text>
                                        </Row>
                                    </Column>


                                    <Column class=" text-right w-[100%]" >

                                        <Row class=" text-right">
                                            <Button class=" bg-[#abbac3] hover:bg-[#a0a0a0] items-center h-8 w-[fit] mx-2 px-2 ring-4 ring-[#abbac3] ring-inset"

                                            >
                                                <Row>
                                                    <FaTimes className="h-5 w-4 text-white font-light " />
                                                    <Text
                                                        className="pl-1 font-light text-white cursor-pointer"
                                                        variant="body4"
                                                    >
                                                        Cancel
                                                    </Text>
                                                </Row>
                                            </Button>

                                            <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-8 w-[fit] mx-2 px-2 ring-4 ring-[#4C8FBD] ring-inset"

                                            >
                                                <Row>
                                                    <FaCheck className="h-5 w-4 text-white font-light " />
                                                    <Text
                                                        className="pl-1 font-light text-white cursor-pointer"
                                                        variant="body4"
                                                    >
                                                        Create API Key
                                                    </Text>
                                                </Row>
                                            </Button>
                                        </Row>
                                    </Column>
                                </Row>

                            </Column>
                            <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%]" />

                            <Column class="w-[100%] mr-2">

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Names
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <input placeholder="Bookings from this key will use this as their origin" class="placeholder-[#d5d5d5] text-sm block w-full p-1 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Active
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <Switch />
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Permitted IPs
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <input placeholder="Enter a comma-separated list of permitted IP addresses. By default all IPs are allowed" class="py-3 placeholder-[#d5d5d5] text-sm block w-full p-1 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </Column>
                                </Row>

                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Permissions
                                    </Text>

                                    <Text className="font-light text-[#777] text-xs mt-2 ml-2" >
                                        What parts of the API can this key access.
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-9 " />

                                <div className="w-[44%] text-center">
                                    <Text className="mt-6 text-[#667E99] text-sm " >
                                    All
                                </Text>
                                <Text className="mt-6 ml-1 text-[#667E99] text-sm " >
                                    |
                                </Text>
                                <Text className="mt-6 ml-1 text-[#667E99] text-sm " >
                                    None
                                </Text>
                                </div>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            About
                                        </Text>
                                    </Column>
                                    <Column class="w-[2%]">
                                        <div class="text-left ">
                                            <input id="yellow-checkbox" type="checkbox" value="" class="mt-1 items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                        </div>
                                    </Column>
                                    <Column class="w-[40%] mt-1">
                                        <Text className="ml-1 text-[#667E99] text-sm" >
                                            Fetch account metadata and page IDs
                                        </Text>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Adjust
                                        </Text>
                                    </Column>
                                    <Column class="w-[2%]">
                                        <div class="text-left ">
                                            <input id="yellow-checkbox" type="checkbox" value="" class="mt-1 items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                        </div>
                                    </Column>
                                    <Column class="w-[40%] mt-1">
                                        <Text className="ml-1 text-[#667E99] text-sm" >
                                            Make adjustments to availability
                                        </Text>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Bookings
                                        </Text>
                                    </Column>
                                    <Column class="w-[2%]">
                                        <div class="text-left ">
                                            <input id="yellow-checkbox" type="checkbox" value="" class="mt-1 items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                        </div>
                                    </Column>
                                    <Column class="w-[40%] mt-1">
                                        <Text className="ml-1 text-[#667E99] text-sm" >
                                            Search bookings and tickets, add reviews for bookings
                                        </Text>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Status
                                        </Text>
                                    </Column>
                                    <Column class="w-[2%]">
                                        <div class="text-left ">
                                            <input id="yellow-checkbox" type="checkbox" value="" class="mt-1 items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                        </div>
                                    </Column>
                                    <Column class="w-[40%] mt-1">
                                        <Text className="ml-1 text-[#667E99] text-sm" >
                                            Set booking status
                                        </Text>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Commit
                                        </Text>
                                    </Column>
                                    <Column class="w-[2%]">
                                        <div class="text-left ">
                                            <input id="yellow-checkbox" type="checkbox" value="" class="mt-1 items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                        </div>
                                    </Column>
                                    <Column class="w-[40%] mt-1">
                                        <Text className="ml-1 text-[#667E99] text-sm" >
                                            Add bookings, transactions, and payments
                                        </Text>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Contact
                                        </Text>
                                    </Column>
                                    <Column class="w-[2%]">
                                        <div class="text-left ">
                                            <input id="yellow-checkbox" type="checkbox" value="" class="mt-1 items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                        </div>
                                    </Column>
                                    <Column class="w-[40%] mt-1">
                                        <Text className="ml-1 text-[#667E99] text-sm" >
                                            Add contacts and send messages
                                        </Text>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Company
                                        </Text>
                                    </Column>
                                    <Column class="w-[2%]">
                                        <div class="text-left ">
                                            <input id="yellow-checkbox" type="checkbox" value="" class="mt-1 items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                        </div>
                                    </Column>
                                    <Column class="w-[40%] mt-1">
                                        <Text className="ml-1 text-[#667E99] text-sm" >
                                            View company information
                                        </Text>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Headers
                                        </Text>
                                    </Column>
                                    <Column class="w-[2%]">
                                        <div class="text-left ">
                                            <input id="yellow-checkbox" type="checkbox" value="" class="mt-1 items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                        </div>
                                    </Column>
                                    <Column class="w-[40%] mt-1">
                                        <Text className="ml-1 text-[#667E99] text-sm" >
                                            View branding and header/footer information
                                        </Text>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Search
                                        </Text>
                                    </Column>
                                    <Column class="w-[2%]">
                                        <div class="text-left ">
                                            <input id="yellow-checkbox" type="checkbox" value="" class="mt-1 items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                        </div>
                                    </Column>
                                    <Column class="w-[40%] mt-1">
                                        <Text className="ml-1 text-[#667E99] text-sm" >
                                            Search inventory, fetch all related inventory data
                                        </Text>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Cards
                                        </Text>
                                    </Column>
                                    <Column class="w-[2%]">
                                        <div class="text-left ">
                                            <input id="yellow-checkbox" type="checkbox" value="" class="mt-1 items-end text-right common-pointer w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 dark:border-gray-600" />
                                        </div>
                                    </Column>
                                    <Column class="w-[40%] mt-1">
                                        <Text className="ml-1 text-[#667E99] text-sm" >
                                            Add and manage gift cards
                                        </Text>
                                    </Column>
                                </Row>

                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Assignments
                                    </Text>

                                    <Text className="font-light text-[#777] text-xs mt-2 ml-2" >
                                        Override existing assignments for booking from this source.
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            User
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option disabled selected hidden className="text-[#858585]">Leave current assignments</option>
                                            <option disabled className="text-[#428bca] font-bold">Side Administrator</option>
                                            <option>145457 (Owner)</option>
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Group
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option disabled selected hidden className="text-[#858585]">Leave current assignments</option>
                                            <option>Side Administrator</option>
                                            <option>Administrator</option>
                                            <option>Product Manager</option>
                                            <option>Product Agent</option>
                                            <option>Booking Manager</option>
                                            <option>Booking Agent</option>
                                        </select>
                                    </Column>
                                </Row>

                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Booking Alerts
                                    </Text>

                                    <Text className="font-light text-[#777] text-xs mt-2 ml-2" >
                                        Send booking alerts to these addresses.
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Company Email
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <Switch />
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Option-level Emails
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <Switch />
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Column class="w-[20%] text-right mr-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Other Emails
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <input placeholder="Comma-separated addresses" class="py-3 placeholder-[#d5d5d5] text-sm block w-full p-1 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </Column>
                                </Row>

                            </Column>

                            <Row className="mt-6 mb-[110px] flex items-center justify-starts p-3 border-t border-solid border-slate-200 bg-[#EFF3F8]">

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


                    </Row>

                </Row>
            </Column>

        </>
    )
}
export default CreateAPIKey;