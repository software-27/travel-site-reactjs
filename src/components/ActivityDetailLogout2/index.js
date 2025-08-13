import React from "react";
import { Row, Column, Text, Button, Switch, Line } from "components/index";
import { BsCircle } from 'react-icons/bs';
import { FaUser, FaTimes } from 'react-icons/fa';




const ActivityDetailLogout2 = () => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <Row onClick={() => setShowModal(true)} className="w-[100%] ml-5 mt-2 mb-2 common-pointer hover:bg-[#f2f6f9]" >
                <Column className="w-[92%] mt-1.5">
                    <Row >
                        <Text className="justify-end font-light text-black text-sm">
                            2.34 pm
                        </Text>
                        <BsCircle class="mx-2 w-3" />
                        <FaUser class="w-3 mr-2" />

                        <Text className="justify-end font-light text-black text-sm">
                            User 145457 was logged out due to inactivity.
                        </Text>
                    </Row>
                </Column>

                <Column className="w-[8%] mr-5">

                    <button className="bg-[#a0a0a0] text-white active:bg-stone-600 font-bold uppercase text-xs px-3 py-1 shadow hover:shadow-md outline-none focus:outline-none mb-1 ml-4 ease-linear transition-all duration-150" type="button"
                    >
                        Login
                    </button>


                </Column>
            </Row>


            {showModal ? (
                <>
                    <div
                        className="justify-center items-center mx-[400px] my-[150px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        {/*Header*/}
                        <Column classname="w-[100%]">
                            <Row className="bg-[#428BCA] w-[100%] items-start justify-between">
                                <Text className="pl-3 py-5 text-2xl text-white text-thin">
                                    Activity Details
                                </Text>
                                <FaTimes className=" mr-4 mt-6 h-5 w-5 text-white common-pointer"
                                    onClick={() => setShowModal(false)} />
                            </Row>
                        </Column>


                        {/*Body*/}

                        <Column className="bg-white w-[100%] ">
                            <div className="mx-2">
                                <Row className="mt-2">
                                    <Column className="w-[90%]">
                                        <Text className="text-base text-black">
                                            2023-03-15 at 2:34 am
                                        </Text>
                                    </Column>

                                    <Column className="w-[8%] mr-1 items-end">
                                        <button className="bg-[#a0a0a0] text-white active:bg-stone-600 font-bold uppercase text-xs px-3 py-1 shadow hover:shadow-md outline-none focus:outline-none mb-1 ml-4 ease-linear transition-all duration-150" type="button"
                                        >
                                            Login
                                        </button>
                                    </Column>

                                </Row>

                                <Row className=" m-3" >
                                    <FaUser class="w-3 mr-2" />

                                    <Text className="justify-end font-light text-black text-sm">
                                        User 145457 was logged out due to inactivity.
                                    </Text>
                                </Row>

                                <Row class="pb-[170px]" >
                                    <Text className="mx-3 text-thin text-gray-900 text-xs ">
                                        Event ID 48040640
                                    </Text>
                                </Row>


                            </div>
                        </Column>

                    </div>

                    <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>

                </>
            ) : null}

        </>
    )
}

export default ActivityDetailLogout2;