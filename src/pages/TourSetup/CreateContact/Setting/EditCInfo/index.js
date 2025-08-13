import React, { useState } from "react";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text, Button, Line } from "components";
import { SelectBoxCInfo} from "components/SelectBoxCInfo/index";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const EditCInfo = () => {
    const [isSearchable, setIsSearchable] = useState(true);
    const navigate = useNavigate();

    // navigate to company info 
    function handleNavigateCI() {
        navigate("/t34");
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
                                            <AiOutlineDoubleRight class="mt-3 text-[#4C8FBD]" />
                                            <Text className="font-light text-[#4C8FBD] text-base mt-2" >
                                                company
                                            </Text>
                                        </Row>
                                    </Column>
                                    <Column class=" text-right w-[100%]" >

                                        <Row class=" text-right">
                                            <Button class=" bg-[#abbac3] hover:bg-[#a0a0a0] items-center h-8 w-[fit] mx-2 px-2 ring-4 ring-[#abbac3] ring-inset"
                                            onClick={handleNavigateCI}
                                            >
                                                <Row>
                                                    <FaTimes className="h-5 w-4 text-white font-light " />
                                                    <Text
                                                        className="pl-1 font-light text-white cursor-pointer"
                                                        variant="body4"
                                                    >
                                                        Cancel
                                                    </Text>
                                                </Row>
                                            </Button>

                                            <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-8 w-[fit] mx-2 px-2 ring-4 ring-[#4C8FBD] ring-inset"
                                            onClick={handleNavigateCI}
                                            >
                                                <Row>
                                                    <FaCheck className="h-5 w-4 text-white font-light " />
                                                    <Text
                                                        className="pl-1 font-light text-white cursor-pointer"
                                                        variant="body4"
                                                    >
                                                        Save Changes
                                                    </Text>
                                                </Row>
                                            </Button>
                                        </Row>
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
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm " >
                                                Company Name
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Company Name" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Primary Email
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Primary Email" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Address 1
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Address 1" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Address 2
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Address 2" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                City
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="City" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                State
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">

                                            <input placeholder="State/ Province" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                        </Column>
                                    </Row>

                                    <Row className="mb-2">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Country
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                        <SelectBoxCInfo
                                        placeholder="Kota Bharu" 
                                        isSearchable={true}
                                        class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        
                                        >

                        </SelectBoxCInfo>
                                           
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Postal
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="ZIP/Postal Code" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Phone
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Phone Number" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Fax
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="FAX Number" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Tax ID
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Tax ID Number" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Hours of Operation
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Hours of Operation" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                </Column>
                                <Column class="w-[50%]">

                                    <Text className="font-light text-black text-xl" >
                                        Company Location
                                    </Text>

                                    <Line className="bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mr-3 mb-5 " />

                                    <img class="h-[89%] mt-6" src="images/map.jpg" alt="logo" />

                                </Column>
                            </Row>

                            <Row>
                                <Column class="w-[50%] mt-6 mr-2">
                                    <Text className="font-light text-black text-xl" >
                                        Primary Contact
                                    </Text>
                                    <Text className="font-light text-[#667E99] text-xs ml-2" >
                                    Displayed to resellers
                                    </Text>
                                    <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Name
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Contact Name" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Email
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Contact Email Address" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Phone
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Contact Phone Number" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>
                                </Column>

                                <Column class="w-[50%] mt-6">
                                    <Text className="font-light text-black text-xl" >
                                        Accounting Contact
                                    </Text>
                                    <Text className="font-light text-[#667E99] ml-2 text-xs" >
                                    Displayed to resellers
                                    </Text>
                                    <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3" />

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Name
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Contact Name" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Email
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Contact Email Address" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                    <Row className="mb-1">
                                        <Column class="w-[35%] text-right mr-3 mt-2">
                                            <Text className="text-[#667E99] text-sm" >
                                                Phone
                                            </Text>
                                        </Column>
                                        <Column class="w-[65%]">
                                            <input placeholder="Contact Phone Number" class="placeholder-[#d5d5d5] text-sm block w-full p-2 text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </Column>
                                    </Row>

                                </Column>

                            </Row>

                            <Row className="mt-6 bg-gray_100 h-fit justify-start items-start w-[100%] mr-6 mb-10 pb-5 mr-3">
                                <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset ml-3 mt-3"
                                    size="xs"
                                    type="submit">
                                    <Row className="gap-2 items-center">
                                        <FaCheck />
                                        <Text className="text-sm cursor-pointer">Create Contact</Text>
                                    </Row>
                                </Button>
                            </Row>


                        </Column>
                    </Row>




                </Row>
            </Column>



        </>
    )
}

export default EditCInfo;