
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
    mdiChartBar, mdiChevronUp,mdiAccount,mdiAccountGroup, mdiTicketOutline, mdiChartPie, mdiReceiptText,
    mdiEmailOpen,
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
import SearchDate2 from "components/SearchDate2/index";
import Users from "components/User/index";
import FieldsPaceBtn from "components/FieldsPaceBtn/index";


const ReportSchedule = () => {
    /* const handleshow = (e) => {
        const getshow = e.target.value;
        setShowhide(getshow);
        };*/

    const navigate = useNavigate();
    //button navigate to report
    function handleNavigate() {
        navigate("/t34")
    }
    //button navigate to report bookings
    function handleNavigate1() {
        navigate("/t35");
    }
    //button navigate to report manifest
    function handleNavigate2() {
        navigate("/t36")
    }
    //button navigate to report users
    function handleNavigate3() {
        navigate("/t37")
    }
    //button navigate to report transaction
    function handleNavigate4() {
        navigate("/t52")
    }
    //button navigate to report commision
    function handleNavigate5() {
        navigate("/t54")
    }
    //button navigate to report invoice
    function handleNavigate6() {
        navigate("/t55")
    }
    //button navigate to report payout
    function handleNavigate7() {
        navigate("/t56")
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
                            <Row className="cursor-pointer w-[65%] text-light_blue_600 text-[25px] m-1 font-light items-center"
                            onClick={handleNavigate}>
                                Reports
                                <RxDoubleArrowRight className="items-start ml-2 mt-4 h-5 w-5 text-[#667E99] items-center" />
                                <Text className="text-[15px] ml-2 mt-2 text-[#667E99]">Schedule</Text>
                            </Row>
                        </Row>
                        <Line className="bg-gray_700_33 mb-5 h-[1.5px] w-[100%]" />
                        <Row>
                            <Column className="w-[100%] font-light gap-2 mt-4">
                                <Column className="items-center text-[#393939] text-[21px] ">
                                    <Text className="">You have no scheduled report</Text>
                                    <Text className="">The following reports can be scheduled:</Text>
                                </Column>

                        
                                <div class="m-4 mt-14 grid grid-cols-4 gap-2 ">
                                <div class="cursor-pointer bg-[#E7E7E7] hover:bg-gray_101 items-center h-fit py-2.5 px-3 mx-6  text-sm font-medium text-white ring-4 ring-[#E7E7E7] ring-inset" 
                                    size="xs"
                                    type="submit"
                                    onClick={handleNavigate1}>
                                         <Row className="gap-2 items-center justify-center">
                                            <Icon path={mdiTicketOutline}
                                                title="Bag"
                                                size={1.0}
                                                color="#888888"
                                            />
                                            <Text className="text-lg text-[#888888]">Bookings Report</Text>
                                        </Row>
                                    </div>
                                    <div class="cursor-pointer bg-[#E7E7E7] hover:bg-gray_101 items-center h-fit py-2.5 px-3 mx-6  text-sm font-medium text-white ring-4 ring-[#E7E7E7] ring-inset" 
                                    size="xs"
                                    type="submit"
                                    onClick={handleNavigate2}>
                                         <Row className="gap-2 items-center justify-center">
                                            <Icon path={mdiAccount}
                                                title="Bag"
                                                size={1.0}
                                                color="#888888"
                                            />
                                            <Text className="text-lg text-[#888888]">Manifest Report</Text>
                                        </Row>
                                    </div>
                                    <div class="cursor-pointer bg-[#E7E7E7] hover:bg-gray_101 items-center h-fit py-2.5 px-3 mx-6  text-sm font-medium text-white ring-4 ring-[#E7E7E7] ring-inset" 
                                    size="xs"
                                    type="submit"
                                    onClick={handleNavigate3}>
                                         <Row className="gap-2 items-center justify-center">
                                            <Icon path={mdiAccountGroup}
                                                title="Bag"
                                                size={1.0}
                                                color="#888888"
                                            />
                                            <Text className="text-lg text-[#888888]">Users Report</Text>
                                        </Row>
                                    </div>
                                    <div class="cursor-pointer bg-[#E7E7E7] hover:bg-gray_101 items-center h-fit py-2.5 px-3 mx-6  text-sm font-medium text-white ring-4 ring-[#E7E7E7] ring-inset" 
                                    size="xs"
                                    type="submit"
                                    onClick={handleNavigate4}>
                                         <Row className="gap-2 items-center justify-center">
                                            <Icon path={mdiChartBar}
                                                title="Bag"
                                                size={1.0}
                                                color="#888888"
                                            />
                                            <Text className="text-lg text-[#888888]">Transaction Report</Text>
                                        </Row>
                                    </div>
                                </div>

                                <div class="m-4 mt-2 grid grid-cols-4 gap-2 ">
                                <div class="cursor-pointer bg-[#E7E7E7] hover:bg-gray_101 items-center h-fit py-2.5 px-3 mx-6  text-sm font-medium text-white ring-4 ring-[#E7E7E7] ring-inset"
                                    size="xs"
                                    type="submit"
                                    onClick={handleNavigate5}>
                                         <Row className="gap-2 items-center justify-center">
                                            <Icon path={mdiChartPie}
                                                title="Bag"
                                                size={1.0}
                                                color="#888888"
                                            />
                                            <Text className="text-lg text-[#888888]">Commisions Report</Text>
                                        </Row>
                                    </div>
                                    <div class="cursor-pointer bg-[#E7E7E7] hover:bg-gray_101 items-center h-fit py-2.5 px-3 mx-6  text-sm font-medium text-white ring-4 ring-[#E7E7E7] ring-inset" 
                                    size="xs"
                                    type="submit"
                                    onClick={handleNavigate6}>
                                         <Row className="gap-2 items-center justify-center">
                                            <Icon path={mdiReceiptText}
                                                title="Bag"
                                                size={1.0}
                                                color="#888888"
                                            />
                                            <Text className="text-lg text-[#888888]">Invoice A/R Report</Text>
                                        </Row>
                                    </div>
                                    <div class="cursor-pointer bg-[#E7E7E7] hover:bg-gray_101 items-center h-fit py-2.5 px-3 mx-6  text-sm font-medium text-white ring-4 ring-[#E7E7E7] ring-inset" 
                                    size="xs"
                                    type="submit"
                                    onClick={handleNavigate7}>
                                         <Row className="gap-2 items-center justify-center">
                                            <Icon path={mdiEmailOpen}
                                                title="Bag"
                                                size={1.0}
                                                color="#888888"
                                            />
                                            <Text className="text-lg text-[#888888]">Payouts Report</Text>
                                        </Row>
                                    </div>
                                </div>

                            </Column>



                        </Row>

                    </Column>
                </Row>
            </Column>
        </>
    );
};

export default ReportSchedule;
