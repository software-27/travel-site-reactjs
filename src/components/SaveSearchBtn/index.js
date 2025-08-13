import React from "react";
import { Row,Column,Text,Button } from "components/index";
import { VscFolderOpened } from "react-icons/vsc";


  const SaveSearch= ()=> {
    const [showModal, setShowModal] = React.useState(false);
 
     return(
        <>
        <Column className="w-[38%] justify-end items-end mr-6 text-white">
            <Button class="bg-[#ffb752] hover:bg-[#D49844] items-center h-8 px-2">
                <Row className="items-center">
                    <VscFolderOpened className="h-5 w-5 text-white" />
                    <Text
                        className="px-1 text-white cursor-pointer"
                        variant="body5"
                        onClick={() => setShowModal(true)}
                        >
                        Saved Searches
                    </Text>
                </Row>
            </Button>
              </Column>
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
                            Saved Searches
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <div class="border border-[#E7E7E7] p-[200px]">
                            <Column className="items-center">
                              <Text className="mb-5 text-gray-400">
                                No searches saved for Bookings
                              </Text>
                              <Text className="text-gray-400">
                                You can save a search from the results view
                              </Text>
                            </Column>
                          </div>
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
 
 export default SaveSearch;