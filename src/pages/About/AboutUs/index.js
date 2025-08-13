import React, { useState } from 'react'
import HeaderOTA from 'components/Header/HeaderOTA/index';
import { Input } from 'components/Input/index';
import { Text, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import Footerepic from 'components/Footer/Footerepic/index';
import { useAuth } from 'AuthContext';
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";


const AboutUsPage = () => {
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
                <div>
                    <Img
                        src="images/beach.jpg"
                        className="w-full h-[500px] object-cover brightness-50"
                        alt="beach"
                    />
                    <div className="absolute flex flex-col md:gap-10 inset-x-[0] items-center justify-start mx-auto md:top-[12%] md:p-2 xl:top-[25%] lg:w-[68%] sm:w-[80%]">
                        <text className="md:text-[45px] 2xl:text-[40px] absolute inset-x-[0] sm:leading-relaxed lg:leading-loose mx-auto font-bold text-[#FFFFFF] text-center">
                            ABOUT US
                        </text>
                        <text className="md:text-[23px] 2xl:text-[15px] absolute inset-x-[0] mx-auto text-[#FFFFFF] text-center mt-[100px]">
                            Welcome to Epic Travel, where a world of exploration and discovery awaits! We are not just another travel platform;
                            we are a vibrant community of travel enthusiasts who believe in the power of shared experiences, learning,
                            and rewarding valuable contributions.
                        </text>
                    </div>
                </div>

                <div className="absolute flex flex-col md:gap-10 inset-x-[0] items-center justify-start xl:top-[75%] md:top-[27%] 2xl:top-[50%] mx-auto md:p-2 lg:w-[68%] sm:w-[80%]">
                    <div className="absolute drop-shadow-md rounded-[50px] bg-[#FFFFFF] p-[50px]">
                        <div>
                            <div>
                                <text className="font-bold text-[#00A19A] md:text-[35px] 2xl:text-[25px]">
                                    Our Mission
                                </text>
                                <div className="mt-3">
                                    <text className="md:text-[23px] 2xl:text-[15px]">
                                        At Epic Travel, our mission is simple yet profound: to create a platform that connects travelers
                                        from all corners of the globe, enabling them to forge meaningful connections, share their awe-inspiring
                                        stories, and gain valuable insights from one another. We strive to be the ultimate hub where every
                                        traveler's journey is celebrated, cherished, and turned into a source of inspiration for others
                                    </text>
                                </div>
                            </div>
                            <div className="md:mt-10 2xl:mt-6">
                                <text className="font-bold text-[#00A19A] md:text-[35px] 2xl:text-[25px]">
                                    Why Every Traveler's Experiences Matter
                                </text>
                                <div className="mt-3">
                                    <text className="md:text-[23px] 2xl:text-[15px]">
                                        We firmly believe that every traveler's journey is a unique tapestry of emotions, encounters, and
                                        discoveries. No two journeys are the same, and therein lies the magic of travel. Through our platform,
                                        we celebrate diversity and encourage our members to share their personal anecdotes, breathtaking
                                        photographs, and practical travel advice.
                                    </text>
                                </div>
                            </div>
                            <div className="md:mt-10 2xl:mt-6">
                                <text className="font-bold text-[#00A19A] md:text-[35px] 2xl:text-[25px]">
                                    Creating Personalized and Relevant Travel Experiences
                                </text>
                                <div className="mt-3">
                                    <text className="md:text-[23px] 2xl:text-[15px]">
                                        The heart of Epic Travel lies in creating unforgettable memories for each and every traveler.
                                        To achieve this, we harness the power of AI to understand traveler history and preferences.
                                        By analyzing your past journeys and travel choices, we can offer personalized recommendations
                                        and curated itineraries that align perfectly with your interests and desires.
                                    </text>
                                </div>
                            </div>
                            <div className="md:mt-10 2xl:mt-6">
                                <text className="font-bold text-[#00A19A] md:text-[35px] 2xl:text-[25px]">
                                    Embrace the Community Spirit
                                </text>
                                <div className="mt-3">
                                    <text className="md:text-[23px] 2xl:text-[15px]">
                                        At Epic Travel, we are more than just a collection of destinations and travel tips. We are a
                                        tight-knit community of globetrotters who foster camaraderie, mutual support, and a passion
                                        for exploration. Engage in vibrant discussions, share your wisdom, and learn from others who
                                        share the same insatiable wanderlust.
                                    </text>
                                </div>
                            </div>
                            <div className="md:mt-10 2xl:mt-6">
                                <text className="font-bold text-[#00A19A] md:text-[35px] 2xl:text-[25px]">
                                    Rewarding Your Contributions
                                </text>
                                <div className="mt-3">
                                    <text className="md:text-[23px] 2xl:text-[15px]">
                                        Your voice matters, and we are committed to rewarding your valuable contributions to our community.
                                        Our Creator program allows you to earn commissions when users book through your shared itineraries,
                                        providing an extra incentive to continue sharing your expertise and unique perspectives.
                                    </text>
                                </div>
                            </div>
                            <div className="md:mt-10 2xl:mt-6">
                                <text className="font-bold text-[#00A19A] md:text-[35px] 2xl:text-[25px]">
                                    Explore the World with Epic Travel
                                </text>
                                <div className="mt-3">
                                    <text className="md:text-[23px] 2xl:text-[15px]">
                                        Whether you are a seasoned globetrotter or a first-time explorer, Epic Travel invites you to join our
                                        growing family of travel enthusiasts. Welcome to a place where the journey is as important as the
                                        destination, and where every step you take becomes part of an epic story.
                                    </text>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

            <div className="md:mt-[2000px] 2xl:mt-[800px]">
                <Footerepic />
            </div>


        </>
    );

};

export default AboutUsPage;