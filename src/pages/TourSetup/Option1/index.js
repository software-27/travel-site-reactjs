
import React from "react";
import { Column, Row, Text, Line, Button, Img, Stack } from "components";
import DropdownRender from "components/DropdownOption/index";
import DropdownRender2 from "components/DropdownOtherOp2"
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { RxDoubleArrowRight, RxChevronLeft } from "react-icons/rx";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import {
    mdiCheck, mdiCloudArrowUp, mdiArrowLeft, mdiPlusCircle, mdiPencil, mdiTrashCan, mdiAccountGroup, mdiChevronLeft,
    mdiChevronRight,
    mdiLaptop, mdiCloseThick, mdiLinkVariant, mdiArrowAll, mdiDotsVertical, mdiCloudDownload, mdiCalendarToday
} from '@mdi/js';
import Icon from "@mdi/react";
import { useState } from 'react';


const Option1 = () => {
    /* const handleshow = (e) => {
       const getshow = e.target.value;
       setShowhide(getshow);
     };*/

    const navigate = useNavigate();

    //button navigate to Inventory
    function handleNavigate27() {
        navigate("/t6");
    }

    //button navigate to InventoryDetails
    function handleNavigate28() {
        navigate("/t22");
    }

    function handleNavigate35() {
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
                                Tour
                                <RxDoubleArrowRight className="items-start ml-2 mt-4 h-5 w-5 text-[#667E99] items-center" />
                                <Text className="text-[15px] ml-2 mt-2 text-[#667E99]">Penang Hotel ABC</Text>
                            </Row>
                            {/* <Column className="w-[38%] text-white ">
                                <Row className="justify-end">
                                    <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                                        size="xs"
                                        type="submit"
                                        onClick={handleNavigate27}>
                                        <Row className="gap-2 items-center">
                                            <Icon path={mdiChevronLeft}
                                                title="Bag"
                                                size={1.0}
                                                color="white"
                                            />
                                            <Text className="text-lg cursor-pointer">Back to list</Text>
                                        </Row>
                                    </Button>
                                </Row>
                            </Column> */}
                        </Row>
                        <Row className="justify-start ml-2 gap-2">
                            <Button class="items-center h-fit py-2.5 px-3 text-sm font-medium text-white bg-[#a0a0a0] hover:bg-[#767676] ring-4 ring-[#a0a0a0] ring-inset"
                                size="xs"
                                type="submit"
                                onClick={handleNavigate28}>
                                <Row className="gap-1 items-center">
                                    <Icon path={mdiCloseThick}
                                        title="Bag"
                                        size={1.0}
                                        color="white"
                                    />
                                    <Text className="text-lg cursor-pointer">Close Option</Text>
                                </Row>
                            </Button>
                            <DropdownRender2/>


                        </Row>
                        <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                        <Row className="mb-4">
                            <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light">
                                <Row className="">
                                    <Text>Option 1 of 2</Text>
                                    <Button class="items-center h-fit py-2.5 px-3 ml-4 cursor-not-allowed text-sm font-medium text-white bg-[#A0A0A0]"
                                        disabled
                                        size="xs"
                                        type="submit">
                                        <Icon path={mdiChevronLeft}
                                            title="Bag"
                                            size={1.0}
                                            color="white"
                                        />
                                    </Button>

                                    <Button class="items-center h-fit py-2.5 px-3 ml-0.5 text-sm font-medium text-white bg-[#428BCA] hover:bg-[#6FB3E0] ring-2 ring-[#428BCA] ring-inset"
                                        size="xs"
                                        type="submit"
                                        onClick={handleNavigate35}>
                                        <Icon path={mdiChevronRight}
                                            title="Bag"
                                            size={1.0}
                                            color="white"
                                        />
                                    </Button>
                                </Row>
                            </Column>
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
                        <Line className="bg-gray_700_33 mb-[10px] h-[0.2px] w-[100%]" />

                        <Row className="mt-4">
                            <Column className="w-[60%] m-2 font-regular">
                                <div className="space-y-3">
                                    <Row className="space-x-3 ">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            Name
                                        </Text>
                                        <Row className="items-start w-[100%]">
                                        <Text className="text-black">
                                            Option 1 - 3D1N (2A)
                                        </Text>
                                        <DropdownRender />
                                        </Row>
                                        {/* <Column className="w-[50%]">
                                        <Text className="text-black w-[50%]">
                                            Option 1 - 3D1N (2A)
                                        </Text>
                                        </Column>
                                        <Column className="w-[50%]">
                                        <span className=" rounded-full bg-white hover:bg-[#A0A0A0] w-6 h-6 cursor-pointer">
                                        <Icon path={mdiDotsVertical}
                                                title="Bag"
                                                size={1.0}
                                                color="#393939"
                                            />
                                        </span>
                                        </Column> */}
                                        {/* <Column className="w-[50%] bg-indigo_900">
                                        <span className="rounded-full bg-white hover:bg-[#A0A0A0] w-6 h-6 cursor-pointer items-center">
                                        <Icon path={mdiDotsVertical}
                                                title="Bag"
                                                size={1.0}
                                                color="#393939"
                                                className="items-center"
                                            />
                                        </span>
                                        </Column> */}
                                        
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            SKU
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            332895
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            Duration
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            3 days
                                        </Text>
                                    </Row>
                                </div>
                            </Column>

                            <Column className="w-[40%] items-end gap-2">
                                <Button class="items-center h-fit w-[30%] py-2.5 px-3 mr-2 text-sm font-medium text-white bg-[#a0a0a0] hover:bg-[#767676] ring-4 ring-[#a0a0a0] ring-inset"
                                    size="xs"
                                    type="submit">
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiCloudDownload}
                                            title="Bag"
                                            size={1.0}
                                            color="white"
                                        />
                                        <Text className="text-lg cursor-pointer">Unpublish</Text>
                                    </Row>
                                </Button>
                                <Button class="justify-start h-fit w-[30%] py-2.5 px-3 mr-2 text-sm font-medium text-white bg-[#6FB3E0] hover:bg-[#428BCA] ring-4 ring-[#6FB3E0] ring-inset"
                                    size="xs"
                                    type="submit">
                                    <Row className="gap-2 items-start">
                                        <Icon path={mdiCalendarToday}
                                            title="Bag"
                                            size={1.0}
                                            color="white"
                                        />
                                        <Text className="text-lg cursor-pointer">View Availability</Text>
                                    </Row>
                                </Button>
                            </Column>
                        </Row>

                        <Column className="mt-16">
                            <Row>
                                <Text className="text-[20px] m-1 font-regular">
                                    Availability
                                </Text>
                            </Row>
                        </Column>
                        <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                        <Row>
                            <Column className="w-[93%] m-2 font-regular">
                                <div className="space-y-3">

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] text-right w-[20%]">
                                            Availability Type
                                        </Text>
                                        <Column className="w-[100%] items-start">
                                        <Button className="bg-[#428BCA] rounded-lg">
                                                <Column>
                                                <Text className="text-[14px] text-white">Daily Availability</Text>
                                                <Text className="text-[12px] text-white font-light">Date-Based Bookings</Text></Column>
                                        </Button>
                                        </Column>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] text-right w-[20%]">
                                            Daily Availability
                                        </Text>
                                        <Column className="w-[100%] items-start text-black">
                                            <Text classname="w-full font-medium">Unlimited</Text>
                                        </Column>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] text-right w-[20%]">
                                            Start Time
                                        </Text>
                                        <Column className="w-[100%] items-start text-[#393939]">
                                            <Text classname="w-full font-medium">none</Text>
                                        </Column>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] text-right w-[20%]">
                                            Available Dates
                                        </Text>
                                        <Column className="w-[100%] items-start text-[#428BCA]">
                                            <Text classname="w-full font-medium">Always Available</Text>
                                        </Column>
                                    </Row>

                                </div>
                            </Column>
                        </Row>

                        <Row className="pt-8">
                            <Text className="text-[19px] m-1 font-regular">
                                Pricing Tiers
                            </Text>
                        </Row>
                        <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />


                        <Row>
                            <Column className="w-[93%] m-2 font-regular">
                                <div className="space-y-3">

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] text-right w-[20%]">
                                            Price 1
                                        </Text>
                                        <Column className="w-[50%] items-start">
                                            <Text classname="w-full font-medium">Adult</Text>
                                        </Column>
                                        <Column className="w-[50%] items-center">
                                            <Text>RM 99.99</Text>
                                        </Column>
                                    </Row>
                                </div>
                            </Column>
                        </Row>

                        <Row>
                            <Column className="w-[93%] m-2 font-regular">
                                <div className="space-y-3">

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] text-right w-[20%]">
                                            Price 2
                                        </Text>
                                        <Column className="w-[50%] items-start">
                                            <Text classname="w-full font-medium">Child</Text>
                                        </Column>
                                        <Column className="w-[50%] items-center">
                                            <Text>RM 89.99</Text>
                                        </Column>
                                    </Row>
                                </div>
                            </Column>
                        </Row>


                        <Row className="pt-12">
                            <Text className="text-[19px] m-1 font-regular">
                                Booking Fields
                            </Text>
                        </Row>
                        <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                        <Row>

                            <Column className="w-[100%] items-start m-2">
                                <Text classname="w-full font-medium">Fields for each guest in the booking</Text>
                            </Column>

                        </Row>
                        <Row>
                            <Column className="w-[93%] m-2 font-regular">
                                <div className="space-y-3">

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] text-right w-[20%]">
                                            Information
                                        </Text>
                                        <Column className="w-[100%]">
                                            <Row className="gap-2 items-center">
                                                <Icon path={mdiAccountGroup}
                                                    title="Bag"
                                                    size={1.0}
                                                    color="#428BCA"
                                                />
                                                <Text classname="w-full font-medium">Ask for name only</Text>
                                            </Row>
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

export default Option1;
