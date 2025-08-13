import React from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Img, Line, Button } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";




const AcceptPayment = () => {


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
                            <Row>
                                <Text className="font-light text-[#4C8FBD] text-2xl" >
                                    Setting
                                </Text>
                                <AiOutlineDoubleRight class="ml-2 mt-3 text-[#667E99]" />
                                <Text className="font-light text-[#667E99] text-base mt-2 pl-1" >
                                    Accept Payment
                                </Text>
                            </Row>

                            <Line className=" bg-gray_700_33 h-[0.5px] mt-4 w-[100%]" />

                            <Row>
                                <Text className="font-light text-black text-xl mt-6" >
                                    Paypal Button
                                </Text>

                            </Row>

                            <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                            <Column>
                                <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[17%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                >
                                    <Row>
                                        <FaPlus className="h-4 w-4 text-white font-light " />
                                        <Text
                                            className="pl-1 font-light text-white cursor-pointer pr-1 "
                                            variant="body4"
                                        >
                                            Attach Paypal Account
                                        </Text>
                                    </Row>
                                </Button>

                                <Row>
                                    <Text class="text-sm font-light break-after-column mt-2">
                                        Accept payments after bookings are completed using your PayPal Account.
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="text-sm font-light break-after-column mb-4">
                                        A PayPal "Pay Now" button will be added to the final booking step.
                                    </Text>
                                </Row>
                            </Column>

                            <Column>

                            <Row>
                                <Text className="font-light text-black text-xl" >
                                Manual Payment Methods
                                </Text>

                            </Row>

                            <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />
                                <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[24%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                >
                                    <Row>
                                        <FaPlus className="h-4 w-4 text-white font-light " />
                                        <Text
                                            className="pl-1 font-light text-white cursor-pointer pr-1 "
                                            variant="body4"
                                        >
                                            Add Manual Payment Method
                                        </Text>
                                    </Row>
                                </Button>

                                <Row>
                                    <Text class="text-sm font-light break-after-column mt-2">
                                    These are manual payment methods that are displayed on the point of sale and the front end.

                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="text-sm font-light break-after-column mb-4">
                                    Your customers will receive a 'Payment Pending' notice when they book using these methods.
                                    </Text>
                                </Row>
                            </Column>

                            
                            <Column>

                            <Row>
                                <Text className="font-light text-black text-xl" >
                                Point of Sale Payment Methods
                                </Text>

                            </Row>

                            <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />
                                <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[24%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                >
                                    <Row>
                                        <FaPlus className="h-4 w-4 text-white font-light " />
                                        <Text
                                            className="pl-1 font-light text-white cursor-pointer pr-1 "
                                            variant="body4"
                                        >
                                            Add Point of Sale Payment Method
                                        </Text>
                                    </Row>
                                </Button>

                                <Row>
                                    <Text class="text-sm font-light break-after-column mt-2">
                                    These are manual payment methods that are only visible on the point of sale.

                                    </Text>
                                </Row>

                            </Column>

                     



                        </Column>

                        
                    </Row>




                </Row>
            </Column>



        </>
    )
}

export default AcceptPayment;

