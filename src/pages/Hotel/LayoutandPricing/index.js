import React from "react";
import {
  Column,
  Row,
  Text,
  Button,
  Line,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";



const LayoutAndPricing =() => {

    const navigate = useNavigate();
    //navigate to add room
    function handleNavigate22() {
      navigate("/addroom");
    }

    //navigate to add another room
    function handleNavigate23() {
        navigate("/hs3");
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
    
    return(
        <>
            <Header className="w-[100%]" />
            
            <Column className="bg-gray_100 pb-80 font-ptsans items-center justify-start w-[100%]">
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
                <Column className="justify-start gap-6 w-[80%]">
                    <Text className="font-bold pt-2 mt-[10px]" variant="h3">
                        Layout and pricing
                    </Text>
                    <Text className="mt-[2px] mb-[2px]" variant="body4">
                    Tell us about your first room. Once you've entered all the necessary information, 
                    you'll be able to fill in the details of your other rooms.
                    </Text>

                    
                    <Column className="justify-start shadow h-fit bg-white_A700 w-[76%]">
                        <Row className="pl-15">
                            <Text className="font-bold pl-10 my-[25px] text-[16px]">
                            Deluxe Double Room (1 adult + 2 children)                        
                            </Text>
                            <Text className="font-bold pl-10 my-[25px] text-[16px]">
                            Number of this type: 1</Text>
                            
                            <div className="pl-20 my-[25px] text-[16px]">
                            <a href="/addroom" class="font-bold text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="/addroom" class=" pl-4 font-bold text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                            </div>
                        </Row>
                    </Column>

                    <Row className="space-x-4 justify-end w-[76%]">
                        <Button
                            className="bg-gray_200 border-[1px] border-black text-center text-black h-12 w-[24%]"
                            onClick={handleNavigate22}
                        >
                            Add another room
                        </Button>

                        <Button
                            className="bg-sky-700 hover:bg-indigo_901 text-center text-white_A700 h-12 w-[24%]"
                            onClick={handleNavigate23}
                        >
                            Continue
                        </Button>
                    </Row>
                    
                </Column>
            </Column>


        
        </>
    );

  };
  export default LayoutAndPricing;