import { Column, Row, Text, Button, Line, Switch } from "components";
import { FaCheck, FaGlobeAmericas, FaTimes, FaPlus } from "react-icons/fa";
import React from "react";

const MediaManagerBtn = () => {

    
    //for popup
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <Column class="w-[50%] text-right" >


                <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[40%] px-2 ring-4 ring-[#87b87f] ring-inset"
                    onClick={() => setShowModal(true)}
                >
                    <Row>
                        <FaPlus className="h-5 w-4 text-white font-light " />
                        <Text
                            className="pl-1 font-light text-white cursor-pointer pr-1 "
                            variant="body4"
                        >
                            Media Manager
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
        </>
    )
}

export default MediaManagerBtn;