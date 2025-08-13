import React from "react";
import { Row,Text,Button,Switch,Column,Line } from "components/index";
import { FaStream } from "react-icons/fa";


  const Customize2= ()=> {
    const [showModal3, setShowModal3] = React.useState(false);
     return(
        <>
        <Button onClick={() => setShowModal3(true)} class=" bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-8 w-[fit] mx-2 px-2">
                      <Row className="items-center">
                        <FaStream className="pr-2 h-5 w-5 text-white" />
                          <Text
                            className="text-white cursor-pointer"
                            variant="body5"
                          >
                            Customize
                          </Text>
                        </Row>
                    </Button>

                    {showModal3 ? (
                        <>
                          <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                          >
                            
                            <div className="relative w-auto my-6 mx-auto max-w-3xl w-[500px]">
                              {/*content*/}
                              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 bg-[#428BCA]">
                                  <h3 className="text-2xl font-semibold text-white">
                                    Customize Manifest
                                  </h3>
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal3(false)}
                                  >
                                    <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      ×
                                    </span>
                                  </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto ">
                                  <div class="border border-[#E7E7E7] p-4 overflow-y-scroll h-[400px]">
                                    <Column className="items-start">
                                      <div class="">
                                        <text className="mb-5 text-gray-400 text-[20px]">
                                          Left Side
                                        </text>
                                        <Line className="bg-gray_700_33 h-[0.5px] w-[400px] mb-4" />
                                        <Row>
                                          <text className="text-black text-[13.5px]">
                                            Billing Side
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[280px] items-end"
                                          />
                                        </Row>
                                        <Row className="mt-3">
                                          <text className="text-black text-[13.5px]">
                                            PAX Name
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[286px] items-end"
                                          />
                                        </Row>
                                        <Row className="mt-3">
                                          <text className="text-black text-[13.5px]">
                                            PAX Phone
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[284px] items-end"
                                          />
                                        </Row>
                                        <Row className="mt-3">
                                          <text className="text-black text-[13.5px]">
                                            PAX Email
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[287px] items-end"
                                          />
                                        </Row>
                                        <Row className="mt-3 mb-6">
                                          <text className="text-black text-[13.5px]">
                                            Transaction Number
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[230px] items-end"
                                          />
                                        </Row>
                                        <text className="mt-6 mb-5 text-gray-400 text-[20px]">
                                          Right Side
                                        </text>
                                        <Line className="bg-gray_700_33 h-[0.5px] w-[400px] mb-4" />
                                        <Row>
                                          <text className="text-black text-[13.5px]">
                                            Desk Name
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[280px] items-end"
                                          />
                                        </Row>
                                        <Row className="mt-3">
                                          <text className="text-black text-[13.5px]">
                                            Desk ID
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[301px] items-end"
                                          />
                                        </Row>
                                        <Row className="mt-3">
                                          <text className="text-black text-[13.5px]">
                                            Confirmation Number
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[220px] items-end"
                                          />
                                        </Row>
                                        <Row className="mt-3">
                                          <text className="text-black text-[13.5px]">
                                            Booking Owing
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[257px] items-end"
                                          />
                                        </Row>
                                        <Row className="mt-3">
                                          <text className="text-black text-[13.5px]">
                                            Booking Status
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[259px] items-end"
                                          />
                                        </Row>
                                        <Row className="mt-3">
                                          <text className="text-black text-[13.5px]">
                                            Waiver Signature Status
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[208px] items-end"
                                          />
                                        </Row>
                                        <Row className="mt-3">
                                          <text className="text-black text-[13.5px]">
                                            Check-in State
                                          </text>
                                          <Switch
                                          value={false}
                                          className="h-1 w-1 2xl:ml-[261px] items-end"
                                          />
                                        </Row>
                                      </div>
                                    </Column>
                                  </div>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 bg-[#EFF3F8]">
                                  <button
                                    className="bg-[#428BCA] hover:bg-[#1B6AAA] text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal3(false)}
                                  >
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
        </>
     )
 }
 
 export default Customize2;