import React from "react";
import { Row, Text, Button, Img } from "components";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'; 
import {HiUserCircle} from 'react-icons/hi';
import {IoIosNotificationsOutline} from 'react-icons/io';


const HeaderOTA = (props) => {
    const navigate = useNavigate();
    const [nav,setNav] = useState(false)

    function handleNavigate1() {
        navigate("/login");
      }
  return (
    <>
    <header className="bg-white_A701 font-montserrat inline-flex md:flex-col flex-row p-2 items-center justify-center shadow-bs h-max w-full invisible lg:visible hidden lg:flex ">

  
    <Row className="row-1 w-full z-0 items-center justify-start p-2 gap-4">
        {/* logo  */}
        <div className="justify-start items-center">
        <Img
            src="images/img_frame2.svg"
            class="place-self-center xl:h-[60px] md:mt-0 w-auto common-image"
            alt="frame"
            onClick={() => navigate("/")}
        />
        </div>
        {/* navbar */}
        <div class="flex justify-items-end text-center items-center justify-start-end gap-2 w-[90%] ">
            <div className="text-center w-fit m-auto ml-5">
                <Text
                className="font-montserrat text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                as="h7"
                variant="h7"
                >
                PLAN A HOLIDAY
                </Text>
            </div>
            <div className="text-center w-fit m-auto">
                <Text
                    className="font-montserrat text-[#008D36] text-cente r text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                >
                TRAVEL IDEAS
                </Text>
        
            </div>
            <div className="text-center w-fit m-auto">
                <Text
                    className="font-montserrat text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                    >
                    PROMOS
                </Text>
            </div>
            <div className="text-center w-fit m-auto">
                <Text
                    className="font-montserrat text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                >
                CREATOR PROGRAM
                </Text>
            </div>
            <div className="text-center w-fit m-auto">
                <Text
                    className="font-montserrat text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                    as="h7"
                    variant="h7"
                >
                RESOURCES
                </Text>  
            </div>
            {/* <div className="items-center w-fit ml-12">
                <Button
                    className="cursor-pointer flex items-center justify-center min-w-[138px] md:ml-[0] h-[35px] ml-[79px] md:mt-0.5 w-auto"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="OutlineBlue500"
                >
                    <Text className="font-medium leading-[normal] text-blue_500 text-right text-xs tracking-[-0.18px]">
                        Create a tour
                    </Text>
                </Button>
            </div> */}
            <div className="">
                <Button
                    className="cursor-pointer bg-[#00a19a] text-white_A700 text-xs flex items-center justify-center min-w-[138px] h-[35px] md:ml-[0] ml-[20px] md:mt-0.5 w-auto font-medium"
                    shape="RoundedBorder6"
                    size="sm"
                    onClick={() => navigate("/login")}
                >
                    Sign-in / Register
                </Button>
            </div>
            <div className="items-center justify-center">
                <IoIosNotificationsOutline size={35} className="" />        
            </div>
            <div className="items-center justify-center">
                <HiUserCircle size={40} className="text-[#ffb703]" />
            </div>
          
        </div>
        
          
    </Row>
</header>
    </>
    
)}

export default HeaderOTA;