import React from "react";
import { Row, Text, Button, Img } from "components";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'; 
import {HiUserCircle} from 'react-icons/hi';
import {IoIosNotificationsOutline} from 'react-icons/io';


const Footerepic = (props) => {
    const navigate = useNavigate();
    const [nav,setNav] = useState(false)
    function handleNavigate12() {
        navigate("/about-us");
      }
    
      function handleNavigate13() {
        navigate("/epic-creator-central");
      }

      function handleNavigate14() {
        navigate("/epic-creator-guide");
      }

      function handleNavigate15() {
        navigate("/privacy-policy");
      }

      function handleNavigate16() {
        navigate("/terms-service");
      }

      function handleNavigate17() {
        navigate("/copyright-policy");
      }
  return (
    <>
        <div className=" sm:hidden xl:block 2xl:block">
            <div className="p-[50px] w-full font-montserrat bg-[#FFFFFF]">
                <div className="grid grid-cols-2 gap-2 w-[100%]">
                <div className="bg-[#49B9B4] p-[30px] w-[600px] h-fit">
                    <text className="text-[#FFFFFBCC] font-bold text-[27px]">
                    BE A TRAVEL CREATOR with our customised learning programs!  
                    </text>
                </div>
                <div className="w-[100%] grid grid-cols-2 gap-1 pt-[20px]">
                <div className="grid grid-cols-3 gap-5 w-[400px]">
                    <div className="w-full">
                        <div>
                            <text className="text-[15px] text-black font-bold">
                                Company
                            </text>
                        </div>
                        <div className="mt-[15px]">
                            <div>
                                <text className="text-[15px] text-black hover:underline common-pointer" onClick={handleNavigate12}>
                                About us
                            </text>
                            </div>
                            <div>
                                <text className="text-[15px] text-black hover:underline common-pointer">
                                    Careers
                                </text>
                            </div>
                            <div>
                                <text className="text-[15px] text-black hover:underline common-pointer" onClick={handleNavigate13}>
                                    Be A Creator
                                </text>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mr-[20px]">
                        <div>
                            <text className="text-[15px] text-black font-bold">
                                Resources
                            </text>
                        </div>
                    <div className="mt-[15px]">
                        <div>
                            <text className="text-[15px] text-black hover:underline common-pointer">
                                Help Center
                            </text>
                        </div>
                        <div>
                            <text className="text-[15px] text-black hover:underline common-pointer" onClick={handleNavigate14}>
                                Epic Creator Program
                            </text>
                        </div>
                        <div>
                            <text className="text-[15px] text-black hover:underline common-pointer" onClick={handleNavigate16}>
                                Terms
                            </text>
                        </div>
                        <div>
                            <text className="text-[15px] text-black hover:underline common-pointer" onClick={handleNavigate17}>
                                Copyright
                            </text>
                        </div>
                        <div>
                            <text className="text-[15px] text-black hover:underline common-pointer" onClick={handleNavigate15}> 
                                Privacy
                            </text>
                        </div>
                    </div>
                    </div>
                    <div className="w-full">
                    <div>
                        <text className="text-[15px] text-black font-bold">
                            Connect
                        </text>
                    </div>
                    <div className="mt-[15px]">
                        <div>
                            <text className="text-[15px] text-black hover:underline common-pointer">
                                Linked In
                            </text>
                        </div>
                        <div>
                            <text className="text-[15px] text-black hover:underline common-pointer">
                                Instagram
                            </text>
                        </div>
                        <div>
                            <text className="text-[15px] text-black hover:underline common-pointer" >
                                X
                            </text>
                        </div>
                        <div>
                            <text className="text-[15px] text-black hover:underline common-pointer" >
                                Tik Tok
                            </text>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="w-full p-[40px]">
                    <Img
                        src="images/img_getitonplay.png"
                        className="h-full object-cover w-[400px]"
                        alt="googleplay"
                    />
                    </div>

                </div>

                </div>

                <div className="w-full border-t border-black"></div>

                <div className="pt-[20px] w-full flex justify-between items-center">
                <div className="w-fit">
                    <text className="text-[14px] text-black">
                    © 2023 Epic Ventures Ltd. All Rights Reserved.
                    </text>
                </div>
                <div className="w-fit">
                    <div className="flex items-center">
                    <text className="text-[14px] text-black">
                        Follow us :
                    </text>
                    <Img
                        src="images/img_contrast.svg"
                        className="h-[40px] object-fit w-[40px] ml-[10px]"
                        alt="contrast"
                    />
                    <Img
                        src="images/img_contrast.svg"
                        className="h-[40px] object-fit w-[40px] ml-[10px]"
                        alt="contrast"
                    />
                    <Img
                        src="images/img_contrast.svg"
                        className="h-[40px] object-fit w-[40px] ml-[10px]"
                        alt="contrast"
                    />
                    <Img
                        src="images/img_contrast.svg"
                        className="h-[40px] object-fit w-[40px] ml-[10px]"
                        alt="contrast"
                    />
                    </div>
                </div>
                </div>

            </div>
        </div>

        {/* mobile view */}
        <div className=" sm:block xl:hidden 2xl:hidden">
            <div className="p-[50px] w-full font-montserrat bg-[#FFFFFF]">
                <div className="w-full border-t border-black pb-[50px]"></div>
                <div className=" w-[100%]">
                    <div className="bg-[#49B9B4] p-[30px] w-full h-fit">
                        <text className="text-[#FFFFFBCC] font-bold text-[30px]">
                            BE A TRAVEL CREATOR with our customised learning programs!  
                        </text>
                    </div>
                    <div className="w-full pt-[50px]">
                        <div>
                            <text className="text-[28px] text-black font-bold">
                                Company
                            </text>
                        </div>
                        <div className="mt-[15px]">
                            <div>
                                <text className="text-[25px] text-black hover:underline common-pointer" onClick={handleNavigate12}>
                                About us
                            </text>
                            </div>
                            <div>
                                <text className="text-[25px] text-black hover:underline common-pointer">
                                    Careers
                                </text>
                            </div>
                            <div>
                                <text className="text-[25px] text-black hover:underline common-pointer" onClick={handleNavigate13}>
                                    Be A Creator
                                </text>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pt-[20px]">
                        <div >
                            <text className="text-[28px] text-black font-bold">
                                Resources
                            </text>
                        </div>
                    <div className="mt-[15px]">
                        <div>
                            <text className="text-[25px] text-black hover:underline common-pointer">
                                Help Center
                            </text>
                        </div>
                        <div>
                            <text className="text-[25px] text-black hover:underline common-pointer" onClick={handleNavigate14}>
                                Epic Creator Program
                            </text>
                        </div>
                        <div>
                            <text className="text-[25px] text-black hover:underline common-pointer" onClick={handleNavigate16}>
                                Terms
                            </text>
                        </div>
                        <div>
                            <text className="text-[25px] text-black hover:underline common-pointer" onClick={handleNavigate17}>
                                Copyright
                            </text>
                        </div>
                        <div>
                            <text className="text-[25px] text-black hover:underline common-pointer" onClick={handleNavigate15}>
                                Privacy
                            </text>
                        </div>
                    </div>
                    </div>
                    <div className="w-full pt-[20px]">
                    <div>
                        <text className="text-[28px] text-black font-bold">
                            Connect
                        </text>
                    </div>
                    <div className="mt-[15px]">
                        <div>
                            <text className="text-[25px] text-black hover:underline common-pointer">
                                Linked In
                            </text>
                        </div>
                        <div>
                            <text className="text-[25px] text-black hover:underline common-pointer">
                                Instagram
                            </text>
                        </div>
                        <div>
                            <text className="text-[25px] text-black hover:underline common-pointer" >
                                X
                            </text>
                        </div>
                        <div>
                            <text className="text-[25px] text-black hover:underline common-pointer" >
                                Tik Tok
                            </text>
                        </div>
                    </div>
                    </div>
                    <div className="w-full p-[20px]">
                    <Img
                        src="images/img_getitonplay.png"
                        className="h-full object-cover w-[90%]"
                        alt="googleplay"
                    />
                    </div>

                </div>

                <div className="w-full border-t border-black"></div>

                <div className="pt-[20px] w-full">
                    <div className="w-fit">
                        <text className="text-[18px] text-black">
                        © 2023 Epic Ventures Ltd. All Rights Reserved.
                        </text>
                    </div>
                    <div className="w-fit mt-[20px]">
                        <div className="flex items-center">
                        <text className="text-[18px] text-black">
                            Follow us :
                        </text>
                        <Img
                            src="images/img_contrast.svg"
                            className="h-[40px] object-fit w-[40px] ml-[10px]"
                            alt="contrast"
                        />
                        <Img
                            src="images/img_contrast.svg"
                            className="h-[40px] object-fit w-[40px] ml-[10px]"
                            alt="contrast"
                        />
                        <Img
                            src="images/img_contrast.svg"
                            className="h-[40px] object-fit w-[40px] ml-[10px]"
                            alt="contrast"
                        />
                        <Img
                            src="images/img_contrast.svg"
                            className="h-[40px] object-fit w-[40px] ml-[10px]"
                            alt="contrast"
                        />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
    
)}

export default Footerepic;