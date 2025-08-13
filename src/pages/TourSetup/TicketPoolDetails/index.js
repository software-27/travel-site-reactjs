
import React from "react";
import { Column, Row, Text, Line, Button, Img, Stack } from "components";
import TextEditor from "components/TextEditor";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { RxDoubleArrowRight, RxChevronLeft } from "react-icons/rx";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import {
    mdiCheck, mdiPlus, mdiArrowLeft, mdiPlusCircle, mdiPencil, mdiTrashCan, mdiEarth,
    mdiStackOverflow, mdiLinkVariant, mdiArrowAll, mdiDotsVertical
} from '@mdi/js';
import Icon from "@mdi/react";
import { useState } from 'react';


const TicketPoolDetails = () => {
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
                                Ticket Pool
                                <RxDoubleArrowRight className="items-start ml-2 mt-4 h-5 w-5 text-[#667E99] items-center" />
                                <Text className="text-[15px] ml-2 mt-2 text-[#667E99]">Penang Tour Ticket</Text>
                            </Row>
                            <Column className="w-[38%] text-white ">
                                <Row className="justify-end">
                                    <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                                        size="xs"
                                        type="submit"
                                        onClick={handleNavigate23} >
                                        <Row className="gap-2 items-center">
                                            <Icon path={mdiArrowLeft}
                                                title="Bag"
                                                size={1.0}
                                                color="white"
                                            />
                                            <Text className="text-lg cursor-pointer">Back to list</Text>
                                        </Row>
                                    </Button>

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
                                            Name
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            Penang Tour Ticket
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            Description
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            Penang Tour Ticket Flight
                                        </Text>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] w-[23%] text-right">
                                            Active
                                        </Text>
                                        <Button class=" mr-2 items-center h-fit py-0.5 px-2 rounded-full text-sm font-medium text-white bg-[#82AF6F]"
                                            size="xs"
                                            type="submit">
                                            <Row className="gap-1 items-center">
                                                <Icon path={mdiCheck}
                                                    title="Bag"
                                                    size={0.8}
                                                    color="white"
                                                />
                                                <Text className="text-md cursor-pointer">Yes</Text>
                                            </Row>
                                        </Button>
                                    </Row>

                                </div>
                            </Column>
                        </Row>

                        <Row className="pt-12">
                            <Text className="text-[19px] m-1 font-regular">
                                Ticket IDs
                            </Text>
                        </Row>
                        <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                        <Row>
                            <Column className="w-[93%] m-2 font-regular">
                                <div className="space-y-3">

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] text-right w-[20%]">
                                            Available 
                                        </Text>
                                        <Column className="w-[100%] items-start">
                                            <Text classname="w-full font-medium">5</Text>
                                        </Column>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] text-right w-[20%]">
                                            Last Used
                                        </Text>
                                        <Column className="w-[100%] items-start">
                                            <Text classname="w-full font-medium">Never</Text>
                                            <Button className="mt-2 w-fit items-center h-fit mr-2 py-2.5 px-3 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                  size="xs"
                  type="submit"
                //   onClick={handleNavigate24}
                  >
                  <Row className="gap-2 items-center">
                    <Icon path={mdiPlus}
                      title="Bag"
                      size={1.0}
                      color="white"
                    />
                    <Text className="text-lg">Add New IDs to Pool</Text>
                  </Row>
                </Button>

                 <Button className="mt-2 w-fit items-center h-fit mr-2 py-2.5 px-3 font-medium text-white bg-[#4C8FBD] hover:bg-[#006BB8] ring-4 ring-[#4C8FBD] ring-inset"
                  size="xs"
                  type="submit"
                //   onClick={handleNavigate24}
                  >
                  <Row className="gap-2 items-center">
                    <Icon path={mdiStackOverflow}
                      title="Bag"
                      size={1.0}
                      color="white"
                    />
                    <Text className="text-lg">Manage Existing IDs</Text>
                  </Row>
                </Button>     

                                        </Column>
                                    </Row>
                                </div>
                            </Column>
                        </Row>

                        <Row className="pt-16">
                            <Text className="text-[19px] m-1 font-regular">
                                Alerts
                            </Text>
                        </Row>
                        <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                        <Row>
                            <Column className="w-[93%] m-2 font-regular">
                                <div className="space-y-3">

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] text-right w-[20%]">
                                            Threshold
                                        </Text>
                                        <Column className="w-[100%] items-start">
                                            <Text classname="w-full font-medium">4</Text>
                                        </Column>
                                    </Row>

                                    <Row className="space-x-3">
                                        <Text className="text-[#667E99] text-right w-[20%]">
                                            Addresess
                                        </Text>
                                        <Column className="w-[100%] items-start">
                                            <Text classname="w-full font-medium">nursyawalni45@gmail.com</Text>
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

export default TicketPoolDetails;
