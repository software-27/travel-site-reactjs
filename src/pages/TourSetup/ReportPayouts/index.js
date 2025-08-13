
import React from "react";
import { Column, Row, Text, Line, Button, Img, Switch } from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import Inventory from "components/Inventory/index";
import DropdownRender from "components/Dropdown";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack, FaTimes, FaCheck } from "react-icons/fa";
import { RxDoubleArrowRight, RxChevronLeft } from "react-icons/rx";
import Icon from '@mdi/react'
import {
    mdiChartBar, mdiClockTimeFourOutline, mdiFolderOpen, mdiArrowAll, mdiInformation
} from '@mdi/js';
import { useState } from 'react';
import Topbtns from "components/Topbutton/index";
import SaveBtn from "components/SaveBtn/index";
import FieldsBtn from "components/FieldsBtn/index";
import FlagStatus4 from "components/Flag&Status4/index";
import Manager from "components/Manager/index";
import Location from "components/Location/index";
import Desk from "components/Desk/index";
import FieldsUserBtn from "components/FieldsUserBtn/index";
import PaymentMethod from "components/PaymentMethod/index";
import UserOwned from "components/UserOwned/index";
import Flag2 from "components/Flag2/index";
import FieldsPaymentBtn from "components/FieldsTransactionBtn/index";
import FieldsTransactionBtn from "components/FieldsTransactionBtn/index";
import SearchDate5 from "components/SearchDate5/index";
import Flag3 from "components/Flag3/index";
import Inventory2 from "components/Inventory2/index";
import BookingLabel from "components/BookingLabel/index";
import FieldsCommisionBtn from "components/FieldsCommisionBtn/index";
import UserCreated from "components/UserCreated/index";
import Flag4 from "components/Flag4/index";
import DpassDue from "components/DayPassDue/index";
import FieldsInvoiceBtn from "components/FieldsInvoiceBtn/index";
import FieldsPayoutsBtn from "components/FieldsPayoutsBtn/index";


