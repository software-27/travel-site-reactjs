import HeaderOTA from 'components/Header/HeaderOTA/index';
import React, { useState } from 'react'
import { Input} from 'components/Input/index';
import { Text, Img, Line, Button} from "components";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import Icon from '@mdi/react';
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
//import Footerepic from 'components/Footer/Footerepic/index';
import { useAuth } from 'AuthContext';
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";



const PricingPlansPage = () => {
    const navigate = useNavigate();

    const { setIsLoggedIn } = useAuth();

    //setIsLoggedIn(true);

    const [isPopup1Open, setIsPopup1Open] = useState(false);
    const [isPopup2Open, setIsPopup2Open] = useState(false);

    const openPopup1 = () => {
        setIsPopup1Open(true);
    };

    const openPopup2 = () => {
        setIsPopup2Open(true);
    };

    const closePopup1 = () => {
        setIsPopup1Open(false);
    };

    const closePopup2 = () => {
        setIsPopup2Open(false);
    };

    function handleNavigate12() {
        navigate("/about-us");
    }

    return (
        <>
            <div className='fixed w-full' style={{ zIndex: 2 }}>
                <HeaderOTA openPopup1={openPopup1} className="fixed invisible lg:visible" />
                <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
                <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
                <HeaderOTAMobileEpic openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
            </div>
        
            <div className="w-full font-montserrat bg-[#F5F5F5] h-fit">

                <div>
                    <div className="flex flex-col inset-x-[0] items-center justify-start mx-auto md:top-[20%] md:p-2 xl:top-[25%] lg:w-[68%] sm:w-[80%]">
                        <text className="text-[40px] mt-[100px] font-bold text-[#00A19A] text-center">
                            EPIC CREATOR PROGRAM
                        </text>
                        <text className="text-[15px] text-[#000000] text-center mt-3">
                            Welcome to Epic Travel, where a world of exploration and discovery awaits! We are not just another travel platform; we are a vibrant community of travel enthusiasts who 
                            believe in the power of shared experiences, learning, and rewarding valuable contributions.
                        </text>
                    </div>
                </div>

                <div className="w-[100%] place-items-center grid">
                    <div className="grid grid-cols-3 gap-4 w-[100%] items-center flex mt-[70px] ">
                        <div className="bg-[#FFFFFF] p-[20px] rounded-lg border border-[#00A19A] drop-shadow-md w-[300px] h-[580px]" >
                            <text className="font-bold text-[20px] text-[#000000]">
                                Basic Creator Plan
                            </text>
                            <div>
                                <text className="font-bold text-[30px] text-[#000000]">
                                    $0
                                </text>
                                <text className="text-[#000000] text-[18px]">
                                    /month
                                </text>
                            </div>
                            <div className="mt-1 border-b pb-4">
                                <button className="text-[#FFFFFF] bg-[#00A19A] text-[15px] p-3 rounded-lg shadow-md hover:bg-[#45B9B4]">
                                    Start for free
                                </button>
                            </div>
                            <div className="mt-3">
                                <text className="font-bold text-[#000000] text-[15px]">
                                    Benefits
                                </text>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="23px" className="text-[#00A19A] mb-5" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Access to the Travel Creator platform
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="27px" className="text-[#00A19A] mb-5" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Share your travel stories, photos, and tips
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="23px" className="text-[#00A19A] mb-5" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Engage with our travel community
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="33px" className="text-[#00A19A] mb-2" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Personalized AI-driven itinerary recommendations
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="39px" className="text-[#00A19A] mb-3" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Earn commissions through the "Travel.Share.Earn" program
                                    </text>
                                </div>

                            </div>

                        </div>

                        <div className="bg-[#FFFFFF] p-[20px] rounded-lg border border-[#00A19A] drop-shadow-md w-[300px] h-[580px]" >
                            <text className="font-bold text-[20px] text-[#000000]">
                                Pro Creator Plan
                            </text>
                            <div>
                                <text className="font-bold text-[30px] text-[#000000]">
                                    $37
                                </text>
                                <text className="text-[#000000] text-[18px]">
                                    /month
                                </text>
                            </div>
                            <div className="mt-1 border-b pb-4">
                                <button className="text-[#FFFFFF] bg-[#00A19A] text-[15px] p-3 rounded-lg shadow-md hover:bg-[#45B9B4]">
                                    Try for free
                                </button>
                            </div>
                            <div className="mt-3">
                                <text className="font-bold text-[#000000] text-[15px]">
                                    Benefits
                                </text>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="22px" className="text-[#00A19A] mt-1" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        All features of the Basic Plan
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="22px" className="text-[#00A19A] mt-1" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Priority content promotion
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="30px" className="text-[#00A19A] mb-5" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Enhanced visibility for your stories and posts
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="30px" className="text-[#00A19A] mb-2" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Advanced analytics on your contributions
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="30px" className="text-[#00A19A] mb-3" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Exclusive Pro Creator badge for recognition
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="40px" className="text-[#00A19A] mb-5" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Tips on growing your audience and maximizing earnings
                                    </text>
                                </div>

                            </div>

                        </div>

                        <div className="bg-[#FFFFFF] p-[20px] rounded-lg border border-[#00A19A] drop-shadow-md w-[300px] h-[580px]" >
                            <text className="font-bold text-[20px] text-[#000000]">
                                Premium Creator Plan
                            </text>
                            <div>
                                <text className="font-bold text-[30px] text-[#000000]">
                                    $97
                                </text>
                                <text className="text-[#000000] text-[18px]">
                                    /month
                                </text>
                            </div>
                            <div className="mt-1 border-b pb-4">
                                <button className="text-[#FFFFFF] bg-[#00A19A] text-[15px] p-3 rounded-lg shadow-md hover:bg-[#45B9B4]">
                                    Try for free
                                </button>
                            </div>
                            <div className="mt-3">
                                <text className="font-bold text-[#000000] text-[15px]">
                                    Benefits
                                </text>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="22px" className="text-[#00A19A] mt-1" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        All features of the Pro Plan
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="25px" className="text-[#00A19A] mb-5" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Higher commission rates on referrals
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="30px" className="text-[#00A19A] mb-5" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Access to exclusive travel partner discounts
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="23px" className="text-[#00A19A] mt-1" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Dedicated customer support
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="30px" className="text-[#00A19A] mb-4" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Featured placement for your travel content
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="45px" className="text-[#00A19A] mb-9" />
                                    <text className="text-[#000000] ml-1 text-[14px]" >
                                        Monthly training and coaching sessions with travel industry experts
                                    </text>
                                </div>
                                <div className="flex items-center">
                                    <Icon path={mdiCheckboxMarkedCircleOutline} size="48px" className="text-[#00A19A] mb-10" />
                                    <text className="text-[#000000] ml-1 text-[14px]">
                                        Strategies to build a strong brand presence and increase engagement
                                    </text>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="mt-[30px] w-[1000px]">
                            <text className="text-[12px]">
                                Note: Our Basic Creator Plan is available with no membership fees, ensuring all 
                                creators can share their travel experiences with our community. Upgrade to our Pro and Premium plans for 
                                additional perks, enhanced visibility, and personalized training to take your travel creator journey to the next 
                                level.
                            </text>
                        </div>
                    </div>
                </div>


                <div className="mt-[0px]">
                    <div className="p-[50px] w-full font-montserrat">
                        <div className="grid grid-cols-2 gap-6 w-[90%]">
                        <div className="bg-[#49B9B4] p-[30px]">
                            <text className="text-[#FFFFFBCC] font-bold text-[27px]">
                            BE A TRAVEL-ENTREPRENEUR YOURSELF through our 2hr ACADEMY LESSON !
                            </text>
                        </div>
                        <div className=" w-[100%] flex items-center">
                            <div className="w-full">
                            <div>
                                <text className="text-[15px] text-black font-bold">
                                Mobile app
                                </text>
                            </div>
                            <div className="mt-[15px]">
                                <div>
                                <text className="text-[15px] text-black hover:underline common-pointer">
                                    Features
                                </text>
                                </div>
                                <div>
                                <text className="text-[15px] text-black hover:underline common-pointer">
                                    Live share
                                </text>
                                </div>
                                <div>
                                <text className="text-[15px] text-black hover:underline common-pointer">
                                    Video record
                                </text>
                                </div>
                            </div>
                            </div>
                            <div className="w-full mr-[20px]">
                            <div>
                                <text className="text-[15px] text-black font-bold">
                                Community
                                </text>
                            </div>
                            <div className="mt-[15px]">
                                <div>
                                <text className="text-[15px] text-black hover:underline common-pointer">
                                    Be a Creator
                                </text>
                                </div>
                                <div>
                                <text className="text-[15px] text-black hover:underline common-pointer">
                                    Featured experience
                                </text>
                                </div>
                                <div>
                                <text className="text-[15px] text-black hover:underline common-pointer">
                                    Share with friends
                                </text>
                                </div>
                                <div>
                                <text className="text-[15px] text-black hover:underline common-pointer">
                                    Live feeds
                                </text>
                                </div>
                            </div>
                            </div>
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
                                    Contact us
                                </text>
                                </div>
                                <div>
                                <text className="text-[15px] text-black hover:underline common-pointer">
                                    History
                                </text>
                                </div>
                            </div>
                            </div>
                            <div className="w-full">
                            <Img
                                src="images/img_getitonplay.png"
                                className="h-[100%] object-fit w-[100%]"
                                alt="googleplay"
                            />
                            </div>

                        </div>

                        </div>

                        <div className="w-full border-t border-black mt-[40px]"></div>

                        <div className="pt-[20px] w-full flex justify-between items-center">
                        <div className="w-fit">
                            <text className="text-[14px] text-black">
                            © HalalHolidays. 2023. We don’t just plan tours, we plan adventures.
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

            </div>
            
            
        </>
    );

};

export default PricingPlansPage;