import React, { useState } from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Button, Line, Switch } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaPlus, FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Icon from '@mdi/react'
import { mdiLock, mdiEyeOff } from '@mdi/js';





const CustomField = () => {
    const navigate = useNavigate();


    //for popup
    const [showModal, setShowModal] = React.useState(false);

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
                                                Custom Fields
                                            </Text>
                                        </Row>
                                    </Column>


                                    <Column class="w-[50%] text-right" >


                                        <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[33%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <Row>
                                                <FaPlus className="h-5 w-4 text-white font-light " />
                                                <Text
                                                    className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                    variant="body4"
                                                >
                                                    Create Fields
                                                </Text>
                                            </Row>
                                        </Button>

                                        {showModal ? (
                                            <>
                                                <div
                                                    className="justify-center items-center mx-[350px] my-[120px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                >
                                                    {/*Header*/}
                                                    <Column classname="w-[100%]">
                                                        <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                                            <Text className="pl-3 py-5 text-xl text-white font-light">
                                                                Create a Field
                                                            </Text>
                                                            <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                                                onClick={() => setShowModal(false)} />
                                                        </Row>
                                                    </Column>


                                                    {/*Body*/}

                                                    <Column className="bg-white w-[100%] mr-4">
                                                        <Row className="mt-6 mr-2">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                Section
                                                            </Text>
                                                            <select class="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-[#858585] text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 ">
                                                                <option class="mb-2">Inventory Field</option>
                                                                <option>Contacts Field</option>
                                                                <option>Waiver Field</option>
                                                            </select>

                                                        </Row>

                                                        <Row className="mt-1 mr-2">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                Name
                                                            </Text>
                                                            <input
                                                                className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                                type="text"
                                                                size="smSrc"
                                                                required
                                                                placeholder="Must be unique"
                                                            ></input>
                                                        </Row>

                                                        <Row className="mt-1 mr-2">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                Type
                                                            </Text>
                                                            <select class="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 ">
                                                                <option class="mb-2">Short Text</option>
                                                                <option>Dropdown</option>
                                                                <option>Large Text Area</option>
                                                            </select>
                                                        </Row>

                                                        <Row className="mt-1 mr-2">
                                                            <Text className="pt-1 mt-1 text-[14px] ml-3 text-[#667E99] w-[20%] text-right ">
                                                                Placeholder
                                                            </Text>
                                                            <input
                                                                className="placeholder-[#d5d5d5] mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[80%] 2xl:mt-2 "
                                                                type="text"
                                                                size="smSrc"
                                                                required
                                                                placeholder="Placeholder value"
                                                            ></input>
                                                        </Row>

                                                        <Row className="mt-1">
                                                            <Text className="pt-1 text-[14px] text-[#667E99] w-[20%] text-right  ">
                                                                Visible
                                                            </Text>
                                                            <Switch className="ml-3" />
                                                            <Text className="mt-1 ml-2">
                                                            Show this element on the front-end.
                                                            </Text>

                                                        </Row>

                                                        <Row className=" mt-6 my-3 ml-3 flex items-end justify-end p-3 border-t border-solid border-slate-200 bg-[#EFF3F8] mr-3 ">
                                                            <button

                                                                className="bg-[#4C8FBD] hover:bg-[#006BB8] ring ring-[#4C8FBD] ring-inset text-white text-sm px-6 py-3 ring-3"
                                                                type="button"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                <Row>
                                                                    <FaCheck className="h-5 w-4 text-white font-light " />
                                                                    <Text
                                                                        className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                                        variant="body4"
                                                                    >
                                                                        Create Field
                                                                    </Text>
                                                                </Row>


                                                            </button>
                                                        </Row>


                                                    </Column>


                                                </div>

                                                <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>

                                            </>
                                        ) : null}
                                    </Column>
                                </Row>

                            </Column>
                            <Line className=" bg-gray_700_33 h-[0.5px] mb-2 mt-2 w-[100%]" />

                            <Text>
                                Customize the optional fields available to your inventory, contacts, and group waiver.
                            </Text>

                            <Column class="w-[100%] mt-6  mr-2">
                                <Row>
                                    <Text className="font-light text-black text-xl" >
                                        Inventory
                                    </Text>
                                </Row>

                                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />
                                <Row>
                                    <Text class="px-6 py-2 w-[30%] text-[13px]">
                                        Field Name
                                    </Text>
                                    <Text class="px-6 py-2 w-[25%] text-[13px]">
                                        Type
                                    </Text>
                                    <Text class="px-6 py-2 w-[45%] text-[13px]">
                                        Value
                                    </Text>
                                </Row>
                            </Column>


                            <Column className="w-[100%]">


                                <div class="mb-[100px]">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        </thead>
                                        <tbody>
                                            <tr class="w-[100%] cursor-pointer border-t border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                            >
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 dark:text-white w-[31%]">
                                                    <Row className="items-center gap-2">
                                                        <Icon path={mdiLock}
                                                            title="Bag"
                                                            size={0.7}
                                                            color="#ff892a"
                                                        />
                                                        <Text className="text-[13px] text-gray-900 mt-1">Overview</Text>
                                                    </Row>
                                                </th>
                                                <td class=" px-6 py-2 w-[69%] text-[13px] text-black">
                                                    Textarea
                                                </td>
                                                <Button class="mr-2 ml-6 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                                >
                                                    <Row>
                                                        <Icon path={mdiEyeOff}
                                                            size={0.6}
                                                            color="white"
                                                            className="mt-1"
                                                        />
                                                        <Text
                                                            className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                            variant="body4"
                                                        >
                                                            Hide
                                                        </Text>
                                                    </Row>
                                                </Button>

                                            </tr>

                                            <tr class="w-[100%] cursor-pointer border-b bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                                            >
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[30%]">
                                                    <Row className="items-center gap-2">
                                                        <Icon path={mdiLock}
                                                            title="Bag"
                                                            size={0.7}
                                                            color="#ff892a"

                                                        />
                                                        <Text className="text-[13px] mt-1">Highlights</Text>
                                                    </Row>
                                                </th>
                                                <td class="px-6 py-2 w-[50%] text-[13px] text-black">
                                                    Textarea
                                                </td>
                                                <Button class="mr-2 ml-6 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                                >
                                                    <Row>
                                                        <Icon path={mdiEyeOff}
                                                            title="Bag"
                                                            size={0.6}
                                                            color="white"
                                                            className="mt-1"
                                                        />
                                                        <Text
                                                            className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                            variant="body4"
                                                        >
                                                            Hide
                                                        </Text>
                                                    </Row>
                                                </Button>
                                            </tr>

                                            <tr class="w-[100%] cursor-pointer border-t border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                            >
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 dark:text-white w-[30%]">
                                                    <Row className="items-center gap-2">
                                                        <Icon path={mdiLock}
                                                            title="Bag"
                                                            size={0.7}
                                                            color="#ff892a"
                                                        />
                                                        <Text className="text-[13px] mt-1">Itinerary</Text>
                                                    </Row>
                                                </th>
                                                <td class="px-6 py-2 w-[50%] text-[13px] text-black">
                                                    Textarea
                                                </td>

                                                <Button class="mr-2 ml-6 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                                >
                                                    <Row>
                                                        <Icon path={mdiEyeOff}
                                                            size={0.6}
                                                            color="white"
                                                            className="mt-1"
                                                        />
                                                        <Text
                                                            className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                            variant="body4"
                                                        >
                                                            Hide
                                                        </Text>
                                                    </Row>
                                                </Button>

                                            </tr>

                                            <tr class="w-[100%] cursor-pointer border-b bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                                            >
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[30%]">
                                                    <Row className="items-center gap-2">
                                                        <Icon path={mdiLock}
                                                            title="Bag"
                                                            size={0.7}
                                                            color="#ff892a"

                                                        />
                                                        <Text className="text-[13px] mt-1">Pickup</Text>
                                                    </Row>
                                                </th>
                                                <td class="px-6 py-2 w-[50%] text-[13px] text-black">
                                                    Textarea
                                                </td>
                                                <Button class="mr-2 ml-6 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                                >
                                                    <Row>
                                                        <Icon path={mdiEyeOff}
                                                            title="Bag"
                                                            size={0.6}
                                                            color="white"
                                                            className="mt-1"
                                                        />
                                                        <Text
                                                            className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                            variant="body4"
                                                        >
                                                            Hide
                                                        </Text>
                                                    </Row>
                                                </Button>
                                            </tr>

                                            <tr class="w-[100%] cursor-pointer border-t border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                            >
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 dark:text-white w-[30%]">
                                                    <Row className="items-center gap-2">
                                                        <Icon path={mdiLock}
                                                            title="Bag"
                                                            size={0.7}
                                                            color="#ff892a"
                                                        />
                                                        <Text className="text-[13px] mt-1">	Drop Off</Text>
                                                    </Row>
                                                </th>
                                                <td class="px-6 py-2 w-[50%] text-[13px] text-black">
                                                    Textarea
                                                </td>

                                                <Button class="mr-2 ml-6 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                                >
                                                    <Row>
                                                        <Icon path={mdiEyeOff}
                                                            size={0.6}
                                                            color="white"
                                                            className="mt-1"
                                                        />
                                                        <Text
                                                            className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                            variant="body4"
                                                        >
                                                            Hide
                                                        </Text>
                                                    </Row>
                                                </Button>

                                            </tr>

                                            <tr class="w-[100%] cursor-pointer border-b bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                                            >
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[30%]">
                                                    <Row className="items-center gap-2">
                                                        <Icon path={mdiLock}
                                                            title="Bag"
                                                            size={0.7}
                                                            color="#ff892a"

                                                        />
                                                        <Text className="text-[13px] mt-1">Things to Bring</Text>
                                                    </Row>
                                                </th>
                                                <td class="px-6 py-2 w-[50%] text-[13px] text-black">
                                                    Textarea
                                                </td>
                                                <Button class="mr-2 ml-6 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                                >
                                                    <Row>
                                                        <Icon path={mdiEyeOff}
                                                            title="Bag"
                                                            size={0.6}
                                                            color="white"
                                                            className="mt-1"
                                                        />
                                                        <Text
                                                            className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                            variant="body4"
                                                        >
                                                            Hide
                                                        </Text>
                                                    </Row>
                                                </Button>
                                            </tr>

                                            <tr class="w-[100%] cursor-pointer border-t border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                            >
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 dark:text-white w-[30%]">
                                                    <Row className="items-center gap-2">
                                                        <Icon path={mdiLock}
                                                            title="Bag"
                                                            size={0.7}
                                                            color="#ff892a"
                                                        />
                                                        <Text className="text-[13px] mt-1">	Inclusions</Text>
                                                    </Row>
                                                </th>
                                                <td class="px-6 py-2 w-[50%] text-[13px] text-black">
                                                    Textarea
                                                </td>

                                                <Button class="mr-2 ml-6 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                                >
                                                    <Row>
                                                        <Icon path={mdiEyeOff}
                                                            size={0.6}
                                                            color="white"
                                                            className="mt-1"
                                                        />
                                                        <Text
                                                            className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                            variant="body4"
                                                        >
                                                            Hide
                                                        </Text>
                                                    </Row>
                                                </Button>

                                            </tr>

                                            <tr class="w-[100%] cursor-pointer border-b bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                                            >
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[30%]">
                                                    <Row className="items-center gap-2">
                                                        <Icon path={mdiLock}
                                                            title="Bag"
                                                            size={0.7}
                                                            color="#ff892a"

                                                        />
                                                        <Text className="text-[13px] mt-1">Exclusions</Text>
                                                    </Row>
                                                </th>
                                                <td class="px-6 py-2 w-[50%] text-[13px] text-black">
                                                    Textarea
                                                </td>
                                                <Button class="mr-2 ml-6 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                                >
                                                    <Row>
                                                        <Icon path={mdiEyeOff}
                                                            title="Bag"
                                                            size={0.6}
                                                            color="white"
                                                            className="mt-1"
                                                        />
                                                        <Text
                                                            className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                            variant="body4"
                                                        >
                                                            Hide
                                                        </Text>
                                                    </Row>
                                                </Button>
                                            </tr>

                                            <tr class="w-[100%] cursor-pointer border-t border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                            >
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 dark:text-white w-[30%]">
                                                    <Row className="items-center gap-2">
                                                        <Icon path={mdiLock}
                                                            title="Bag"
                                                            size={0.7}
                                                            color="#ff892a"
                                                        />
                                                        <Text className="text-[13px] mt-1">	Check-In</Text>
                                                    </Row>
                                                </th>
                                                <td class="px-6 py-2 w-[50%] text-[13px] text-black">
                                                    Textarea
                                                </td>

                                                <Button class="mr-2 ml-6 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                                >
                                                    <Row>
                                                        <Icon path={mdiEyeOff}
                                                            size={0.6}
                                                            color="white"
                                                            className="mt-1"
                                                        />
                                                        <Text
                                                            className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                            variant="body4"
                                                        >
                                                            Hide
                                                        </Text>
                                                    </Row>
                                                </Button>

                                            </tr>

                                            <tr class="w-[100%] cursor-pointer border-b bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                                            >
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[30%]">
                                                    <Row className="items-center gap-2">
                                                        <Icon path={mdiLock}
                                                            title="Bag"
                                                            size={0.7}
                                                            color="#ff892a"

                                                        />
                                                        <Text className="text-[13px] mt-1">Cancel</Text>
                                                    </Row>
                                                </th>
                                                <td class="px-6 py-2 w-[50%] text-[13px] text-black">
                                                    Textarea
                                                </td>
                                                <Button class="mr-2 ml-6 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                                >
                                                    <Row>
                                                        <Icon path={mdiEyeOff}
                                                            title="Bag"
                                                            size={0.6}
                                                            color="white"
                                                            className="mt-1"
                                                        />
                                                        <Text
                                                            className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                            variant="body4"
                                                        >
                                                            Hide
                                                        </Text>
                                                    </Row>
                                                </Button>
                                            </tr>

                                            <tr class="w-[100%] cursor-pointer border-t border-b bg-gray-50 dark:bg-gray-800 dark:border-[#393939] hover:bg-gray_101"
                                            >
                                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 dark:text-white w-[30%]">
                                                    <Row className="items-center gap-2">
                                                        <Icon path={mdiLock}
                                                            title="Bag"
                                                            size={0.7}
                                                            color="#ff892a"
                                                        />
                                                        <Text className="text-[13px] mt-1">Custom</Text>
                                                    </Row>
                                                </th>
                                                <td class="px-6 py-2 w-[50%] text-[13px] text-black">
                                                    Textarea
                                                </td>

                                                <Button class="mr-2 ml-6 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                                >
                                                    <Row>
                                                        <Icon path={mdiEyeOff}
                                                            size={0.6}
                                                            color="white"
                                                            className="mt-1"
                                                        />
                                                        <Text
                                                            className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                            variant="body4"
                                                        >
                                                            Hide
                                                        </Text>
                                                    </Row>
                                                </Button>

                                            </tr>




                                        </tbody>
                                    </table>
                                </div>
                            </Column>



                        </Column>


                    </Row>

                </Row>
            </Column>

        </>
    )
}
export default CustomField;