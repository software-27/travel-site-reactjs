import React from "react";
import { Column, Row, Text, Line, Button } from "components";
import Header from "components/Header/Header";
import { SelectLanguage } from "components/SelectLanguage/index";
import { SelectMenu } from "components/SelectMenu/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HotelParkingPage = () => {
  const navigate = useNavigate();

  function handleNavigate76() {
    navigate("/pbd");
  }
  function handleNavigate77() {
    navigate("/hs4");
  }
  function handleNavigate1() {
    navigate("/hs1");
  }
  function handleNavigate2() {
    navigate("/hs2");
  }
  function handleNavigate3() {
    navigate("/hs3");
  }
  function handleNavigate4() {
    navigate("/hs4");
  }
  function handleNavigate5() {
    navigate("/hs5");
  }
  function handleNavigate6() {
    navigate("/hs6");
  }
  function handleNavigate7() {
    navigate("/hs7");
  }

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);

  const changeHandler = e => {
    const getshow = e.target.value;
    setIsVisible(getshow)
  };

  const changeHandler2 = e2 => {
    const getshow2 = e2.target.value;
    setIsVisible1(getshow2)
  };

  return (
    <>
    <Column className="bg-gray_100 font-ptsans items-center justify-start 2xl:mb-[100px] mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
    <Column className="bg-gray_100 pb-8 font-ptsans items-center justify-start w-[100%]">
      <Header className="w-[100%]" />
        <Column className="justify-start w-[100%]">
        <Column className="items-center justify-center w-[100%] mb-6">
        <Row className="gap-0.5 h-[60px] w-[80%] justify-evenly">
            <Column className="font-sans bg-gray_100 w-[15%] justify-end items-center">
                <Text onClick={handleNavigate1} className="common-pointer text-gray_501" variant="body4" >Basic Info</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans lg:text- bg-gray_100  w-[14%] justify-end items-center">
                <Text onClick={handleNavigate2} className="common-pointer text-gray_501" variant="body4" >Layout & Pricing</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans bg-gray_200_ce w-[15%] justify-end items-center"> 
                <Text onClick={handleNavigate3} className="common-pointer text-gray_702" variant="body4" >Facilities & Services</Text>
                <Line className="bg-gray_702 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans bg-gray_100  w-[15%] justify-end items-center">
                <Text onClick={handleNavigate4} className="common-pointer text-gray_501" variant="body4" >Amenities</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans bg-100 w-[15%] justify-end items-center"> 
                <Text onClick={handleNavigate5} className="common-pointer text-gray_501" variant="body4" > Photos</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans bg-gray_100 w-[15%] justify-end items-center">
                <Text onClick={handleNavigate6} className="common-pointer text-gray_501" variant="body4" > Policies</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans bg-gray_100 w-[14%] justify-end items-center">
                <Text onClick={handleNavigate7} className="common-pointer text-gray_501" variant="body4" > Payments</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>        
        </Row>
    </Column>
            <Text className=" xl:ml-[130px] 2xl:ml-[144px] 3xl:ml-[168px] lg:ml-[118px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-[25px] font-bold text-black_900 w-[auto]">
              Facilities & services
            </Text>
            <Text className="xl:ml-[130px] 2xl:ml-[144px] 3xl:ml-[168px] lg:ml-[118px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[8px] 3xl:mt-[57px] text-[14px] text-black_900 w-[auto]">
              Now, tell us some general details about your property, such as facilities available, internet, parking and the languages you speak.
            </Text>

            <Column className="items-center justify-start xl:ml-[130px] 2xl:ml-[144px] 3xl:ml-[168px] lg:ml-[118px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[25px] 3xl:mt-[44px] w-[51%]">
              <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                <Column className="justify-start ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[50%]">
                  <Text
                    className=" text-black_900 mb-2 text-[20px] w-[100%]"
                  >
                    Parking
                  </Text>
                  <Column className="mb-2 item-start bg-[#E6E6E6] lg:p-[8px] xl:p-[10px] 2xl:p-[8px] 3xl:p-[24px] lg:ml-[-18px] xl:ml-[-20px] 2xl:ml-[-23px] w-[132%]">
                    <Text
                      className ="text-[12px]"
                    >
                    This information is especially important for those travelling to your accommodation by car.
                    </Text>
                  </Column>

                  <Text
                    className=" text-black_900 mb-2 text-[14px] w-[100%]"
                  >
                    Is parking available to guests?
                  </Text> 
              
                  <div class="container">
                    <div class="row">
                      <Row className="items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[3px] 3xl:mt-[9px] w-[195%]">
                        <div class="col-sm">

                          <select className="border-gray-400 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[350%]" 
                            onChange={changeHandler}
                            shape="RoundedBorder2"
                            >
                            <option className="common-pointer1" value="no1">No</option>
                            <option className="common-pointer1" value="yes1">Yes, free</option>
                            <option className="common-pointer1" value="ur1">Yes, paid</option>                                                   
                          </select>  
                        </div>

                        <div class="col-sm">
                          {isVisible === 'ur1' && (  

                            <div className="items-left justify-start w-[150%]">
                              <Row className="items-left justify-start w-[195%]">

                              <div class="col-sm 2xl:ml-[290px] 2xl:mr-[70px]">
                                  <select className="border-gray-400 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[150%]" shape="RoundedBorder2">
                                    <option className="common-pointer1">Private</option>
                                    <option className="common-pointer1">Public</option>  
                                  </select>  
                              </div>

                              <div class="col-sm">
                                  <select className="border-gray-400 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[150%]" shape="RoundedBorder2">
                                    <option className="common-pointer1">On site</option>
                                    <option className="common-pointer1">Off site</option>  
                                  </select>  
                              </div>
                              </Row>


                              <Row className="items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[3px] 3xl:mt-[9px] 2xl:ml-[-107px] w-[85%]">
                                  <Text
                                    className="mt-2 text-black_900 mb-2 text-[14px] w-[90%]"
                                  >
                                    Do guests need to reserve a parking space?
                                  </Text> 
                                  <Text
                                    className="mt-2 text-black_900 mb-2 text-[14px] 2xl:ml-[138px] w-[107%]"
                                  >
                                    Price for parking (per day)
                                  </Text> 
                              </Row>

                                <Row className="items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[3px] 3xl:mt-[9px] 2xl:ml-[-107px] w-[85%]">


                                  <select className="border-gray-400 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[59%]" 
                                    shape="RoundedBorder2"
                                    >
                                    <option className="common-pointer1">No reservation needed</option>
                                    <option className="common-pointer1">Reservation needed</option>                                           
                                  </select>  

                                  <div class="flex ml-5 w-[50%]">
                                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-[#E6E6E6] border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                      MYR
                                    </span>
                                    <input type="number" 
                                    id="price" 
                                    class="p-1.5 px-2 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="0"/>
                                  </div>
                                </Row>
                            </div>
                          ) }
                        </div>

                        <div class="col-sm">
                          {isVisible === 'yes1' && (  

                            <div className="items-left justify-start  w-[150%]">
                              <Row className="items-left justify-start w-[195%]">

                              <div class="col-sm 2xl:ml-[290px] 2xl:mr-[70px]">
                                  <select className="border-gray-400 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[150%]" shape="RoundedBorder2">
                                    <option className="common-pointer1">Private</option>
                                    <option className="common-pointer1">Public</option>  
                                  </select>  
                              </div>

                              <div class="col-sm">
                                  <select className="border-gray-400 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[150%]" shape="RoundedBorder2">
                                    <option className="common-pointer1">On site</option>
                                    <option className="common-pointer1">Off site</option>  
                                  </select>  
                              </div>
                              </Row>


                              <Row className="items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[3px] 3xl:mt-[9px] 2xl:ml-[-107px] w-[85%]">
                                  <Text
                                    className="mt-2 text-black_900 mb-2 text-[14px] w-[90%]"
                                  >
                                    Do guests need to reserve a parking space?
                                  </Text> 
                              </Row>

                                <Row className="items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[3px] 3xl:mt-[9px] 2xl:ml-[-107px] w-[59%]">


                                  <select className="border-gray-400 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[76.5%]" 
                                    shape="RoundedBorder2"
                                    >
                                    <option className="common-pointer1">No reservation needed</option>
                                    <option className="common-pointer1">Reservation needed</option>                                           
                                  </select>  
                                </Row>
                            </div>
                          ) }
                        </div>
                      </Row>
                    </div>
                  </div>
                </Column>
              </Column>
            </Column>
            <Column className="items-center justify-start xl:ml-[130px] 2xl:ml-[144px] 3xl:ml-[168px] lg:ml-[118px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[10px] 3xl:mt-[44px] w-[51%]">
              <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                <Column className="justify-start ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[50%]">
                  <Text
                    className=" text-black_900 mb-2 text-[20px] w-[100%]"
                  >
                    Breakfast
                  </Text>
                  
                  <Text
                    className=" text-black_900 mb-2 text-[14px] w-[100%]"
                  >
                    Is breakfast available to guests?
                  </Text>
                  
                  <div class="container">
                    <div class="row">
                      <Row className="items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[3px] 3xl:mt-[9px] w-[195%]">
                        <div class="col-sm">

                          <select className="border-gray-400 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[350%]" 
                            onChange={changeHandler2}
                            shape="RoundedBorder2"
                            >
                            <option className="common-pointer" value="noB">No</option>
                            <option className="common-pointer" value="yesB">Yes, free</option>
                            <option className="common-pointer" value="urB">Yes, paid</option>                                                   
                          </select>  
                        </div>

                        <div class="col-sm">
                          {isVisible1 === 'urB' && (  

                            <div className="items-left justify-start  w-[150%]">
                              <Column className="items-left justify-start 2xl:ml-[-107px] 2xl:mt-[40px]" >
                                <Text
                                  className="mt-4 text-black_900 mb-2 text-[14px] w-[100%]"
                                >
                                  Price for breakfast (per person, per day including all fees and taxes)
                                </Text>

                                <div class="flex w-[68.5%]">
                                  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-[#E6E6E6] border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    MYR
                                  </span>
                                  <input type="number" 
                                  id="website-admin" 
                                  class="p-1.5 px-2 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                  placeholder="0"/>
                                </div>

                                <Text
                                className="mt-4 text-black_900 mb-2 text-[14px] w-[100%]"
                                >
                                  What kind of breakfast is available?
                                </Text> 

                                <SelectMenu 
                                  className="border-gray-400 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[68.5%]" 
                                  shape="RoundedBorder2"
                                  isMulti
                                >
                                                                      
                                </SelectMenu> 
                              </Column> 
                            </div>
                          ) }
                        </div>

                        <div class=" col-sm">
                          {isVisible1 === 'yesB' && (  
                            <div className="items-left justify-start  w-[150%]">
                              <Column className="w-fit items-left justify-start 2xl:ml-[-110px] 2xl:mt-[45px]" >
                                <Text
                                className="mt-4 text-black_900 mb-2 text-[14px] w-[100%]"
                                >
                                  What kind of breakfast is available?
                                </Text> 
                                <SelectMenu 
                                  className="border-gray-400 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[145%]" 
                                  shape="RoundedBorder2"
                                  isMulti
                                >                               
                                </SelectMenu>
                              </Column> 
                            </div>
                          ) }
                        </div>
                        
                      </Row>
                    </div>
                  </div>
                </Column>
              </Column>
            </Column>

            <Column className="items-center justify-start xl:ml-[130px] 2xl:ml-[144px] 3xl:ml-[168px] lg:ml-[118px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[10px] 3xl:mt-[44px] w-[51%]">
              <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                <Column className="justify-start ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[50%]">
                  <Text
                    className=" text-black_900 mb-2 text-[20px] w-[100%]"
                  >
                    Languages spoken
                  </Text>
                  <Column className="mb-2 item-start bg-[#E6E6E6] lg:p-[8px] xl:p-[10px] 2xl:p-[8px] 3xl:p-[24px] lg:ml-[-18px] xl:ml-[-20px] 2xl:ml-[-23px] w-[132%]">
                    <Text
                      className ="text-[12px]"
                    >
                    What languages do you or your staff speak?
                    </Text>
                  </Column>
                  <SelectLanguage 
                    className="border-gray-400 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[102%]" 
                    shape="RoundedBorder2"
                    placeholder="Please Select"
                    isMulti
                  >                                                  
                  </SelectLanguage> 
                </Column>
              </Column>
            </Column>
                
            <Column className="items-center justify-start xl:ml-[130px] 2xl:ml-[144px] 3xl:ml-[168px] lg:ml-[118px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[10px] 3xl:mt-[44px] w-[51%]">
              <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                <Column className="justify-start ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[50%]">
                  <Text
                    className=" text-black_900 mb-2 text-[20px] w-[150%]"
                  >
                    Facilities that are popular with guests
                  </Text>
                  <Column className="mb-2 item-start bg-[#E6E6E6] lg:p-[8px] xl:p-[10px] 2xl:p-[8px] 3xl:p-[24px] lg:ml-[-18px] xl:ml-[-20px] 2xl:ml-[-23px] w-[132%]">
                    <Text
                      className ="text-[12px]"
                    >
                    Guests look for these facilities the most when they’re searching for properties.
                    </Text>
                  </Column>
                  <Column>
                      <div class="grid grid-cols-2 gap-4 mt-5 w-[200%]">
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Free Wifi</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Non-smoking rooms</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Restaurant</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Airport shuttle</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Room service</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Family rooms</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Bar</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Spa and wellness centre</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">24-hour front desk</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Hot tub/Jacuzzi</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Sauna</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Air-conditioning</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Fitness centre</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Water park</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Garden</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Swimming pool</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Terrace</label>
                        </div>
                    </div>
                  </Column>
                </Column>
              </Column>
            </Column>

            <Row className="mb-14 items-center justify-start xl:ml-[130px] 2xl:ml-[144px] 3xl:ml-[168px] lg:ml-[118px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[10px] 3xl:mt-[44px] w-[51%]">
            <Button
            className="mt-4 font-bold bg-sky-700 hover:bg-indigo_901 text-center text-white_A700 w-[100%]"
            variant="OutlineLightblue8001_2"
            onClick={handleNavigate77}
                >
                Continue
            </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default HotelParkingPage;