const ReportPayouts = () => {
    /* const handleshow = (e) => {
        const getshow = e.target.value;
        setShowhide(getshow);
        };*/

    const navigate = useNavigate();
    //button navigate to report
    function handleNavigate() {
        navigate("/t34")
    }
    //button cancel navigate to ticket pools
    function handleNavigate1() {
        navigate("/t20");
    }

    //for switch 
    const [enabled, setEnabled] = useState(false);

    //popup funct.
    const [showModal, setShowModal] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);

    //for dropdown list
    const [isVisible, setIsVisible] = useState("");

    const changeHandler = e => {
        const getshow = e.target.value;
        setIsVisible(getshow);
    }



    return (
        <>
            <Header className="w-[100%]" />
            <Column className="bg-white w-[100%]">
                <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
                    <Column>
                        <Topbtns />
                    </Column>

                </Row>
                <Row className="w-[100%] mt-[8px]">
                    <Sidebar />
                    <Column className="p-2 bg-white h-auto w-[100%]">
                        <Row className="mb-4">
                            <Row onClick={handleNavigate} className="cursor-pointer w-[65%] text-light_blue_600 text-[25px] m-1 font-light items-center">
                                Reports
                                <RxDoubleArrowRight className="items-start ml-2 mt-4 h-5 w-5 text-[#667E99] items-center" />
                                <Text className="text-[15px] ml-2 mt-2 text-[#667E99]">Payouts</Text>
                            </Row>
                        </Row>
                        <Line className="bg-gray_700_33 mb-5 h-[1.5px] w-[100%]" />
                        <Row>
                            <Column className="w-[70%]  font-regular gap-2">
                                <Row className="h-9 gap-4">
                                    <div class="flex w-[50%]">
                                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray_100 border border-r-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                            <Img
                                                src="images/calendar.png"
                                                className="calendar h-4 w-4 mt-0.5 text-white"
                                                alt="calendar"
                                            />
                                        </span>
                                        <input type="date" id="booked" class="bg-white border text-gray-900 focus:ring-[#ed8709] focus:border-[#ed8709] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                                        />
                                        <input type="date" id="booked" class="bg-white border text-gray-900 focus:ring-[#ed8709] focus:border-[#ed8709] block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                                        />
                                    </div>
                                    <UserCreated className="w-[50%]" />
                                </Row>

                                <Row className="items-center gap-4 h-9 w-[99%]">
                                    <Flag4 className="w-[50%]" />
                                </Row>

                                <Row className="h-9 gap-4 mt-4">
                                    <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                                        size="xs"
                                        type="submit">
                                        <Row className="gap-2 items-center">
                                            <Icon path={mdiChartBar}
                                                title="Bag"
                                                size={1.0}
                                                color="white"
                                            />
                                            <Text className="text-lg">Generate Report</Text>
                                        </Row>
                                    </Button>

                                    <Button class="bg-[#a0a0a0] hover:bg-[#767676] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#a0a0a0] ring-inset"
                                        size="xs"
                                        type="submit"
                                        onClick={() => setShowModal2(true)}>
                                        <Row className="gap-2 items-center">
                                            <Icon path={mdiClockTimeFourOutline}
                                                title="Bag"
                                                size={1.0}
                                                color="white"
                                            />
                                            <Text className="text-lg">Schedule Report</Text>
                                        </Row>
                                    </Button>
                                    {showModal2 ? (
                                        <>
                                            <div
                                                className="justify-center items-center mx-[150px] my-[100px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                            >
                                                {/*Header*/}
                                                <Column classname="w-[100%]">
                                                    <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                                        <Text className="pl-3 py-5 text-xl text-white">
                                                            Schedule Report
                                                        </Text>
                                                        <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                                            onClick={() => setShowModal2(false)} />
                                                    </Row>
                                                </Column>


                                                {/*Body*/}

                                                <Column className="bg-white w-[100%]">
                                                    <Row className="m-2">
                                                        <Column className="w-[50%]">

                                                            <Row className="mt-2 pt-2">
                                                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                    Name Report
                                                                </Text>
                                                                <input
                                                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                                    type="text"
                                                                    size="smSrc"
                                                                    required
                                                                    placeholder="Name this scheduled report"
                                                                ></input>
                                                            </Row>

                                                            <Row className="mt-2 pt-2">
                                                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                    Email To
                                                                </Text>
                                                                <input
                                                                    className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[60%] 2xl:mt-2 "
                                                                    type="text"
                                                                    size="smSrc"
                                                                    required
                                                                    placeholder="Comma Separated Addresses"
                                                                ></input>
                                                            </Row>

                                                            <Column className="mt-2">
                                                                <Row className="w-[100%] gap-2">

                                                                    <Text className="pt-1 text-[14px] ml-3 text-right text-[#667E99] w-[20%]">
                                                                        Frequency
                                                                    </Text>


                                                                    <div className="w-[80%] mx-2">
                                                                        <select className="common-pointer w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500" onChange={changeHandler}>
                                                                            <option value="" disabled selected hidden>Daily</option>
                                                                            <option value="wl" class="items-center">Weekly</option>
                                                                            <option value="ml">Monthly</option>
                                                                            <option value="dl">Daily</option>

                                                                        </select>
                                                                    </div>

                                                                </Row>


                                                                {isVisible === 'wl' && (

                                                                    <Column>

                                                                        <div className="items-left justify-start mt-4 w-[100%]">

                                                                            <Row className="mt-2 w-full">
                                                                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                                    Starting On
                                                                                </Text>
                                                                                <Row className="gap-1 items-center w-[80%]">
                                                                                    <input
                                                                                        className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[30%]  "
                                                                                        type="date"
                                                                                        size="smSrc"
                                                                                        required
                                                                                        placeholder="Starting On"
                                                                                    ></input>

                                                                                    <Text className="text-[14px] text-[#667E99]">At</Text>
                                                                                    <select className="mx-1 common-pointer w-[40%] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500" onChange={changeHandler}>
                                                                                        <option disabled selected hidden>12:00 AM</option>
                                                                                        <option class="items-center">12:00 AM</option>
                                                                                        <option >01:00 AM</option>
                                                                                        <option >02:00 AM</option>
                                                                                        <option >03:00 AM</option>
                                                                                        <option >04:00 AM</option>
                                                                                        <option >05:00 AM</option>
                                                                                        <option >06:00 AM</option>
                                                                                        <option >07:00 AM</option>
                                                                                        <option >08:00 AM</option>
                                                                                        <option >09:00 AM</option>
                                                                                        <option >10:00 AM</option>
                                                                                        <option >11:00 AM</option>
                                                                                        <option >12:00 PM</option>
                                                                                        <option >01:00 PM</option>
                                                                                        <option >02:00 PM</option>
                                                                                        <option >03:00 PM</option>
                                                                                        <option >04:00 PM</option>
                                                                                        <option >05:00 PM</option>
                                                                                        <option >06:00 PM</option>
                                                                                        <option >07:00 PM</option>
                                                                                        <option >08:00 PM</option>
                                                                                        <option >09:00 PM</option>
                                                                                        <option >10:00 PM</option>
                                                                                        <option >11:00 PM</option>

                                                                                    </select>
                                                                                </Row>
                                                                            </Row>

                                                                            <div className="mx-4 w-[100%] pt-2">
                                                                                <Row className="pl-4 pt-4 mt-6 bg-[#D9EDF7] h-fit justify start w-[80%] mb-4 pb-5 gap-2">
                                                                                    <Icon path={mdiInformation}
                                                                                        title="Bag"
                                                                                        size={1.0}
                                                                                        color="#3A87AD"
                                                                                    />
                                                                                    <Text className="text-[#3A87AD]">The report range will be set based on when the report runs</Text>
                                                                                </Row>
                                                                            </div>

                                                                            <Row className="mt-2 pt-4">
                                                                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                                    Report Range
                                                                                </Text>
                                                                                <select className="mx-2 common-pointer w-[60%] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500" >
                                                                                    <option value="" disabled selected hidden>The Upcoming Week</option>
                                                                                    <option class="items-center">The Upcoming Week</option>
                                                                                    <option>The Previous Week</option>

                                                                                </select>
                                                                            </Row>

                                                                        </div>

                                                                    </Column>

                                                                )

                                                                }
                                                                {isVisible === 'ml' && (
                                                                    <Column>

                                                                        <div className="items-left justify-start mt-4 w-[100%]">

                                                                            <Row className="mt-2 w-full">
                                                                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                                    Starting On
                                                                                </Text>
                                                                                <Row className="gap-1 items-center w-[80%]">
                                                                                    <input
                                                                                        className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[30%]  "
                                                                                        type="date"
                                                                                        size="smSrc"
                                                                                        required
                                                                                        placeholder="Starting On"
                                                                                    ></input>

                                                                                    <Text className="text-[14px] text-[#667E99]">At</Text>
                                                                                    <select className="mx-1 common-pointer w-[40%] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500" onChange={changeHandler}>
                                                                                        <option disabled selected hidden>12:00 AM</option>
                                                                                        <option class="items-center">12:00 AM</option>
                                                                                        <option >01:00 AM</option>
                                                                                        <option >02:00 AM</option>
                                                                                        <option >03:00 AM</option>
                                                                                        <option >04:00 AM</option>
                                                                                        <option >05:00 AM</option>
                                                                                        <option >06:00 AM</option>
                                                                                        <option >07:00 AM</option>
                                                                                        <option >08:00 AM</option>
                                                                                        <option >09:00 AM</option>
                                                                                        <option >10:00 AM</option>
                                                                                        <option >11:00 AM</option>
                                                                                        <option >12:00 PM</option>
                                                                                        <option >01:00 PM</option>
                                                                                        <option >02:00 PM</option>
                                                                                        <option >03:00 PM</option>
                                                                                        <option >04:00 PM</option>
                                                                                        <option >05:00 PM</option>
                                                                                        <option >06:00 PM</option>
                                                                                        <option >07:00 PM</option>
                                                                                        <option >08:00 PM</option>
                                                                                        <option >09:00 PM</option>
                                                                                        <option >10:00 PM</option>
                                                                                        <option >11:00 PM</option>

                                                                                    </select>
                                                                                </Row>
                                                                            </Row>

                                                                            <div className="mx-4 w-[100%] pt-2">
                                                                                <Row className="pl-4 pt-4 mt-6 bg-[#D9EDF7] h-fit justify start w-[80%] mb-4 pb-5 gap-2">
                                                                                    <Icon path={mdiInformation}
                                                                                        title="Bag"
                                                                                        size={1.0}
                                                                                        color="#3A87AD"
                                                                                    />
                                                                                    <Text className="text-[#3A87AD]">The report range will be set based on when the report runs</Text>
                                                                                </Row>
                                                                            </div>

                                                                            <Row className="mt-2 pt-4">
                                                                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                                    Report Range
                                                                                </Text>
                                                                                <select className="mx-2 common-pointer w-[60%] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500" >
                                                                                    <option value="" disabled selected hidden>The Upcoming Month</option>
                                                                                    <option class="items-center">The Upcoming Month</option>
                                                                                    <option>The Previous Month</option>

                                                                                </select>
                                                                            </Row>

                                                                        </div>

                                                                    </Column>
                                                                )

                                                                }
                                                                {isVisible === 'dl' && (
                                                                    <Column>

                                                                        <div className="items-left justify-start mt-4 w-[100%]">

                                                                            <Row className="mt-2 w-full">
                                                                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                                    Starting On
                                                                                </Text>
                                                                                <Row className="gap-1 items-center w-[80%]">
                                                                                    <input
                                                                                        className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[30%]  "
                                                                                        type="date"
                                                                                        size="smSrc"
                                                                                        required
                                                                                        placeholder="Starting On"
                                                                                    ></input>

                                                                                    <Text className="text-[14px] text-[#667E99]">At</Text>
                                                                                    <select className="mx-1 common-pointer w-[40%] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500" onChange={changeHandler}>
                                                                                        <option disabled selected hidden>12:00 AM</option>
                                                                                        <option class="items-center">12:00 AM</option>
                                                                                        <option >01:00 AM</option>
                                                                                        <option >02:00 AM</option>
                                                                                        <option >03:00 AM</option>
                                                                                        <option >04:00 AM</option>
                                                                                        <option >05:00 AM</option>
                                                                                        <option >06:00 AM</option>
                                                                                        <option >07:00 AM</option>
                                                                                        <option >08:00 AM</option>
                                                                                        <option >09:00 AM</option>
                                                                                        <option >10:00 AM</option>
                                                                                        <option >11:00 AM</option>
                                                                                        <option >12:00 PM</option>
                                                                                        <option >01:00 PM</option>
                                                                                        <option >02:00 PM</option>
                                                                                        <option >03:00 PM</option>
                                                                                        <option >04:00 PM</option>
                                                                                        <option >05:00 PM</option>
                                                                                        <option >06:00 PM</option>
                                                                                        <option >07:00 PM</option>
                                                                                        <option >08:00 PM</option>
                                                                                        <option >09:00 PM</option>
                                                                                        <option >10:00 PM</option>
                                                                                        <option >11:00 PM</option>

                                                                                    </select>
                                                                                </Row>
                                                                            </Row>

                                                                            <div className="mx-4 w-[100%] pt-2">
                                                                                <Row className="pl-4 pt-4 mt-6 bg-[#D9EDF7] h-fit justify start w-[80%] mb-4 pb-5 gap-2">
                                                                                    <Icon path={mdiInformation}
                                                                                        title="Bag"
                                                                                        size={1.0}
                                                                                        color="#3A87AD"
                                                                                    />
                                                                                    <Text className="text-[#3A87AD]">The report range will be set based on when the report runs</Text>
                                                                                </Row>
                                                                            </div>

                                                                            <Row className="mt-2 pt-4">
                                                                                <Text className="pt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                                    Report Range
                                                                                </Text>
                                                                                <select className="mx-2 common-pointer w-[60%] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500" >
                                                                                    <option value="" disabled selected hidden>The Same Day</option>
                                                                                    <option class="items-center">The Same Day</option>
                                                                                    <option>The Next Day</option>
                                                                                    <option>The Previous Day</option>

                                                                                </select>
                                                                            </Row>

                                                                        </div>

                                                                    </Column>
                                                                )

                                                                }

                                                            </Column>
                                                        </Column>

                                                        <Column className="w-[50%]">


                                                            <div className="justify-right w-[100%]">
                                                                <Row className="pt-2 items-center">
                                                                    <Text className="mx-6 text-[14px] m-1 font-light">
                                                                        all | none
                                                                    </Text>
                                                                </Row>

                                                                <div
                                                                    className="overflow-y-scroll mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-80 w-[80%] 2xl:mt-2 ">
                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Created On</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>

                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Created By</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>

                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Provider</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>

                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Payout Num</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>

                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Status</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>

                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Payout Start</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>

                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Payout End</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>

                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Currency</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>

                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Conversion</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>

                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Notes</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>

                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Payout Date</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>

                                                                    <Row className="m-2 ">
                                                                        <div
                                                                            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  block h-10 w-[100%] 2xl:mt-2 "
                                                                            type="text"
                                                                            size="smSrc"
                                                                        >
                                                                            <Row className="gap-2 items-center">
                                                                                <Icon path={mdiArrowAll}
                                                                                    title="Bag"
                                                                                    size={1.0}
                                                                                    color="#3A87AD"
                                                                                    className="cursor-move"
                                                                                />
                                                                                <input type="checkbox" name="agree" class="peer w-6 h-6 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                                <Text>Payout Amount</Text>
                                                                            </Row>
                                                                        </div>
                                                                    </Row>
                                                                </div>
                                                            </div>




                                                        </Column>

                                                    </Row>
                                                    <Row>
                                                        <div className="mx-3 w-[100%]">
                                                            <Row className="mt-6 bg-gray_100 h-fit justify-end w-[100%] mr-6 mb-4 pb-5">
                                                                <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-fit mx-2 px-2 mt-5 ">
                                                                    <Row className="items-center gap-2">
                                                                        <FaCheck className="h-5 w-5 text-white" />
                                                                        <Text
                                                                            className="text-white cursor-pointer"
                                                                            variant="body4"
                                                                        >
                                                                            Add This Field
                                                                        </Text>
                                                                    </Row>
                                                                </Button>
                                                            </Row>
                                                        </div>
                                                    </Row>
                                                </Column>
                                            </div>

                                            <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                                        </>
                                    ) : null}
                                </Row>
                            </Column>

                            <Column className="w-[30%] items-end gap-10">
                                <Button className="items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white bg-[#f9c74f] hover:bg-[#dea54b] ring-4 ring-[#f9c74f] ring-inset"
                                    size="xs"
                                    type="submit"
                                    onClick={() => setShowModal(true)}>
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiFolderOpen}
                                            title="Bag"
                                            size={1.0}
                                            color="white"
                                        />
                                        <Text className="text-lg">Saved Searches</Text>
                                    </Row>
                                </Button>
                                {showModal ? (
                                    <>
                                        <div
                                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                        >

                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 bg-[#428BCA]">
                                                        <h3 className="text-2xl font-semibold text-white">
                                                            Saved Searches
                                                        </h3>
                                                        <Img
                                                            src="images/img_close_36X33.svg"
                                                            className=" w-5 h-5 mr-50 mt-1 xl:ml-[350px]"
                                                            onClick={() => setShowModal(false)}
                                                            alt="close One"
                                                        />
                                                    </div>
                                                    {/*body*/}
                                                    <div className="relative p-6 flex-auto">
                                                        <div class="border border-[#E7E7E7] p-[200px]">
                                                            <Column className="items-center">
                                                                <Text className="mb-5 text-gray-400">
                                                                    No report saved for Payouts
                                                                </Text>
                                                                <Text className="text-gray-400">
                                                                    You can save a search from the results view
                                                                </Text>
                                                            </Column>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                ) : null}
                                <Row className="mt-8">
                                    <SaveBtn />
                                    <FieldsPayoutsBtn />
                                </Row>
                            </Column>


                        </Row>

                    </Column>
                </Row>
            </Column>
        </>
    );
};

export default ReportPayouts;
