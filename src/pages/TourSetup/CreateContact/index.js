
import { Column, Row, Text, Line, Button, Img, SelectBox, } from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import { mdiCheck, mdiCloseThick } from '@mdi/js';
import Icon from "@mdi/react";
import { useState } from 'react';
import Topbtns from "components/Topbutton/index";


const CreateContact = () => {
  /* const handleshow = (e) => {
     const getshow = e.target.value;
     setShowhide(getshow);
   };*/

  const navigate = useNavigate();

  //button cancel navigate to ticket pools
  function handleNavigate1() {
    navigate("/t19");
  }

  //for switch 
  const [enabled, setEnabled] = useState(false);



  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white w-[100%]">
      <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Column>
            <Row className="bg-[#F5F5F5] items-start w-[100%]">
              <Button class="bg-[#87B87F] hover:bg-[#629B58] items-center h-9 px-2 ml-[10px] mt-2.5 mb-2.5">
                <Row>
                  <FaShoppingCart className="h-5 w-5 text-white" />
                  <Text
                    className="px-1 text-white cursor-pointer"
                    variant="body4"
                  >
                    Point of Sale
                  </Text>
                </Row>
              </Button>

              <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-9 px-2 ml-[10px] mt-2.5 mb-2.5">
                <Row>
                  <FaThumbtack className="h-5 w-5 text-white" />
                </Row>
              </Button>
            </Row>
          </Column>

        </Row>
        <Row className="w-[100%] mt-[8px]">
          <Sidebar />
          <Column className="p-2 bg-white h-auto w-[100%]">
            <Row className="items-center mb-6">
              <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light">
                Create Contact
              </Column>
              <Column className="w-[38%] text-white ">
                <Row className="justify-end">
                  <Button class="bg-[#a0a0a0] hover:bg-[#767676] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#a0a0a0] ring-inset"
                    
                    size="xs"
                    type="submit">
                    <Row className="gap-2 items-center">
                      <Text className="text-lg cursor-pointer">Cancel</Text>
                      <Icon path={mdiCloseThick}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                    </Row>
                  </Button>
                  <Button onClick={handleNavigate1} class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                    size="xs"
                    type="submit">
                    <Row className="gap-2 items-center">
                      <Icon path={mdiCheck}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Create Contact</Text>
                    </Row>
                  </Button>

                </Row>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 mb-6 h-[1.5px] w-[100%]" />
            <Row>
              <Column className="w-[50%] m-2 font-regular">
                <Text className="text-[20px] font-light ">Profile</Text>
                <Line className="bg-gray_700_33 mb-[10px] h-[1.0px] w-[100%]"></Line>
                <div className="space-y-3">
                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
                      Name
                    </Text>
                    <Row className="gap-4 justify-between w-[100%]">
                      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[50%]"
                       
                      type="text"
                        size="smSrc"
                        required
                        placeholder="First Name"
                      ></input>
                      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[50%]  "
                        type="text"
                        size="smSrc"
                        required
                        placeholder="Last Name "
                      ></input>
                    </Row>
                  </Row>

                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
                      Company
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Company Name"
                    ></input>
                  </Row>

                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
                      Email
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%]  "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Email Address"
                    ></input>
                  </Row>

                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
                      Phone
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%]  "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Phone Number"
                    ></input>
                  </Row>

                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
                      Source
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%]  "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Contact Source"
                    ></input>
                  </Row>

                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
                      ID Num
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="ID or Ref Num"
                    ></input>
                  </Row>

                </div>
              </Column>
              <Column className="ml-4 w-[50%] m-2 font-regular">
                <Text className="text-[20px] font-light ">Address</Text>
                <Line className="bg-gray_700_33 mb-[10px] h-[1.0px] w-[100%]"></Line>
                <div className="space-y-3">
                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
                      Address 1
                    </Text>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%]  "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Street Address "
                    ></input>
                  </Row>

                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
                      Address 2
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%]  "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Apartment or Unit Number"
                    ></input>
                  </Row>

                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
                      City
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%]  "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="City Name"
                    ></input>
                  </Row>

                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
                      State
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="State or Province Code"
                    ></input>
                  </Row>

                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right mt-4">
                      Country
                    </Text>
                    <SelectBox
                      className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[100%]"
                      placeholderClassName="text-bluegray_400"
                      name="GroupSixtyThree"
                      placeholder="Select an Option"
                      isSearchable={true}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_6X10.svg"
                          className="lg:w-[7px] lg:h-[5px] lg:mr-[8px] xl:w-[8px] xl:h-[6px] xl:mr-[10px] 2xl:w-[10px] 2xl:h-[7px] 2xl:mr-[12px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[14px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder2"
                      size="md"
                      variant="OutlineGray700"
                    ></SelectBox>
                  </Row>

                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
                      Postal
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Zip or Postal Code"
                    ></input>
                  </Row>

                </div>
              </Column>
            </Row>

            <Row>
              <Text className="text-[20px] m-1 font-light">
                Notes
              </Text>
            </Row>

            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <div className="mr-3">
              <input
                className="bg-gray-50 border border-gray-300 justify-start text-gray-900 text-sm focus:ring-blue-500 focus:border-[#e2711d] block h-[100px] w-[100%]"
                type="text"
                size="smSrc"
                required
                placeholder=""
              ></input>
            </div>



            <div className="mr-3">
              <Row className="mt-6 bg-gray_100 h-fit justify-start items-start w-[100%] mr-6 mb-10 pb-5 mr-3">
              <Button onClick={handleNavigate1} class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset ml-3 mt-3"
                    size="xs"
                    type="submit">
                    <Row className="gap-2 items-center">
                      <Icon path={mdiCheck}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Create Contact</Text>
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

export default CreateContact;
