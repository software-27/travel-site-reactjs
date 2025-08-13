import React, { useState } from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Button, Line, Switch } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaCheck, FaGlobeAmericas, FaTimes, FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";




const Integration = () => {
    //for popup
    const [showModal2, setShowModal2] = React.useState(false);
    const navigate = useNavigate();



    // navigate to Edit button of create api key
    function handleNavigateAPI() {
        navigate("/t61");
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
                                                Integration
                                            </Text>
                                        </Row>
                                    </Column>


                                    <Column class="w-[100%] text-right" >
                                        <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[25%] px-2 ring-4 ring-[#87b87f] ring-inset"
                                            onClick={handleNavigateAPI}
                                        >
                                            <Row>
                                                <FaPlus className="h-5 w-4 text-white font-light " />
                                                <Text
                                                    className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                    variant="body4"
                                                >
                                                    Create API Key
                                                </Text>
                                            </Row>
                                        </Button>
                                    </Column>
                                </Row>

                            </Column>
                            <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%]" />

                            <Row className="mt-5">
                                <Column className=" w-[100%] text-[20px] font-regular">
                                    <Text class="font-light">
                                        Company Code (CID) 33420
                                    </Text>

                                    <Text class="font-light text-base">
                                        Reseller Code 33420-1670-3136
                                    </Text>
                                </Column>
                            </Row>

                            <Text className="font-light text-black text-xl mt-4" >
                            API Keys
                            </Text>
                            <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%]" />



                        </Column>


                    </Row>

                </Row>
            </Column>

        </>
    )
}
export default Integration;