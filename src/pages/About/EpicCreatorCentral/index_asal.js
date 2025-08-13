import HeaderOTA from 'components/Header/HeaderOTA/index';
import { Input} from 'components/Input/index';
import { Text, Img, Line, Button} from "components";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import Icon from '@mdi/react';
import Footerepic from 'components/Footer/Footerepic/index';
import { mdiPencilRuler, mdiCashMultiple, mdiCheckboxMarkedCircleOutline  } from '@mdi/js';
import {GiReceiveMoney} from 'react-icons/gi';



const EpicCreatorCentralPage = () => {
    const navigate = useNavigate();

    function handleNavigate12() {
        navigate("/about-us");
    }

    return (
        <>
            <HeaderOTA className="fixed invisible lg:visible" />
            <HeaderOTAMobileEpic className="visible fixed overflow-hidden lg:invisible lg:hidden"></HeaderOTAMobileEpic>
        
            <div className="w-full font-montserrat bg-[#F5F5F5] h-fit">

                <div>
                
                    <Img
                    src="images/beach.jpg"
                    className="w-full h-[300px] object-cover brightness-50"
                    alt="beach"
                    />
                    <div className="absolute flex flex-col md:gap-10 inset-x-[0] items-center justify-start mx-auto md:top-[15%] md:p-2 xl:top-[25%] lg:w-[68%] sm:w-[80%]">
                        <text className="md:text-[45px] 2xl:text-[40px] absolute inset-x-[0] sm:leading-relaxed lg:leading-loose mx-auto font-bold text-[#FFFFFF] text-center">
                        EPIC CREATOR CENTRAL
                        </text>
                    </div>
                </div>

                <div className="p-[50px]">

                    <div className="grid grid-cols-2 gap-1 flex items-center">
                        <div className="text-right">
                            <text className="text-[120px] text-[#008D36] font-bold text-right leading-tight">
                                TRAVEL SHARE EARN
                            </text>
                        </div>
                        <div className="md:w-[100%] 2xl:w-[70%] ml-[50px] md:text-[28px] 2xl:text-[18px]">
                            <text>
                                Epic Travel, a trailblazing 3rd generation Online Travel Agency (OTA), is reshaping the travel landscape by empowering the community to create, share, and monetize authentic travel experiences, revolutionizing the way people explore the world.
                                Join us on this ground-breaking journey where every adventure becomes an opportunity for discovery and financial growth. Harnessing cutting-edge AI technology, we merge human travel stories with intelligent algorithms, providing personalized recommendations tailored to individual preferences.
                                Our unique business model fosters a community of travelers who inspire and earn from their passion for travel. Explore the world with Epic Travel and redefine the way you experience the extraordinary.

                            </text>
                        </div>

                    </div>

                    <div className="2xl:grid 2xl:grid-cols-3 2xl:gap-5 pt-[50px] 2xl:px-[150px] h-fit">
                        <div className="2xl:h-[470px] bg-[#10A6A0] p-8 rounded-lg place-items-center grid 2xl:w-[350px] md:mt-[0px] 2xl:mt-[20px]">
                            <div>
                                <div className="rounded-full p-3 bg-[#FFFFFF] w-fit">
                                    <GiReceiveMoney size = {40}  className="text-[#10A6A0] "/>
                                </div>
                            </div>
                            <div className="text-center md:mt-[20px] 2xl:mt-[0px]">
                                <text className="md:text-[32px] 2xl:text-[18px] text-[#FFFFFF] font-bold">
                                    Empowering Travelers and Turning Passion into Profit
                                </text>
                            </div>
                            <div className="2xl:mb-[65px] text-center md:mt-[50px]">
                                <text className="md:text-[28px] 2xl:text-[15px] text-[#FFFFFF]">
                                    Epic Travel platform incentivizes and rewards travel enthusiasts for sharing their experiences and 
                                    contributing valuable content to the community.
                                </text>
                            </div>
                        </div>
                        <div className="2xl:h-[470px] bg-[#10A6A0] p-8 rounded-lg place-items-center grid 2xl:w-[350px] md:mt-[20px]">
                            <div>
                                <div className="2xl:mt-3 md:mt-[20px] rounded-full p-3 bg-[#FFFFFF] w-fit mb-11">
                                    <Icon path={mdiPencilRuler} size={1.7} className="text-[#10A6A0]"/>
                                </div>
                            </div>
                            <div className="text-center md:mt-[20px] 2xl:mt-[0px]">
                                <text className="md:text-[32px] 2xl:text-[18px] text-[#FFFFFF] font-bold">
                                    Make it Uniquely Yours
                                </text>
                            </div>
                            <div className="2xl:mt-[70px] md:mt-[50px] text-center">
                                <text className="md:text-[28px] 2xl:text-[15px] text-[#FFFFFF]">
                                    You get a dedicated page on EPIC Travel that's all about you. Your personal Storefront provides a 
                                    one-stop shop for your followers to explore your content, discover travel recommendations, and get 
                                    inspired to plan their own unforgettable travel experiences.
                                </text>
                            </div>
                        </div>
                        <div className="2xl:h-[470px] bg-[#10A6A0] p-8 rounded-lg place-items-center grid 2xl:w-[350px] md:mt-[20px]">
                            <div>
                                <div className="2xl:mt-1 rounded-full p-3 bg-[#FFFFFF] w-fit mb-3">
                                    <Icon path={mdiCashMultiple} size={1.7} className="text-[#10A6A0]"/>
                                </div>
                            </div>
                            <div className="text-center md:mt-[20px] 2xl:mt-[0px]">
                                <text className="md:text-[32px] 2xl:text-[18px] text-[#FFFFFF] font-bold">
                                    Maximize Your Earnings
                                </text>
                            </div>
                            <div className="md:mt-[50px] 2xl:mt-[40px] 2xl:mb-[25px] text-center">
                                <text className="md:text-[28px] 2xl:text-[15px] text-[#FFFFFF]">
                                    Start earning commissions when travelers make bookings based on your recommendations. It's a fantastic 
                                    opportunity to turn your passion for travel into a profitable venture.
                                </text>
                            </div>
                        </div>

                    </div>

                    

                </div>

                <div className="mt-[50px] bg-[#10A6A0] py-[70px] md:px-[50px] 2xl:px-[280px] w-screen">
                    <div>
                        <text className="font-bold text-[#FFFFFF] md:text-[40px] 2xl:text-[35px]">
                            HOW IT WORKS
                        </text>
                    </div>
                    <div className="md:mt-[50px] 2xl:mt-[50px]">
                        <text className="md:text-[32px] 2xl:text-[20px] italic text-[#FFFFFF] ">
                            ITINERARY SHARING
                        </text>
                        <div>
                            <text className="md:text-[26px] 2xl:text-[15px] text-[#FFFFFF]">
                                Create and share detailed travel itineraries based on your oexperiences. You can include comprehensive guides 
                                to exciting destinations, must-visit attractions, hidden gems, dining recommendations, accommodation choices, 
                                and practical travel tips.
                            </text>
                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <text className="md:text-[32px] 2xl:text-[20px] italic text-[#FFFFFF] ">
                            PERSONALIZED LINKS
                        </text>
                        <div>
                            <text className="md:text-[26px] 2xl:text-[15px] text-[#FFFFFF]">
                                For every shared itinerary, contributors receive personalized referral links. When Epic Travel community 
                                members click and book recommended services or accommodations through these links, contributors can 
                                earn commissions.
                            </text>
                        </div>
                    </div>
                    <div className="md:mt-[50px] 2xl:mt-[20px]">
                        <text className="md:text-[32px] 2xl:text-[20px] italic text-[#FFFFFF] ">
                            COMMISSION EARNINGS
                        </text>
                        <div>
                            <text className="md:text-[26px] 2xl:text-[15px] text-[#FFFFFF]">
                                The commission percentages may vary based on the type of booking and partnership agreements with service providers.
                            </text>
                        </div>
                    </div>

                </div>

                <div className="p-[50px]"> 
                    <div className="grid grid-cols-2 gap-1">
                        <div className="text-right">
                            <text className="md:text-[80px] 2xl:text-[120px] text-[#000000] font-bold text-right leading-tight">
                                GET STARTED NOW!
                            </text>
                        </div>
                        <div className="md:w-[100%] 2xl:w-[70%] 2xl:ml-[50px] md:ml-[10px] text-[18px]">
                            <div className="flex mt-[40px]">
                                <div>
                                    <Text
                                        className=" font-bold bg-[#008D36] shadow-lg flex h-[57px] common-pointer items-center justify-center rounded-full text-center text-[#FFFFFF] md:text-[32px] 2xl:text-[15px] w-[57px]"
                                    >
                                        1
                                    </Text>
                                </div>
                                <div className="ml-[50px] mt-[14px]">
                                    <text className="text-[#008D36] md:text-[32px] 2xl:text-[18px] font-bold">
                                        Create Your Storefront
                                    </text>
                                    <div className="mt-[20px]">
                                        <text className="md:text-[28px] 2xl:text-[15px] mt-3">
                                            Building your page is a breeze. Update your profile picture, cover photo, and add a compelling page 
                                            title and tagline that represent your unique brand. Let your Storefront reflect your creative vision 
                                            and captivate your audience.
                                        </text>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-[50px] ">
                                <div>
                                    <Text
                                        className=" font-bold bg-[#008D36] shadow-lg flex h-[57px] common-pointer items-center justify-center rounded-full text-center text-[#FFFFFF] md:text-[32px] 2xl:text-[15px] w-[57px]"
                                    >
                                        2
                                    </Text>
                                </div>
                                <div className="ml-[50px] mt-[14px]">
                                    <text className="text-[#008D36] md:text-[32px] 2xl:text-[18px] font-bold">
                                        Share Your Content and Recommendations
                                    </text>
                                    <div className="mt-[20px]">
                                        <text className="md:text-[28px] 2xl:text-[15px] mt-3">
                                            The more content you add to your Storefront, the more engaging it becomes for fellow travelers. 
                                            Add captivating photos, informative videos, create curated lists, and even share live 
                                            experiences to captivate your audience.
                                        </text>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-[50px] ">
                                <div>
                                    <Text
                                        className=" font-bold bg-[#008D36] shadow-lg flex h-[57px] common-pointer items-center justify-center rounded-full text-center text-[#FFFFFF] md:text-[32px] 2xl:text-[15px] w-[57px]"
                                    >
                                        3
                                    </Text>
                                </div>
                                <div className="ml-[50px] mt-[14px]">
                                    <text className="text-[#008D36] md:text-[32px] 2xl:text-[18px] font-bold">
                                        Share Your Epic Storefront
                                    </text>
                                    <div className="mt-[20px]">
                                        <text className="md:text-[28px] 2xl:text-[15px] mt-3">
                                            Share the link to your Storefront with your followers on social media platforms to start earning 
                                            commissions on bookings made through your recommendations. Remember, it's important to always 
                                            link directly from your Storefront using affiliate links to ensure proper recognition as an affiliate.
                                        </text>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>

                        <div className="w-[100%] place-items-center grid mt-[90px] px-[50px]">
                            <text className="font-bold text-[#10A6A0] md:text-[45px] 2xl:text-[38px] ">
                                Features
                            </text>
                            <div>
                                <text className="text-[#10A6A0] md:text-[32px] 2xl:text-[18px]">
                                    Discover what our websites offers!
                                </text>
                            </div>
                        </div>
                        


                            <div className="grid grid-cols-2 gap-4 items-center mt-[50px]">
                                <div>
                                    <Img
                                        src="images/ss1.png"
                                        className="w-full object-cover h-full"
                                        alt="ss1"
                                    />
                                </div>
                                <div className="p-5 rounded-lg">
                                    <div>
                                        <text className="md:text-[38px] 2xl:text-[25px] text-[#10A6A0] font-bold">
                                            Inspiring Stories from Epic Creators
                                        </text>
                                    </div>
                                    <div className="mt-[20px]">
                                        <text className="md:text-[25px] 2xl:text-[15px] text-[#10A6A0]">
                                            Discover insights and tips from fellow Epic Creators who have successfully 
                                            grown their businesses and monetized their content through the Epic Creator 
                                        Program. Learn from experienced creators who have mastered the art of building 
                                            personalized travel experiences for their followers.
                                        </text>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 items-center mt-[30px] px-[50px]">
                                <div className="">
                                    <div>
                                        <text className="text-[38px] text-[#10A6A0] font-bold">
                                            AI-Powered Personalized Plans for Individuals and Groups
                                        </text>
                                    </div>
                                    <div className="mt-[20px]">
                                        <text className="md:text-[25px] 2xl:text-[15px] text-[#10A6A0]">
                                            Choose from thousands of community-created travel trails and let our AI personalize 
                                            them to your preferences. Discover web travel planning with Epic Travel - where 
                                            personalization meets effortless collaboration.
                                        </text>
                                    </div>
                                </div>
                                <div className="ml-[200px]">
                                    <Img
                                        src="images/ss2.png"
                                        className="md:w-full 2xl:w-[70%] object-cover md:h-full 2xl:h-[70%]"
                                        alt="ss2"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 items-center mt-[30px] px-[50px]">
                                <div className="">
                                    <Img
                                        src="images/ss3.png"
                                        className="md:w-full 2xl:w-[70%] object-cover md:h-full 2xl:h-[70%]"
                                        alt="ss3"
                                    />
                                </div>
                                <div className="">
                                    <div>
                                        <text className="md:text-[38px] 2xl:text-[25px] text-[#10A6A0] font-bold">
                                            Show Your Best Self
                                        </text>
                                    </div>
                                    <div className="mt-[20px]">
                                        <text className="md:text-[25px] 2xl:text-[15px] text-[#10A6A0]">
                                            Create Your Travel Storefront in a Snap! Add profile photo, cover photo, and bio, and 
                                            link your social media profiles for better connection with followers. Use AI-driven 
                                            tools for engaging content and share your expertise with the world like never before!
                                        </text>
                                    </div>
                                </div>   

                            </div>

                    </div>

                    <div className="border border-[#00A19A] w-[100%] place-items-center grid mt-[50px] p-8">
                        <div>
                            <text className="text-center md:text-[32px] 2xl:text-[18px] ">
                                Interested to join our Epic Program?
                            </text>
                        </div>
                        <button className="text-[#FFFFFF] bg-[#00A19A] mt-[20px] md:text-[25px] 2xl:text-[15px] md:p-6 2xl:p-3 rounded-lg shadow-md hover:bg-[#45B9B4]">
                            Sign Up Now
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-1 flex items-center mt-[100px] mb-[30px]">
                        <div className="text-right">
                            <text className="md:text-[90px] 2xl:text-[120px] text-[#008D36] font-bold text-right leading-tight">
                                EXPLORE CONNECT EARN
                            </text>
                        </div>
                        <div className="w-[100%] ml-[50px] md:text-[28px] 2xl:text-[18px]">
                            <text>
                                Connect with like-minded travelers, share your travel trails, and earn affiliate income by recommending 
                                travel products. Sign up now to monetize your knowledge and explore a world of opportunities!
                            </text>
                        </div>

                    </div>


                </div>

                <Footerepic/>

            </div>
            
            
        </>
    );

};

export default EpicCreatorCentralPage;