import React, { useState } from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Button, Line, Switch } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaCheck, FaGlobeAmericas, FaTimes, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SystemConfig = () => {
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
                                                Setting
                                            </Text>
                                            <AiOutlineDoubleRight class="ml-2 mt-3 text-[#667E99]" />
                                            <Text className="font-light text-[#667E99] text-base mt-2 pl-1" >
                                                Sytem configurations
                                            </Text>
                                        </Row>
                                    </Column>
                                </Row>

                            </Column>
                            <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%]" />

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Booking Line Item Labels
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-4 " />

                                <Text className="font-light text-black text-xs mt-2 ml-2" >
                                    Users will be able to choose from this list of line items. Use this if you want to ensure your line items have consistent names.
                                </Text>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Arbitrary Labels
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Allow arbitrary labels</option>
                                            <option>Do not allow arbitrary labels</option>
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                        Label Choices
                                    </Text>
                                    <input
                                        className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[50%] 2xl:mt-2 "
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="Must be unique"
                                    ></input>
                                </Row>
                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Purchasing
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-4 " />

                                <Row className="mb-2">
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                        Use Order System
                                    </Text>
                                    <Switch className="ml-2 mt-1" />
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[50%] text-left ">
                                        Enables booking multiple items per order on the front-end.
                                    </Text>
                                </Row>

                                <Row className="mb-2">
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                        Marketing Consent
                                    </Text>
                                    <Switch className="ml-2 mt-1" />
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[50%] text-left ">
                                        Request customers consent to receiving emails & SMS messages.
                                    </Text>
                                </Row>

                                <Row className="mb-2">
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                        Cart Abandon Emails
                                    </Text>
                                    <Switch className="ml-2 mt-1" />
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[50%] text-left ">
                                        When customers fail to complete an order, send a reminder email a day later.
                                    </Text>
                                </Row>


                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Display and Layout
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Inventory List

                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Display across multiple pages (faster)</option>
                                            <option>Display on a single pages (Slower)</option>
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Line Item Grouping
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Print and display line items separately</option>
                                            <option>Group lines items together as Taxes and Fees (Slower)</option>
                                        </select>
                                    </Column>
                                </Row>



                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Booking Management
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Auto-Archive Bookings

                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>After 6 year</option>
                                            <option>After 6 months</option>
                                            <option>After 3 months</option>
                                            <option>After 1 months</option>
                                            <option>Never</option>
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Booking Status
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Manage booking status manually</option>
                                            <option>Change status to received when fully paid (notify customer)</option>
                                            <option>Change status to received when fully paid (do not notify)</option>
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Booking Cancellation
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Checked-in bookings can still be cancelled</option>
                                            <option>Checked-in bookings can not be cancelled</option>                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Cancellation Reason

                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Cancellation reasons are optional </option>
                                            <option>Cancellation reasons are required </option>                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Cancellation Window


                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Up to booking date</option>
                                            <option>Up to 30 days after booking date</option>
                                            <option>Up to 90 days after booking date</option>
                                            <option>Up to 180 days after booking date</option>
                                            <option>Up to one year after booking date</option>

                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            New Comments Default

                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Print and display line items separately</option>
                                            <option>Group lines items together as Taxes and Fees (Slower)</option>
                                        </select>
                                    </Column>
                                </Row>
                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Gift Card Management                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Gift Card Purchases
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Allow on Front End</option>
                                            <option>Disable on Front End</option>

                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Default Card Expiry
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Never</option>
                                            <option>After 5 Years</option>
                                            <option>After 4 Years</option>
                                            <option>After 3 Years</option>
                                            <option>After 2 Years</option>
                                            <option>After 1 Years</option>
                                            <option>After 6 Months</option>
                                            <option>After 1 Months</option>

                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Gift Card Amounts
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <input
                                            className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-full 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Coma separated"
                                        ></input>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                            Custom Amounts

                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Allow Custom Amounts</option>
                                            <option>Disable Custom Amounts</option>                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Custom Minimum


                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                    <input
                                            className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-full 2xl:mt-2 "
                                            type="text"
                                            size="smSrc"
                                            required
                                            placeholder="Dollar amount"
                                        ></input>
                                    </Column>
                                </Row>
                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                    Ticket Check-In
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-4 " />

                                <Row className="mb-2">
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                    Restrict Window
                                    </Text>
                                    <Switch className="ml-2 mt-1" />
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[50%] text-left ">
                                    Restrict check-ins to 30 mins prior to "Check-In Time" specified on option.
                                    </Text>
                                </Row>

                                <Row className="mb-2">
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                    Require PIN                                    </Text>
                                    <Switch className="ml-2 mt-1" />
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[50%] text-left ">
                                    Enable a 4-digit PIN for accessing the ticket check in.                                    </Text>
                                </Row>

                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                    Point of Sale                                   </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Booking Complete Landing
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Let HalalHoliday decide between order or booking page</option>
                                            <option>Always land on the order page when completing a booking</option>
                                            <option>Always land on the booking details page when completing a booking</option>

                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Availability
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Display availability and current bookings</option>
                                            <option>Hide availability and current bookings</option>

                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Group Information	

                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                    <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Collect group information on point of sale</option>
                                            <option>Hide group information on point of sale</option>

                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Default Display

                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Start by showing default search results(slower)</option>
                                            <option>Wait for a search before showing results ( faster) </option>                                        
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Required Fields	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                    <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Allow point of sale booking without filling required fields</option>
                                            <option>Enforce required fields when booking on point of sale</option>                                        
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Confirmation Numbers
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                    <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Do not require confirmation numbers for Point of Sales purchases</option>
                                            <option>Require confirmation numbers for Point of Sales purchases</option>                                        
                                        </select>
                                    </Column>
                                </Row>
                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Allow Bundles
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                    <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Allow point of sale to use pricing bundles</option>
                                            <option>Do not allow point of sale to use pricing bundles</option>
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Desk Selector	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                    <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Display the Point of Sale search normally</option>
                                            <option>Show desk selector ahead of Point of Sale searches (require valid esks)</option>                                        
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Reference IDs	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                    <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Allow reference IDs to be entered on the Point of Sale</option>
                                            <option>Automatically generate references IDs on the Point of Sale</option>                                        
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mt-1 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Require Contact Attached	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                    <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Do not require contact attached to allPointof Sale bookings</option>
                                            <option>Require contact attached to all Point of Sale bookings</option>                                        
                                        </select>
                                    </Column>
                                </Row>
                            </Column>


                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        # Trasactions
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Collect Tips	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Do not ask for tips on transactions</option>
                                            <option>Request percentage tips</option>
                                            <option>Request fixed value tips</option>
                                            <option>Request fixed OR percentage tips at different amounts</option>
                                        </select>
                                    </Column>
                                </Row>

                                
                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Sales Desks
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Desk Merchandise
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Desk can purchase all available merchandise</option>
                                            <option>Desks can only purchase merchandise assigned to that desk</option>

                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Opening & Closing	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Disable opening and closing of desks</option>
                                            <option># Enable opening and closing of desks (stock counts)</option>
                                            
                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Stock Counts	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Desk can see expected stock count totals</option>
                                            <option>Expected stock count totals are hidden</option>
                                            
                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Payment Counts	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Desk can see expected payment totals</option>
                                            <option>Expected payment totals are hidden</option>
                                            
                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Count Attempts
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Infinite Attempts</option>
                                            <option>1 Attempts</option>
                                            <option>2 Attempts</option>
                                            <option>3 Attempts</option>
                                            <option>4 Attempts</option>
                                            <option>5 Attempts</option>
                                            
                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Cash Counts	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Do not count cash denominations</option>
                                            <option>Count cash denominations</option>
                                            
                                        </select>
                                    </Column>
                                </Row>


                                
                            </Column>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                    Price Sheet Commission
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Calculation Amount
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Calculate against total (retail) amount of booking</option>
                                            <option>Calculate against margin (retail -costs) only</option>

                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Include Line Items	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Do not include line items in commission calculation</option>
                                            <option>Include non-tax line items in commission calculation</option>
                                            <option>Include all line items in commission calculation</option>

                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Valid Bookings	

                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Pending and received bookings</option>
                                            <option>Received booking only</option>
                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Negative Commissions
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Allow commissions to be negative</option>
                                            <option>Do not allow negative commissions</option>
                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Split Commissions
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Do not allow commissions to be split</option>
                                            <option>Allow commissions to be split</option>
                                        </select>
                                    </Column>
                                </Row>

                                
                            </Column>

                            <Column class="w-[100%] mt-6  mr-2 mb-[200px]">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Other Settings
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                <Row className="mt-6 mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Per-PAX Waiver	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Delete unattached signatures after they are assigned</option>
                                            <option>Retain unattached signatures for assigning to multiple bookings</option>

                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Per-Order Waiver	
                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Trigger waiver signing manually</option>
                                            <option>Open waiver on order completion through Point of Sale</option>
                                            
                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Per-Order Signatures                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Capture signatures with web form</option>
                                            <option>Capture signatures with Wacom STU-520/530 tablet</option>
                                            
                                        </select>
                                    </Column>
                                </Row>

                                <Row className=" mb-2">
                                    <Column class="w-[20%] text-right ml-3 mt-1">
                                        <Text className="text-[#667E99] text-sm " >
                                        Custom Payment Method                                        </Text>
                                    </Column>
                                    <Column class="w-[50%]">
                                        <select class="placeholder-[#d5d5d5] mx-2 text-sm block w-full p-1 text-[#858585] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Allow arbitrary payment methods when adding transactionss</option>
                                            <option>Only allow preset payment methods when adding transactions</option>
                                            
                                        </select>
                                    </Column>
                                </Row>

                                <Row className="mb-2">
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                    SOX Compliance	
                                    </Text>
                                    <Switch className="ml-2 mt-1" />
                                    <Text className=" pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[60%] text-left ">
                                    Enables Sarbanes-Oxley compliance for Merchandise, Stock Orders, Stock Transfers and Reconciliations.
                                    </Text>
                                </Row>

                                
                            </Column>

                        </Column>


                    </Row>

                </Row>
            </Column>

        </>
    )
}
export default SystemConfig;