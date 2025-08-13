import React, { useState } from 'react'
import HeaderOTA from 'components/Header/HeaderOTA/index';
import { Input } from 'components/Input/index';
import { Text, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import Icon from '@mdi/react';
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js';
import Footerepic from 'components/Footer/Footerepic/index';
import { useAuth } from 'AuthContext';
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";


const EpicCreatorGuidePage = () => {
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

            <div className="w-full font-montserrat bg-[#F5F5F5] h-fit xs:pt-[160px] lg:pt-[92px]" style={{ zIndex: 1 }}>

                <div className="w-full place-items-center grid">
                    <div className="w-screen bg-[#45B9B4] px-[30px] py-[50px] place-items-center grid">
                        <text className="md:text-[23px] 2xl:text-[18px] font-bold text-[#FFFFFF]">
                            Welcome,
                        </text>
                        <div>
                            <text className="md:text-[40px] 2xl:text-[35px] font-bold text-[#FFFFFF]">
                                EPIC Travel Creators!
                            </text>
                        </div>
                    </div>
                    <div className="w-full bg-[#FFFFFF] 2xl:px-[30px] py-[50px] place-items-center grid border-b border-[#45B9B4]">
                        <text className="md:text-[30px] 2xl:text-[25px] font-bold text-[#45B9B4]">
                            Profit from Your Passion
                        </text>
                        <div className="md:w-[95%] 2xl:w-[80%] text-center">
                            <text className="md:text-[20px] 2xl:text-[15px] text-[#45B9B4] text-center">
                                Join the Epic Creator Program today and unlock the full potential of your content. Let your creativity soar,
                                inspire others, and embark on an extraordinary journey as an Epic Creator.
                            </text>
                        </div>
                    </div>

                </div>
                <div className="p-[50px] 2xl:px-[200px]">
                    <div>
                        <text className="md:text-[28px] 2xl:text-[18px] text-[#45B9B4] font-bold">
                            Creator Central
                        </text>
                        <div>
                            <text className="md:text-[20px] 2xl:text-[15px]">
                                We've got everything you need to succeed in one convenient place. Whether you're an aspiring content creator or a seasoned travel
                                enthusiast, our platform is designed to empower you with the tools and resources you need to build your business with us.
                            </text>

                        </div>
                    </div>
                    <div className="md:mt-5 2xl:mt-3">
                        <text className="md:text-[28px] 2xl:text-[18px] text-[#45B9B4] font-bold">
                            Unlock Your Content's Full Potential
                        </text>
                        <div>
                            <text className="md:text-[20px] 2xl:text-[15px]">
                                We're thrilled to welcome you to our community of top creators. What excites us even more is seeing you create
                                content that truly fuels your passion and enables you to earn from it. Here's a simple guide on how to get
                                started on this exciting journey.
                            </text>

                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 mt-[50px]">
                        <div className="w-fit">
                            <div className="w-[100%] h-[100%]">
                                <div className="border-[7px] border-[#10A6A0] rounded-full h-fit w-fit">
                                    <Img
                                        src="images/girlhijabi.jpg"
                                        className="md:h-[350px] 2xl:h-[300px] object-cover md:w-[350px] 2xl:w-[300px] rounded-full"
                                        alt="rectangle120"
                                    />
                                </div>
                                <div className=" mt-[70px] border-[7px] border-[#10A6A0] rounded-full h-fit w-fit">
                                    <Img
                                        src="images/personn1.jpg"
                                        className="md:h-[350px] 2xl:h-[300px] object-cover md:w-[350px] 2xl:w-[300px] rounded-full"
                                        alt="personn1"
                                    />
                                </div>
                                <div className=" mt-[70px] border-[7px] border-[#10A6A0] rounded-full h-fit w-fit">
                                    <Img
                                        src="images/personn2.jpg"
                                        className="md:h-[350px] 2xl:h-[300px] object-cover md:w-[350px] 2xl:w-[300px] rounded-full"
                                        alt="personn2"
                                    />
                                </div>
                                <div className=" mt-[70px] border-[7px] border-[#10A6A0] rounded-full h-fit w-fit">
                                    <Img
                                        src="images/personn3.jpg"
                                        className="md:h-[350px] 2xl:h-[300px] object-cover md:w-[350px] 2xl:w-[300px] rounded-full"
                                        alt="personn3"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="w-full">
                            <div>
                                <div className="flex mt-[40px]">
                                    <div>
                                        <Text
                                            className=" font-bold bg-[#10A6A0] shadow-lg flex h-[57px] common-pointer items-center justify-center rounded-full text-center text-[#FFFFFF] md:text-[20px] 2xl:text-[15px] w-[57px]"
                                        >
                                            1
                                        </Text>
                                    </div>
                                    <div className="ml-[50px] md:mt-[5px] 2xl:mt-[14px]">
                                        <text className="text-[#10A6A0] md:text-[28px] 2xl:text-[18px] font-bold">
                                            Set Up Your EPIC Account
                                        </text>
                                        <div className="mt-[20px]">
                                            <text className="md:text-[20px] 2xl:text-[15px] mt-3">
                                                Welcome to your central hub for resources, reporting and payments, account info, and more.
                                                Simply log in to access and update your contact info and preferences. This is where you'll
                                                manage your payment details and stay informed with the latest updates about the program.
                                            </text>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-[50px] ">
                                    <div>
                                        <Text
                                            className=" font-bold bg-[#10A6A0] shadow-lg flex h-[57px] common-pointer items-center justify-center rounded-full text-center text-[#FFFFFF] md:text-[20px] 2xl:text-[15px] w-[57px]"
                                        >
                                            2
                                        </Text>
                                    </div>
                                    <div className="ml-[50px] md:mt-[5px] 2xl:mt-[14px]">
                                        <text className="text-[#10A6A0] md:text-[28px] 2xl:text-[18px] font-bold">
                                            Learn about our Operating Agreement
                                        </text>
                                        <div className="mt-[20px]">
                                            <text className="md:text-[20px] 2xl:text-[15px] mt-3">
                                                Read our OA to understand disclosures, commission eligibility, and more.
                                            </text>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-[50px] ">
                                    <div>
                                        <Text
                                            className=" font-bold bg-[#10A6A0] shadow-lg flex h-[57px] common-pointer items-center justify-center rounded-full text-center text-[#FFFFFF] md:text-[20px] 2xl:text-[15px] w-[57px]"
                                        >
                                            3
                                        </Text>
                                    </div>
                                    <div className="ml-[50px] md:mt-[5px] 2xl:mt-[14px]">
                                        <text className="text-[#10A6A0] md:text-[28px] 2xl:text-[18px] font-bold">
                                            Create Your Storefront
                                        </text>
                                        <div className="mt-[20px]">

                                            <text className="md:text-[20px] 2xl:text-[15px] mt-3">
                                                A one-stop shop for your audience to explore your recommended travel products
                                                and experiences. Enhance it with captivating travel photos and curated Idea Lists,
                                                then share your Storefront link with your followers to start earning from your travel
                                                recommendations.
                                            </text>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-[50px] ">
                                    <div>
                                        <Text
                                            className=" font-bold bg-[#10A6A0] shadow-lg flex h-[57px] common-pointer items-center justify-center rounded-full text-center text-[#FFFFFF] md:text-[20px] 2xl:text-[15px] w-[57px]"
                                        >
                                            4
                                        </Text>
                                    </div>
                                    <div className="ml-[50px] md:mt-[5px] 2xl:mt-[14px]">
                                        <text className="text-[#10A6A0] md:text-[28px] 2xl:text-[18px] font-bold">
                                            Discover Various Earning Opportunities
                                        </text>
                                        <div className="mt-[20px]">
                                            <text className="md:text-[20px] 2xl:text-[15px] mt-3">
                                                Learn all the ways you can boost your earnings potential.
                                            </text>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-[50px] ">
                                    <div>
                                        <Text
                                            className=" font-bold bg-[#10A6A0] shadow-lg flex h-[57px] common-pointer items-center justify-center rounded-full text-center text-[#FFFFFF] md:text-[20px] 2xl:text-[15px] w-[57px]"
                                        >
                                            5
                                        </Text>
                                    </div>
                                    <div className="ml-[50px] md:mt-[5px] 2xl:mt-[14px]">
                                        <text className="text-[#10A6A0] md:text-[28px] 2xl:text-[18px] font-bold">
                                            Discover Deals To Share
                                        </text>
                                        <div className="mt-[20px]">
                                            <text className="md:text-[20px] 2xl:text-[15px] mt-3">
                                                Everyone loves a good deal! Browse our Idea Hub for a daily list of current and upcoming deals
                                                that you can share with your followers.
                                            </text>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-[50px] ">
                                    <div>
                                        <Text
                                            className=" font-bold bg-[#10A6A0] shadow-lg flex h-[57px] common-pointer items-center justify-center rounded-full text-center text-[#FFFFFF] md:text-[20px] 2xl:text-[15px] w-[57px]"
                                        >
                                            6
                                        </Text>
                                    </div>

                                    <div className="ml-[50px] md:mt-[5px] 2xl:mt-[14px]">
                                        <text className="text-[#10A6A0] md:text-[28px] 2xl:text-[18px] font-bold">
                                            Get Started with Sharing
                                        </text>
                                        <div className="mt-[20px]">
                                            <text className="md:text-[20px] 2xl:text-[15px] mt-3">
                                                Utilize your social channels to inform your audience about your favorite discoveries. Let your
                                                followers explore and engage with your recommendations while you earn from their purchases.
                                            </text>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-[50px] ">
                                    <div>
                                        <Text
                                            className=" font-bold bg-[#10A6A0] shadow-lg flex h-[57px] common-pointer items-center justify-center rounded-full text-center text-[#FFFFFF] md:text-[20px] 2xl:text-[15px] w-[57px]"
                                        >
                                            7
                                        </Text>
                                    </div>
                                    <div className="ml-[50px] md:mt-[5px] 2xl:mt-[14px]">
                                        <text className="text-[#10A6A0] md:text-[28px] 2xl:text-[18px] font-bold">
                                            Get Acquainted with Reporting Tools and Payments
                                        </text>
                                        <div className="mt-[20px]">
                                            <text className="md:text-[20px] 2xl:text-[15px] mt-3">
                                                Monitor your earnings and access key performance indicators such as product clicks, ordered items,
                                                and more through your Reports page. Stay informed about your performance and earnings while gaining
                                                valuable insights to optimize your strategy.
                                            </text>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-[50px] ">
                                    <div>
                                        <Text
                                            className=" font-bold bg-[#10A6A0] shadow-lg flex h-[57px] common-pointer items-center justify-center rounded-full text-center text-[#FFFFFF] md:text-[20px] 2xl:text-[15px] w-[57px]"
                                        >
                                            8
                                        </Text>
                                    </div>
                                    <div className="ml-[50px] md:mt-[5px] 2xl:mt-[14px]">
                                        <text className="text-[#10A6A0] md:text-[28px] 2xl:text-[18px] font-bold">
                                            Stay Informed with Every Update
                                        </text>
                                        <div className="mt-[20px]">
                                            <text className="md:text-[20px] 2xl:text-[15px] mt-3">
                                                Ensure your contact information is up-to-date to receive program updates
                                            </text>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="pt-[50px]">
                        <div className="w-full place-items-center grid bg-[#FFFFFF] border-[#10A6A0] border rounded-lg py-[50px] ">
                            <div>
                                <text className="md:text-[28px] 2xl:text-[18px] text-[#10A6A0] font-bold">
                                    Compare All Plan Features
                                </text>
                            </div>
                            <div>
                                <text className="md:text-[20px] 2xl:text-[15px] text-[#000000]">
                                    Take a sneak peek without commitment. Explore all our features hassle-free.
                                </text>
                            </div>
                            <div className="md:mt-[20px] 2xl:mt-[10px]">
                                <button className="text-[#FFFFFF] bg-[#00A19A] md:text-[20px] 2xl:text-[15px] md:p-6 2xl:p-3 rounded-lg shadow-md hover:bg-[#45B9B4]"
                                onClick={openPopup1}
                                >
                                    Sign Up for free
                                </button>
                            </div>


                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col inset-x-[0] items-center justify-start mx-auto md:top-[20%] md:p-2 xl:top-[25%] lg:w-[90%] md:w-[90%]">
                            <text className="md:text-[45px] 2xl:text-[40px] mt-[100px] font-bold text-[#00A19A] text-center">
                                EPIC CREATOR PROGRAM
                            </text>
                            <text className="md:text-[20px] 2xl:text-[15px] text-[#000000] text-center mt-3">
                                Welcome to Epic Travel, where a world of exploration and discovery awaits! We are not just another travel platform; we are a vibrant community of travel enthusiasts who
                                believe in the power of shared experiences, learning, and rewarding valuable contributions.
                            </text>
                        </div>
                    </div>

                    <div className="md:hidden lg:block">
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

                                {/* <div className="bg-[#FFFFFF] p-[20px] rounded-lg border border-[#00A19A] drop-shadow-md w-[300px] h-[580px]" >
                                    <text className="font-bold text-[20px] text-[#000000]">
                                        Creator's Coach
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
                                        </div> */}
                                {/* <div className="flex items-center">
                                        <Icon path={mdiCheckboxMarkedCircleOutline} size="25px" className="text-[#00A19A] mb-5" />
                                        <text className="text-[#000000] ml-1 text-[14px]">
                                            Higher commission rates on referrals
                                        </text>
                                    </div> */}
                                {/* <div className="flex items-center">
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

> SP Cat:
<text className="text-[#000000] ml-1 text-[14px]">
                                                Featured placement for your travel content
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="30px" className="text-[#00A19A] mb-4" />
                                            <text className="text-[#000000] ml-1 text-[14px]">
                                                Coaching sessions with travel industry experts                                    </text>
                                        </div>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="48px" className="text-[#00A19A] mb-10" />
                                            <text className="text-[#000000] ml-1 text-[14px]">
                                                Strategies to build a strong brand presence and increase engagement
                                            </text>
                                        </div>

                                    </div>

                                </div> */}

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
                    </div>

                    {/* mobile view */}
                    <div className="md:block lg:hidden">
                        <div className="w-[100%] place-items-center grid">
                            <div className="w-[100%] items-center mt-[70px] place-items-center grid">

                                <div className="bg-[#FFFFFF] p-[40px] rounded-lg border border-[#00A19A] drop-shadow-md w-[100%] h-fit" >
                                    <text className="font-bold text-[30px] text-[#000000]">
                                        Basic Creator Plan
                                    </text>
                                    <div>
                                        <text className="font-bold text-[40px] text-[#000000]">
                                            $0
                                        </text>
                                        <text className="text-[#000000] text-[28px]">
                                            /month
                                        </text>
                                    </div>
                                    <div className="mt-1 border-b pb-6">
                                        <button className="text-[#FFFFFF] bg-[#00A19A] text-[20px] p-6 rounded-lg shadow-md hover:bg-[#45B9B4]">
                                            Start for free
                                        </button>
                                    </div>
                                    <div className="mt-3">
                                        <text className="font-bold text-[#000000] text-[20px]">
                                            Benefits
                                        </text>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                            <text className="text-[#000000] ml-1 text-[19px]">
                                                Access to the Travel Creator platform
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                            <text className="text-[#000000] ml-1 text-[19px]">
                                                Share your travel stories, photos, and tips
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                            <text className="text-[#000000] ml-1 text-[19px]">
                                                Engage with our travel community
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                            <text className="text-[#000000] ml-1 text-[19px]">
                                                Personalized AI-driven itinerary recommendations
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                            <text className="text-[#000000] ml-1 text-[19px]">
                                                Earn commissions through the "Travel.Share.Earn" program
                                            </text>
                                        </div>

                                    </div>

                                </div>

                                <div className="bg-[#FFFFFF] p-[40px] rounded-lg border border-[#00A19A] drop-shadow-md w-full h-fit mt-[20px]" >
                                    <text className="font-bold text-[30px] text-[#000000]">
                                        Pro Creator Plan
                                    </text>
                                    <div>
                                        <text className="font-bold text-[40px] text-[#000000]">
                                            $37
                                        </text>
                                        <text className="text-[#000000] text-[28px]">
                                            /month
                                        </text>
                                    </div>
                                    <div className="mt-1 border-b pb-6">
                                        <button className="text-[#FFFFFF] bg-[#00A19A] text-[20px] p-6 rounded-lg shadow-md hover:bg-[#45B9B4]">
                                            Try for free
                                        </button>
                                    </div>
                                    <div className="mt-3">
                                        <text className="font-bold text-[#000000] text-[20px]">
                                            Benefits
                                        </text>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                            <text className="text-[#000000] ml-1 text-[19px]">
                                                All features of the Basic Plan
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                            <text className="text-[#000000] ml-1 text-[19px]">
                                                Priority content promotion
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                            <text className="text-[#000000] ml-1 text-[19px]">
                                                Enhanced visibility for your stories and posts
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                            <text className="text-[#000000] ml-1 text-[19px]">
                                                Advanced analytics on your contributions
                                            </text>
                                        </div>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                            <text className="text-[#000000] ml-1 text-[19px]">
                                                Exclusive Pro Creator badge for recognition
                                            </text>

                                        </div>
                                        <div className="flex items-center">
                                            <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                            <text className="text-[#000000] ml-1 text-[19px]">
                                                Tips on growing your audience and maximizing earnings
                                            </text>
                                        </div>

                                    </div>

                                </div>

                                {/* <div className="bg-[#FFFFFF] p-[40px] rounded-lg border border-[#00A19A] drop-shadow-md w-full h-fit mt-[20px]" >
                                <text className="font-bold text-[30px] text-[#000000]">
                                    Creator's Coach
                                </text>
                                <div>
                                    <text className="font-bold text-[40px] text-[#000000]">
                                        $97
                                    </text>
                                    <text className="text-[#000000] text-[28px]">
                                        /month
                                    </text>
                                </div>
                                <div className="mt-1 border-b pb-6">
                                    <button className="text-[#FFFFFF] bg-[#00A19A] text-[20px] p-6 rounded-lg shadow-md hover:bg-[#45B9B4]">
                                        Try for free
                                    </button>
                                </div>
                                <div className="mt-3">
                                    <text className="font-bold text-[#000000] text-[20px]">
                                        Benefits
                                    </text>
                                    <div className="flex items-center">
                                        <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                        <text className="text-[#000000] ml-1 text-[19px]">
                                            All features of the Pro Plan
                                        </text>
                                    </div>
                                    <div className="flex items-center">
                                        <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                        <text className="text-[#000000] ml-1 text-[19px]">
                                            Access to exclusive travel partner discounts
                                        </text>
                                    </div>
                                    <div className="flex items-center">
                                        <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                        <text className="text-[#000000] ml-1 text-[19px]">
                                            Dedicated customer support
                                        </text>
                                    </div>
                                    <div className="flex items-center">
                                        <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                        <text className="text-[#000000] ml-1 text-[19px]">
                                            Featured placement for your travel content
                                        </text>
                                    </div>
                                    <div className="flex items-center">
                                        <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />

> SP Cat:
<text className="text-[#000000] ml-1 text-[19px]" >
                                            Coaching sessions with travel industry experts
                                        </text>
                                    </div>
                                    <div className="flex items-center">
                                        <Icon path={mdiCheckboxMarkedCircleOutline} size="35px" className="text-[#00A19A] mt-1" />
                                        <text className="text-[#000000] ml-1 text-[19px]">
                                            Strategies to build a strong brand presence and increase engagement
                                        </text>
                                    </div>

                                </div>

                                </div> */}

                            </div>
                            <div>
                                <div className="mt-[30px] w-full">
                                    <text className="text-[15px]">
                                        Note: Our Basic Creator Plan is available with no membership fees, ensuring all
                                        creators can share their travel experiences with our community. Upgrade to our Pro and Premium plans for
                                        additional perks, enhanced visibility, and personalized training to take your travel creator journey to the next
                                        level.
                                    </text>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>






            </div>

            <Footerepic />


        </>
    );

};

export default EpicCreatorGuidePage;
