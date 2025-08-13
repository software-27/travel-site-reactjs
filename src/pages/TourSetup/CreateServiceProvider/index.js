import { Column, Row, Text, Input, Line, Button,Img, Stack, SelectBox} from "components";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack, FaCheck, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import {useState} from 'react';
import Topbtns from "components/Topbutton/index";

 
const CreateServiceProvider = ()=> {
 /* const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };*/

  const navigate = useNavigate();

  //button cancel navigate to ticket pools
  function handleNavigate1() {
    navigate("/t29");
  }

   //for switch 
    const [enabled, setEnabled] = useState(false);



  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Topbtns/>
         
        </Row>
        <Row className="w-[100%] mt-[8px]">
          <Sidebar/>
          <Column className="bg-white h-auto w-[100%]">
                <Row>
                  <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-regular">
                    Create Provider
                  </Column>
                  <Column className="w-[38%] text-white ">
                    <Row className="justify-end">
                        <Button class=" bg-[#a0a0a0] hover:bg-[#767676] items-center h-8 w-[fit] mx-2 px-2"
                        onClick={handleNavigate1}>
                              <Row>
                              <FaTimes className="h-5 w-5 text-white" />
                                <Text
                                    className="pl-1 text-white cursor-pointer"
                                    variant="body4"
                                  >
                                    Cancel
                                </Text>
                                </Row>
                          </Button>
                          <Button class=" bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-8 w-[fit] mx-2 px-2"
                          onClick={handleNavigate1}>
                              <Row>
                              <FaCheck className="h-5 w-5 text-white" />
                                <Text
                                    className="pl-1 text-white cursor-pointer"
                                    variant="body4"
                                  >
                                    Create Provider
                                </Text>
                                </Row>
                          </Button>
                          
                    </Row>
                  </Column>
                </Row>
                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                <Row>
                  <Column className="w-[70%] m-2 font-regular mb-5">
                    <div className="space-y-2">
                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[17.5%] text-right">
                        Company
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required
                        placeholder="Company Name "
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[17.5%] text-right">
                        Type
                      </Text>
                        <select className=" border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%]"
                        size=""
                        required >
                            <option value="" disabled selected hidden>Please select</option>
                            <option className = "text-[#428bca]" disabled>General</option>
                            <option class="items-center">Tour Supplier</option>
                            <option >Merchandise Supplier</option>
                            <option >Transport Provider</option>
                            <option >Contract Sales Partner</option>
                            <option >Service  Location</option>
                            <option >Wholesaler</option>
                            <option >Referral Partner</option>
                            <option className = "text-[#428bca]" disabled >Resellers</option>
                            <option >Reseller</option>
                            <option >Inventory Provider</option>
                            <option >External Provider</option>
                            <option className = "text-[#428bca]" disabled>Sales</option>
                            <option >Sales Agent (CASH)</option>
                            <option >Sales Agent (AP)</option>
                            <option >Sales Agent (AR)</option>
                           
                                                         
                                                          
                        </select>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[17.5%] text-right">
                        External ID
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="External ID"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[17.5%] text-right">
                        Website
                      </Text>
                      <div class="container flex mx-auto  ">
                                <div class="flex border border-gray-300 w-[100%] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 h-9">
                                    <button class="text-[14px] flex items-center justify-center px-4 border-r bg-gray_100">
                                      http://
                                    </button>
                                    <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Company Website"/>
                                </div>
                            </div>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[17.5%] text-right">
                        Description
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  h-14 w-[100%] "
                        type="text"
                        required 
                        placeholder="Brief description or detail"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[17.5%] text-right">
                        Tags
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Enter Tags..."
                      ></input>
                    </Row>

                    </div>
                  </Column>
                </Row>

              <Row className="w-[100%]">
                
              <Column className="w-[50%] space-y-2 mr-2 mb-5">
                <Row>
                 
                    <Text className="text-[19px] m-1 font-regular">
                      Company Information
                    </Text>
                    <Text className="text-[14px] m-1 pt-1 font-regular">
                    Address and company contact information
                    </Text>
                </Row>
                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[98%] mr-2" />

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Address 1
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Street Address"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Address 2
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Apartment or Unit Number"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        City
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="City Name"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        State
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="State or Province Code"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Country
                      </Text>
                      <SelectBox
                            className="cursor-pointer border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%]"
                            placeholderClassName="text-bluegray_400"
                            placeholder="Select country"
                            isSearchable={true}
                            isMulti={false}
                            indicator={
                              <RiArrowDropDownLine class="w-6 h-6 text-[#667E99]"/>
                            }
                            shape="RoundedBorder2"
                          ></SelectBox>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Postal
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Zip or Postal Code"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Phone 
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Phone Number"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Email
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Email Address"
                      ></input>
                    </Row>

              </Column> 
                
                
              <Column className="w-[50%] space-y-2">
                <Row>
                    <Text className="text-[19px] m-1 font-regular">
                    Accounting
                    </Text>
                    <Text className="text-[14px] m-1 pt-1 font-regular">
                    ID numbers and other details
                    </Text>
                </Row>
                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[99%] " />
                <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Account
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                        type="number"
                        size="smSrc"
                        required 
                        placeholder="Account Num"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Commission
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Commission %"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Site Code
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Code or ID"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        GL Code
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="General Ledger"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Tax Rate
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Tax Rate"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Terms
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="In Days"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Credit
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                        type="number"
                        size="smSrc"
                        required 
                        placeholder="RM"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Other Code
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Code or ID"
                      ></input>
                    </Row>
              </Column>
              </Row>  
              

              <Row>
              <Column className="w-[50%] space-y-2 mr-2 mb-5">
                <Row>
                 
                    <Text className="text-[19px] m-1 font-regular">
                    Primary Contact
                    </Text>
                    <Text className="text-[14px] m-1 pt-1 font-regular">
                    The contact person for this company
                    </Text>
                </Row>
                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[98%] mr-2" />

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Name
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Contact Name"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Email
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Contact Email Address"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                       Phone
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Contact Phone Number"
                      ></input>
                    </Row>
              </Column> 
                
                
              <Column className="w-[50%] space-y-2 mr-3">
                <Row>
                    <Text className="text-[19px] m-1 font-regular">
                    Accounting Contact
                    </Text>
                    <Text className="text-[14px] m-1 pt-1 font-regular">
                    Accounting contact person for this company
                    </Text>
                </Row>
                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[99%] " />
                <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Name
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Contact Name"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Email
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Contact Email Address"
                      ></input>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                       Phone
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Contact Phone Number"
                      ></input>
                    </Row>

              </Column>
              </Row>
              
                <Row>
                    <Text className="text-[19px] m-1 font-regular">
                    Inventory
                    </Text>
                    <Text className="text-[14px] m-1 pt-1 font-regular">
                    Attach inventory to this company for tracking purposes
                    </Text>
                </Row>

                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                <div className="mr-3 mt-3 mb-4">
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Select Inventory"
                      ></input>

                </div>

                <Row>
                    <Text className="text-[19px] m-1 font-regular">
                    Desks
                    </Text>
                    <Text className="text-[14px] m-1 pt-1 font-regular">
                    Attach desks to this company for reporting and invoicing purposes
                    </Text>
                </Row>

                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                <div className="mr-3 mt-3 mb-4">
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Select Desk"
                      ></input>

                </div>

                <Row>
                    <Text className="text-[19px] m-1 font-regular">
                    Notes
                    </Text>
                    
                </Row>

                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                <div className="mr-3 mb-14">
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-14 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder=""
                      ></input>

                </div>

                <div className="mr-3">
                  <Row className="mt-6 bg-gray_100 h-fit justify-start items-start w-[100%] mr-6 mb-10 pb-5 mr-3"> 
                          <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-[15%] mx-2 px-2 mt-5 ml-4 "
                          onClick={handleNavigate1}>
                            <Row>
                                <FaCheck className="h-5 w-5 text-white" />
                                <Text
                                    className="text-white cursor-pointer pl-2"
                                    variant="body4"
                                >
                                    Create Provider
                                </Text>
                            </Row>
                           </Button>
                  </Row>
                </div>

              </Column>
            </Row>
      </Column>
    </>
  );
};

export default CreateServiceProvider;