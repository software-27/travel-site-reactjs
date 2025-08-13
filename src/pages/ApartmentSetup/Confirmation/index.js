import React from "react";

import { Column, Stack, Text, Row, Img, Button } from "components";
import { useNavigate } from "react-router-dom";
import Header from "components/Header/Header";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  function handleNavigate73() {
    navigate("/questionaboutproperty");
  }
  function handleNavigate82() {
    navigate("/howmuchapartmenttolist");
  }

  return (
    <>
      <Column className="bg-gray_50 items-center justify-start mx-[auto] lg:pb-[33px] xl:pb-[41px] 2xl:pb-[47px] 3xl:pb-[56px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <HeaderOTAAdmin/>
          <div
            className="font-ptsans 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] sm:mt-[41px] md:mt-[55px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] not-italic text-black_900 w-[auto]"
            as="h4"
            variant="h4"
          >
           
          </div>
          <Row className="font-ptsans items-start justify-start ml-[auto] sm:mt-[16px] md:mt-[19px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[88%]">
            <Column className="bg-white_A700 items-center justify-end lg:mb-[115px] xl:mb-[145px] 2xl:mb-[163px] 3xl:mb-[195px] sm:p-[14px] md:p-[18px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] shadow-bs3 w-[45%]">
              <Column className="font-ptsans items-center justify-start sm:mt-[7px] md:mt-[9px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[40%]">
                <Text className="sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px]" variant="">
                  You’re listing:
                </Text>
                <Img
                  src="images/img_volume.svg"
                  className="sm:h-[14px] md:h-[27px] lg:h-[32px] xl:h-[43px] 2xl:h-[46px] 3xl:h-[55px] sm:w-[16px] md:w-[27px] lg:w-[32px] xl:w-[43px] 2xl:w-[45px] 3xl:w-[54px] sm:mt-[11px] md:mt-[17px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[88%]"
                  alt="volume"
                />
              </Column>
              <Text
                className="font-ptsans font-semibold leading-[normal] sm:mt-[18px] md:mt-[22px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[32px] 3xl:text-[42px] text-black_900 text-center w-[100%]"
                as="h5"
                variant="h5"
              >
                One apartment where guests can
                <br /> book the entire place
              </Text>
              <Text
                className="sm:mt-[29px] md:mt-[42px] lg:mt-[69px] xl:mt-[87px] 2xl:mt-[98px] 3xl:mt-[117px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[32px] 3xl:text-[42px]columneachpropertyw"
                variant="body4"
              >
                Does this sound like your property?
              </Text>
              <Column className="font-ptsans items-center justify-start sm:mt-[14px] md:mt-[18px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]">
                <Button
                  className="common-pointer font-bold hover:bg-sky-900 lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[100%]"
                  onClick={handleNavigate73}
                  shape="RoundedBorder3"
                  variant="FillLightblue800"
                >
                  Continue
                </Button>
                <Button
                  className="common-pointer font-bold sm:mt-[2px] md:mt-[7px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-light_blue_800 w-[100%]"
                  onClick={handleNavigate82}
                  variant="OutlineLightblue8001_2"
                >
                  No, I need to make a change
                </Button>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ConfirmationPage;
