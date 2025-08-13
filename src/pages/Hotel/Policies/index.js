import React from "react";
import {useState} from 'react';
import {
  Column,
  Row,
  Text,
  Button, 
  Line
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";


const Policies =() => {

  function handleNavigate32() {
    navigate("/hs7");
  }
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
  //for switch 
    let [changeText, setChangeText] = useState(true);
    const handleChange = () => {
      return setChangeText(!changeText);
}

//for dropdown list
const [isVisible, setIsVisible] = useState("");

const changeHandler= e=>{
  const getshow= e.target.value;
  setIsVisible(getshow);
}


//for call the input selected 
let [selected, setSelected] = React.useState('');
let [selected1, setSelected1] = React.useState('');

    const changeSelectOptionHandler1 = (event) => {
        setSelected1(event.target.value);
      }
      const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
      }

    const navigate = useNavigate();

    const [enabled, setEnabled] = useState(false);

    //for button 
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [changeColor4, setChangeColor4] = useState(false);

    const handleClick1 = () =>{
      setChangeColor1(!changeColor1)
    };
    const handleClick2 = () =>{
      setChangeColor2(!changeColor2)
    };
    const handleClick3 = () =>{
      setChangeColor3(!changeColor3)
    };
    const handleClick4 = () =>{
      setChangeColor4(!changeColor4)
    };

    
    return(
        <>
        <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[416px] xl:pb-[521px] 2xl:pb-[586px] 3xl:pb-[703px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
                <Header className="w-[100%]" />
                <Column className="items-center justify-center w-[100%] mb-6">
        <Row className="gap-0.5 h-[60px] w-[80%] justify-evenly">
            <Column className="font-sans bg-gray_200_ce w-[15%] justify-end items-center">
                <Text onClick={handleNavigate1} className="common-pointer text-gray_702" variant="body4" >Basic Info</Text>
                <Line className="bg-gray_702 h-[4px] w-full mt-4"></Line>
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
            <Column className="font-sans bg-gray_100 w-[14%] justify-end items-center">
                <Text onClick={handleNavigate7} className="common-pointer text-gray_501" variant="body4" > Payments</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>        
        </Row>
    </Column>
                    <Column className="items-center justify-start w-[100%]">
          
                        <Row className="items-start lg:mt-[27px] xl:mt-[90px] 2xl:mt-[39px] 3xl:mt-[46px] w-[80%]">
                            <Column className="justify-start w-[100%]">
                                <Row className="items-end justify-between w-[100%]">
                                    <Column className="justify-start w-[64%]">
                                        <Text class="text-2xl font-bold"  className="Firstlastname" as="body1" variant="body1">
                                        Policies
                                        </Text>
                                        <Text class="text-sm pt-2"  className="Firstlastname" as="body1" variant="body1">
                                        Specify some basic policies. Do you allow children or pets? How flexible are you with cancellations?
                                        </Text>

                                      <Row>  
                                        <Column className=" rounded border bg-white_A700 items-center justify-start lg:mt-[3px] xl:mt-[25px] 2xl:mt-[53px] lg:p-[10px] xl:p-[15px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                                            <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px]  xl:my-[9px] w-[100%]">
                                                <Text class="text-2xl"  className="Firstlastname" as="body1" variant="body1">
                                                    Cancellations
                                                </Text>
                                                <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                    How many days in advance can guests cancel free of charge?
                                                </Text>
                                                
                                                   
                                                      <div>
                                                        <select 
                                                          label="Day of arrival"
                                                          value={selected1}
                                                          className="w-[60%] border-gray-400 text-sm" 
                                                          onChange={changeSelectOptionHandler1}
                                                        >
                                                          <option>Day of arrival (18:00)</option>
                                                          <option>1 day</option>
                                                          <option>2 days</option>
                                                          <option>3 days</option>
                                                          <option>7 days</option>
                                                          <option>14 days</option>
                                                        </select>
                                                      </div>
                                                     
                                                     

                                                  <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                    or guests will pay 100%
                                                  </Text>

                                                  <div>
                                                        <select  
                                                        label="of the first night"
                                                        value={selected}
                                                        className=" w-[60%] border-gray-400 text-sm" 
                                                        onChange={changeSelectOptionHandler}>
                                                          <option>of the first night</option>
                                                          <option>of the full stay</option>
                                                         
                                                        </select>
                                                      </div>

                                        

                                                <Column className=" rounded border bg-gray-200 justify-start lg:mt-[37px] xl:mt-[20px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                                                  <Text className="font-bold text-[13px]" >
                                                  The guest must cancel by {selected1} on the day of arrival or pay 100% of the price {selected}.
                                                  </Text>
                                                  <Text className="italic text-[13px]" >
                                                  please note: You'll be able to make changes to your policies later on. This is just to get you started. 
                                                  </Text>


                                                </Column>

                                            </Column>
                                        </Column>

                                        <Column className="justify-start rounded-radius4 shadow  ml-4 p-4 h-20 fixed right-40 top-50 bg-white_A700 w-[18%]">
                                          <Text className="font-regular text-[12px]">
                                            After you complete registration you will still be able to make
                                            changes to your listing before it goes live.
                                          </Text>
                                        </Column>
                                      </Row> 

                                        <Column className=" rounded border bg-white_A700 items-center justify-start lg:mt-[37px] xl:mt-[20px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[15px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                                        <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                                              <Row className="w-[100%]">
                                                <Text class="text-2xl w-[100%]"  className="Firstlastname" as="body1" variant="body1">
                                                Protect against accidental bookings
                                                </Text>  
                                                <div className="relative flex flex-col-reverse items-right justify-right overflow-hidden w-[20%]">
                                                  <div className="flex">
                                                      <label class="inline-flex relative items-center cursor-pointer">
                                                    
                                                          
                                                          <input
                                                              type="checkbox"
                                                              className="sr-only peer"
                                                              checked={enabled}
                                                              readOnly
                                                          />
                                                          
                                                          <div
                                                              onClick={() => {
                                                                  setEnabled(!enabled);
                                                              }}
                                                              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"
                                                          ></div>
                                                          <span className="ml-2 text-sm font-medium text-gray-900">
                                                              ON
                                                          </span>
                                                      </label>
                                                  </div>
                                              </div>

                                              </Row>
  

                                                <Text class="text-[12px] py-2 pr-2"  className="Firstlastname" as="body1" variant="body1">
                                                To save you time handling accidental bookings, we automatically waive cancellation fees for guests that cancel within the first 24 hours of a booking being made. You can change this period of time later in your property management platform.
                                                </Text>
                                                 
                                        </Column>
                                        </Column>
                                        <Row className = "flex space-x-2">

                                        <Column className=" rounded border bg-white_A700 justify-start lg:mt-[37px] xl:mt-[20px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[15px] 2xl:p-[15px] 3xl:p-[18px] w-[50%]">
                                        <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                                                <Text class="text-2xl"  className="Firstlastname" as="body1" variant="body1">
                                                Check-in 
                                                </Text>  
                                                <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                from:
                                                </Text>

                                                <Row className = "flex space-x-1">
                                                <button 
                                                class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  12.00
                                                </button>
                                                <button class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  14.00
                                                </button>
                                                <button class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  15.00
                                                </button>
                                                <select class="bg-white text-sm w-[40%] common-pointer text-sm hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded" onChange={changeSelectOptionHandler}>
                                                        <option>Others</option>
                                                        <option>07.00</option>
                                                        <option>07.30</option>
                                                        <option>08.00</option>
                                                        <option>08.30</option>
                                                        <option>09.90</option>
                                                        <option>09.30</option>
                                                        <option>10.00</option>
                                                        <option>10.30</option>
                                                        <option>11.00</option>
                                                        <option>11.30</option>
                                                        <option>12.00</option>
                                                        <option>12.30</option>
                                                        <option>13.00</option>
                                                        <option>13.30</option>
                                                        <option>14.00</option>
                                                        <option>14.30</option>
                                                        <option>15.00</option>
                                                        <option>15.30</option>
                                                        <option>16.00</option>
                                                        <option>16.30</option>
                                                        <option>17.00</option>
                                                        <option>17.30</option>
                                                        <option>18.00</option>
                                                        <option>18.30</option>
                                                        <option>19.00</option>
                                                        <option>19.30</option>
                                                        <option>20.00</option>
                                                        <option>20.30</option>
                                                        <option>21.00</option>
                                                        <option>21.30</option>
                                                        <option>22.00</option>
                                                        <option>22.30</option>
                                                        <option>23.00</option>
                                                        <option>23.30</option>
                                                        <option>00.00</option>
    
                                                      </select>
                                                
                                                </Row>

                                                <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                to:
                                                </Text>

                                                <Row className = "flex space-x-1">
                                                <button class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  12.00
                                                </button>
                                                <button class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  22.00
                                                </button>
                                                <button class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  00.00
                                                </button>
                                                <select class="bg-white w-[40%] common-pointer text-sm hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded" onChange={changeSelectOptionHandler}>
                                                        <option>Others</option>
                                                        <option>07.00</option>
                                                        <option>07.30</option>
                                                        <option>08.00</option>
                                                        <option>08.30</option>
                                                        <option>09.90</option>
                                                        <option>09.30</option>
                                                        <option>10.00</option>
                                                        <option>10.30</option>
                                                        <option>11.00</option>
                                                        <option>11.30</option>
                                                        <option>12.00</option>
                                                        <option>12.30</option>
                                                        <option>13.00</option>
                                                        <option>13.30</option>
                                                        <option>14.00</option>
                                                        <option>14.30</option>
                                                        <option>15.00</option>
                                                        <option>15.30</option>
                                                        <option>16.00</option>
                                                        <option>16.30</option>
                                                        <option>17.00</option>
                                                        <option>17.30</option>
                                                        <option>18.00</option>
                                                        <option>18.30</option>
                                                        <option>19.00</option>
                                                        <option>19.30</option>
                                                        <option>20.00</option>
                                                        <option>20.30</option>
                                                        <option>21.00</option>
                                                        <option>21.30</option>
                                                        <option>22.00</option>
                                                        <option>22.30</option>
                                                        <option>23.00</option>
                                                        <option>23.30</option>
                                                        <option>00.00</option>
    
                                                      </select>
                                                </Row>
                                                 
                                        </Column>
                                        </Column>

                                        <Column className=" rounded border bg-white_A700 justify-start lg:mt-[37px] xl:mt-[20px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[50%]">
                                        <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                                                <Text class="text-2xl"  className="Firstlastname" as="body1" variant="body1">
                                                Check-out
                                                </Text>  
                                                <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                from (optional):
                                                </Text>
                                                
                                                <Row className = "flex space-x-1">
                                                <button class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  00.00
                                                </button>
                                                <button class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  10.00
                                                </button>
                                                <button class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  12.00
                                                </button>
                                                <select class="bg-white w-[40%] common-pointer text-sm hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded" onChange={changeSelectOptionHandler}>
                                                        <option>Others</option>
                                                        <option>07.00</option>
                                                        <option>07.30</option>
                                                        <option>08.00</option>
                                                        <option>08.30</option>
                                                        <option>09.90</option>
                                                        <option>09.30</option>
                                                        <option>10.00</option>
                                                        <option>10.30</option>
                                                        <option>11.00</option>
                                                        <option>11.30</option>
                                                        <option>12.00</option>
                                                        <option>12.30</option>
                                                        <option>13.00</option>
                                                        <option>13.30</option>
                                                        <option>14.00</option>
                                                        <option>14.30</option>
                                                        <option>15.00</option>
                                                        <option>15.30</option>
                                                        <option>16.00</option>
                                                        <option>16.30</option>
                                                        <option>17.00</option>
                                                        <option>17.30</option>
                                                        <option>18.00</option>
                                                        <option>18.30</option>
                                                        <option>19.00</option>
                                                        <option>19.30</option>
                                                        <option>20.00</option>
                                                        <option>20.30</option>
                                                        <option>21.00</option>
                                                        <option>21.30</option>
                                                        <option>22.00</option>
                                                        <option>22.30</option>
                                                        <option>23.00</option>
                                                        <option>23.30</option>
                                                        <option>00.00</option>
    
                                                      </select>
                                                
                                                </Row>

                                                <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                to:
                                                </Text>

                                                <Row className = "flex space-x-1">
                                                <button class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  10.00
                                                </button>
                                                <button class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  11.00
                                                </button>
                                                <button class="bg-white text-sm w-[50%] hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded">
                                                  12.00
                                                </button>

                                                      <select class="common-pointer bg-white w-[40%] text-sm hover:bg-gray_100 focus:bg-blue_50 hover:font-bold focus:font-bold border py-2 border-gray-400 rounded" onChange={changeSelectOptionHandler}>
                                                        <option>Others</option>
                                                        <option>07.00</option>
                                                        <option>07.30</option>
                                                        <option>08.00</option>
                                                        <option>08.30</option>
                                                        <option>09.90</option>
                                                        <option>09.30</option>
                                                        <option>10.00</option>
                                                        <option>10.30</option>
                                                        <option>11.00</option>
                                                        <option>11.30</option>
                                                        <option>12.00</option>
                                                        <option>12.30</option>
                                                        <option>13.00</option>
                                                        <option>13.30</option>
                                                        <option>14.00</option>
                                                        <option>14.30</option>
                                                        <option>15.00</option>
                                                        <option>15.30</option>
                                                        <option>16.00</option>
                                                        <option>16.30</option>
                                                        <option>17.00</option>
                                                        <option>17.30</option>
                                                        <option>18.00</option>
                                                        <option>18.30</option>
                                                        <option>19.00</option>
                                                        <option>19.30</option>
                                                        <option>20.00</option>
                                                        <option>20.30</option>
                                                        <option>21.00</option>
                                                        <option>21.30</option>
                                                        <option>22.00</option>
                                                        <option>22.30</option>
                                                        <option>23.00</option>
                                                        <option>23.30</option>
                                                        <option>00.00</option>
    
                                                      </select>
                                                </Row>
                                                 
                                        </Column>
                                        </Column>
                                        </Row>

                                        <Column className=" rounded border bg-white_A700 justify-start lg:mt-[37px] xl:mt-[20px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[15px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                                        <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                                                <Text class="text-2xl"  className="Firstlastname" as="body1" variant="body1">
                                                Children
                                                </Text>  
                                                <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                Can you accommodate children? (You can specify the ages and prices later)
                                                </Text>
                                                
                                                <div class="flex space-x-4">
                                                  <div class="common-pointer flex items-center pl-4 rounded border hover:bg-gray_100  focus:bg-gray_100 border-gray-200 dark:border-gray-700 w-[16%] h-10">
                                                      <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="common-ponter w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                      <label for="bordered-radio-1" class="common-pointer  py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                                  </div>
                                                  <div class="common-pointer flex items-center pl-4 hover:bg-gray_100 focus:bg-gray_100 rounded border border-gray-200 dark:border-gray-700 w-[16%] h-10">
                                                      <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="common-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                      <label for="bordered-radio-2" class="common-pointer py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                                  </div>
                                                </div> 
                                        </Column>
                                        </Column>

                                        <Column className=" rounded border  bg-white_A700 items-center justify-start xl:mt-[20px] xl:p-[0px] w-[100%]">
                                        <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[100%]">
                                                <Text class="ml-[15px] text-2xl"  className="Firstlastname" as="body1" variant="body1">
                                                Pet
                                                </Text> 

                                                <Column className="bg-gray-200 py-1">
                                                <Text class="text-sm">
                                                Some guests like to travel with their furry friends. Indicate if you allow pets and if any charges apply.
                                                </Text>
                                                </Column> 

                                              <Row>
                                                <div className="items-left justify-start mt-4 w-[50%]">
                                                <Text class="ml-[15px] text-sm py-4"  className="Firstlastname" as="body1" variant="body1">
                                                Do you allow pets?
                                                </Text>

                                                <div className="ml-[15px]">
                                                    <select className="common-pointer text-sm w-[60%] border-gray-400" onChange={changeHandler}>
                                                      <option className="common-pointer" value="no">No</option>
                                                      <option className="common-pointer" value="yes">Yes</option>
                                                      <option className="common-pointer" value="ur">Upon request</option>
                                                         
                                                    </select>  
                                                </div>
                                                </div>

                                               
                                                {isVisible ==='yes' &&(
                                                  
                                                  <div className="items-left justify-start mt-4 w-[50%]">
                                                  <Text class="text-sm"  className="Firstlastname" as="body1" variant="body1">
                                                  Are there additional charges for pets?
                                                  </Text>
  
                                                  <div>
                                                      <select className="common-pointer text-sm w-[60%] border-gray-400">
                                                        <option className="common-pointer">Pets can stay for free</option>
                                                        <option className="common-pointer">Charges may apply</option>  
                                                      </select>  
                                                  </div>
                                                  </div>

                                                ) 

                                              }
                                              {isVisible ==='ur' &&(
                                                  
                                                  <div className="items-left justify-start mt-4 w-[50%]">
                                                  <Text class="text-sm"  className="Firstlastname" as="body1" variant="body1">
                                                  Are there additional charges for pets?
                                                  </Text>
  
                                                  <div>
                                                      <select className="common-pointer text-sm w-[60%] border-gray-400">
                                                        <option className="common-pointer">Pets can stay for free</option>
                                                        <option className="common-pointer">Charges may apply</option>  
                                                      </select>  
                                                  </div>
                                                  </div>

                                                ) 

                                              }
                                            

                                          
                                          

                                                
                                             

                                               


                                              </Row>

                                              
                                                  
                                        </Column>
                                        </Column>

                                        <Button
                                          className="common-pointer font-bold lg:mt-[25px] bg-sky-700 hover:bg-indigo_901 text-center text-white_A700 h-12 w-[100%]"
                                          onClick={handleNavigate32}
                                        >
                                          Continue
                                        </Button>

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
  export default Policies;