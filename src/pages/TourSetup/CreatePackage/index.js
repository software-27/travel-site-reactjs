
import React from "react";
import { Column, Row, Text, Line, Button, Img, Stack } from "components";
import TextEditor from "components/TextEditor";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import { mdiCheck, mdiCloseThick, mdiPlusThick } from '@mdi/js';
import Icon from "@mdi/react";
import { useState } from 'react';


const CreatePackage = () => {
  /* const handleshow = (e) => {
     const getshow = e.target.value;
     setShowhide(getshow);
   };*/

  const navigate = useNavigate();

  //button cancel navigate to ticket pools
  function handleNavigate1() {
    navigate("/ticketpools");
  }

    //button navigate to PackageDetails
    function handleNavigate25() {
      navigate("/t21");
    }

  //for switch 
  const [enabled, setEnabled] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

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
                Create Package
              </Column>
              <Column className="w-[38%] text-white ">
                <Row className="justify-end">
                  <Button class="bg-[#a0a0a0] hover:bg-[#767676] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#a0a0a0] ring-inset"
                    onClick={handleNavigate1}
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
                    onClick={handleNavigate25}>
                    <Row className="gap-2 items-center">
                      <Icon path={mdiCheck}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Create Package</Text>
                    </Row>
                  </Button>

                </Row>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <Row className="mt-4">
              <Column className="w-[60%] m-2 font-regular">
                <div className="space-y-3">
                  <Row className="space-x-3 items-center">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Name
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Package Name "
                    ></input>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                        Starting From
                      </Text>
                          <div class="container flex mx-auto  ">
                                <div class="flex border-2 w-[63%] h-9">
                                    <button class="text-[14px] flex items-center justify-center px-7 border-r bg-gray_100">
                                    RM
                                    </button>
                                    <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Starting From"/>
                                </div>
                            </div>
                    </Row>

                    <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                    Price Reduction
                      </Text>
                          <div class="container flex mx-auto  ">
                                <div class="flex border-2 w-[63%] h-9">
                                <button class="text-[14px] flex items-center justify-center px-4 border-r bg-gray_100">
                                    Minus
                                    </button>
                                    <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Package Reduction"/>
                                    <button class="text-[14px] flex items-center justify-center px-4 border-r bg-gray_100">
                                    %
                                    </button>
                                </div>
                            </div>
                    </Row>

                  <Row className="space-x-4">
                    <Text className="text-[#667E99] w-[22%] text-right">
                      Visibility
                    </Text>
                    <div className="relative flex flex-col-reverse items-right justify-right overflow-hidden w-[20%]">
                      <div className="flex">
                        <label class="inline-flex relative items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            //   placeholder="Private"
                            checked={enabled}
                            readOnly
                          />

                          <div
                            onClick={() => {
                              setEnabled(!enabled);
                            }}
                            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"
                          ></div>

                          <span className="ml-2 text-sm font-medium text-gray-900">
                            Private
                          </span>
                        </label>
                      </div>
                    </div>
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

                </div>
              </Column>
            </Row>
            <Column className="mt-16">
              <Row>
                <Text className="text-[20px] m-1 font-regular">
                  0 Package Items
                </Text>
              </Row>
              <Row>
              <Text className="text-[12px] pt-2 font-light">
                A customer will book one option from each of the items in this package
              </Text>
              </Row>
            </Column>
            

            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <div className="mr-3">
              <Column className="w-[93%]">
                <Row className="justify-center gap-4 m-1">
                  <Text className="items-center text-xl font-normal text-[#667E99]">Price Tiers</Text>
                  <Text className="items-center text-xl font-light">Package price tiers are based off your first option, and must be available on all options</Text>
                </Row>
                <Button className="m-1 w-fit items-center h-fit mr-2 py-2.5 px-3 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                  size="xs"
                  type="submit"
                  onClick={() => setShowModal(true)}>
                  <Row className="gap-2 items-center">
                    <Icon path={mdiPlusThick}
                      title="Bag"
                      size={1.0}
                      color="white"
                    />
                    <Text className="text-lg">Add Package Item</Text>
                  </Row>
                </Button>
                {showModal ? (
                  <>
                    <div
                      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >

                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 bg-[#428BCA]">
                            <h3 className="text-2xl font-semibold text-white">
                              Add Package Items
                            </h3>
                            <Img
                              src="images/img_close_36X33.svg"
                              className=" w-5 h-5 ml-20 mr-50 mt-1 xl:ml-[220px] items-center"
                              onClick={() => setShowModal(false)}
                              alt="close One"
                            />
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <div class="border border-[#E7E7E7] p-[100px] h-[300px]">
                              <Column className="items-center">
                                <Text className="mb-5 text-gray-400">
                                  No package
                                </Text>
                                {/* <Text className="text-gray-400">
                                  You can save a search from the results view
                                </Text> */}
                              </Column>
                            </div>

                            <div className="mt-2">
                              <Row className="mt-6 bg-gray_100 h-fit justify-end items-center w-[100%] mr-6 pb-5 mr-3">
                                <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset ml-3 mt-3"
                                  size="xs"
                                  type="submit">
                                  <Row className="gap-2 items-center">
                                    <Icon path={mdiCheck}
                                      title="Bag"
                                      size={1.0}
                                      color="white"
                                    />
                                    <Text className="text-lg cursor-pointer">Add These Options</Text>
                                  </Row>
                                </Button>
                              </Row>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </Column>
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
                Search Engine Display
              </Text>
              <Text className="text-[14px] m-1 pt-2 font-light">
                Metadata sent to search engines
              </Text>
            </Row>

            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <Row>
              <Column className="w-[93%] m-2 font-regular">
                <div className="space-y-3">
                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[20%] text-right">
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
                    <Text className="text-[#667E99] w-[20%] text-right">
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
                    <Text className="text-[#667E99] text-right w-[20%]">
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

            <div className="mr-3">
              <Row className="mt-6 bg-gray_100 h-fit justify-start items-start w-[100%] mr-6 mb-10 pb-5 mr-3">
                <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset ml-3 mt-3"
                  size="xs"
                  type="submit"
                  onClick={handleNavigate25}>
                  <Row className="gap-2 items-center">
                    <Icon path={mdiCheck}
                      title="Bag"
                      size={1.0}
                      color="white"
                    />
                    <Text className="text-lg cursor-pointer">Create Package</Text>
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

export default CreatePackage;
