import React, { useState } from "react";

import { Column, Row, Text, Img, Line, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const PricingandcalendarNoPage = () => {

  const [creditCard, setCreditCard] = useState(false);

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
  function handleNavigate2() {
    navigate("/import");
  }
  function handleNavigate3() {
    console.log('creditCard (1stPage): ', creditCard)

    localStorage.setItem('creditCard', creditCard)

    if(creditCard == true)
      navigate("/pricingandcalendaryes");
    else
      navigate("/pricepernight");
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
                      0% completed
                    </Text>
                </Row>
              </Stack>
            </Column>
        </Row>
          <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
          <Row className="items-start justify-start ml-[auto] xl:mt-[87px] 2xl:mt-[102px] 3xl:mt-[128px] lg:mt-[63px] w-[88%]">
            <Column className="items-center justify-start w-[45%]">
              <Column className="justify-start w-[100%]">
                <Text className="Airbnb" variant="body1">
                  Guest payment options
                </Text>
                <Column className="bg-white_A700 items-left justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[29px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] shadow-bs w-[100%]">
                    <Text className="font-bold mb-2" variant="body4">
                      Are you able to charge credit cards at your property?
                    </Text>
                    <Row class="form-check" className="mb-1">
                      <input onClick={()=>setCreditCard(true)} class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] mt-0.5" class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                        Yes
                      </label>
                    </Row>
                    <Row class="form-check" className="mb-1">
                      <input onClick={()=>setCreditCard(false)} class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] mt-0.5" class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                        No
                      </label>
                    </Row>
                    <Line className="bg-gray_200 h-[1px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:mb-[29px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] w-[100%]" />
                    <Text
                      className="font-bold mb-2"
                      variant="body4"
                    >
                      No problem! Allow your guests to pay online
                    </Text>
                    <Text
                      className="lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] columneachpropertyw"
                      variant="body6"
                    >
                      You can have guests pay via Payments by
                      HalalHoliday.com.
                    </Text>
                    <Text
                      className="font-hairline font-roboto leading-[normal] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-black_900 w-[25%]"
                      variant="body6"
                    >
                    <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                      Payment charge
                      <br />
                    </span>
                    <span className="text-black_900 font-ptsans font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                      2.5%
                    </span>
                    <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      {" "}
                    </span>
                    <span className="text-light_blue_500 font-ptsans font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      Learn more
                    </span>
                  </Text>
              </Column>
            </Column>
            <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Column
                className="common-pointer items-center justify-start w-[100%]"
              >
                <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[-3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
                <Row className="items-center xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[88px] lg:mt-[-3px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
              <Stack
                className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                onClick={handleNavigate2}
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
                onClick={handleNavigate3}
              >
                Continue
              </Button>
            </Row>
            <Row className="mb-14 items-center xl:ml-[110px] 2xl:ml-[899px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[-58px] 3xl:mt-[26px] w-[39%]">
              <Button
                className=" font-bold bg-gray_700 hover:bg-gray_900 text-white rounded-full"
              >
                Save draft
              </Button>
            </Row>
              </Column>
            </Column>
          </Column>
        <Row className="bg-white_A700 font-normal items-start  h-[380px] lg:mb-[46px] xl:mb-[57px] 2xl:mb-[65px] 3xl:mb-[78px] 2xl:ml-[30px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[43px] 3xl:mt-[42px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] shadow-bs w-[27%]">
          <Img
            src="images/img_lightbulb.svg"
            className="lightbulb"
            alt="lightbulb"
          />
          <Stack className="lg:h-[375px] xl:h-[468px] 2xl:h-[400px] 3xl:h-[632px] 2xl:mb-[15px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[-25px] 3xl:mt-[7px] w-[82%]">
            <Text
              className="absolute font-semibold h-[max-content] inset-[0] justify-center leading-[normal] m-[auto] text-black_900 w-[98%]"
              variant="body4"
            >
            <span className="text-black_900 font-ptsans font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[15px] 3xl:text-[24px]">
              How does Payments by <br/> HalalHoliday.com work?
              <br />
            </span>
            <span className="text-black_900 font-ptsans font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[13px] 3xl:text-[19px]">
              <br />
            </span>
            <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[19px]">
              1. Guest books
              <br />A guest books your property using their preferred
              payment method.
              <br />
              <br />
              2. HalalHoliday.com facilitates payment
              <br />
              We facilitate the guest’s payment on your behalf, ensuring
              they pay in full before arrival.
              <br />
              <br />
              3. You get paid
              <br />
              {`After the guest checks out you'll be paid by bank transfer within 7 business days.`}
              <br />
              <br />
              Your bank details can be added in the finance section of
              the extranet. We’ll also remind you after your first
              booking.
            </span>
          </Text>
          <Img
            src="images/img_close_23X23.svg"
            className="absolute right-[0] top-[0] 2xl:mt-[23px] ThumbsDown"
            alt="close"
          />
        </Stack>
      </Row>
    </Row>
  </Column>
</Column>
</Column>
    </>
  );
};

export default PricingandcalendarNoPage;