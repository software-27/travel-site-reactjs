import React, { useState } from "react";
import { Column, Row, Text, Input, Line, Button, SelectBox } from "components";
import { useNavigate } from "react-router-dom";
import { SelectRating } from "components/SelectRating";
import Header from "components/Header/Header";

const Hotelsetup = () => {
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
  function handleNavigate20() {
    navigate("/hs2");
  }

    const [selected, setSelected] = React.useState("");
    const changeSelectOptionHandler = (event) =>{
        setSelected(event.target.value);
    }

    const [showhide, setShowhide] = useState("");
    const handleshow = e=>{
        const getshow= e.target.value;
        setShowhide(getshow);
    }

    const [isVisible, setIsVisible] = useState(false);

    const changeHandler = e => {
        const getshow = e.target.value;
        
        setIsVisible(getshow)
        console.log(getshow)
      };

    return(
     <>
     <Header></Header>
     <Column className="bg-gray_100 scroll-smooth w-[100%] pb-6 h-fit justify-start items-center">
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
        <Column className="w-[80%] gap-0.5 h-full justify-start mt-4">
            <Text className="font-sans font-semibold" variant="h3">
                Welcome (name)!
            </Text>
            <Text className="font-sans mt-2" variant="body3">
                Start by telling us your property's name, contact details and address
            </Text>
            <Row className="items-start justify-between w-[100%]">
                <Column className="p-6 bg-white_A701 rounded shadow-bs3 3xl:h-[270px] 2xl:h-[240px] xl:h-[210px] lg:h-[190px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[65%]">
                    <Text className="font-sans mb-2" variant="h5">
                        What's the name of your property?
                    </Text>
                    <input 
                        className="bg-gray-50 border border-gray-300 rounded-sm text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[50%] 2xl:mt-2 "
                        type="text"
                        size="smSrc"
                        required
                    >
                    </input>
                    <label className="font-sans text-sm text-gray_800" variant="body1">
                        Guests will see this name when they search for a place to stay.
                    </label>
                    <Text className="mt-6 font-sans text-sm">
                        Star Rating
                    </Text>
                    <SelectRating 
                        className="w-[30%] bg-gray-50 border rounded-sm border-gray-300 text-gray-900 text-sm block text-sm mt-1"
                        placeholder="N/A"
                        size="md"
                        variant="OutlineGray700"
                        required
                    >
                    </SelectRating>  
                </Column>
                <Column className="p-6 justify-top bg-white_A701 rounded shadow-bs3 h-fit lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[25%]">
                    <Text className="font-sans text-sm">
                        After you complete the registeration you'll be able to make changes to your listing before it goes live.
                    </Text>
                </Column>
            </Row>
            <Column className="p-6 bg-white_A701 rounded shadow-bs3 h-fit lg:mt-[24px] xl:mt-[34px] 2xl:mt-[40px] 3xl:mt-[50px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[65%]">
                <Text className="font-sans mb-2" variant="h5">
                    What are the contact details for this property?
                </Text>
                <Text className="mt-2 font-sans text-sm">
                    Contact name
                </Text>
                <input 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-[50%] 2xl:mt-2 "
                    type="text"
                    size="smSrc"
                    required
                >
                </input>
                <Text className="mt-10 mb-2 font-sans text-sm">
                    Contact number(so we can asist with your registeration when needed)
                </Text>
                <Row className="w-[100%] gap-52">
                    <Column classNamme="w-[50%]">
                        <label for="phone" class="font-sans text-sm mb-1">Phone number</label>
                        <input 
                            type="tel"
                            id="phone" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="011-454-0678"
                            required> 
                        </input>
                    </Column>
                    <Column classNamme="w-[40%]">
                        <label for="phone" class="font-sans text-sm ml-0.5 mb-1">Alternative phone number (optional)</label>
                        <input 
                            type="tel"
                            id="phone" 
                            class="ml-0.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="011-454-0678"
                            required> 
                        </input>
                    </Column>
                </Row>
                <Row className="w-[100%] space-x-4 my-6">
                    <Column className="w-[50%] h-fit">
                        <Text className="w-[100%] font-sans text-sm">
                            Do you own multiple hotels, or are you part of a property management company or group?
                        </Text>
                        <Row className="w-[100%] gap-4 mt-4">
                            <Button size="sm" class="w-[25%] flex items-center px-2 h-[40px] bg-gray_50 border border-gray-300 text-gray-900 text-sm rounded-md">
                                <input id="bordered-radio-1" type="radio" value="yes" name="bordered-radio1" checked={ showhide==='yes' } class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow }/>
                                <label for="bordered-radio-1" class="p-2 w-full text-sm font-sans font-normal text-gray-900 dark:text-gray-300">Yes</label>
                            </Button>
                            <Button class="w-[25%] flex items-center px-2 h-[40px] bg-gray_50 border border-gray-300 text-gray-900 text-sm rounded-md">
                                <input id="bordered-radio-2" type="radio" value="no" name="bordered-radio1" checked={ showhide==='no' } class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow }/>
                                <label for="bordered-radio-2" class="w-full text-sm font-normal font-sans text-gray-900 dark:text-gray-300">No</label>
                            </Button>
                        </Row> 
                    </Column>
                    {showhide==='yes' && (
                    <Column className="w-[40%] h-fit">
                        <label for="name" class="font-sans text-sm mb-1">Name of company, group, or chain</label>
                        <input 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 rounded-sm focus:border-blue-500 block w-[100%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            id="name"
                            required
                        />
                    </Column>   
                    )
                    }                
                </Row>
            </Column>
            <Column className="bg-white_A701 rounded shadow-bs3 h-fit p-6 lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[65%]">
                <Text className="font-sans mb-4" variant="h5">
                    Do you use a channel manager? 
                </Text>
               <Text className="font-sans text-sm">
                  A channel manager is a tool that lets you choose what you sell across all the different sites you list your place on. You can then set your price and open/close dates in your calendar on all of these sites in one place.  
               </Text>
               <Text className="font-sans text-sm mt-6">
                  If you use a channel manager, tell us below. We'll use this info to help you connect it to HalalHoliday.com in the future. The brand name of your channel maanger is also helpful.  
               </Text>
               <Row className="w-[60%] gap-6 mt-4">
                    <Button class="w-fit flex items-center px-2 h-[45px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md">
                        <input id="bordered-radio-3" type="radio" value="yes1" name="bordered-radio1" checked={ showhide==='yes1' } class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow }/>
                        <label for="bordered-radio-3" class="py-4 w-full text-sm font-sans font-normal text-gray-900 dark:text-gray-300">I use a channel manager</label>
                    </Button>
                    <Button class="w-fit flex items-center px-2 h-[45px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md">
                        <input id="bordered-radio-4" type="radio" value="no1" name="bordered-radio1"checked={ showhide==='no1' } class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow }/>
                        <label for="bordered-radio-4" class="py-4 w-full text-sm font-sans font-normal text-gray-900 dark:text-gray-300">I don't use a channel manager</label>
                    </Button>
                </Row>
                {showhide==='yes1' && (
                <Column className="w-[100%] h-fit">
                <label for="name" class="font-sans text-sm mt-6">Enter Name (optional)</label>
                <input 
                    className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 rounded-sm focus:border-blue-500 block w-[100%] 2xl:mt-2 "
                    type="text"
                    size="smSrc"
                    id="name"
                    placeholder="Channel manager's name"
                    required
                />
                </Column>
                
                
                )
            }  
            </Column>
            <Column className="p-6 bg-white_A701 rounded shadow-bs3 h-fit lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px]  w-[65%]">
               <Column className="justify-start w-[100%]">
                    <Text className="font-sans mb-4" variant="h5">
                    Where's your property located?  
                    </Text>
                    <Row className="w-[100%] gap-x-10 justfiy-start items-start">
                        <Column className="w-[50%] h-fit">
                            <label for="street" class="font-sans text-sm mt-6">Street address</label>
                            <input 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-[100%] 2xl:mt-2 "
                                type="text"
                                size="smSrc"
                                id="street"
                                placeholder="e.g. 123 Earn Street"
                                required
                            >
                            </input>
                            <label for="add2" class="font-sans text-sm mt-6">Address line 2</label>
                            <input 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-[100%] 2xl:mt-2 "
                                type="text"
                                size="smSrc"
                                id="add2"
                                placeholder="Unit number, suite, floor, building, etc."
                                required
                            >
                            </input>
                        </Column>
                        <Column className="w-[45%] mt-8 justify-start h-fit p-6 border rounded-md">
                            <Text className="font-sans font-normal" variant="h5">
                                Your Address Matters
                            </Text>
                            <Text className="font-sans font-medium text-gray_500" variant="body5">
                                Make sure you enter the full address of your property including building name, number, etc. Based on the info you provide, we might send a letter to verify this address.
                            </Text>
                        </Column>
                    </Row>
                    <Column className="justify-start w-[50%]">
                        
                        <label for="Country" class="font-sans text-sm mt-6 mb-1">Country/Region</label>
                        <SelectBox id="Country" className="w-[100%]">
                        </SelectBox>

                        <label for="city" class="font-sans text-sm mt-6">City</label>
                        <input 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-[100%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            id="city"
                            placeholder="e.g. Kajang"
                            required
                        >
                        </input>
                        <label for="zipcode" class="font-sans text-sm mt-6">Zip code</label>
                        <input 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-[40%] 2xl:mt-2 "
                            type="text"
                            size="smSrc"
                            id="zipcode"
                            required
                        >
                        </input>
                    </Column>
               </Column>
            </Column>
            <Button
                className="mt-4 font-bold bg-sky-700 hover:bg-indigo_901 text-center text-white_A700 w-[65%]"
                variant="OutlineLightblue8001_2"
                onClick={handleNavigate20}
            >
            Continue
          </Button>
        </Column>
        

        
     </Column>

     </>   
    )
}

export default Hotelsetup;