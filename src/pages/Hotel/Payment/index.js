import React from "react";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import {
  Column,
  Row,
  Text,
  Button,
  Stack,
  Img,
  Line
 
} from "components";
import Header from "components/Header/Header";


const Payment =() => {

    //for dropdown 317
    const [selected, setSelected] = React.useState("");
    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
      }
      const navigate = useNavigate(); 

      function handleNavigate1() {
        navigate("/hs1");
      }
      function handleNavigate2() {
        navigate("/hs2");
      }
      function handleNavigate3() {
        navigate("/hs3");
      }
      function handleNavigate4() {
        navigate("/hs4");
      }
      function handleNavigate5() {
        navigate("/hs5");
      }
      function handleNavigate6() {
        navigate("/hs6");
      }
      function handleNavigate7() {
        navigate("/hs7");
      }
      // for radio button
      const [showhide, setShowhide]= useState("");

      const handleshow= e=>{
        const getshow= e.target.value;
        setShowhide(getshow);
      }
     
return(
<>
    <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] pb-4 w-[100%]">
            <Column className="items-center justify-start w-[100%]">
            <Header/>
                <Column className="items-center justify-center w-[100%] mb-6">
                    <Row className="gap-0.5 h-[60px] w-[80%] justify-evenly">
                        <Column className="font-sans bg-gray_100 w-[15%] justify-end items-center">
                            <Text onClick={handleNavigate1} className="common-pointer text-gray_501" variant="body4" >Basic Info</Text>
                            <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                        </Column>
                        <Column className="font-sans lg:text- bg-gray_100  w-[14%] justify-end items-center">
                            <Text onClick={handleNavigate2} className="common-pointer text-gray_501" variant="body4" >Layout & Pricing</Text>
                            <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                        </Column>
                        <Column className="font-sans bg-gray_100 w-[15%] justify-end items-center"> 
                            <Text onClick={handleNavigate3} className="common-pointer text-gray_501" variant="body4" >Facilities & Services</Text>
                            <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                        </Column>
                        <Column className="font-sans bg-gray_100  w-[15%] justify-end items-center">
                            <Text onClick={handleNavigate4} className="common-pointer text-gray_501" variant="body4" >Amenities</Text>
                            <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                        </Column>
                        <Column className="font-sans bg-100 w-[15%] justify-end items-center"> 
                            <Text onClick={handleNavigate5} className="common-pointer text-gray_501" variant="body4" > Photos</Text>
                            <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                        </Column>
                        <Column className="font-sans bg-gray_100 w-[15%] justify-end items-center">
                            <Text onClick={handleNavigate6} className="common-pointer text-gray_501" variant="body4" > Policies</Text>
                            <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
                        </Column>
                        <Column className="font-sans bg-gray_200_ce w-[14%] justify-end items-center">
                            <Text onClick={handleNavigate7} className="common-pointer text-gray_702" variant="body4" > Payments</Text>
                            <Line className="bg-gray_702 h-[4px] w-full mt-4"></Line>
                        </Column>        
                    </Row>
                </Column>

                    <Column className="items-center justify-start w-[100%]">
                    
                        <Row className="items-start lg:mt-[27px] xl:mt-[90px] 2xl:mt-[39px] 3xl:mt-[46px] w-[80%]">
                            <Column className="justify-start w-[100%]">
                                <Row className="items-end justify-between w-[100%]">
                                    <Column className="justify-start w-[64%]">
                                        <Text class="text-2xl font-bold"  className="Firstlastname" as="body1" variant="body1">
                                        Payments
                                        </Text>
                                        <Text class="text-sm pt-2"  className="Firstlastname" as="body1" variant="body1">
                                        Specify the types of payment you accept, tax details and other options like additional charges.
                                        </Text>
                                   
                                    <Row>
                                        <Column className=" rounded border bg-white_A700 items-center justify-start lg:mt-[3px] xl:mt-[35px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[0px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                                        <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                                        <Text class="ml-[15px] text-2xl"  className="Firstlastname" as="body1" variant="body1">
                                              Guest payment option
                                                </Text>
                                                <Text class="ml-[15px] text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                Can you charge credit cards at the property?
                                                </Text>
                                                
                                        <Container className="content">
                                            
                                            <div className="row">
                                            <form className="row g-3">
                                                        <div className="ml-[15px] col-md-12">
                                                            
                                                            <Row className="flex space-x-4">
                                                            <div className="text-black flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-[16%] h-10"> 

                                                                <input type="radio" name="userdetail" value="yes1" checked={ showhide==='yes1' } className="common-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow } /> 
                                                                <label class="common-pointer py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300" >Yes</label>
                                                                
                                                            </div>

                                                            <div className="text-black flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-[16%] h-10"> 

                                                                <input type="radio" name="userdetail" value="no1" checked={ showhide==='no1' }  className="common-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow }/> 
                                                                <label class="common-pointer py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                                                
                                                            </div>
                                                            </Row>          
                                                            

                                                           
                                                        </div>

                                                        {
                                                        showhide==='yes1' && (
                                                            <Row>
                                                            <div className="w-[50%] ml-[16px] ">
                                                            <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                                                                <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                                                                <Stack className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[18%]">
                                                                    <div className="absolute bg-light_blue_401 lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] inset-[0] justify-center m-[auto] rounded-radius5 w-[45%]"></div>
                                                                    <Img
                                                                    src="images/img_television_27X33.svg"
                                                                    className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[100%]"
                                                                    alt="television"
                                                                    />
                                                                </Stack>
                                                                <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                                                                American Express
                                                                </label>
                                                            </Row>
                                                                <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                                                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                                                                        <Img
                                                                        src="images/img_file.svg"
                                                                        className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[18%]"
                                                                        alt="file"
                                                                    />
                                                                    <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                                                                    Visa
                                                                    </label>
                                                                </Row>
                                                                <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                                                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                                                                        <Img
                                                                        src="images/img_clock_21X28.svg"
                                                                        className="lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[23px] mt-[3px] w-[18%]"
                                                                        alt="clock"
                                                                    />
                                                                    <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                                                                    Euro / Mastercard
                                                                    </label>
                                                                </Row>  
                                                                <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                                                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                                                                    <Img
                                                                        src="images/img_folder.svg"
                                                                        className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[18%]"
                                                                        alt="folder"
                                                                    />
                                                                    <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                                                                    Diners Club
                                                                    </label>
                                                                </Row>
                                                                <Row className="form-check font-ptsans items-start lg:mt-[14px] lg:mt-[14px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                                                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                                                                    <Img
                                                                    src="images/img_jcbcard.png"
                                                                    className="g:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] ml-5 rounded-radius3 w-[7%]"
                                                                    alt="jcbcard"
                                                                />
                                                                    <label class="form-check-label inline-block text-gray-800 ml-5 text-sm pt-0.5" for="flexCheckDefault">
                                                                    JCB
                                                                    </label>
                                                                </Row>
                                                            </div>
                                                            
                                                            <div className="w-[50%]">
                                                                <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                                                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                                                                    <Img
                                                                        src="images/img_clock_25X31.svg"
                                                                        className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] rounded-radius3 w-[18%]"
                                                                        alt="clock One"
                                                                    />
                                                                    <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                                                                    Maestro
                                                                    </label>
                                                                </Row>  
                                                                <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                                                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                                                                    <Img
                                                                        src="images/img_twitter.svg"
                                                                        className="common-pointer lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] w-[18%]"
                                                                        alt="twitter"
                                                                    />
                                                                    <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                                                                    Discover
                                                                    </label>
                                                                </Row>
                                                                <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                                                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                                                                    <Img
                                                                        src="images/img_ticket.svg"
                                                                        className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[18%]"
                                                                        alt="ticket"
                                                                    />
                                                                    <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                                                                    UnionPay debit card
                                                                    </label>
                                                                </Row>
                                                                <Row className="form-check font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[100%]">
                                                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray_501 border-solid rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                                                                    <Img
                                                                        src="images/img_ticket.svg"
                                                                        className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] w-[18%]"
                                                                        alt="ticket"
                                                                    />
                                                                    <label class="form-check-label inline-block text-gray-800 text-sm pt-0.5" for="flexCheckDefault">
                                                                    UnionPay credit card
                                                                    </label>
                                                                </Row>
                                                            </div>
                                                        </Row>
                                                        )
}

                                                    { showhide==='no1' && (
                                                            <Column className="bg-sky-50 mt-7 pt-4">
                                                                <Text class="ml-[15px] text-xl font-bold break-after-column">
                                                                    No problem! Allow your guests to pay online
                                                                </Text>
                                                                <Text className="ml-[15px] text-sm">
                                                                    <br/>You can have guests pay via Payments by Booking.com. Here's how it works:
                                                                </Text>

                                                                    <Row className="ml-[15px] bg-sky-50">
                                                                        <div className="w-[33.3%] mb-6 pr-5">
                                                                            <div class="flex flex-wrap justify-center">
                                                                                <img
                                                                                src="images/1.svg"
                                                                                class="mt-4 mb-4 max-w-sm h-12 ease-in-out duration-300 shadow-none"
                                                                                alt=""
                                                                            />
                                                                            </div>

                                                                            <Text class="text-[17px] font-bold break-after-column text-blue-900">
                                                                                1. Customer books
                                                                            </Text>
                                                                            <br/>
                                                                            <Text class="text-[14px] font-bold text-blue-900 pt-5">
                                                                            A Booking.com customer makes a reservation for your property using their preferred payment method.
                                                                            </Text>
                                                                        </div>
                                                                        <div className="w-[33.3%] mb-6 pr-5">
                                                                            <div class="flex flex-wrap justify-center">
                                                                                <img
                                                                                src="images/2.svg"
                                                                                class="mt-4 mb-4 max-w-sm h-12 ease-in-out duration-300 shadow-none"
                                                                                alt=""
                                                                            />
                                                                            </div>
                                                                            <Text class="text-[17px] font-bold text-justify text-blue-900">
                                                                            2. Booking.com facilitates your payment
                                                                            </Text>
                                                                            <br/>
                                                                            <Text className="text-[14px] font-bold text-center text-blue-900">
                                                                            The guest is charged on your behalf according to your policies, and we make sure they've paid in full before they arrive at your property.
                                                                            </Text>
                                                                        </div>
                                                                        
                                                                        <div className="w-[33.3%] pr-5">
                                                                            <div class="flex flex-wrap justify-center">
                                                                                <img
                                                                                src="images/3.svg"
                                                                                class="mt-4 mb-4 max-w-sm h-12 ease-in-out duration-300 shadow-none"
                                                                                alt=""
                                                                            />
                                                                            </div>
                                                                            <Text class="text-[17px] font-bold text-blue-900  ">
                                                                            3. You get paid
                                                                            </Text>
                                                                            <br/>
                                                                            <Text class="text-[14px] font-bold text-blue-900 mt-9 text-justify">
                                                                            After your guest checks out you'll be paid by bank transfer within 7 working days.
                                                                            </Text>
                                                                        </div>
                                                                    </Row>
                                                            </Column>

                                                        )

                                                        }          

                                            </form>
                                            </div>
                                            </Container>
                                        </Column>
                                        </Column>

                                        <Column className="justify-start rounded-radius4 shadow  ml-4 p-4 h-27 fixed right-40 top-50 bg-white_A700 w-[19%]">
                                        <Text className="font-regular text-[12px]">
                                        Prepayment<br/>
                                        You can select payment preferences, including prepayment options, once we verify your property. 
                                        This is to ensure the security of both our partners and our customers.
                                        </Text>
                                        </Column>
                                        
                                    </Row>

                                        <Column className=" rounded border bg-white_A700 items-center justify-start lg:mt-[3px] xl:mt-[35px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[15px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                                        <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                                            
                                                <Text class="text-2xl"  className="Firstlastname" as="body1" variant="body1">
                                                    Commission payments
                                                </Text>

                                            <Row className="w-[100%]">
                                                <div className="w-[60%]">
                                                    <Text class="text-[14px] py-2"  className="Firstlastname" as="body1" variant="body1">
                                                    At the beginning of each month we will send you an invoice for all complete bookings in the previous month.
                                                    </Text>
                                                </div>
                                                <div className="w-[40%] text-right">
                                                    <Text class="text-[14px] font-bold"  className="Firstlastname" as="body1" variant="body1">
                                                        Commision percentage: 
                                                    </Text>
                                                    <Text class="text-2xl text-right text-lime-700" >
                                                       <br/> 15%
                                                    </Text>
                                                    
                                                </div>
                                               
                                            </Row>
                                                <div className="mt-1 w-[100%] text-right">
                                                    <Text class="text-[14px] font-bold"  className="Firstlastname" as="body1" variant="body1">
                                                        Payment Charge: 
                                                    </Text>
                                                    
                                                </div>
                                                
                                                    <Text class="w-[100%] text-right text-2xl text-lime-700" >
                                                        2.5%
                                                    </Text>

                                                <Text class="text-[14px] pt-3"  className="Firstlastname" as="body1" variant="body1">
                                                    What name should be placed on the invoice (e.g. legal/company name)?
                                                </Text>

                                                <div>
                                                    <select className="w-[60%] text-[13px] border-gray-400" onChange={changeSelectOptionHandler}>
                                                      <option>xxx property (name)</option>
                                                      <option>Legal company name (please specify)</option>
                                                      <option>xxx homestay</option>
                                                    </select>  
                                                </div>

                                                <Text class="text-[14px] pt-9"  className="Firstlastname" as="body1" variant="body1">
                                                    Does this recipient have the same address as your property?
                                                </Text>

                                        
                                        <Container className="content">
                                            
                                            <div className="row">
                                            <form className="row g-3">
                                                        <div className="col-md-12">
                                                            
                                                            <Row className="flex space-x-4">
                                                                <div className="text-black flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-[16%] h-10"> 

                                                                    <input type="radio" name="userdetail" value="yes" checked={ showhide==='yes' } className="common-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow } /> 
                                                                    <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                                                    
                                                                </div>

                                                                <div className="text-black flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-[16%] h-10"> 

                                                                    <input type="radio" name="userdetail" value="no" checked={ showhide==='no' }  className="common-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow }/> 
                                                                    <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                                                    
                                                                </div>
                                                            </Row>          
                                                            

                                                           
                                                        </div>

                                                    { showhide==='no' && (
                                                        <Column className="gap-1">

                                                            <div class="py-4 w-full md:w-1/2 px-2">
                                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-last-name">
                                                                Select the country/region where the invoice recipient is located
                                                                </label>
                                                                <input class="w-[50%] bg-slate-50 appearance-none block bg-white text-gray-700 border py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
                                                            </div>

                                                            <div class="py-5 w-full md:w-1/2 px-2">
                                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-last-name">
                                                                City
                                                                </label>
                                                                <input class="w-[50%] bg-slate-50 appearance-none block bg-white text-gray-700 border py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
                                                            </div>

                                                            <div class="py-5 w-full md:w-1/2 px-2">
                                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-last-name">
                                                                Address
                                                                </label>
                                                                <input class="w-[50%] bg-slate-50 appearance-none block bg-white text-gray-700 border py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
                                                            </div>

                                                            <div class="py-5 w-full md:w-1/2 px-2">
                                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-last-name">
                                                                Postal code
                                                                </label>
                                                                <input class="w-[20%] bg-slate-50 appearance-none block bg-white text-gray-700 border py-2.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
                                                            </div>

                                                    </Column>)}
                                            </form>
                                            </div>
                                            </Container>

                                        </Column>
                                        </Column>

                                        <Column className=" rounded border bg-white_A700 items-center justify-start lg:mt-[3px] xl:mt-[35px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[15px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                                        <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                                                <Text class="text-xl font-bold"  className="Firstlastname" as="body1" variant="body1">
                                                You’re almost done – just a few final things to consider
                                                </Text>

                                                <Text class="text-2xl pt-3"  className="Firstlastname" as="body1" variant="body1">
                                                Your availability to guests
                                                </Text>
                                                <Text class="text-[14px] py-2"  className="Firstlastname" as="body1" variant="body1">
                                                To help you start earning, we automatically make your property open for bookings for the next 18 months. If you would like to make changes to your availability before opening, you can choose ‘complete registration and open later’. Your availability can also be adjusted after you open for bookings.
                                                </Text>

                                                <Text class="text-xl py-3"  className="Firstlastname" as="body1" variant="body1">
                                                To complete your registration, please tick the boxes below:
                                                </Text>

                                                <div class="form-check">
                                                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2  cursor-pointer" type="checkbox"/>
                                                    <Text class="text-[14px]"  className="Firstlastname" as="body1" variant="body1">
                                                    I certify that this is a legitimate accommodation business with all necessary licenses and permits, which can be shown upon first request. Booking.com B.V. reserves the right to verify and investigate any details provided in this registration.
                                                    </Text>
                                                   
                                                </div>

                                                <div class="form-check py-3">
                                                    <input class="py-2 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2  cursor-pointer" type="checkbox"/>
                                                    <Text class="text-[14px] py-4 text-justify">
                                                    I have read, accepted and agreed to the General Delivery Terms and Privacy Statement.
                                                    </Text>
                                                </div>
                                            
                                                <Text className="text-[14px] py-4 font-bold">
                                                Booking.com enables accommodations and guests to communicate through Booking.com, which receives and processes communications in accordance with the Booking.com Privacy Statement and General Delivery Terms.
                                                </Text>
                                        </Column>
                                        </Column>

                                        <Button
                                          className="font-bold lg:mt-[25px] bg-sky-700 hover:bg-indigo_901 text-center text-white_A700 h-12 w-[100%]"
                                        >
                                          Complete registration and open for booking.
                                        </Button>

                                        <Text class="text-[13px] py-2 font-bold text-center "  className="Firstlastname" as="body1" variant="body1">
                                        Almost done! You can always change the information even after you completed the registration!
                                        </Text>
                                                


                                    </Column>
                                </Row>
                            </Column>
                        </Row>
                    </Column>    
                </Column> 
            </Column> 
         </>   

);
};
export default Payment;