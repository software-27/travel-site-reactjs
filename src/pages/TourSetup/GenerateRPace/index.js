
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
    mdiReplay, mdiClockTimeFourOutline, mdiFolderOpen, mdiArrowAll, mdiInformation
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


const GenerateRPace = () => {
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
    //button navigate to report pace
    function handleNavigate2() {
        navigate("/t57");
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
                                <Text className="text-[15px] ml-2 mt-2 text-[#667E99]">Pace</Text>
                            </Row>
                        </Row>
                        <Line className="bg-gray_700_33 mb-5 h-[1.5px] w-[100%]" />
                        <Row>
                            <Column className="w-[70%]  font-regular gap-2">
                                <Row className="gap-6">
                                    <div class="inline-flex rounded-xl shadow-sm" role="group">
                                        <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#428BCA] border rounded-l-xl">
                                            Date Range
                                        </button>
                                        <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-[#888888] bg-[#E7E7E7] border-t border-b border-r rounded-r-md ">
                                            2023-04-16 - 2023-04-23
                                        </button>
                                    </div>

                                    <div class="inline-flex rounded-xl shadow-sm" role="group">
                                        <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#9585BF] border rounded-l-xl">
                                            Against
                                        </button>
                                        <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-[#888888] bg-[#E7E7E7] border-t border-b border-r rounded-r-md ">
                                            2022-04-16 (created before 2022-04-16)
                                        </button>
                                    </div>

                                    <div class="inline-flex rounded-xl shadow-sm" role="group">
                                        <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#3A87AD] border rounded-l-xl">
                                            Using
                                        </button>
                                        <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-[#888888] bg-[#E7E7E7] border-t border-b border-r rounded-r-md ">
                                            Book/Used Date
                                        </button>
                                    </div>

                                </Row>

                                <Row className="h-9 gap-4 mt-4">
                                    <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                                        size="xs"
                                        type="submit"
                                        onClick={handleNavigate2}
                                    >
                                        <Row className="gap-2 items-center">
                                            <Icon path={mdiReplay}
                                                title="Bag"
                                                size={1.0}
                                                color="white"
                                            />
                                            <Text className="text-lg">Change Report</Text>
                                        </Row>
                                    </Button>

                                </Row>
                            </Column>

                            <Column className="w-[30%] items-end gap-10">

                                <Row className="mt-10">
                                    <SaveBtn />
                                    <FieldsPaceBtn />
                                </Row>
                            </Column>

                        </Row>

                    </Column>
                </Row>
            </Column>
        </>
    );
};

export default GenerateRPace;
