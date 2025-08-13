
import React from "react";
import { Column, Row, Text, Line, Button, Img, Stack } from "components";
import TextEditor from "components/TextEditor";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { RxDoubleArrowRight, RxChevronLeft } from "react-icons/rx";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import { mdiCheck, mdiCloudArrowUp, mdiArrowLeft, mdiPlusCircle, mdiPencil, mdiTrashCan, mdiEarth,
  mdiLaptop, mdiLinkVariant, mdiArrowAll, mdiDotsVertical } from '@mdi/js';
import Icon from "@mdi/react";
import { useState } from 'react';


const TourDetails = () => {
  /* const handleshow = (e) => {
     const getshow = e.target.value;
     setShowhide(getshow);
   };*/

  const navigate = useNavigate();

  //button cancel navigate to ticket pools
  function handleNavigate1() {
    navigate("/t24");
  }

  //button navigate to tour
  function handleNavigate23() {
    navigate("/t6");
  }

    //button navigate to CreateOption
    function handleNavigate24() {
      navigate("/t23");
    }

    //button navigate to Option1
    function handleNavigate29() {
    navigate("/t24");
  }

     //button navigate to Option2
    function handleNavigate30() {
    navigate("/t25");
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
              <Row className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light items-center">
                Tour
                <RxDoubleArrowRight className="items-start ml-2 mt-4 h-5 w-5 text-[#667E99] items-center" />
                <Text className="text-[15px] ml-2 mt-2 text-[#667E99]">Penang Hotel ABC</Text>
              </Row>
              <Column className="w-[38%] text-white ">
                <Row className="justify-end">
                  <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                    size="xs"
                    type="submit"
                    onClick={handleNavigate23} >
                    <Row className="gap-2 items-center">
                      <Icon path={mdiArrowLeft}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Back to list</Text>
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
                      Item
                    </Text>
                    <Text className="text-black w-[100%]">
                    Penang Hotel ABC
                    </Text>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      SKU
                    </Text>
                    <Text className="text-black w-[100%]">
                    332895
                    </Text>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Starting From
                    </Text>
                    <Text className="text-black w-[100%]">
                    RM 99.99
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

                  <Row className="space-x-4">
                    <Text className="text-[#667E99] w-[22%] text-right">
                      Collect Reviews
                    </Text>
                    <Button class="items-center h-fit py-0.5 px-2 mr-2 rounded-full text-sm font-medium text-white bg-[#82AF6F]"
                      size="xs"
                      type="submit">
                      <Row className="gap-1 items-center">
                        <Icon path={mdiCheck}
                          title="Bag"
                          size={0.8}
                          color="white"
                        />
                        <Text className="text-md cursor-pointer">Yes</Text>
                      </Row>
                    </Button>
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
                  Bookable Options
                </Text>
              </Row>
            </Column>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <div className="">
              <Column className="w-[100%]">

                <Row className="m-1 items-center bg-white hover:bg-[#EBEBEB]"
                onClick={handleNavigate29}>
                <Column className="w-[30%]">
                <Row  className="space-x-4 m-4 items-center">
                <Icon path={mdiArrowAll}
                        title="Bag"
                        size={1.0}
                        color="#428BCA"
                      />
                <span className="rounded-full w-4 h-4 bg-[#87B87F]"></span>
                <Text className="text-[14px] font-light">Option 1 - 3D1N (2A)</Text>
                </Row>
                </Column>
                <Column className="w-[25%] items-end mr-2 m-2">
                <Text className="text-[14px] font-light">Unlimited</Text>
                </Column>

                <Column className="w-[25%] items-end mr-2 m-2">
                <Text className="text-[14px] font-light">Always Available</Text>
                </Column>

                <Column className="w-[25%] items-end mr-8 m-2">
                <Icon path={mdiDotsVertical}
                        title="Bag"
                        size={1.0}
                        color="#888888"
                      />
                </Column>
                </Row>

                <Row className="m-1 items-center bg-white hover:bg-[#EBEBEB]"
                onClick={handleNavigate30}>
                <Column className="w-[30%]">
                <Row  className="space-x-4 m-4 items-center">
                <Icon path={mdiArrowAll}
                        title="Bag"
                        size={1.0}
                        color="#428BCA"
                      />
                <span className="rounded-full w-4 h-4 bg-[#87B87F]"></span>
                <Text className="text-[14px] font-light">Option 2 - 3D1N (2A1C)</Text>
                </Row>
                </Column>
                <Column className="w-[25%] items-end mr-2 m-2">
                <Text className="text-[14px] font-light">Unlimited</Text>
                </Column>

                <Column className="w-[25%] items-end mr-2 m-2">
                <Text className="text-[14px] font-light">Always Available</Text>
                </Column>

                <Column className="w-[25%] items-end mr-8 m-2">
                <Icon path={mdiDotsVertical}
                        title="Bag"
                        size={1.0}
                        color="#888888"
                      />
                </Column>
                </Row>   
                <Button className="m-2 w-fit items-center h-fit mr-2 py-2.5 px-3 font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                  size="xs"
                  type="submit"
                  onClick={handleNavigate24}
                  >
                  <Row className="gap-2 items-center">
                    <Icon path={mdiPlusCircle}
                      title="Bag"
                      size={1.0}
                      color="white"
                    />
                    <Text className="text-lg">Create Option</Text>
                  </Row>
                </Button>             

              </Column>
            </div>


            <Row className="pt-8">
              <Text className="text-[19px] m-1 font-regular">
                Location
              </Text>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <Img
                      src="images/map.png"
                      className="map mt-4"
                      alt="location"
                    />
            
            <Row className="pt-8">
              <Text className="text-[19px] m-1 font-regular">
                Details
              </Text>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

            <Row className="pt-12">
              <Text className="text-[19px] m-1 font-regular">
                Tickets
              </Text>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <Row>
              <Column className="w-[93%] m-2 font-regular">
                <div className="space-y-3">
                  
                  <Row className="space-x-3">
                    <Text className="text-[#667E99] text-right w-[20%]">
                      Type
                    </Text>
                    <Column className="w-[100%] items-start">
                      <Text classname="w-full font-medium">Tickets for each group member</Text>
                    </Column>
                  </Row>
                </div>
              </Column>
            </Row>

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
                    SEO Title
                    </Text>
                    <Column className="w-[100%] items-start">
                      <Text classname="w-full font-medium">Penang Hotel</Text>
                    </Column>
                  </Row>

                  <Row className="space-x-3">
                  <Text className="text-[#667E99] text-right w-[20%]">
                    Meta Description
                    </Text>
                    <Column className="w-[100%] items-start">
                      <Text classname="w-full font-medium">Penang Hotel ABC</Text>
                    </Column>
                  </Row>

                  <Row className="space-x-3">
                    <Text className="text-[#667E99] text-right w-[20%]">
                      Preview
                    </Text>
                    <Column className="w-[100%] items-start">
                      <Text classname="w-full font-medium">https://Syawalni.rezgo.com › details › 332895 › penang-hotel-abc</Text>
                      <Text className="m-1 w-[100%] text-2xl font-normal text-[#1A0DAB]">Penang Hotel</Text>
                      <Text className="m-1 w-[100%]">Penang Hotel ABC</Text>
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

export default TourDetails;
