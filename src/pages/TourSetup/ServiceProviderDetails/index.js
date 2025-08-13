
import React from "react";
import { Column, Row, Text, Line, Button, Img, SelectBox, } from "components";
import TextEditor from "components/TextEditor";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { RxDoubleArrowRight, RxChevronLeft } from "react-icons/rx";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import {
    mdiCheck, mdiBagChecked, mdiArrowRightTopBold, mdiPlusCircle, mdiPencil, mdiTrashCan, mdiEarth,
    mdiStackOverflow, mdiLinkVariant, mdiArrowAll, mdiDotsVertical
} from '@mdi/js';
import Icon from "@mdi/react";
import { useState } from 'react';


const ServiceProviderDetails = () => {
    /* const handleshow = (e) => {
       const getshow = e.target.value;
       setShowhide(getshow);
     };*/

    const navigate = useNavigate();

    //button cancel navigate to ticket pools
    function handleNavigate1() {
        navigate("/t24");
    }

    //button navigate to tour
    function handleNavigate23() {
        navigate("/t6");
    }

    //button navigate to CreateOption
    function handleNavigate24() {
        navigate("/t23");
    }

    //button navigate to Option1
    function handleNavigate29() {
        navigate("/t24");
    }

    //button navigate to Option2
    function handleNavigate30() {
        navigate("/t25");
    }

    //for switch 
    const [enabled, setEnabled] = useState(false);
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <Header className="w-[100%]" />
            <Column className="bg-white w-[100%]">
                <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
                    <Column>
                        <Row className="bg-[#F5F5F5] items-start w-[100%]">
                            <Button class="bg-[#87B87F] hover:bg-[#629B58] items-center h-9 px-2 ml-[10px] mt-2.5 mb-2.5">
                                <Row>
                                    <FaShoppingCart className="h-5 w-5 text-white" />
                                    <Text
                                        className="px-1 text-white cursor-pointer"
                                        variant="body4"
                                    >
                                        Point of Sale
                                    </Text>
                                </Row>
                            </Button>

                            <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-9 px-2 ml-[10px] mt-2.5 mb-2.5">
                                <Row>
                                    <FaThumbtack className="h-5 w-5 text-white" />
                                </Row>
                            </Button>
                        </Row>
                    </Column>

                </Row>
                <Row className="w-[100%] mt-[8px]">
                    <Sidebar />
                    <Column className="bg-white h-auto w-[100%]">
                        <Row className="mb-4">
                            <Row className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light items-center">
                                Provider
                                <RxDoubleArrowRight className="items-start ml-2 mt-4 h-5 w-5 text-[#667E99] items-center" />
                                <Text className="text-[15px] ml-2 mt-2 text-[#667E99]">GMTC Malaysia</Text>
                            </Row>
                            <Column className="w-[38%] text-white ">
                                <Row className="justify-end">

                                    <Button class="items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white bg-[#f9c74f] hover:bg-[#dea54b] ring-4 ring-[#f9c74f] ring-inset"
                                        size="xs"
                                        type="submit">
                                        <Row className="gap-2 items-center">
                                            <Icon path={mdiPencil}
                                                title="Bag"
                                                size={1.0}
                                                color="white"
                                            />
                                            <Text className="text-lg cursor-pointer">Edit</Text>
                                        </Row>
                                    </Button>

                                    <Button class="items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white  bg-[#D15B47] hover:bg-[#a5402d] ring-4 ring-[#D15B47] ring-inset"
                                        size="xs"
                                        type="submit">
                                        <Row className="gap-2 items-center">
                                            <Icon path={mdiTrashCan}
                                                title="Bag"
                                                size={1.0}
                                                color="white"
                                            />
                                            <Text className="text-lg cursor-pointer">Delete</Text>
                                        </Row>
                                    </Button>

                                </Row>
                            </Column>
                        </Row>
                        <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                        <Row className="mt-4">
                            <Column className="w-[60%] m-2 font-regular">
                                <div className="space-y-3">
                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            Company
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            GMTC Malaysia
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            Type
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            Tour Supplier
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            External ID
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            123
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            Website
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            www.gmtc.com.my/
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            Description
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            GMTC Malayia is a well established Destination Management Company in Malaysia. We are a team of highly experienced and passionate travel professionals carrying over 30 years of combined expertise in handling individual, group, incentives, meetings and conferences in Malaysia. We have left no stones unturned to provide incredible destination management services in Malaysia.
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            Tags
                                        </Text>
                                        <Row className=" w-[100%] gap-2">
                                            <Text className="py-2.0 px-3 text-[#7f7f7f] bg-[#ded9e2]">luxury travel</Text>
                                            <Text className="py-2.0 px-3 text-[#7f7f7f] bg-[#ded9e2]">corporate incentive trips</Text>
                                            <Text className="py-2.0 px-3 text-[#7f7f7f] bg-[#ded9e2]">destination management</Text>
                                        </Row>
                                    </Row>

                                </div>
                            </Column>
                        </Row>

                        <Row className="pt-6">
                            <Column className="w-[50%] m-2 font-regular">
                                <Text className="text-[20px] font-light ">Company Information</Text>
                                <Line className="bg-gray_700_33 mb-[10px] h-[1.0px] w-[100%]"></Line>
                                <div className="space-y-3">
                                    <Row className="pt-4 space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                            Address 1
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            Lot 1-06 Innovation House,
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                            Address 2
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        Technology Park Malaysia Kuala Lumpur,
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        City
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        Bukit Jalil
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        State
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        Wilayah Persekutuan
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Country
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        Malaysia
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Postal
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        57000
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Phone
                                        </Text>
                                        <Text className="text-[#428BCA] w-[100%]">
                                        01162222017
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Email
                                        </Text>
                                        <Text className="text-[#428BCA] w-[100%]">
                                        info@gmtc.com.my
                                        </Text>
                                    </Row>

                                    

                                </div>
                            </Column>
                            <Column className="ml-4 w-[50%] m-2 font-regular ">
                                <Text className="text-[20px] font-light ">Accounting</Text>
                                <Line className="bg-gray_700_33 mb-[10px] h-[1.0px] w-[100%]"></Line>
                                <div className="space-y-3">
                                <Row className="pt-4 space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Account #
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        123456789
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Commission %
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        10.00
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Site Code
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        GL Code
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Tax Rate
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        6 
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Terms
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Credit
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        RM 10.00
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Other Code
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        
                                        </Text>
                                    </Row>

                                </div>
                            </Column>
                        </Row>

                        <Row className="pt-6">
                            <Column className="w-[50%] m-2 font-regular">
                                <Text className="text-[20px] font-light ">Primary Contact</Text>
                                <Line className="bg-gray_700_33 mb-[10px] h-[1.0px] w-[100%]"></Line>
                                <div className="space-y-3">
                                    <Row className="pt-4 space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Name
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        Haryanie Baharudin
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Email
                                        </Text>
                                        <Text className="text-[#428BCA] w-[100%]">
                                        haryanie@gmtc.com.my
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Phone
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        0162616465
                                        </Text>
                                    </Row> 

                                </div>
                            </Column>
                            <Column className="ml-4 w-[50%] m-2 font-regular ">
                                <Text className="text-[20px] font-light ">Accounting Contact</Text>
                                <Line className="bg-gray_700_33 mb-[10px] h-[1.0px] w-[100%]"></Line>
                                <div className="space-y-3">
                                <Row className="pt-4 space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Name
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        Ms. Joan Ndagire
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Email
                                        </Text>
                                        <Text className="text-[#428BCA] w-[100%]">
                                        joan@gmtc.com.my
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[20%] text-right">
                                        Phone
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                        0193995705
                                        </Text>
                                    </Row>

                                </div>
                            </Column>
                        </Row>

                        <Row className="pt-6">
                            <Text className="text-[19px] m-1 font-regular">
                                Inventory
                            </Text>
                        </Row>
                        <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                        <Row className="items-center gap-2">
                        <Icon path={mdiBagChecked}
                                                title="Bag"
                                                size={1.0}
                                                color="#428BCA"
                                            />
                        <Text className="text-[#428BCA]">Penang Hotel ABC</Text>
                        <Text className="text-[#93b7be]">(SKU 332895)</Text>
                        </Row>

                        <Row className="pt-16">
                            <Text className="text-[19px] m-1 font-regular">
                                Comments
                            </Text>
                        </Row>
                        <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                        <Row className="w-[100%]">
                            <Column className="w-[100%] m-2 font-regular ">
                                <div className="space-y-3">

                                    <Row className="space-x-3 gap-2 mb-10">
                                    <input
                      className="py-2.5 px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-[100%] "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Add a comment..."
                    ></input>

                    <Column className="w-[10%] mr-2 font-regular items-start">
                    <Button class="items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white bg-[#4C8FBD] hover:bg-[#006BB8] ring-4 ring-[#4C8FBD] ring-inset"
                                        size="xs"
                                        type="submit">
                                        <Row className="gap-2 items-center">
                                            <Icon path={mdiArrowRightTopBold}
                                                title="Bag"
                                                size={1.0}
                                                color="white"
                                            />
                                            <Text className="text-lg cursor-pointer">Add</Text>
                                        </Row>
                                    </Button>
                    </Column>
                                    </Row>

                                </div>
                            </Column>
                        </Row>

                    </Column>
                </Row>
            </Column>
        </>
    );
};

export default ServiceProviderDetails;
