import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Button,
  Input,
  Line,
  Stack,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PricingandcalendarYesIllimportunavailabledatesfromanotherwebsitePage =
  () => {
    const navigate = useNavigate();

    function handleNavigate73() {
      navigate("/nl1");
    }
    function handleNavigate74() {
      navigate("/ppd");
    }
    function handleNavigate75(){
      navigate("/import");
    }
    function handleNavigate35() {
      navigate("/pricingandcalendarnoiwontsyncmyavailability");
    }
    function handleNavigate36() {
      navigate("/pricingandcalendaryesillconnectwithachannelmanager");
    }
    function handleNavigate32() {
      navigate("/pricingandcalendarrateplans");
    }

    return (
      <>
       <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
       <Column className="justify-start w-[100%]">
       <Header className="w-[100%]" />
              <Column className="justify-start w-[100%]">
              <Row className="bg-gray_50 items-left justify-evenly pt-6 pb-4 w-[100%]">
              <Row className="bg-gray_50 items-center justify-center w-[19%]">

                <Stack className= "items-center justify center">
                  <Row>
                    <Text className="Step1 cursor-pointer mt-1" variant="body4" onClick={handleNavigate73}>
                      Name and location
                    </Text>
                    <Img
                      src="images/img_checkmark.svg"
                      className="checkmark"
                      alt="checkmark"
                    />
                  </Row>
                  <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[-5px] 3xl:mt-[31px] w-[100%]">
                    <Text className="text-[13px] text-gray_800 underline italic">
                      100% completed
                    </Text>
                  </Row>
                </Stack>
              </Row>
              <Column className="bg-gray_50 items-center justify-center w-[19%]">
                <Stack className= "items-center justify center">
                  <Row>
                    <Text className="Step2 cursor-pointer 2xl:mt-[9px]" variant="body4" onClick={handleNavigate74}>
                      Property Setup
                    </Text>
                    <Img
                      src="images/img_checkmark.svg"
                      className="checkmark"
                      alt="checkmark"
                    />
                  </Row>
                  <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[1px] 3xl:mt-[31px] w-[100%]">
                      <Text className="text-[13px] text-gray_800 underline italic mr-6">
                        100% completed
                      </Text>
                  </Row>
                </Stack>
              </Column>
              <Column className="bg-gray_50 items-center justify-center w-[19%]">
                <Stack className= "items-center justify center">
                  <Row>
                    <Text className="Step2 cursor-pointer 2xl:ml-[25px] 2xl:mt-[9px]" variant="body4" onClick={handleNavigate75}>
                      Photos
                    </Text>
                    <Img
                      src="images/img_checkmark.svg"
                      className="checkmark"
                      alt="checkmark"
                    />
                  </Row>
                  <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[1px] 3xl:mt-[31px] w-[100%]">
                      <Text className="text-[13px] text-gray_800 underline italic mr-6">
                        100% completed
                      </Text>
                  </Row>
                </Stack>
              </Column>
              <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
              <Stack className= "items-center justify center">
                  <Text className="Step2 mb-2.5 2xl:mt-[5px] ml-5" variant="body4">
                    Pricing and Calendar
                  </Text>
                  <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[7px] 3xl:mt-[31px] w-[100%]">
                      <Text className="text-[13px] text-gray_800 underline italic">
                        80% completed
                      </Text>
                  </Row>
                </Stack>
              </Column>
              <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
              <Stack className= "items-center justify center">
                  <Text className="Step2 mb-2.5 2xl:mt-[5px] ml-5" variant="body4">
                    Review and Complete
                  </Text>
                </Stack>
              </Column>
          </Row>
          <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            <Row className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[100%]">
            <Column className="justify-start xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[50%]">
             
                <Column className="justify-start w-[99%]">
                  <Text className="availability" as="h6" variant="h6">
                      Availability
                    </Text>
                    <Column className="bg-white_A700 justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] w-[100%]">
                      <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[1px] w-[50%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body1"
                      >
                        When is the first date that guests can check in?
                        <br />
                      </Text>
                      <Row className="items-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[220%]">
                       <div class="flex items-start mb-4 mr-6" >
                         <input checked id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                         <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">As soon as possible</label>
                       </div>
                       <div class="flex items-start mb-4" >
                         <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                         <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On a specific date</label>
                       </div>
                      </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[100%]">
                    <Column className="bg-white_A700 items-center justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[99%]">
                      <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[98%]">
                        <Text
                          className="font-normal leading-[normal] not-italic text-black_900 w-[87%]"
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
                        <Row className="items-start justify-evenly 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]">
                          <Column className="justify-start 2xl:mr-[90px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[95%]">
                            <div class="flex items-start mb-4 " >
                              <input checked id="default-radio-2" type="radio" value="" name="default-radio2" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                              <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, I’ll connect with a channel manager </label>
                            </div>
                            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end mt-[4px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                              <Column className="justify-start mt-[1px] w-[92%]">
                                <Text className="Firstlastname" variant="body5">
                                  Paste your iCal link here
                                </Text>
                                <Row className="items-center justify-between mt-[4px] w-[100%]">
                                  <Input
                                    className="w-[100%]"
                                    wrapClassName="2xl:h-[39px] 3xl:h-[46px] flex lg:h-[28px] w-[80%] xl:h-[34px]"
                                    variant="OutlineGray503"
                                    placeholder=""
                                  ></Input>
                                  <Button
                                    className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_600 w-[16%]"
                                    size="md"
                                    variant="FillBluegray101"
                                  >
                                    Import
                                  </Button>
                                </Row>
                                <Text
                                  className="font-normal lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-light_blue_800 w-[auto]"
                                  variant="body5"
                                >
                                  Where can I find my iCal link?
                                </Text>
                              </Column>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[44%]">
                          <div class="flex items-start mb-4 mr-6" >
                            <input id="default-radio-2" onClick={handleNavigate36} type="radio" value="" name="default-radio2" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, I’ll connect with a channel manager </label>
                          </div>
                        </Row>
                        <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[35%]">
                          <div class="flex items-start mb-4 mr-6" >
                            <input id="default-radio-2" onClick={handleNavigate35} type="radio" value="" name="default-radio2" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No, I won’t sync my availability </label>
                          </div>
                        </Row>
                      </Column>
                    </Column>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[99%]" />
                  </Column>
                  <Row className="items-center justify-between lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[99%]">
                    <Stack onClick={handleNavigate32} className="bg-white_A700 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] shadow-bs w-[13%]">
                      <Img
                        src="images/img_expandarrow.png"
                        className="ExpandArrow"
                        alt="ExpandArrow"
                      />
                    </Stack>
                    <Button
                      className="font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
                      shape="RoundedBorder3"
                      variant="FillLightblue800"
                    >
                      Continue
                    </Button>
                  </Row>
                  <Row className="mb-14 items-center xl:ml-[110px] 2xl:ml-[780px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[-52px] 3xl:mt-[26px] w-[39%]">
                    <Button
                      className=" font-bold bg-gray_700 hover:bg-gray_900 text-white rounded-full"
                    >
                      Save draft
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

export default PricingandcalendarYesIllimportunavailabledatesfromanotherwebsitePage;
