import React, { useEffect, useState, useRef } from "react";

import { Column, Stack, Img, Row, Text, Line, Input, Button } from "components";
import { useNavigate } from "react-router-dom";
import Header from "components/Header/Header";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const HowmuchapartmenttolistPage = () => {
  //declare
  const [inputProperties, setInputProp] = useState(2);
  const [sameAddress, setSameAddress] = useState(false);
  const [propertyUnit, setPropertyUnit] = useState(false);

  const labelRef1= useRef(null);
  const labelRef2 = useRef(null);
  const labelRef3= useRef(null);
  const labelRef4 = useRef(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   // Retrieve values from localStorage on page load
  //   const storedPropertyUnit = localStorage.getItem("propertyUnit");
  //   const storedSameAddress = localStorage.getItem("sameAddress");
  //   const storedInputProperties = localStorage.getItem("inputProperties");

  //   // Update state with stored values if they exist
  //   if (storedPropertyUnit) {
  //     setPropertyUnit(storedPropertyUnit === "true");
  //   }

  //   if (storedSameAddress) {
  //     setSameAddress(storedSameAddress === "true");
  //   }

  //   if (storedInputProperties) {
  //     setInputProp(Number(storedInputProperties));
  //   }

  //   console.log('storedPropertyUnit: ', storedPropertyUnit)
  //   console.log('storedSameAddress: ', storedSameAddress)
  //   console.log('storedInputProperties: ', storedInputProperties)

  //   if (storedPropertyUnit === 'true' && labelRef1.current) {
  //     labelRef1.current.click();
  //   }

  //   if (storedPropertyUnit === 'false' && labelRef2.current) {
  //     labelRef2.current.click();
  //   }

  //   if (storedSameAddress === 'true' && labelRef3.current) {
  //     labelRef3.current.click();
  //   }

  //   if (storedSameAddress === 'false' && labelRef4.current) {
  //     labelRef4.current.click();
  //   }

  // }, []);

  function handleNavigate76() {
    console.log(' propertyUnit: ', propertyUnit, ' sameAdress: ', sameAddress, 'input: ', inputProperties,)

    localStorage.setItem('inputProperties', inputProperties)
    localStorage.setItem('propertyUnit', propertyUnit)
    localStorage.setItem('sameAddress', sameAddress)

    if (propertyUnit === true) {
      console.log('one apartment')
      localStorage.setItem('sameAddress', null);
      localStorage.setItem('inputProperties', 1);
    }
    else {
      console.log('multiple apartment')
    }

    // console.log('1: ', propertyUnit, '  2: ', sameAddress, '  3: ', inputProperties);

    navigate("/confirmation");
  }

  function handleNavigate77() {
    navigate("/admin");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans justify-start mx-[auto] lg:pb-[24px] xl:pb-[30px] 2xl:pb-[34px] 3xl:pb-[40px] w-[100%]">
        <HeaderOTAAdmin />
        <Column className="justify-start 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] sm:ml-[46px] md:ml-[65px] sm:mt-[36px] md:mt-[44px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] w-[39%]">
          <Text
            className="not-italic text-black_900 sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[22px] 3xl:text-[24px] w-[auto]"
            as="h4"
            variant="h4"
          >
            How many apartment are you listing?{" "}
          </Text>
          <Stack className="lg:h-[277px] xl:h-[347px] 2xl:h-[390px] 3xl:h-[468px] sm:mt-[8px] md:mt-[10px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
            <Line className="absolute bg-gray_200_ce bottom-[24%] h-[1px] w-[100%]" />
            <Column className="absolute items-center justify-start w-[100%]">
              <Column className="bg-white_A700 items-start justify-center sm:p-[17px] md:p-[19px lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] shadow-bs3 w-[100%]">
                <ul className="sm:mt-3 md:mt-5 xl:mt-9 2xl:mt-11 3xl:mt-13 grid gap-2 w-full md:grid-cols-1">
                  <li>
                    <input type="radio" id="hosting-small1" name="hosting" value="hosting-small" className="hidden peer" required="" />
                    <label
                      // id="one_apartment" 
                      // onClick={()=>setPropertyUnit(true)} 
                      // htmlFor="hosting-small1" 
                      className="inline-flex justify-between items-center p-7 w-full text-black_900 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      id="one_apartment"
                      ref={labelRef1}
                      onClick={() => setPropertyUnit(true)}
                      htmlFor="hosting-small1"
                      // className={`inline-flex justify-between items-center p-7 w-full text-black_900 bg-white rounded-lg border border-gray-200 cursor-pointer ${
                      //   localStorage.getItem('propertyUnit') === 'true' ? 'dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700' : ''
                      // }`}
                    >
                      <div className="block">
                        <Img
                          src="images/img_home.svg"
                          className="mr-[3px] bg-white_A700 sm:w-[16px] md:w-[20px] lg:w-[24px] xl:w-[30px] 2xl:w-[33px] 3xl:w-[39px] sm:h-[16px] md:h-[20px] lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] 2xl:ml-[32px] 3xl:ml-[38px] sm:ml-[14px] md:ml-[16px] lg:ml-[22px] xl:ml-[28px] my-[auto]"
                          alt="home" loading="lazy" />
                      </div>
                      <div className="w-full ml-[75px] mt-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-medium">One Apartment</div>
                    </label>
                  </li><br></br>
                  <li>
                    <input type="radio" id="hosting-big1" name="hosting" value="hosting-big" className="hidden peer" />
                    <label 
                    ref={labelRef2}
                    onClick={() => setPropertyUnit(false)} 
                    htmlFor="hosting-big1" 
                    className="inline-flex justify-between items-center p-7 w-full text-black_900 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600  hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <Img
                          src="images/img_calculator.svg"
                          className="mr-[2px] bg-white_A700 sm:w-20px] md:w-[22px] lg:w-[24px] xl:w-[30px] 2xl:w-[33px] 3xl:w-[39px] sm:h-[20px] md:h-[22px] lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] 2xl:ml-[32px] 3xl:ml-[38px] sm:ml-[14px] md:ml-[16px] lg:ml-[22px] xl:ml-[28px] my-[auto]"
                          alt="calculator" />
                      </div>
                      <div className="w-full ml-[75px] mt-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-medium">Multiple Apartment</div>
                    </label><br></br>
                    <div className="mt-4 hidden peer-checked:block">
                      <Text className="sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] columnyesillimpor" variant="body5">
                        Are these properties at the same address or building?
                      </Text>
                      <ul className="mt-9 grid gap-6 w-full md:grid-cols-1">
                        <li>
                          <input type="radio" id="hosting-small2" name="hosting2" value="hosting-small2" className="hidden peer" required="" />
                          <label 
                          ref={labelRef3}
                          onClick={() => setSameAddress(true)} 
                          htmlFor="hosting-small2" 
                          className="inline-flex justify-between items-center p-5 w-full text-black_900 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <Img
                                src="images/location1.svg"
                                className="mr-[3px] bg-white_A700  sm:w-[16px] md:w-[20px] lg:w-[24px] xl:w-[30px] 2xl:w-[33px] 3xl:w-[39px] sm:h-[16px] md:h-[20px] lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] 2xl:ml-[32px] 3xl:ml-[38px] sm:ml-[14px] md:ml-[16px] lg:ml-[22px] xl:ml-[28px] my-[auto]"
                                alt="home" loading="lazy" />
                            </div>
                            <div className="w-full ml-[75px] mt-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-medium">Yes, these apartments are at the same address or building</div>
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="hosting-big2" name="hosting2" value="hosting-big2" className="hidden peer" />
                          <label 
                          ref={labelRef4}
                          onClick={() => setSameAddress(false)} 
                          htmlFor="hosting-big2" 
                          className="inline-flex justify-between items-center p-5 w-full text-black_900 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600  hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <Img
                                src="images/location2.svg"
                                className="mr-[2px] bg-white_A700  sm:w-[16px] md:w-[20px] lg:w-[24px] xl:w-[30px] 2xl:w-[33px] 3xl:w-[39px] sm:h-[16px] md:h-[20px] lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] 2xl:ml-[32px] 3xl:ml-[38px] sm:ml-[14px] md:ml-[16px] lg:ml-[22px] xl:ml-[28px] my-[auto]"
                                alt="calculator" />
                            </div>
                            <div className="w-full ml-[75px] mt-[7px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-medium">No, these apartments are at different addresses or buildings</div>
                          </label>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mt-[1px] w-[68%]">
                          <Column className="justify-start w-[49%]">
                            <Text className="sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] Firstlastname" variant="body4">
                              Number of properties
                            </Text>
                          </Column>
                          <Row className=" mt-4 items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                            <input
                              id="message"
                              type="number"
                              value={inputProperties}
                              // onInput={e => setInputProp(e.target.value)}
                              onInput={e => {
                                setInputProp(e.target.value);
                                localStorage.setItem('inputProperties', e.target.value);
                              }}
                              rows="1"
                              min={2}
                              // defaultValue={2}
                              className="justify-start mb-1.5 block p-2 w-13 text-sm text-gray-900 bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </Row>
                        </Column>
                      </div>
                    </div>
                  </li>
                </ul>
              </Column>

              <Row className="gap-2 common-pointer items-center justify-between sm:mt-[18px] md:mt-[20px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]">
                <Stack
                  className="bg-white_A700 border border-light_blue_800 border-solid sm:h-[46px] md:h-[46px] lg:h-[46px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius2 w-[11%]"
                  onClick={handleNavigate77}
                >
                  <Img
                    src="images/img_arrowleft_14X7.svg"
                    className="arrowleft1"
                    alt="arrowleft"
                  />
                </Stack>
                <Button
                  className="font-bold hover:bg-sky-900 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] items-center text-center text-gray_101 w-[87%]"
                  shape="RoundedBorder3"
                  variant="FillLightblue800"
                  onClick={handleNavigate76}
                >
                  Continue
                </Button>
              </Row>
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default HowmuchapartmenttolistPage;

