
import { Column, Row, Text, Input, Line, Button,Img, Stack} from "components";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar";
import TextEditor from "components/Editor";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaThumbtack, FaCheck, FaTimes, FaPhone } from "react-icons/fa";
import {useState} from 'react';
import { GoPlus } from "react-icons/go";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React from 'react';
import Topbtns from "components/Topbutton/index";


const CreatePickupLocation = ()=> {
 /* const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };*/
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();

  //button cancel navigate to ticket pools
  function handleNavigate1() {
    navigate("/t27");
  }

   //for switch 
    const [enabled, setEnabled] = useState(false);

    // for radio button
   const [showhide, setShowhide]= useState("");

   const handleshow= e=>{
     const getshow= e.target.value;
     setShowhide(getshow);
   }

   //hidden button
   const [visible, setVisible] = React.useState(false);
  
   //for dropdown list
const [isVisible, setIsVisible] = useState(false);
const changeHandler = (e) => {
  if (e.target.value === 'yes') 
  {
    setIsVisible(true);
  } 
  else if(e.target.value === 'ur')
  {
    setIsVisible(true);
  }
  else 
  {
    setIsVisible(false);
  }
};

//for add dynamically button
const [serviceList, setServiceList] = useState([{ service: "" }]);

const handleServiceAdd = () => {
  setServiceList([...serviceList, { service: "" }]);
};

const handleServiceRemove = (index) => {
  const list = [...serviceList];
  list.splice(index, 1);
  setServiceList(list);
};

  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
         <Topbtns/>
         
        </Row>
        <Row className="w-[100%] mt-[8px]">
          <Sidebar/>
          <Column className="bg-white h-auto w-[100%]">
                <Row>
                  <Column className="w-[65%] text-light_blue_600 text-[25px] m-1 font-regular">
                    Create Pickup Location
                  </Column>
                  <Column className="w-[38%] text-white ">
                    <Row className="justify-end">
                        <Button class=" bg-[#a0a0a0] hover:bg-[#767676] items-center h-8 w-[fit] mx-2 px-2"
                        onClick={handleNavigate1}>
                              <Row>
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
                              <Row>
                              <FaCheck className="h-5 w-5 text-white" />
                                <Text
                                    className="pl-1 text-white cursor-pointer"
                                    variant="body4"
                                  >
                                    Create Location
                                </Text>
                                </Row>
                          </Button>
                          
                    </Row>
                  </Column>
                </Row>
                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                <Row>
                  <Column className="w-[60%] m-2 font-regular">
                    <div className="space-y-2">
                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Location Name
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required
                        placeholder="Pickup Location Name "
                      ></input>
                    </Row>
                    <Row className="space-x-4">
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

                    <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                        Cost
                      </Text>
                          <div class="container flex mx-auto  ">
                                <div class="flex border-2 w-[63%] h-9">
                                    <button class="text-[14px] flex items-center justify-center px-4 border-r bg-gray_100">
                                    RM
                                    </button>
                                    <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Default cost per PAX..."/>
                                </div>
                            </div>
                    </Row>
                    <Row className="space-x-3">
                    <Text className="text-[#667E99] w-[30%] text-right">
                    Travel Time
                      </Text>
                          <div class="container flex mx-auto  ">
                                <div class="flex border-2 w-[63%] h-9">
                                    <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Default Travel Location..."/>
                                    <button class="text-[14px] flex items-center justify-center px-4 border-r bg-gray_100">
                                    Minutes
                                    </button>
                                </div>
                            </div>
                    </Row>

                    <Row className="space-x-3">
                      <Text className="text-[#667E99] w-[30%] text-right">
                        Tags
                      </Text>
                      <input
                        className="border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-[100%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required 
                        placeholder="Enter Tags..."
                      ></input>
                    </Row>

                    </div>
                  </Column>
                </Row>

                <Row>
                    <Text className="text-[19px] m-1 font-regular">
                    Location
                    </Text>
                </Row>

                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                  <div className="mr-3">
                  <Stack
                className="bg-cover bg-repeat lg:h-[200px] xl:h-[200px] 2xl:h-[416px] 3xl:h-[499px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:px-[133px] xl:px-[167px] 2xl:px-[188px] 3xl:px-[225px] w-[100%]"
                style={{ backgroundImage: "url('images/img_map.png')" }}
              >
                <Img
                  src="images/img_location.svg"
                  className="absolute lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[4%] my-[auto] w-[5%]"
                  alt="location"
                />
              </Stack>

                      <Row className="justify-end">
                      <Button class="bg-[#abbac3] hover:bg-[#abbac3] items-center h-10 w-[15%] px-2 mt-2 ml-4 ">
                                  <Row>
                                  <FaThumbtack className="h-5 w-5 text-white" />
                                    <Text
                                        className="text-white cursor-pointer pl-2"
                                        variant="body4"
                                      >
                                        Remove Location
                                    </Text>
                                    </Row>
                              </Button>
                      </Row>
                    </div>



                <Row className="pt-5">
                    <Text className="text-[19px] m-1 font-regular pr-3">
                    Sources
                    </Text>
                    <Text className="text-[14px] m-1 pt-1 font-regular">
                    Alternate locations that your customers can choose that use this pickup location
                    </Text>
                </Row>

                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                
               
               {serviceList.map((singleService, index) => (
                <div key={index}>



                <Column>
                  <Row className="justify-center w-[80%]">
                    <Text className="text-[#667E99] w-[30%] text-right text-[14px] pt-2 pr-3 pb-3 ">
                    Sources
                    </Text>
                        <div class="container flex ml-4 ">
                              <div class="flex border-2 w-[95%] h-9">
                                  <input type="text" class=" w-[100%] text-[12px]" 
                                  placeholder="Source Name Shown to Customer"
                                  />
                              </div>
                        </div>

                      {serviceList.length <=1 && (

                        <Button class=" bg-[#d9534f] items-center h-8 px-2 hover:bg-[#d43f3a] ring-4 ring-[#d9534f] ring-inset">
                              <Row>
                                <FaTimes className="h-5 w-5 text-white" />
                              </Row>
                       </Button>)}

                        {serviceList.length > 1 && (
                        <Button class=" bg-[#d9534f] items-center h-8 px-2 hover:bg-[#d43f3a] ring-4 ring-[#d9534f] ring-inset"
                        onClick={() => handleServiceRemove(index)}>
                              <Row>
                                <FaTimes className="h-5 w-5 text-white" />
                              </Row>
                          </Button>
                        )}
                  </Row> 

                        <Row className=" w-[80%] justify-center space-x-3 mb-4 ml-2 ">
                              <div class="flex border-2 w-[100%] h-9 ml-[23%]">
                                  <button class="text-[14px] flex items-center justify-center px-4 border-r bg-gray_100">
                                  <FaPhone className="h-5 w-5 " />
                                  </button>
                                  <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Contact Number"/>
                              </div>
                        
                              <div class="flex border-2 w-[100%] h-9">
                                  <button class="text-[14px] flex items-center justify-center px-4 border-r bg-gray_100">
                                  ID
                                  </button>
                                  <input type="text" class="px-4 w-[100%] text-[12px]" placeholder="Code or Number"/>
                              </div>
                        </Row>

                 
              </Column>
                         {serviceList.length - 1 === index && serviceList.length < 10 && (
                          <button className="bg-[#87B87F] hover:bg-[#629B58] ml-9 mt-4 px-2 mb-5  h-8 w-[150px]  px-2 w-[30%] common pointer"
                          onClick={handleServiceAdd}> 
                              <Row>
                                <GoPlus className="pr-2 h-5 w-5 text-white font-bold" />
                                  <Text
                                      className="text-white cursor-pointer"
                                      variant="body4"
                                    >
                                    Add New Source
                                  </Text>
                              </Row>
                          </button>
                         )}






</div>
                     ))}

                     
                
              

                <Row className="pt-5">
                    <Text className="text-[19px] m-1 font-regular">
                    Instruction
                    </Text>
                    
                </Row>

                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />
                <div className="mr-3 space-y-4">
                    <Row>
                    <Text className="text-[14px] m-1 pt-1 font-regular w-[20%] text-right pr-3">
                    Pick Up
                    </Text>
                       <TextEditor 
                       className="bg-gray-50 border border-gray-300 justify-start text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-[200px] w-[100%]"/>
                
                    </Row>
                    

                    <Row>
                    <Text className="text-[14px] m-1 pt-1 font-regular w-[20%] text-right pr-3">
                    Drop Off
                    </Text>
                    <TextEditor 
                       className="bg-gray-50 border border-gray-300 justify-start text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block h-[200px] w-[100%]"/>
                    </Row>

                </div>

                <Row className="pt-5">
                    <Text className="text-[19px] m-1 font-regular">
                    Images
                    </Text>
                    
                </Row>

                <Line className="bg-gray_700_33 mb-[10px] h-[1.5px] w-[100%]" />

                <Row>
                <Stack className="font-ptsans m-3 w-[100%] h-[20%]">
                      <div class="flex justify-center items-center w-full">
                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div class="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p>
                              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                      </div> 
                      </Stack>
                </Row>
                <Row className="pt-1 justify-center">
                    <Text className="text-[15px] font-regular">
                    For best results, images should be 1280 x 720 or larger
                    </Text>
                    
                </Row>

               

                <div className="mr-3">
                  <Row className="mt-6 bg-gray_100 h-fit justify-start items-start w-[100%] mr-6 mb-10 pb-5 mr-3"> 
                          <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-10 w-[15%] mx-2 px-2 mt-5 ml-4 "
                          onClick={handleNavigate1}>
                            <Row>
                                <FaCheck className="h-5 w-5 text-white" />
                                <Text
                                    className="text-white cursor-pointer pl-2"
                                    variant="body4"
                                >
                                    Create Location
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

export default CreatePickupLocation;