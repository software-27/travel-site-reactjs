import React, { useState } from "react";
import { Column, Row, Text, Button, Img, Switch, Line, Stack } from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import TextEditor from "components/TextEditor/index";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { SelectBook } from "components/SelectBook";
import { SelectItem } from "components/SelectItem";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import {
  mdiCart,
  mdiPin,
  mdiEarth,
  mdiCheck,
  mdiMapMarker,
  mdiCloseThick,
} from "@mdi/js";
import Topbtns from "components/Topbutton/index";

const CreateTourPage = () => {
  const [show, setShow] = useState();
  const [showhide, setShowhide] = useState("no");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  const navigate = useNavigate();

  //button navigate to InventoryDetails
  function handleNavigate22() {
    navigate("/t22");

  }

  function handleNavigate25() {
    navigate("/t6");

  }

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
          <Column className="bg-white h-auto w-[100%]">
          <Row className="mb-4">
                    <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light">
                      Create Tour
                    </Column>
                    <Column className="w-[38%] text-white ">
                      <Row className="justify-end">
                        <Button class="bg-[#a0a0a0] hover:bg-[#767676] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#a0a0a0] ring-inset"
                          onClick={handleNavigate25}
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

                        <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                          size="xs"
                          type="submit"
                          onClick={handleNavigate22}>
                          <Row className="gap-2 items-center">
                            <Icon path={mdiCheck}
                              title="Bag"
                              size={1.0}
                              color="white"
                            />
                            <Text className="text-lg cursor-pointer">Create Item</Text>
                          </Row>
                        </Button>

                      </Row>
                    </Column>
                  </Row>
                  <line className="bg-gray_200 my-[10px] h-[1.5px] w-[1250px]" />
                  <Row className="mt-4">
                    <Column className="w-[60%] m-2 font-regular">
                      <div className="space-y-3">
                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Item
                          </Text>
                          <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            required
                            placeholder="Tour Name "
                          ></input>
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Starting From
                          </Text>
                          <div class="container flex mx-auto  ">
                            <div class="flex border-2 w-[63%] h-9">
                              <button class="text-[14px] flex items-center justify-center px-4 border-r bg-gray_100">
                                RM
                              </button>
                              <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Starting From" />
                            </div>
                          </div>
                        </Row>

                        <Row className="space-x-4">
                          <Text className="text-[#667E99] w-[22%] text-right">
                            Visibility
                          </Text>
                          <Row className="gap-2 items-center">
                            <Switch className="ml-2" />
                            <Text>Public</Text>
                          </Row>
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Tags
                          </Text>
                          <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            required
                            placeholder="Enter tags..."
                          ></input>
                        </Row>

                        <Row className="space-x-4">
                          <Text className="text-[#667E99] w-[22%] text-right">
                            Collect Reviews
                          </Text>
                          <Row className="gap-2 items-center">
                            <Switch className="ml-2" />
                            <Text>Yes</Text>
                          </Row>
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Provided By
                          </Text>
                          <select
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-9 w-[100%] 2xl:mt-2"
                          >
                            <option value="" disabled selected hidden>Select Service Provider</option>
                            <option className="text-[#428bca]" disabled>Tour Supplier</option>
                            <option class="items-center">Travelport (galileo.helpdesk@travelportgdshelp.com)</option>
                          </select>
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Location
                          </Text>
                          <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            required
                            placeholder="Select Users"
                          ></input>
                        </Row>

                      </div>
                    </Column>
                  </Row>

                  <text className="mt-10 text-black text-[20px] font-regular">
                    Location
                  </text>
                  <line className="bg-gray_200 my-[10px] h-[1.5px] w-[100%]" />
                  <div className="w-[1250px]">
                    <img src="/images/map.png" />
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-[#C1C1C1] py-2 px-4 w-[170px] mt-2 cursor-not-allowed">
                      <Row>
                        <Icon
                          path={mdiMapMarker}
                          title="mapmark"
                          className="w-2 h-2 mr-2 mt-0.5 text-bold items-center text-white"
                          size={0.7}
                          horizontal-180
                        />
                        <text className="text-white text-[13.5px]">
                          Remove Location
                        </text>
                      </Row>
                    </button>
                  </div>

                  <Row className="pt-8">
                    <Text className="text-[19px] m-1 font-regular">
                      Details
                    </Text>
                    <Text className="text-[14px] m-1 pt-2 font-light">
                      The descriptions for this package
                    </Text>
                  </Row>

                  <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                  <Row>
                    <Column className="w-[93%] m-2 font-regular">
                      <div className="space-y-3">
                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Overview
                          </Text>
                          <TextEditor />
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Highlights
                          </Text>
                          <TextEditor />
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Itinerary
                          </Text>
                          <TextEditor />
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Pick Up
                          </Text>
                          <TextEditor />
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Drop Off
                          </Text>
                          <TextEditor />
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Bring
                          </Text>
                          <TextEditor />
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Inclusions
                          </Text>
                          <TextEditor />
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Exclusions
                          </Text>
                          <TextEditor />
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Check-In
                          </Text>
                          <TextEditor />
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Cancel Policy
                          </Text>
                          <TextEditor />
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Additional Info
                          </Text>
                          <TextEditor />
                        </Row>
                      </div>
                    </Column>
                  </Row>

                  <Row className="pt-8">
                    <Text className="text-[19px] m-1 font-regular">
                      Tickets
                    </Text>
                    <Text className="text-[14px] m-1 pt-2 font-light">
                      Ticket details specific to this item
                    </Text>
                  </Row>

                  <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                  <Row>
                    <Column className="w-[93%] m-2 font-regular">
                      <div className="space-y-3">
                        <Row className="space-x-3 w-full">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Type
                          </Text>
                          <Column className="space-y-2 w-[100%]">
                            <select className=" font-normal text-gray_500 justify-center items-center not-italic border border-gray-800 text-[14px] placeholder:required w-[40%]"
                            >
                              <option selected value="ticeach">Ticket for each group member</option>
                              <option value="ticper">One ticket per booking</option>
                            </select>
                            <Row className="space-x-3 w-[400px]">
                              <SelectBook
                                className="py-1 px-1 bg-[#6FB3E0] w-[100%] hover:bg-[#4F99C6] text-[12px] placeholder-white border border-transparent text-white focus:ring-[#ed8709] block flex-1 text-sm dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                                placeholderClassName="text-white"
                                name="GroupSixtyThree"
                                placeholder="Booking Vars"
                                isSearchable={false}
                                isMulti={true}
                                indicator={
                                  <Img
                                    src="images/img_arrowdown_6X10.svg"
                                    className="text-white lg:w-[7px] lg:h-[5px] lg:mr-[8px] xl:w-[8px] xl:h-[6px] xl:mr-[10px] 2xl:w-[10px] 2xl:h-[7px] 2xl:mr-[12px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[14px]"
                                    alt="arrow_down"
                                  />
                                }
                                shape="RoundedBorder2"
                                size="md"
                                variant="OutlineGray700"
                              >
                              </SelectBook>
                              <SelectItem
                                className=" ml-4 py-1 px-1 bg-[#6FB3E0] w-[50px] hover:bg-[#4F99C6] text-[12px] placeholder-white border border-transparent text-white focus:ring-[#ed8709] block flex-1 text-sm dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                                placeholderClassName="text-white"
                                name="GroupSixtyThree"
                                placeholder="Item Vars"
                                isSearchable={false}
                                isMulti={true}
                                indicator={
                                  <Img
                                    src="images/img_arrowdown_6X10.svg"
                                    className="text-white lg:w-[7px] lg:h-[5px] lg:mr-[8px] xl:w-[8px] xl:h-[6px] xl:mr-[10px] 2xl:w-[10px] 2xl:h-[7px] 2xl:mr-[12px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[14px]"
                                    alt="arrow_down"
                                  />
                                }
                                shape="RoundedBorder2"
                                size="md"
                                variant="OutlineGray700"
                              >
                              </SelectItem>
                            </Row>
                          </Column>
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[20%] text-right">
                            Content
                          </Text>
                          <TextEditor />
                        </Row>

                      </div>
                    </Column>
                  </Row>

                  <Row className="pt-8">
                    <Text className="text-[19px] m-1 font-regular">
                      Waiver
                    </Text>
                    <Text className="text-[14px] m-1 pt-2 font-light">
                      Set item-specific waiver details
                    </Text>
                  </Row>
                  <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                  <Row className="mt-4">
                    <Column className="w-[60%] m-2 font-regular">
                      <div className="space-y-3">
                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Use Waiver
                          </Text>
                          <Switch className="w-[100%]" />
                        </Row>
                      </div>
                    </Column>
                  </Row>

                  <Row className="pt-8">
                    <Text className="text-[19px] m-1 font-regular">
                      Cross-Sell Inventory
                    </Text>
                    <Text className="text-[14px] m-1 pt-2 font-light">
                      Present a box to customers for purchasing complementary inventory
                    </Text>
                  </Row>
                  <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                  <Row className="mt-4">
                    <Column className="w-[60%] m-2 font-regular">
                      <div className="space-y-3">
                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Display Title
                          </Text>
                          <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            required
                            placeholder="The Title for presentation box"
                          ></input>
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Description
                          </Text>
                          <input className="ml-6 bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-[40px] w-[100%]"
                            placeholder=""
                            type="text"
                            size="sm"
                            required
                          />
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Items
                          </Text>
                          <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            required
                            placeholder="Select Inventory"
                          ></input>
                        </Row>
                      </div>
                    </Column>
                  </Row>

                  <Row className="pt-8">
                    <Text className="text-[19px] m-1 font-regular">
                      Search Engine Display
                    </Text>
                    <Text className="text-[14px] m-1 pt-2 font-light">
                      Metadata sent to search engines
                    </Text>
                  </Row>
                  <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                  <Row className="mt-4">
                    <Column className="w-[60%] m-2 font-regular">
                      <div className="space-y-3">
                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            SEO Title
                          </Text>
                          <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            required
                            placeholder="Limited to 70 characters"
                          ></input>
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Meta Description
                          </Text>
                          <input
                            className="bg-gray-50 border border-gray-300 items-start text-gray-900 text-sm focus:ring-blue-500 focus:border-[#e2711d] block h-[70px] w-[100%]"
                            type="text"
                            size="smSrc"
                            required
                            placeholder="Limited to 156 characters"
                          ></input>
                        </Row>

                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Preview
                          </Text>
                          <Column className="w-[100%] items-start">
                            <Text classname="w-full font-medium">https://Syawalni.rezgo.com › details › 1234 › blank</Text>
                            <Text className="m-1 w-[100%] text-2xl font-normal text-[#240046]">SpeedProp</Text>
                            <Text className="m-1 w-[100%]">No description.</Text>
                          </Column>
                        </Row>
                      </div>
                    </Column>
                  </Row>

                  <Row className="pt-8">
                    <Text className="text-[19px] m-1 font-regular">
                      Related Inventory
                    </Text>
                    <Text className="text-[14px] m-1 pt-2 font-light">
                      Show inventory related to this item
                    </Text>
                  </Row>
                  <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                  <Row className="mt-4">
                    <Column className="w-[60%] m-2 font-regular">
                      <div className="space-y-3">
                        <Row className="space-x-3">
                          <Text className="text-[#667E99] w-[30%] text-right">
                            Items
                          </Text>
                          <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            required
                            placeholder="Select Tour"
                          ></input>
                        </Row>
                      </div>
                    </Column>
                  </Row>

                  <Row className="pt-8">
                    <Text className="text-[19px] m-1 font-regular">
                      Images
                    </Text>
                  </Row>

                  <Line className="bg-gray_700_33 h-[1.5px] w-[100%]" />
                  <Stack className="font-ptsans lg:h-[138px] xl:h-[190px] 2xl:h-[222px] 3xl:h-[280px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[28px] 3xl:mt-[29px] w-[93%]">
                    <div class="flex justify-center items-center w-full">
                      <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col justify-center items-center pt-5 pb-6">
                          <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><Text class="text-xl">Drop images here </Text><br></br><Text class="text-xl">or click to select file</Text></p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                      </label>
                    </div>
                  </Stack>
                  <Text className="m-2 text-center text-xl font-light w-[100%]">For best results, images should be 1280 x 720 or larger</Text>


                  <button className="mt-16 bg-[#428BCA] py-2 px-4 hover:bg-[#1B6AAA] w-[130px]"
                    onClick={handleNavigate22} >
                    <Row>
                      <Icon
                        path={mdiCheck}
                        title="alertcir"
                        className="w-2 h-2 mr-2 mt-0.5 text-bold items-center text-white"
                        size={0.7}
                        horizontal-180
                      />
                      <text className="text-white text-[13.5px]">
                        Create Item
                      </text>
                    </Row>
                  </button>
                  

                </Column>
              </Row>
          </Column>
        </>
        );
};

        export default CreateTourPage;
