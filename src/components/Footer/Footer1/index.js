import React from "react";

import { Row, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Footer1 = (props) => {
  const navigate = useNavigate();

  function handleNavigate61() {
    navigate("/propertycategorypage");
  }

  return (
    <>
      <footer className={props.className}>
        <Row className="items-start lg:mb-[43px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] lg:ml-[105px] xl:ml-[132px] 2xl:ml-[149px] 3xl:ml-[178px] lg:mr-[118px] xl:mr-[148px] 2xl:mr-[167px] 3xl:mr-[200px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[78%]">
          <Text
            className="PrivacyandCoo"
            variant="body4"
          >
            About Us
          </Text>
          <Text className="PrivacyandCoo" variant="body4">
            Privacy and Cookie Statement
          </Text>
          <Text className="PrivacyandCoo" variant="body4">
            FAQs
          </Text>
          <Button
            className="common-pointer font-bold font-ptsans lg:ml-[268px] xl:ml-[335px] 2xl:ml-[377px] 3xl:ml-[452px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[17%]"
            //onClick={handleNavigate61}
            shape="RoundedBorder2"
            size="lg"
            data-modal-toggle="popup-modal"
            variant="FillLightblue800"
          >
            Add new property
          </Button>
          <Button
            className="font-bold font-ptsans lg:ml-[27px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[17%]"
            shape="RoundedBorder2"
            size="lg"
            variant="FillLightblue800"
          >
            Share your feedback
          </Button>
        </Row>
      </footer>
    </>
  );
};

export default Footer1;
