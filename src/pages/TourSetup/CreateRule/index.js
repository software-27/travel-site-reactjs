
import React from "react";
import { Column, Row, Text, Line, Button, Img } from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { mdiCheck, mdiCloseThick, mdiCalendarMonth, mdiCalendarBlank, mdiCalendarMinus, mdiClockOutline, mdiAccountGroup, mdiTag, mdiCart, mdiBagSuitcase,
  mdiSitemap, mdiFormatListBulleted, mdiCash, mdiContentCut } from '@mdi/js';
import Icon from "@mdi/react";
import Topbtns from "components/Topbutton/index";


const CreateRule = () => {

  const navigate = useNavigate();

  //button cancel navigate to ticket pools
  function handleNavigate1() {
    navigate("/t26");
  }

  //popup funct.
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Column>
            <Topbtns/>
          </Column>

        </Row>
        <Row className="w-[100%] mt-[8px]">
          <Sidebar />
          <Column className="p-2 bg-white h-auto w-[100%]">
            <Row className="mb-4 items-center">
              <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-light">
                Create Rule
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

                  <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset"
                    size="xs"
                    type="submit"
                    onClick={handleNavigate1}>
                    <Row className="gap-2 items-center">
                      <Icon path={mdiCheck}
                        title="Bag"
                        size={1.0}
                        color="white"
                      />
                      <Text className="text-lg cursor-pointer">Create Rule</Text>
                    </Row>
                  </Button>

                </Row>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <Row>
              <Column className="w-[60%] m-2 font-regular">
                <div className="space-y-3">
                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Rule Name
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Give this rule a name "
                    ></input>
                  </Row>

                  <Row className="items-center space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                      Description
                    </Text>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                      type="text"
                      size="smSrc"
                      required
                      placeholder="Describe what this role does"
                    ></input>
                  </Row>
                </div>
              </Column>
            </Row>

            <Row>
              <Text className="text-[19px] m-1 font-regular">
                IF
              </Text>
              <Text className="text-[14px] m-1 pt-1 font-light">
                All these conditions are met...
              </Text>
            </Row>

            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <div className="mr-3">
              <Button class=" items-center h-fit w-50 py-2.5 px-4 mr-2 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset ml-3 mt-3"
                size="xs"
                type="submit"
                onClick={() => setShowModal(true)}>
                <Row className="gap-2 items-center">
                  < AiFillPlusCircle className="h-5 w-5 text-white" />
                  <Text className="text-lg cursor-pointer">Add Condition</Text>
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
                            IF...
                          </h3>
                          <Img
                            src="images/img_close_36X33.svg"
                            className=" w-5 h-5 mr-50 mt-1 xl:ml-[250px]"
                            onClick={() => setShowModal(false)}
                            alt="close One"
                          />
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <div class="">
                            <Column className="items-start gap-2">
                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiCalendarMonth}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">The date being booked is...</Text>
                                </Row>
                              </Button>
                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiCalendarBlank}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">Today's date is...</Text>
                                </Row>
                              </Button>
                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiCalendarMinus}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">The day of the week is...</Text>
                                </Row>
                              </Button>
                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiClockOutline}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">The time until the date being booked is...</Text>
                                </Row>
                              </Button>
                              <Line className="bg-gray_700_33 h-[1.5px] w-[100%]" />

                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiAccountGroup}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">The passanger counted being booked is...</Text>
                                </Row>
                              </Button>
                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiTag}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">Promotional code is...</Text>
                                </Row>
                              </Button>
                              <Line className="bg-gray_700_33 h-[1.5px] w-[100%]" />

                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiBagSuitcase}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">Inventory being booked is...</Text>
                                </Row>
                              </Button>
                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiCart}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">Inventory already in cart is...</Text>
                                </Row>
                              </Button>
                            </Column>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>

            <Row className="pt-5">
              <Text className="text-[19px] m-1 font-regular">
                THEN
              </Text>
              <Text className="text-[14px] m-1 pt-2 font-lightnpm">
                do these actions...
              </Text>
            </Row>

            <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
            <div className="mr-3">
              <Button class=" items-center h-fit w-50 py-2.5 px-4 mr-2 text-sm font-medium text-white bg-[#87B87F] hover:bg-[#6a994e] ring-4 ring-[#87B87F] ring-inset ml-3 mt-3"
                size="xs"
                type="submit"
                onClick={() => setShowModal2(true)}>
                <Row className="gap-2 items-center">
                  < AiFillPlusCircle className="h-5 w-5 text-white" />
                  <Text className="text-lg cursor-pointer">Add Condition</Text>
                </Row>
              </Button>
              {showModal2 ? (
                <>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  >

                    <div className="relative w-auto my-6 mx-auto max-w-md">
                      {/*content*/}
                      <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 bg-[#428BCA]">
                          <h3 className="text-2xl font-semibold text-white">
                            THEN...
                          </h3>
                          <Img
                            src="images/img_close_36X33.svg"
                            className=" w-5 h-5 ml-20 mr-50 mt-1 xl:ml-[220px] items-center"
                            onClick={() => setShowModal2(false)}
                            alt="close One"
                          />
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <div class=" p-[]">
                            <Column className="items-start gap-2">
                            <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#f9c74f] hover:bg-[#dea54b] ring-4 ring-[#f9c74f] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiClockOutline}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">Set availability to...</Text>
                                </Row>
                              </Button>
                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#f9c74f] hover:bg-[#dea54b] ring-4 ring-[#f9c74f] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiAccountGroup}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">Set min/max to...</Text>
                                </Row>
                              </Button>
                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#f9c74f] hover:bg-[#dea54b] ring-4 ring-[#f9c74f] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiContentCut}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">Set cutoff to...</Text>
                                </Row>
                              </Button>
                              <Line className="bg-gray_700_33 h-[1.5px] w-[100%]" />

                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#f9c74f] hover:bg-[#dea54b] ring-4 ring-[#f9c74f] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiSitemap}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">Link availability.</Text>
                                </Row>
                              </Button>
                              <Line className="bg-gray_700_33 h-[1.5px] w-[100%]" />

                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#f9c74f] hover:bg-[#dea54b] ring-4 ring-[#f9c74f] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiFormatListBulleted}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">Add line items...</Text>
                                </Row>
                              </Button>
                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#f9c74f] hover:bg-[#dea54b] ring-4 ring-[#f9c74f] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiCash}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">Set all prices to...</Text>
                                </Row>
                              </Button>
                              <Button className="items-center h-fit w-full py-2.5 px-3 text-sm font-medium text-white bg-[#f9c74f] hover:bg-[#dea54b] ring-4 ring-[#f9c74f] ring-inset"
                                size="xs"
                                type="submit"
                              >
                                <Row className="items-center gap-1">
                                  <Icon path={mdiCart}
                                    title="Bag"
                                    size={1.0}
                                    color="white"
                                  />
                                  <Text className="font-normal text-lg">Set individual price to...</Text>
                                </Row>
                              </Button>
                            </Column>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>

            <div className="mr-3 mt-6">
              <Row className="mt-6 bg-gray_100 h-fit justify-start items-start w-[100%] mr-6 mb-10 pb-5 mr-3">
                <Button class=" bg-[#4C8FBD] hover:bg-[#006BB8] items-center h-fit py-2.5 px-3 mr-2 text-sm font-medium text-white ring-4 ring-[#4C8FBD] ring-inset ml-3 mt-3"
                  size="xs"
                  type="submit"
                  onClick={handleNavigate1}>
                  <Row className="gap-2 items-center">
                    <Icon path={mdiCheck}
                      title="Bag"
                      size={1.0}
                      color="white"
                    />
                    <Text className="text-lg cursor-pointer">Create Rule</Text>
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

export default CreateRule;
