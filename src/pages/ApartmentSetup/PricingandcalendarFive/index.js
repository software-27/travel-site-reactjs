
import React from "react";
import {useState} from 'react';
import Calendar from 'react-calendar';

import {
  Column,
  Row,
  List,
  Text,
  Img,
  Button,
  Input,
  Line,
  Stack,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";



const PricingandcalendarFivePage =
  () => {
    const navigate = useNavigate();

    
    function handleNavigate32() {
      navigate("");
    }
//back
    function handleNavigate33() {
      navigate("/pricingandcalendarrateplans");
    }

    const [date, setDate] = useState(new Date())

    // for radio button
    const [showhide, setShowhide]= useState("");

    const handleshow= e=>{
      const getshow= e.target.value;
      setShowhide(getshow);
    }

    return (
      <>
        <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] 3xl:pb-[105px] lg:pb-[62px] xl:pb-[78px] 2xl:pb-[88px] w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <HeaderOTAAdmin className="w-[100%]" />
            <Column className="items-center justify-start w-[100%]">
            <Row className="bg-gray_50 items-left justify-evenly  w-[100%]">
            <Row className="bg-gray_50 items-center justify-center w-[19%]">
              <Text className="Step1" variant="body4">
                Name and location
              </Text>
              <Img
                src="images/img_checkmark.svg"
                className="checkmark"
                alt="checkmark"
              />
            </Row>
            <Row className="bg-gray_50 items-center justify-center w-[19%]">
                <Text className="Step1" variant="body4">
                  Property Setup
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark"
                />
              </Row>
              <Row className="bg-gray_50 items-center justify-center w-[19%]">
                <Text className="Step1" variant="body4">
                  Photos
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark"
                />
              </Row>
              <Column className="bg-gray_50 items-center px-0 w-[19%]">
                <Text className="Step2 mb-2.5" variant="body4">
                  Pricing and Calendar
                </Text>
                <Row className="items-center justify-evenly lg:mt-[5px] xl:mt-[10px] 2xl:mt-[13px] 3xl:mt-[18px] w-[100%]">
                  <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                  <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                  <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                  <div className="bg-light_blue_800 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                  <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[19%]"></div>
                </Row>
              </Column>
              <Row className="bg-gray_50 items-center justify-center w-[19%]">
                <Text className="Step1" variant="body4">
                  Review and Complete
                </Text>
              </Row>
            </Row>
              <Row className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[87%]">
                <Column className="items-center justify-start w-[68%]">
                  <Column className="justify-start w-[99%]">
                    <Text className="availability" as="h6" variant="h6">
                      Availability
                    </Text>
                    <Column className="bg-white_A700 justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] w-[100%]">
                      <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[1px] w-[100%]">
                        
                         

                        <Text
                          className="font-bold text-black_900 w-[fit]"
                          variant="body1"
                        >
                          When is the first date that guests can check in?
                        </Text>

                        <div className="row">
                        <form className="row g-3">
                        <div className="col-md-12">
                                                            
                        <Row className="flex space-x-4">
                              <div className="text-black flex items-center"> 
                                <input type="radio" name="userdetail" value="yes1" checked={ showhide==='yes1' } className="common-pointer w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow } />                               
                              
                              <Text className = "py-3 px-3 text-[14px]">As soon as possible</Text> 
                              </div>
                              <div className="text-black flex items-center "> 
                                <input type="radio" name="userdetail" value="selecteddate" checked={ showhide==='selecteddate' } className="common-pointer w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow } />                               
                              <Text className = "py-3 px-3 text-[14px]">On a selected date</Text> 
                              </div>
                        </Row>
                        </div>

                        {
                            showhide==='selecteddate' && (
                              <Column>
                                  <div className="px-4 calendar-container w-50 justify-center">
                                    <Calendar className= "text-[14px] px-8" onChange={setDate} value={date}/>
                                  </div>
                                  <Line className=" bg-bluegray_100 h-[1px] text-[13px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]" />
                                  <Text className= "text-[14px] pt-3">
                                  Guests can start booking right away, but the first available check-in date will be: {date.toDateString()}
                                  </Text> 
                              </Column>
                            )}
                            </form>
                            </div>

                      
                      
                      </Column>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]">
                    <Column className="bg-white_A700 items-center justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[99%]">
                      <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[98%]">
                        <Text
                          className=" text-[14px] font-normal leading-[normal] text-black_900 w-[100%]"
                          variant="body3"
                        >
                          To help you start earning, we automatically make your
                          property available for bookings for up to 18 months –
                          excluding days you import that are marked as
                          unavailable. You can manage your availability and make
                          dates unavailable for bookings after registration.
                        </Text>
                        <Text className="Doyouwantto" variant="body1">
                          Do you want to sync your availability with another
                          website?
                        </Text>
                        <Text
                          className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-green_900 w-[81%]"
                          variant="body5"
                        >
                          You will avoid double bookings by syncing calendars.
                          It will also help you get your property listed on
                          HalalHoliday.com and open for bookings 80% faster.
                        </Text>
                        <br/>
                        
                        <div class="mb-5">
                          <input type="radio" name="agree" id="agree" class="peer w-5 h-5 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <Text className="columnyesillimpor text-[13px] " >
                              Yes, I’ll import unavailable dates from another
                              website
                            </Text>
                          <div class="mt-2 hidden peer-checked:block">
                              
                          <Column className="justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[95%]">
                            

                           
                            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end mt-[4px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                              <Column className="justify-start mt-[1px] w-[92%]">
                                <Text className="Firstlastname" variant="body5">
                                  Paste your iCal link here
                                </Text>
                                <Row className="items-center justify-between mt-[4px] w-[100%]">
                                  <Input
                                    className="w-[100%]"
                                    wrapClassName="2xl:h-[39px] 3xl:h-[46px] flex lg:h-[28px] w-[80%] xl:h-[34px]"
                                    name="RectangleFortyOne"
                                    placeholder=""
                                    variant="OutlineGray801"
                                  ></Input>
                                  <Button
                                    className="font-normal common-pointer not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_600 w-[16%]"
                                    size="md"
                                    variant="FillBluegray101"
                                  >
                                    Import
                                  </Button>
                                </Row>
                                <Text
                                  className="font-normal common-pointer lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-light_blue_800 w-[auto]"
                                  variant="body5"
                                >
                                  Where can I find my iCal link?
                                </Text>
                              </Column>
                            </Column>
                           
                          </Column>
                         

                          </div>
                        </div>




                          
                        <div class="mb-5">
                          <input type="radio" name="agree" id="agree" class="peer w-5 h-5 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <Text className="columnyesillimpor text-[13px] ">
                            Yes, I’ll connect with a channel manager
                          </Text>
                          <div class="mt-2 hidden peer-checked:block">

                          <Row className="bg-green_50 border border-green_900 border-solid items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pb-[4px] px-[4px] w-[99%]">
                            <Img
                              src="images/img_ok.png"
                              className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[6%]"
                              alt="Ok"
                            />
                            <Text
                              className="font-normal leading-[normal] lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-black_900 text-shadow-ts w-[82%]"
                              variant="body5"
                            >
                              <br></br>
                              {`You'll be able to connect with a channel manager after your registration is complete – please continue to the next step.`}
                            </Text>
                          </Row>

                          </div>
                          </div>
                          
                        <div class="mb-5">
                          <input type="radio" name="agree" id="agree" class="peer w-5 h-5 common-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <Text 
                            className="columnyesillimpor text-[13px]" >
                            No, I won’t sync my availability
                          </Text>
                          
                          <div class="mt-2 hidden peer-checked:block">

                          </div>
                        </div>
                        
                        
                       
                       
                      </Column>
                    </Column>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[99%]" />
                  </Column>
                  <Row className="items-center xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[88px] lg:mt-[-3px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                    <Stack
                      className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                      onClick={handleNavigate33}
                    >
                    <Img
                      src="images/img_arrowleft.svg"
                      className="arrowleft1"
                      alt="arrowleft"
                                
                    />
                    </Stack>
                    <Button
                      className="font-bold bg-sky-700 hover:bg-indigo_901 lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                      variant="OutlineLightblue8001_2"
                      onClick={handleNavigate32}
                    >
                      Continue
                    </Button>
              </Row>
                </Column>
                <Column className="justify-start lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[28%]">
                  <Column className="bg-white_A700 items-center justify-start lg:mr-[34px] xl:mr-[43px] 2xl:mr-[49px] 3xl:mr-[58px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[86%]">
                    <Column className="justify-start lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[98%]">
                      <Row className="items-start w-[82%]">
                        <Img
                          src="images/img_idea.png"
                          className="Idea"
                          alt="Idea"
                        />
                        <Text className="rowidea" variant="body3">
                          Not ready to sync your availability right now?
                        </Text>
                      </Row>
                      <Text className="columnidea" variant="body5">
                        That’s okay – you can sync your availability with other
                        websites after you finish your registration.
                      </Text>
                    </Column>
                  </Column>
                 
                </Column>
              </Row>
            </Column>
          </Column>
        </Column>
        
      </>
    );
  };
 

export default PricingandcalendarFivePage;
