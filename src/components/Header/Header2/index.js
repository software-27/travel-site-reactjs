import React from "react";

import { Stack, Column, Row, Text, Input } from "components";
import { FaRegUserCircle } from "react-icons/fa";
import Icon from "@mdi/react";
import { mdiHomeGroup, mdiMagnify } from "@mdi/js";

const Header2 = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Stack className="xl:h-[90px] 2xl:h-[117px] 3xl:h-[140px] lg:h-[83px] w-[100%]">
          <Column className="absolute bg-indigo_905 items-center justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[20px] 3xl:p-[23px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-start w-[100%]">
                  <Text
                    className="cursor-pointer hover:font-normal font-ptsans 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-white_A700_99 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    <span className="text-light_green_A400 font-harmattan font-bold lg:text-[28px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px]">
                      Halal
                    </span>
                    <span className="text-blue_600 font-harmattan font-bold lg:text-[28px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px]">
                      Holiday
                    </span>
                    <span className="text-white_A700 font-bold lg:text-[28px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px]">
                      {" "}
                    </span>
                  </Text>
                  <Row className="justify-end w-[100%]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="pl-4 items-end font-normal text-white font-ptsans not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-white_A700_99 w-[100%]"
                      wrapClassName="bg-indigo_904 rounded rounded-full 2xl:ml-[518px] 2xl:mt-[7px] 3xl:ml-[621px] 3xl:mt-[8px] flex lg:ml-[368px] lg:mt-[4px] w-[23%] xl:ml-[460px] xl:mt-[6px]"
                      name="Searchbar"
                      placeholder="Search Account"
                      suffix={(
                          <Icon
                            path={mdiMagnify}
                            title="Search"
                            className="mt-[4px] items-center text-white_A700_99"
                            size={1}
                            horizontal-180
                          />
                        )
                      }
                      size="smSrc"
                    ></Input>
                    <Column className="items-center justify-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[7%]">
                      <Icon
                        path={mdiHomeGroup}
                        title="Search"
                        className="mt-[4px] w-8 h-8 text-white"
                        horizontal-180
                      />
                      <Text
                        className="cursor-pointer hover:font-normal font-normal font-ptsans lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-white_A700_99 w-[auto]"
                        variant="body2"
                      >
                        Properties
                      </Text>
                    </Column>
                    <Column className="items-center justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[5%]">
                      <FaRegUserCircle className="text-white w-8 h-8 mt-[4px]"></FaRegUserCircle>
                      <Text
                        className="cursor-pointer hover:font-normal font-normal font-ptsans mt-[3px] not-italic text-white_A700_99 w-[auto]"
                        variant="body2"
                      >
                        Account
                      </Text>
                    </Column>
                  </Row>
                </Row>
              </Column>
            </Column>
          </Column>
        </Stack>
      </header>
    </>
  );
};

export default Header2;