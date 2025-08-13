import React from "react";

import { Column, Row, List, Text, Img, Button, Line, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const PricingandcalendarRateplansPage = () => {
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
  function handleNavigate6() {
    navigate("/pricepernight");
  }
  //continue
  function handleNavigate7() {
    navigate("/pricingandcalendarfive");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
      <Column className="justify-start w-[100%]">
      <HeaderOTAAdmin className="w-[100%]" />
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
                      60% completed
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
            <Column className="justify-start xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[41%]">
              <Text className="Firstlastname" as="h6" variant="h6">
                Rate plans
              </Text>
              <Column className="bg-white_A700 items-center justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                <Text
                  className="font-normal leading-[normal] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-black_900 w-[97%]"
                  variant="body3"
                >
                  To attract a wider range of guests, we suggest setting up
                  multiple rate plans. The recommended prices and policies for
                  each plan are based on data from properties like yours, but
                  they can be edited now or after you complete registration.
                </Text>
              </Column>
            </Column>
            <Row className="items-start justify-between xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[86%]">
              <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[48%]">
                <Text
                  className="font-bold text-black_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Standard rate plan
                </Text>
                <Column className="bg-white_A700 items-center justify-end lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                  <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[97%]">
                    <Row className="bg-green_50 items-center justify-end ml-[1px] px-[2px] w-[37%]">
                      <Img
                        src="images/img_combochart.png"
                        className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] w-[13%]"
                        alt="ComboChart"
                      />
                      <Text
                        className="font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-green_900 w-[auto]"
                        variant="body5"
                      >
                        High impact on bookings
                        <br />
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[92%]">
                      <Text className="rowcancellationpo" variant="body1">
                        Cancellation policy
                      </Text>
                      <Img
                        src="images/img_about.png"
                        className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                        alt="About"
                      />
                      <Button
                        className="font-normal lg:ml-[189px] xl:ml-[237px] 2xl:ml-[267px] 3xl:ml-[320px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[10%]"
                        size="sm"
                        variant="OutlineLightblue5001_2"
                      >
                        Edit
                      </Button>
                    </Row>
                    <Text
                      className="font-normal leading-[normal] ml-[2px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-black_900 w-[91%]"
                      variant="body4"
                    >
                      You’re 91% more likely to get bookings with the
                      pre-selected cancellation policy settings than with a
                      30-day cancellation policy
                    </Text>
                    <Row className="items-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[88%]">
                      <Img
                        src="images/img_checkmark_30X35.png"
                        className="Checkmark"
                        alt="Checkmark"
                      />
                      <Text
                        className="font-normal leading-[normal] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[4px] not-italic text-black_900 w-[91%]"
                        variant="body4"
                      >
                        Guests can cancel their bookings for free up to 1 day
                        before their arrival
                      </Text>
                    </Row>
                    <Row className="items-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[89%]">
                      <Img
                        src="images/img_checkmark_30X35.png"
                        className="Checkmark"
                        alt="Checkmark One"
                      />
                      <Text
                        className="font-normal leading-[normal] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] not-italic text-black_900 w-[91%]"
                        variant="body4"
                      >
                        Guests who cancel within 24 hours will have their
                        cancellation fee waived
                      </Text>
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]" />
                    <Row className="bg-green_50 items-center justify-end ml-[1px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] w-[37%]">
                      <Img
                        src="images/img_combochart.png"
                        className="combochartico"
                        alt="ComboChart One"
                      />
                      <Text
                        className="font-normal ml-[4px] not-italic text-green_900 w-[auto]"
                        variant="body5"
                      >
                        High impact on bookings
                        <br />
                      </Text>
                    </Row>
                    <Row className="items-start ml-[1px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[92%]">
                      <Text className="rowcancellationpo" variant="body1">
                        Price per group size
                      </Text>
                      <Img
                        src="images/img_about.png"
                        className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                        alt="About"
                      />
                      <Button
                        className="font-normal lg:ml-[189px] xl:ml-[237px] 2xl:ml-[267px] 3xl:ml-[320px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[10%]"
                        size="sm"
                        variant="OutlineLightblue5001_2"
                      >
                        Edit
                      </Button>
                    </Row>
                    <Text
                      className="font-normal leading-[normal] ml-[1px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] not-italic text-black_900 w-[84%]"
                      variant="body5"
                    >
                      You’re 12% more likely to get bookings if you set lower
                      prices for smaller groups of guests
                    </Text>
                    <Row className="items-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[45%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body2"
                      >
                        Occupancy
                      </Text>
                      <Text
                        className="font-bold 3xl:ml-[110px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[92px] text-black_900 w-[auto]"
                        variant="body2"
                      >
                        Guest pay
                      </Text>
                    </Row>
                    <Row className="items-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[45%]">
                      <Stack className="3xl:h-[117px] lg:h-[69px] xl:h-[87px] 2xl:h-[98px] w-[19%]">
                        <Img
                          src="images/img_contacts.png"
                          className="absolute lg:h-[37px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] top-[0] w-[100%]"
                          alt="Contacts"
                        />
                        <Img
                          src="images/img_contacts.png"
                          className="absolute bottom-[0] lg:h-[37px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] w-[100%]"
                          alt="Contacts One"
                        />
                      </Stack>
                      <Column className="items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[79%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text
                            className="font-inter font-light text-black_900 w-[auto]"
                            variant="body4"
                          >
                            X 2
                          </Text>
                          <Text
                            className="mt-[4px] columneachpropertyw"
                            variant="body3"
                          >
                            MYR 72.00
                          </Text>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                          <Text
                            className="font-inter font-light mt-[2px] text-black_900 w-[auto]"
                            variant="body4"
                          >
                            X 1
                          </Text>
                          <Text
                            className="mb-[1px] columneachpropertyw"
                            variant="body3"
                          >
                            MYR 64.80
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Row>
            <Column className="justify-start xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[41%]">
              <Text
                className="font-bold text-black_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Non-refundable rate plan
              </Text>
              <Column className="bg-white_A700 justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[1px] w-[92%]">
                  <Row className="items-center w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Cancellation policy
                    </Text>
                    <Img
                      src="images/img_about.png"
                      className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                      alt="About Two"
                    />
                    <Button
                      className="font-normal lg:ml-[193px] xl:ml-[241px] 2xl:ml-[272px] 3xl:ml-[326px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[10%]"
                      size="sm"
                      variant="OutlineLightblue5001_2"
                    >
                      Edit
                    </Button>
                  </Row>
                  <Column className="items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[85%]">
                    <Row className="items-start w-[100%]">
                      <Img
                        src="images/img_checkmark_30X35.png"
                        className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[8%]"
                        alt="Checkmark Two"
                      />
                      <Text
                        className="font-normal leading-[normal] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[4px] not-italic text-black_900 w-[91%]"
                        variant="body4"
                      >
                        Guests will pay 10% less than the standard rate for a
                        non-refundable rate
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[97%]">
                      <Img
                        src="images/img_checkmark_30X35.png"
                        className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[8%]"
                        alt="Checkmark Three"
                      />
                      <Text
                        className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] Firstlastname"
                        variant="body4"
                      >
                        Guests cannot cancel their bookings for free at any time
                        <br />
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Row className="items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] 2xl:mt-[59px] 3xl:mt-[80px] lg:mt-[27px] xl:mt-[46px] w-[65%]">
              <Column className="w-[63%]">
                <Text
                className="font-bold text-black_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Weekly rate plan
              </Text>
              <Column className="bg-white_A700 justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[99%]">
                <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[1px] w-[93%]">
                  <Row className="bg-green_50 items-center justify-end ml-[2px] px-[4px] w-[40%]">
                    <Img
                      src="images/img_combochart.png"
                      className="combochartico"
                      alt="ComboChart Two"
                    />
                    <Text
                      className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic text-green_900 w-[auto]"
                      variant="body5"
                    >
                      High impact on bookings
                      <br />
                    </Text>
                  </Row>
                  <Row className="items-start ml-[2px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[53%]">
                    <Text className="rowcancellationpo" variant="body1">
                      Price and cancellation policy
                    </Text>
                    <Img
                      src="images/img_about.png"
                      className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[2px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                      alt="About Three"
                    />
                  </Row>
                  <Text
                    className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] Firstlastname"
                    variant="body5"
                  >
                    You’re 16% more likely to get bookings with the 15%
                    pre-selected weekly rate than with none
                    <br />
                  </Text>
                  <Row className="items-start xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[97%]">
                    <Img
                      src="images/img_checkmark_30X35.png"
                      className="Checkmark"
                      alt="Checkmark Four"
                    />
                    <Text
                      className="font-normal leading-[normal] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[4px] not-italic text-black_900 w-[91%]"
                      variant="body4"
                    >
                      Guests will pay 15% less than the standard rate when they
                      book for at least 7 nights
                    </Text>
                  </Row>
                  <Row className="items-start xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[94%]">
                    <Img
                      src="images/img_checkmark_30X35.png"
                      className="Checkmark"
                      alt="Checkmark Five"
                    />
                    <Text
                      className="font-normal leading-[normal] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] not-italic text-black_900 w-[91%]"
                      variant="body4"
                    >
                      Guests can cancel their bookings for free up to 1 day
                      before their arrival (based on the standard rate
                      cancellation policy)
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[-3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
              <Row>
                <Row className="items-center xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[88px] lg:mt-[-3px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Stack
                    className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                    onClick={handleNavigate6}
                  >
                      <Img
                      src="images/img_expandarrow.png"
                      className="ExpandArrow"
                      alt="ExpandArrow"

                      />
                  </Stack>
                  <Button
                    className="font-bold bg-sky-700 hover:bg-indigo_901 lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                    variant="OutlineLightblue8001_2"
                    onClick={handleNavigate7}
                  >
                    Continue
                  </Button>
                </Row>
              </Row>
              <Row className="mb-14 items-center xl:ml-[110px] 2xl:ml-[650px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[-58px] 3xl:mt-[26px] w-[39%]">
                    <Button
                      className=" font-bold bg-gray_700 hover:bg-gray_900 text-white rounded-full"
                    >
                      Save draft
                    </Button>
                  </Row>
            </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PricingandcalendarRateplansPage;
