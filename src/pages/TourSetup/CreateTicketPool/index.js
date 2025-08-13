import { Column, Row, Text, Line, Button} from "components";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack, FaCheck, FaTimes } from "react-icons/fa";
import {useState} from 'react';
import Topbtns from "components/Topbutton/index";

 
const CreateTicketPool = ()=> {
 /* const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };*/

  const navigate = useNavigate();

  //button cancel navigate to ticket pools
  function handleNavigate1() {
    navigate("/t28");
  }

   //for switch 
    const [enabled, setEnabled] = useState(false);



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
          <Sidebar/>
          <Column className="p-2 bg-white h-auto w-[100%]">
                <Row>
                  <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-regular">
                    Create Ticket Pools
                  </Column>
                  <Column className="w-[38%] text-white ">
                    <Row className="justify-end">
                        <Button class=" bg-[#a0a0a0] hover:bg-[#767676] items-center h-8 w-[fit] mx-2 px-2"
                        onClick={handleNavigate1}>
                              <Row className="items-center">
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
                              <Row className="items-center">
                              
                              <FaCheck className="h-5 w-5 text-white" />
                                <Text
                                    className="pl-1 text-white cursor-pointer"
                                    variant="body4"
                                  >
                                    Create Ticket Pool
                                </Text>
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
                        Name
                      </Text>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required
                        placeholder="Ticket pool name "
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
                        placeholder="Ticket pool description"
                      ></input>
                    </Row>

                    <Row className="items-center space-x-4">
                      <Text className="text-[#667E99] w-[22%] text-right">
                        Active
                      </Text>
                      <div className="relative flex flex-col-reverse items-right justify-right overflow-hidden w-[20%]">
                        <div className="flex">
                            <label class="inline-flex relative items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="sr-only peer"
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
                                    YES
                                  </span>
                            </label>
                          </div>
                      </div>
                    </Row>

                    </div>
                  </Column>
                </Row>

                <Row>
                    <Text className="text-[19px] m-1 font-regular">
                        Ticket IDs
                    </Text>
                    <Text className="text-[14px] m-1 pt-1 font-regular">
                        Add your available ticket IDs separated by commas, spaces, or new lines
                    </Text>
                </Row>

                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                  <div className="mr-3">
                      <input
                          className="bg-gray-50 border border-gray-300 justify-start text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-[200px] w-[100%]"
                          type="text"
                          size="smSrc"
                          required 
                          placeholder="IDs may contain letters, numbers, dashes, underscores"
                      ></input>
                    </div>

                <Row className="pt-5">
                    <Text className="text-[19px] m-1 font-regular">
                      Alerts 
                    </Text>
                    <Text className="text-[14px] m-1 pt-1 font-regular">
                      Receive alerts when the ticket pool drops below a certain level
                    </Text>
                </Row>

                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                <Row>
                  <Column className="w-[60%] m-2 font-regular">
                    <div className="space-y-3">
                    <Row className="items-center space-x-3">
                      <Text className=" ml-1 text-[#667E99] w-[22%] text-right">
                      Threshold
                      </Text>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[20%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required
                        placeholder="0"
                      ></input>
                    </Row>

                    <Row className="items-center space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                      Email Addresses
                      </Text>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Coma separated"
                      ></input>
                    </Row>

                    </div>
                  </Column>
                </Row>

                <div className="mr-3">
                  <Row className="mt-6 bg-gray_100 h-fit justify-start items-start w-[100%] mr-6 mb-10 pb-5 mr-3"> 
                          <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-fit mx-2 px-2 mt-8 "
                          onClick={handleNavigate1}>
                                  <Row className="items-center">
                                  <FaCheck className="h-5 w-5 text-white" />
                                    <Text
                                        className="text-white cursor-pointer pl-2"
                                        variant="body4"
                                      >
                                        Create Ticket Pool
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

export default CreateTicketPool;