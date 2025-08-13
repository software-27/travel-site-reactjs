import React from "react";

import { Row, Text, Img, Stack } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-indigo_901 items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
          <Row className="items-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[92%]">
            <Text
              className="cursor-pointer hover:font-normal font-ptsans lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[auto]"
              as="h1"
              variant="h1"
            >
              <span className="text-light_green_A400 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                Halal
              </span>
              <span className="text-blue_600 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                Holiday
              </span>
            </Text>
            <Img
              src="images/img_minimize.svg"
              className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] 3xl:ml-[1038px] lg:ml-[615px] xl:ml-[769px] 2xl:ml-[865px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[2%]"
              alt="minimize"
            />
            <Text
              className="cursor-pointer pr-1 hover:font-normal font-normal font-ptsans lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] not-italic text-white_A700 hover:text-white_A700_99 w-[auto]"
              variant="body1"
            >
              Help
            </Text>
            <Stack className="bg-amber_600 justify-center rounded-full Multiply">
              <Img
                src="images/img_question_35X35.svg"
                className="Multiply pb-px"
                alt="question"
              />
            </Stack>
            <Img
              src="images/img_user_35X35.svg"
              className="lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] Multiply"
              alt="user"
            />
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header1;
