import React, { useState } from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Button, Line } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Icon from '@mdi/react'
import DropdownReport from "components/DropdownReport";
import { mdiLock, mdiCircleMedium } from '@mdi/js';


const Notification = () => {
    //for popup
    const [showModal2, setShowModal2] = React.useState(false);
    const navigate = useNavigate();

    // navigate to Edit button of create notification
    function handleNavigateCN() {
        navigate("/t62");
    }

    //for dropdown list
    const [isVisible, setIsVisible] = useState("");

    const changeHandler = e => {
        const getshow = e.target.value;
        setIsVisible(getshow);
    }
    
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
                                                Notification
                                            </Text>
                                        </Row>
                                    </Column>


                                    <Column class="w-[50%] text-right" >
                                        <Button class="mt-2 mr-3 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-8 w-[40%] px-2 ring-4 ring-[#5bc0de] ring-inset"
                                            onClick={handleNavigateCN}
                                        >
                                            <Row>
                                                <FaPlus className="h-5 w-4 text-white font-light " />
                                                <Text
                                                    className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                    variant="body4"
                                                >
                                                    Manage Alerts
                                                </Text>
                                            </Row>
                                        </Button>

                                        <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[45%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                            onClick={handleNavigateCN}
                                        >
                                            <Row>
                                                <FaPlus className="h-5 w-4 text-white font-light " />
                                                <Text
                                                    className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                    variant="body4"
                                                >
                                                    Create Notification
                                                </Text>
                                            </Row>
                                        </Button>
                                    </Column>
                                </Row>

                            </Column>
                            <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%]" />

                            <Text>Manage the notifications that your company sends out. You can add content to required messages or create your own messages.
                                To manage the alerts that Rezgo sends you, click
                            </Text>
                            <Button class="mt-2 bg-[#46b8da] hover:bg-[#46b8da] items-center h-6 w-[12%] px-2 ring-2 ring-[#5bc0de] ring-inset"
                                onClick={handleNavigateCN}
                            >
                                <Row>
                                    <FaPlus className="h-5 w-4 text-white font-light " />
                                    <Text
                                        className="pl-1 font-light text-[10px] text-white cursor-pointer pr-1 "
                                        variant="body4"
                                    >
                                        Manage Alerts
                                    </Text>
                                </Row>
                            </Button>

                            <div className="mr-3">
                                <Column className="w-[100%]">
                                    <Row className="pt-8">
                                        <Text className="text-sm m-1 font-regular">
                                            When a new booking is made
                                        </Text>
                                    </Row>

                                    <div class="relative overflow-x-auto">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            </thead>
                                            <tbody>
                                                <tr class=" w-[50%] cursor-pointer border-t bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                                >
                                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[30%]">
                                                        <Row className="items-center gap-2">
                                                            <Icon path={mdiLock}
                                                                title="Bag"
                                                                size={1.0}
                                                                color="#4C8FBD"
                                                            />
                                                            <Text className="text-[13px]">Customer Booking Receipt</Text>
                                                        </Row>
                                                    </th>
                                                    <td class="px-6 py-2 w-[50%] text-[13px]">
                                                        Email the Customere
                                                    </td>
                                                    <td class="px-6 py-2 w-[50px]">
                                                        <DropdownReport />
                                                    </td>
                                                </tr>
                                                <tr class="w-[100%] cursor-pointer bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                                                >
                                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[50%]">
                                                        <Row className="items-center gap-2">
                                                            <Icon path={mdiLock}
                                                                title="Bag"
                                                                size={1.0}
                                                                color="#4C8FBD"
                                                            />
                                                            <Text className="text-[13px]"> Customer Waiver Sign Request</Text>
                                                        </Row>
                                                    </th>
                                                    <td class="px-6 py-2 w-[50%] text-[13px]">
                                                        Email the Customer
                                                    </td>
                                                    <td class="px-6 py-2 w-[50px]">
                                                        <DropdownReport />
                                                    </td>
                                                </tr>

                                                <tr class="cursor-pointer border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                                >
                                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[20%]">
                                                        <Row className="items-center gap-2">
                                                            <Icon path={mdiCircleMedium}
                                                                title="Bag"
                                                                size={1.0}
                                                                color="#ff892a"
                                                            />
                                                            <Text className="text-[13px]">xxx</Text>
                                                        </Row>
                                                    </th>
                                                    <td class="px-6 py-2 w-[68%] text-[13px]">
                                                        Primary booking reports by date and type.
                                                    </td>
                                                    <td class="px-6 py-2 w-[50px]">
                                                        <DropdownReport />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Column>


                            </div>

                            <div className="mr-3">
                                <Column className="w-[100%]">
                                    <Row className="pt-8">
                                        <Text className="text-sm m-1 font-regular">
                                            When it is 2 days after the booked date
                                        </Text>
                                    </Row>

                                    <div class="relative overflow-x-auto">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            </thead>
                                            <tbody>
                                                <tr class="w-[100%] cursor-pointer border-t border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                                >
                                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[50%]">
                                                        <Row className="items-center gap-2">
                                                            <Icon path={mdiLock}
                                                                title="Bag"
                                                                size={1.0}
                                                                color="#4C8FBD"
                                                            />
                                                            <Text className="w-[50%] text-[13px]">Customer Review Request</Text>
                                                        </Row>
                                                    </th>
                                                    <td class="px-6 py-2 w-[50%] text-[13px]">
                                                        Primary booking reports by date and type.
                                                    </td>
                                                    <td class="px-6 py-2 w-[50px]">
                                                        <DropdownReport />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Column>


                            </div>

                            <div className="mr-3">
                                <Column className="w-[100%]">
                                    <Row className="pt-8">
                                        <Text className="text-sm m-1 font-regular">

                                            When the booking status is set to received
                                        </Text>
                                    </Row>

                                    <div class="relative overflow-x-auto">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            </thead>
                                            <tbody>
                                                <tr class="w-[100%] cursor-pointer border-t border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                                >
                                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[50%]">
                                                        <Row className="items-center gap-2">
                                                            <Icon path={mdiLock}
                                                                title="Bag"
                                                                size={1.0}
                                                                color="#4C8FBD"
                                                            />
                                                            <Text className="text-[13px]"> Status Change to Confirmed</Text>
                                                        </Row>
                                                    </th>
                                                    <td class="px-6 py-2 w-[50%] text-[13px]">
                                                        Primary booking reports by date and type.
                                                    </td>
                                                    <td class="px-6 py-2 w-[50px]">
                                                        <DropdownReport />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Column>
                            </div>
                            <div className="mr-3">
                                <Column className="w-[100%]">
                                    <Row className="pt-8">
                                        <Text className="text-sm m-1 font-regular">
                                            When the booking status is set to pending
                                        </Text>
                                    </Row>

                                    <div class="relative overflow-x-auto">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            </thead>
                                            <tbody>
                                                <tr class="w-[100%] cursor-pointer border-t border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                                >
                                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[50%]">
                                                        <Row className="items-center gap-2">
                                                            <Icon path={mdiLock}
                                                                title="Bag"
                                                                size={1.0}
                                                                color="#4C8FBD"
                                                            />
                                                            <Text className="text-[13px]">Status Change to Pending</Text>
                                                        </Row>
                                                    </th>
                                                    <td class="px-6 py-2 w-[50%] text-[13px]">
                                                        Primary booking reports by date and type.
                                                    </td>
                                                    <td class="px-6 py-2 w-[50px]">
                                                        <DropdownReport />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Column>
                            </div>


                            <div className="mr-3">
                                <Column className="w-[100%]">
                                    <Row className="pt-8">
                                        <Text className="text-sm m-1 font-regular">
                                            When the booking status is set to cancelled
                                        </Text>
                                    </Row>

                                    <div class="relative overflow-x-auto">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            </thead>
                                            <tbody>
                                                <tr class="w-[100%] cursor-pointer border-t border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                                >
                                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[50%]">
                                                        <Row className="items-center gap-2">
                                                            <Icon path={mdiLock}
                                                                title="Bag"
                                                                size={1.0}
                                                                color="#4C8FBD"
                                                            />
                                                            <Text className="text-[13px]"> Status Change to Cancelled</Text>
                                                        </Row>
                                                    </th>
                                                    <td class="px-6 py-2 w-[50%] text-[13px]">
                                                        Primary booking reports by date and type.
                                                    </td>
                                                    <td class="px-6 py-2 w-[50px]">
                                                        <DropdownReport />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Column>


                            </div>
                            <div className="mr-3">
                                <Column className="w-[100%]">
                                    <Row className="pt-8">
                                        <Text className="text-sm m-1 font-regular">

                                            When a gift card is purchased
                                        </Text>
                                    </Row>

                                    <div class="relative overflow-x-auto">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            </thead>
                                            <tbody>
                                                <tr class="w-[100%] cursor-pointer border-t border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                                >
                                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[50%]">
                                                        <Row className="items-center gap-2">
                                                            <Icon path={mdiLock}
                                                                title="Bag"
                                                                size={1.0}
                                                                color="#4C8FBD"
                                                            />
                                                            <Text className="text-[13px]"> A Gift Card is Purchased</Text>
                                                        </Row>
                                                    </th>
                                                    <td class="px-6 py-2 w-[50%] text-[13px]">
                                                        Primary booking reports by date and type.
                                                    </td>
                                                    <td class="px-6 py-2 w-[50px]">
                                                        <DropdownReport />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Column>


                            </div>

                        </Column>


                    </Row>

                </Row>
            </Column>

        </>
    )
}
export default Notification;