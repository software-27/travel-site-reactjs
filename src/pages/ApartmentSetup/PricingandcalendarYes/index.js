import React, { useState, useEffect } from "react";

import { Column, Row, Text, Img, Button, Stack, Line } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
// import PropertyAPI from "api/propertyApi";
import axios from 'axios';
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";


const PricingandcalendarYesTwoPage = () => {
  
  const [creditCard, setCreditCard] = useState(false);
  //declare for checked
  const [checkedAmericanExpress, setCheckedAmericanExpress] = useState(false);
  const [checkedVisa, setCheckedVisa] = useState(false);
  const [checkedEuroMastercard, setCheckedEuroMastercard] = useState(false);
  const [checkedDinersClub, setCheckedDinersClub] = useState(false);
  const [checkedJCB, setCheckedJCB] = useState(false);
  const [checkedMaestro, setCheckedMaestro] = useState(false);
  const [checkedDiscover, setCheckedDiscover] = useState(false);
  const [checkedUnionPayDebitCard, setCheckedUnionPayDebitCard] = useState(false);
  const [checkedUnionPayCreditCard, setCheckedUnionPayCreditCard] = useState(false);
  const navigate = useNavigate();

  // const propertyApi  = new PropertyAPI();

  useEffect(() => {
      //call back
      setCreditCard(localStorage.getItem('creditCard'))
      console.log('creditCard (2nd Page): ', creditCard)
  
    }, [creditCard])
    

  function handleNavigate73() {
    navigate("/nl1");
  }
  function handleNavigate74() {
    navigate("/ppd");
  }
  //back
  function handleNavigate75() {
    navigate("/pricingandcalendaryes");
  }
  function handleNavigate10() {
    navigate("/pricingandcalendarno");
  }

  //continue button
  function handleNavigate11() {
    console.log(
      'AmericanExpress:',
      checkedAmericanExpress,
      'Visa:',
      checkedVisa,
      'Euro Mastercard: ',
      checkedEuroMastercard,
      'Dinner club: ',
      checkedDinersClub,
      'JCB: ',
      checkedJCB,
      'Maestro: ',
      checkedMaestro,
      'Discover: ', 
      checkedDiscover, 
      'UnionPayDebitCard: ', 
      checkedUnionPayDebitCard,
      'UnionPayCreditCard: ', 
      checkedUnionPayCreditCard
    );

    let listedCard = [];
    if (checkedAmericanExpress) listedCard.push(1);
    if (checkedVisa) listedCard.push(2);
    if (checkedEuroMastercard) listedCard.push(3);
    if (checkedDinersClub) listedCard.push(4);
    if (checkedJCB) listedCard.push(5);
    if (checkedMaestro) listedCard.push(6);
    if (checkedDiscover) listedCard.push(7);
    if (checkedUnionPayDebitCard) listedCard.push(8);
    if (checkedUnionPayCreditCard) listedCard.push(9);

    console.log('list: ', listedCard);

    // const postData = {
    //   "credit_card": JSON.parse(creditCard),
    //   "card_ids": listedCard,
    // };

    // console.log('post1: ', postData);

    localStorage.setItem('listedCard', listedCard)

    // postPropertyPayment(postData);
    navigate("/pricepernight");
  }

  // async function postPropertyPayment(postData){
  //   // const response = await propertyApi.postPropertyOwner(postData);
  //   try {
  //     // Retrieve the property owner ID from local storage
  //     const propertyId = localStorage.getItem('property_id');
  //     console.log('Property Id:', propertyId);

  //     const response = await axios.post(`http://localhost:8080/api/property/payment/${propertyId}`, postData);
  //     console.log('response: ', response)
  //     // navigate("/nl1");
  //     let data = response.data;
  //     // localStorage.setItem('property_owner_id',data.property_owner_id)
  //     localStorage.setItem('property_id', data.property_id)
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <HeaderOTAAdmin className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Row className="bg-gray_50 items-left justify-evenly pt-6 pb-4 w-[100%]">
              <Row className="bg-gray_50 items-center justify-center w-[19%]">
                <Stack className="items-center justify center">
                  <Row>
                    <Text
                      className="Step1 cursor-pointer mt-1"
                      variant="body4"
                      onClick={handleNavigate73}
                    >
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
                <Stack className="items-center justify center">
                  <Row>
                    <Text
                      className="Step2 cursor-pointer 2xl:mt-[9px]"
                      variant="body4"
                      onClick={handleNavigate74}
                    >
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
                <Stack className="items-center justify center">
                  <Row>
                    <Text
                      className="Step2 cursor-pointer 2xl:ml-[25px] 2xl:mt-[9px]"
                      variant="body4"
                      onClick={handleNavigate75}
                    >
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
                <Stack className="items-center justify center">
                  <Text
                    className="Step2 mb-2.5 2xl:mt-[5px] ml-5"
                    variant="body4"
                  >
                    Pricing and Calendar
                  </Text>
                  <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[7px] 3xl:mt-[31px] w-[100%]">
                    <Text className="text-[13px] text-gray_800 underline italic">
                      20% completed
                    </Text>
                  </Row>
                </Stack>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            <Row className="items-start ml-[auto] xl:mt-[87px] 2xl:mt-[102px] 3xl:mt-[128px] lg:mt-[63px] w-[88%]">
              <Column className="items-center justify-start lg:mb-[35px] xl:mb-[44px] 2xl:mb-[50px] 3xl:mb-[60px] w-[45%]">
                <Column className="justify-start w-[99%]">
                  <Column className="bg-white_A700 justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] shadow-bs w-[100%]">
                    <Text className="Firstlastname" variant="body1">
                      Which cards can you charge at your property?
                    </Text>
                    <Row className="items-center 2xl:mb-[107px] 3xl:mb-[128px] lg:mb-[76px] xl:mb-[95px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[43%]">
                      <Column className="items-center w-[100%]">
                        <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                          <input
                            class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            defaultChecked={checkedAmericanExpress}
                            onChange={()=>setCheckedAmericanExpress(!checkedAmericanExpress)}
                          />
                          <Stack className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[18%]">
                            <div className="absolute bg-light_blue_401 lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] inset-[0] justify-center m-[auto] rounded-radius5 w-[82%]"></div>
                            <Img
                              src="images/img_television_27X33.svg"
                              className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[100%]"
                              alt="television"
                            />
                          </Stack>
                          <label
                            class="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                            for="flexCheckDefault"
                          >
                            American Express
                          </label>
                        </Row>
                        <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                          <input
                            class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            defaultChecked={checkedVisa}
                            onChange={()=>setCheckedVisa(!checkedVisa)}
                          />
                          <Img
                            src="images/img_file.svg"
                            className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[18%]"
                            alt="file"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                            for="flexCheckDefault"
                          >
                            Visa
                          </label>
                        </Row>
                        <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                          <input
                            class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            defaultChecked={checkedEuroMastercard}
                            onChange={()=>setCheckedEuroMastercard(!checkedEuroMastercard)}
                          />
                          <Img
                            src="images/img_clock_21X28.svg"
                            className="lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[23px] mt-[3px] w-[18%]"
                            alt="clock"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                            for="flexCheckDefault"
                          >
                            Euro / Mastercard
                          </label>
                        </Row>
                        <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                          <input
                            class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            defaultChecked={checkedDinersClub}
                            onChange={()=>setCheckedDinersClub(!checkedDinersClub)}
                          />
                          <Img
                            src="images/img_folder.svg"
                            className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[18%]"
                            alt="folder"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                            for="flexCheckDefault"
                          >
                            Diners Club
                          </label>
                        </Row>
                        <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                          <input
                            class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            defaultChecked={checkedJCB}
                            onChange={()=>setCheckedJCB(!checkedJCB)}
                          />
                          <Img
                            src="images/img_jcbcard.png"
                            className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[18%]"
                            alt="jcbcard"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                            for="flexCheckDefault"
                          >
                            JCB
                          </label>
                        </Row>
                        <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                          <input
                            class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            defaultChecked={checkedMaestro}
                            onChange={()=>setCheckedMaestro(!checkedMaestro)}
                          />
                          <Img
                            src="images/img_clock_25X31.svg"
                            className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] rounded-radius3 w-[18%]"
                            alt="clock One"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                            for="flexCheckDefault"
                          >
                            Maestro
                          </label>
                        </Row>
                        <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                          <input
                            class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            defaultChecked={checkedDiscover}
                            onChange={()=>setCheckedDiscover(!checkedDiscover)}
                          />
                          <Img
                            src="images/img_twitter.svg"
                            className="common-pointer lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] w-[18%]"
                            alt="twitter"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                            for="flexCheckDefault"
                          >
                            Discover
                          </label>
                        </Row>
                        <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                          <input
                            class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            defaultChecked={checkedUnionPayDebitCard}
                            onChange={()=>setCheckedUnionPayDebitCard(!checkedUnionPayDebitCard)}
                          />
                          <Img
                            src="images/img_ticket.svg"
                            className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[18%]"
                            alt="ticket"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                            for="flexCheckDefault"
                          >
                            UnionPay debit card
                          </label>
                        </Row>
                        <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                          <input
                            class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            defaultChecked={checkedUnionPayCreditCard}
                            onChange={()=>setCheckedUnionPayCreditCard(!checkedUnionPayCreditCard)}
                          />
                          <Img
                            src="images/img_ticket.svg"
                            className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[18%]"
                            alt="ticket"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800 text-sm pt-0.5"
                            for="flexCheckDefault"
                          >
                            UnionPay credit card
                          </label>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[-3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
                <Row className="items-center xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[88px] lg:mt-[-3px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Stack
                    className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                    onClick={handleNavigate10}
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
                    onClick={handleNavigate11}
                  >
                    Continue
                  </Button>
                </Row>
                <Row className="mb-14 items-center xl:ml-[110px] 2xl:ml-[899px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[-58px] 3xl:mt-[26px] w-[39%]">
                  <Button className=" font-bold bg-gray_700 hover:bg-gray_900 text-white rounded-full">
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

export default PricingandcalendarYesTwoPage;
