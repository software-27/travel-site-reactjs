import React from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Button, Line } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";




const CompanyInfo = () => {

    const navigate = useNavigate();

    // // navigate to Edit button of company info 
    // function handleNavigateEdit() {
    //     navigate("/t45");
    // }

    // navigate to Edit button of company info 
    function handleNavigate60() {
        navigate("/t45");
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
                            <Row className="items-center w-[100%]">
                                <Row className="items-start w-[100%]">
                                    <Column class="w-[100%]">
                                        <Row>
                                            <Text className="font-light text-[#4C8FBD] text-2xl" >
                                                Setting
                                            </Text>
                                            <AiOutlineDoubleRight class="ml-2 mt-3 text-[#667E99]" />
                                            <Text className="font-light text-[#667E99] text-base mt-2 pl-1" >
                                                Company
                                            </Text>
                                        </Row>
                                    </Column>
                                    <Column class=" text-right w-[100%]" >
                                        <Button class=" bg-[#ffb752] hover:bg-[#eea236] items-center h-8 w-[fit] mx-2 px-2 ring-4 ring-[#ffb752] ring-inset"
                                            onClick={handleNavigate60}
                                        >
                                            <Row>
                                                <MdModeEdit className="h-5 w-4 text-white font-light " />
                                                <Text
                                                    className="pl-1 font-light text-white cursor-pointer pr-1 "
                                                    variant="body4"
                                                >
                                                    Edit
                                                </Text>
                                            </Row>
                                        </Button>
                                    </Column>
                                </Row>
                            </Row>

                            <Line className=" bg-gray_700_33 h-[0.5px] mt-4 mb-3 w-[100%]" />
                            <Row>
                                <Column class="w-[50%] mr-3">
                                    <Text className="font-light text-black text-xl" >
                                        Company Information
                                    </Text>
                                    <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] " />
                                    <Row className="mt-6 mb-2">
                                        <Column class="w-[35%] text-right mr-3 ">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Company Name
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                xxx
                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Primary Email
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                xxx@gmail.com
                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Primary Email
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                xxx@gmail.com
                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Address 1
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                Kg Biah Jalan Perol
                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Address 2
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >

                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                City
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                Kota Bharu
                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                State
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                Kelantan
                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Country
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                Malaysia
                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Postal
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                16010
                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Phone
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                01129826788
                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Fax
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >

                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Tax ID
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >

                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Hours of Operation
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >

                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="font-light text-[#667E99] text-sm" >
                                                Currency
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                Malaysia Ringgits(MYR)
                                            </Text>
                                        </Column>
                                    </Row>




                                </Column>
                                <Column class="w-[50%]">
                                    <Text className="font-light text-black text-xl" >
                                        Company Location
                                    </Text>

                                    <Line className="bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mr-3 mb-5 " />
                                    <img src="images/map.jpeg" alt="logo" />
                                </Column>
                            </Row>

                            <Row>
                                <Column class="w-[50%] mt-6  mr-2">
                                    <Text className="font-light text-black text-xl" >
                                        Primary Contact
                                    </Text>

                                    <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3 ">
                                            <Text className="text-[#667E99] text-sm" >
                                                Name
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                xxx
                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="text-[#667E99] text-sm" >
                                                Email
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >

                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="text-[#667E99] text-sm" >
                                                Phone
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >

                                            </Text>
                                        </Column>
                                    </Row>
                                </Column>

                                <Column class="w-[50%] mt-6 mb-[90px]">
                                    <Text className="font-light text-black text-xl" >
                                        Accounting Contact
                                    </Text>

                                    <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3" />

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="text-[#667E99] text-sm" >
                                                Name
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >

                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="text-[#667E99] text-sm" >
                                                Email
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >

                                            </Text>
                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3">
                                            <Text className="text-[#667E99] text-sm" >
                                                Phone
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <Text className="font-light text-black text-sm" >
                                                dd
                                            </Text>
                                        </Column>
                                    </Row>

                                </Column>

                            </Row>


                        </Column>
                    </Row>




                </Row>
            </Column>
        </>
    )
}

export default CompanyInfo;