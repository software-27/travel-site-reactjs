
import React from "react";
import { Column, Row, Text, Line, Button, Img } from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { RxDoubleArrowRight, RxChevronLeft } from "react-icons/rx";
import { AiFillPlusCircle } from "react-icons/ai";
import {
    mdiCheck, mdiCalendarMonth, mdiCalendarBlank, mdiCalendarMinus, mdiClockOutline, mdiAccountGroup, mdiTag, mdiCart,
    mdiSitemap, mdiFormatListBulleted, mdiCash, mdiInformation, mdiPencil, mdiTrashCan, mdiCheckboxBlankCircleOutline,
} from '@mdi/js';
import Icon from "@mdi/react";
import Topbtns from "components/Topbutton/index";


const RuleDetails = () => {

    const navigate = useNavigate();

    //button cancel navigate to ticket pools
    function handleNavigate1() {
        navigate("/ticketpools");
    }

    //popup funct.
    const [showModal, setShowModal] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);

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
                            <Row className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light items-center">
                                Rule
                                <RxDoubleArrowRight className="items-start ml-2 mt-4 h-5 w-5 text-[#667E99] items-center" />
                                <Text className="text-[15px] ml-2 mt-2 text-[#667E99] uppercase">Promocode</Text>
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
                        <Row>
                            <Column className="w-[60%] m-2 font-regular">
                                <div className="space-y-3">
                                    <Row className="items-center space-x-3">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            Rule Name
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            Promocode
                                        </Text>
                                    </Row>

                                    <Row className="items-center space-x-3">
                                        <Text className="text-[#667E99] w-[30%] text-right">
                                            Description
                                        </Text>
                                        <Text className="text-black w-[100%]">
                                            10% discount
                                        </Text>
                                    </Row>
                                </div>
                            </Column>

                            <Column className="w-[40%] items-end gap-2">
                                <Button class="items-center h-fit w-[30%] py-2.5 px-3 mr-6 mt-4 text-sm font-medium text-white bg-[#a0a0a0] hover:bg-[#767676] ring-4 ring-[#a0a0a0] ring-inset"
                                    size="xs"
                                    type="submit">
                                    <Row className="gap-2 items-center">
                                        <Icon path={mdiCheckboxBlankCircleOutline}
                                            title="Bag"
                                            size={1.0}
                                            color="white"
                                        />
                                        <Text className="text-lg cursor-pointer">Deactivate</Text>
                                    </Row>
                                </Button>
                            </Column>

                        </Row>

                        <Row className="pt-5">
                            <Text className="text-[19px] m-1 font-regular">
                                IF
                            </Text>
                            <Text className="text-[14px] m-1 pt-1 font-light">
                                All these conditions are met...
                            </Text>
                        </Row>

                        <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                        <div className="mr-3">
                            <Row>
                                <div class="container flex mx-auto  ">
                                    <div class="flex border-[1.5px] border-gray-300 w-[100%] m-4 h-9">
                                        <button class="flex border-gray-300 items-center justify-center px-4 border-r bg-[#87B87F]">
                                            <Icon path={mdiTag}
                                                title="Tag"
                                                size={1.0}
                                                color="white"
                                            />
                                        </button>
                                        <Column className="w-[50%]">
                                            <Row>
                                                <Text className="font-semibold text-sm p-2.5">Promotional code</Text>
                                                <Text className="text-sm py-2.5 px-2.0">is</Text>
                                                <Text className="uppercase text-sm py-2.5 px-2.5 text-[#478FCA]">TOUR.</Text>
                                            </Row>
                                        </Column>
                                        <Column className="w-[50%] items-end m-1">
                                            <Button className="items-center h-fit py-2.0 px-3 text-sm font-medium text-white bg-[#428BCA]"
                                                size="xs"
                                                type="submit">
                                                <Row className="gap-2 items-center">
                                                    <Icon path={mdiInformation}
                                                        title="Bag"
                                                        size={1.0}
                                                        color="white"
                                                    />
                                                    <Text className="text-sm cursor-pointer">used 1 / 10 times</Text>
                                                </Row>
                                            </Button>
                                        </Column>
                                    </div>
                                </div>
                            </Row>
                        </div>

                        <Row className="pt-5">
                            <Text className="text-[19px] m-1 font-regular">
                                THEN
                            </Text>
                            <Text className="text-[14px] m-1 pt-2 font-lightnpm">
                                do these actions...
                            </Text>
                        </Row>

                        <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                        <div className="mr-3">
                            <Row>
                                <div class="container flex mx-auto  ">
                                    <div class="flex border-[1.5px] border-gray-300 w-[100%] m-4 h-9">
                                        <button class="flex border-gray-300 items-center justify-center px-4 border-r bg-[#F78929]">
                                            <Icon path={mdiCash}
                                                title="Tag"
                                                size={1.0}
                                                color="white"
                                            />
                                        </button>
                                        <Column className="w-[50%]">
                                            <Row>
                                                <Text className="font-semibold text-sm p-2.5 text-[#F78929]">Decrease</Text>
                                                <Text className="text-sm py-2.5 px-2.0">all point by</Text>
                                                <Text className="text-sm py-2.5 px-2.5 text-[#478FCA]">10%</Text>
                                            </Row>
                                        </Column>
                                    </div>
                                </div>
                            </Row>
                        </div>

                    </Column>
                </Row>
            </Column>
        </>
    );
};

export default RuleDetails;
