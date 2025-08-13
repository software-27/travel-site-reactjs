
import React from "react";
import { Column, Row, Text, Line, Button, Img, Stack } from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { RxDoubleArrowRight, RxChevronLeft } from "react-icons/rx";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import { mdiCloudArrowUp, mdiChevronLeft, mdiPlusThick, mdiPencil, mdiTrashCan, mdiEarth,
  mdiLaptop, mdiLinkVariant } from '@mdi/js';
import Icon from "@mdi/react";
import { useState } from 'react';


const PackageDetails = () => {
  /* const handleshow = (e) => {
     const getshow = e.target.value;
     setShowhide(getshow);
   };*/

  const navigate = useNavigate();

  //button cancel navigate to ticket pools
  function handleNavigate1() {
    navigate("/ticketpools");
  }

    //button navigate to Package
    function handleNavigate26() {
      navigate("/t9");
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
              <Row className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light items-center">
                Package
                <RxDoubleArrowRight className="items-start ml-2 mt-4 h-5 w-5 text-[#667E99] items-center" />
                <Text className="text-[15px] ml-2 mt-2 text-[#667E99]"> Package 1 - 3 days 2 nights Pe...</Text>
              </Row>
              <Column className="w-[38%] text-white ">
                <Row className="justify-end">
                  <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                    size="xs"
                    type="submit"
                    onClick={handleNavigate26}>
                    <Row className="gap-2 items-center">
                      <Icon path={mdiChevronLeft}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Back to list</Text>
                    </Row>
                  </Button>

                  <Button class="items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                    size="xs"
                    type="submit">
                    <Row className="gap-2 items-center">
                      <Icon path={mdiCloudArrowUp}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Publish</Text>
                    </Row>
                  </Button>

                  <Button class="items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white bg-[#f9c74f] hover:bg-[#dea54b] ring-4 ring-[#f9c74f] ring-inset"
                    size="xs"
                    type="submit">
                    <Row className="gap-2 items-center">
                      <Icon path={mdiPencil}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Edit</Text>
                    </Row>
                  </Button>

                  <Button class="items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white  bg-[#D15B47] hover:bg-[#a5402d] ring-4 ring-[#D15B47] ring-inset"
                    size="xs"
                    type="submit">
                    <Row className="gap-2 items-center">
                      <Icon path={mdiTrashCan}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Delete</Text>
                    </Row>
                  </Button>

                </Row>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <Row className="mt-4">
              <Column className="w-[60%] m-2 font-regular">
                <div className="space-y-3">
                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Name
                    </Text>
                    <Text className="text-black w-[100%]">
                      Package 1 - 3 days 2 nights Penang trip offer
                    </Text>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      SKU
                    </Text>
                    <Text className="text-black w-[100%]">
                      333172
                    </Text>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Starting From
                    </Text>
                    <Text className="text-black w-[100%]">
                      RM 222.00
                    </Text>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Price Reduction
                    </Text>
                    <Text className="text-black w-[100%]">
                      10%
                    </Text>
                  </Row>

                  <Row className="space-x-4">
                    <Text className="text-[#667E99] w-[22%] text-right">
                      Visibility
                    </Text>
                    <Button class="items-center h-fit py-0.5 px-2 mr-2 rounded-full text-sm font-medium text-white bg-[#428BCA]"
                      size="xs"
                      type="submit">
                      <Row className="gap-1 items-center">
                        <Icon path={mdiEarth}
                          title="Bag"
                          size={0.8}
                          color="white"
                        />
                        <Text className="text-md cursor-pointer">Public</Text>
                      </Row>
                    </Button>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Tags
                    </Text>
                    <Text className="text-black w-[100%]">
                      penang
                    </Text>
                  </Row>

                </div>
              </Column>
              <Column className="w-[40%] items-end gap-2">
              <Button class="items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white  bg-[#6FB3E0] hover:bg-[#428BCA] ring-4 ring-[#6FB3E0] ring-inset"
                    size="xs"
                    type="submit">
                    <Row className="gap-2 items-center">
                      <Icon path={mdiLaptop}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">View on Website</Text>
                    </Row>
                  </Button>
                  <Button class="justify-start h-fit w-[30%] py-2.5 px-3 mr-2 text-sm font-medium text-white bg-[#6FB3E0] hover:bg-[#428BCA] ring-4 ring-[#6FB3E0] ring-inset"
                    size="xs"
                    type="submit">
                    <Row className="gap-2 items-start">
                      <Icon path={mdiLinkVariant}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Link To Item</Text>
                    </Row>
                  </Button>
              </Column>
            </Row>

            <Column className="mt-16">
              <Row>
                <Text className="text-[20px] m-1 font-regular">
                  1 Package Items
                </Text>
              </Row>
            </Column>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <div className="">
              <Column className="w-[100%]">
                <Column className="w-[60%] m-2 font-regular">
                  <Row className="space-x-4">
                    <Text className="text-[#667E99] w-[22%] text-right">
                      Price Tiers
                    </Text>
                    <Button class="items-center h-fit py-0.5 px-2 mr-2 rounded-full text-sm font-medium text-white bg-[#87B87F]"
                      size="xs"
                      type="submit">
                      <Row className="gap-2 items-center">
                        <Text className="text-md cursor-pointer">#1 Adult</Text>
                      </Row>
                    </Button>

                    <Button class="items-center h-fit py-0.5 px-2 mr-2 rounded-full text-sm font-medium text-white bg-[#87B87F]"
                      size="xs"
                      type="submit">
                      <Row className="gap-2 items-center">
                        <Text className="text-md cursor-pointer">#2 Child</Text>
                      </Row>
                    </Button>
                  </Row>
                </Column>

                <Row className="m-2 items-center">
                <Column className="w-[50%]">
                  <Row  className="space-x-4 m-4 items-center">
                <span className="rounded-full w-4 h-4 bg-[#87B87F]"></span>
                <Text className="text-[14px] font-light">Penang Hotel ABC</Text>
                </Row>
                </Column>
                <Column className="w-[50%] items-end mr-2 m-2">
                <Text className="text-[14px] font-light">2 Options</Text>
                </Column>
                </Row>
                <Line className="bg-gray_700_33 mb-[10px] h-[0.2px] w-[100%]" />

                <Column className="w-[60%] m-2 font-regular">
                  <Row className="space-x-4">
                    <Text className="text-[#667E99] w-[22%] text-right">
                      Option
                    </Text>
                   <Text>Option 1- 3D1N (2A) (332895)</Text>
                   </Row>
                  <Row className="ml-60 m-2">
                  <Button class="items-center h-fit py-0.5 px-2 mr-2 rounded-full text-sm font-medium text-white bg-[#888888]"
                      size="xs"
                      type="submit">
                      <Row className="gap-2 items-center">
                        <Text className="text-md cursor-pointer">#1 Adult</Text>
                      </Row>
                    </Button>

                    <Button class="items-center h-fit py-0.5 px-2 mr-2 rounded-full text-sm font-medium text-white bg-[#888888]"
                      size="xs"
                      type="submit">
                      <Row className="gap-2 items-center">
                        <Text className="text-md cursor-pointer">#2 Child</Text>
                      </Row>
                    </Button>
                  </Row>
                  </Column>

                   <Column className="w-[60%] m-2 font-regular">
                  <Row className="space-x-4">
                    <Text className="text-[#667E99] w-[22%] text-right">
                      Option
                    </Text>
                   <Text>Option 2 - 3D1N (2A1C) (332896)</Text>
                   </Row>
                   <Row className="ml-60 m-2">
                  <Button class="items-center h-fit py-0.5 px-2 mr-2 rounded-full text-sm font-medium text-white bg-[#888888]"
                      size="xs"
                      type="submit">
                      <Row className="gap-2 items-center">
                        <Text className="text-md cursor-pointer">#1 Adult</Text>
                      </Row>
                    </Button>

                    <Button class="items-center h-fit py-0.5 px-2 mr-2 rounded-full text-sm font-medium text-white bg-[#888888]"
                      size="xs"
                      type="submit">
                      <Row className="gap-2 items-center">
                        <Text className="text-md cursor-pointer">#2 Child</Text>
                      </Row>
                    </Button>
                  </Row>
                  </Column>
                  

              </Column>
            </div>


            <Row className="pt-8">
              <Text className="text-[19px] m-1 font-regular">
                Details
              </Text>
            </Row>

            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

            <Row className="pt-16">
              <Text className="text-[19px] m-1 font-regular">
                Search Engine Display
              </Text>
            </Row>

            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <Row>
              <Column className="w-[93%] m-2 font-regular">
                <div className="space-y-3">
                  
                  <Row className="space-x-3">
                    <Text className="text-[#667E99] text-right w-[20%]">
                      Preview
                    </Text>
                    <Column className="w-[100%] items-start">
                      <Text classname="w-full font-medium">https://Syawalni.rezgo.com › details › 333172 › package-1-3-days-2-nights-penang-trip-offer</Text>
                      <Text className="m-1 w-[100%] text-2xl font-normal text-[#1A0DAB]">Package 1 - 3 days 2 nights Penang trip offer</Text>
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

            <Text className="space-y-3 m-2 text-start text-2xl font-medium w-[100%] text-[#858585]">Your image gallery is empty</Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default PackageDetails;
