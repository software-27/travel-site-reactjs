import React from "react";
import { Row,Text,Button } from "components/index";
import { FaStream } from "react-icons/fa";


  const Customize= ()=> {
    const [showModal3, setShowModal3] = React.useState(false);
     return(
        <>
        <Button onClick={() => setShowModal3(true)} class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-8 w-[fit] mx-2 px-2">
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
                                  Customize
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
 
 export default Customize;