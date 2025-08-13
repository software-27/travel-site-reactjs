import HeaderOTA from 'components/Header/HeaderOTA/index';
import { Input } from 'components/Input/index';
import { Text, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import SignupPage from 'components/SignUp/index';
import LoginPage from 'components/Login/index';
import { BsQuestionCircle, BsCalendar } from 'react-icons/bs';
import { MdCalendarToday } from 'react-icons/md';
import Footerepic from 'components/Footer/Footerepic/index';
import axios from '../../../../node_modules/axios/index';


const ReportDashboard = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    const userId = localStorage.getItem("userId");

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
        navigate("/report-details");
    }

    const [userData, setUserData] = useState('');

    // *Profile User Data*
    useEffect(() => {
        axios.get(`https://halaltravel.ai/ht/api/profile/${userId}`)
            .then(response => {

                const data = response.data;

                console.log("response user data: ", data);

                setUserData(data);
                // const email = data.email;
                // const gender = data.gender;
                // const callingCode = data.phoneNumber.countryCode;
                // const phoneNumber = data.phoneNumber.phoneNumber;

                // setEmailAddress(email);
                // if (gender === 'male') {
                //     setGender('true');
                // }
                // else if (gender === 'female') {
                //     setGender('false');
                // }
                // else {
                //     setGender('');
                // }

                // setCallingCode(callingCode);
                // setPhoneNumber(phoneNumber);
                // console.log('countryCode:', data.phoneNumber.countryCode);
                // console.log('phoneNumber:', data.phoneNumber.phoneNumber);
            })
            .catch(error => {
                // setError(error);
                // setLoading(false);
                console.error('Error fetching profile data:', error);
            });
    }, [userId]);

    const [isVisible, setIsVisible] = useState(false);

    const changeHandler = e => {
        const getshow = e.target.value;
        setIsVisible(getshow)
    };

    return (
        <>
            <div className='fixed w-full' style={{ zIndex: 2 }}>
                <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
                <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
                <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
                <HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
            </div>

            <div className="w-full font-montserrat bg-[#F5F5F5] p-[50px] xs:pt-[200px] lg:pt-[132px]">

                {/* welcome user */}
                <div className="flex items-center">
                    <div>
                        <text className="text-[#1E9A4D] font-medium md:text-[37px] xl:text-[25px]">
                            Welcome, {userData.userName} !
                        </text>
                    </div>

                    <div className="common-pointer font-medium md:rounded-[10px] xl:rounded-[5px] md:text-[20px] xl:text-[13px] ml-4 md:px-[50px] xl:px-[30px] py-[5px] bg-[#1E9A4D] text-[#FFFFFF] hover:bg-[#0E7535]"
                        onClick={handleNavigate12}>
                        <text>
                            View Report
                        </text>
                    </div>
                </div>

                {/* top box */}
                <div className="grid md:grid-cols-1 xl:grid-cols-3 w-full mt-[30px] gap-[15px]">

                    <div className="bg-[#FFFFFF] p-[35px] border-[#D8D8D8] border border-[0.3px] shadow-md">
                        <div className="flex items-center">
                            <text className="text-[#1E9A4D] font-semibold md:text-[22px] xl:text-[15px]">
                                Unpaid earnings
                            </text>
                            <BsQuestionCircle size={17} className="md:hidden xl:block ml-4 text-[#1E9A4D]" />
                            <BsQuestionCircle size={25} className="md:block xl:hidden ml-4 text-[#1E9A4D]" />
                        </div>
                        <div className="">
                            <text className="text-[#1E9A4D] font-medium md:text-[20px] xl:text-[13px]">
                                {/* $200.92 */}
                                $0.00
                            </text>
                        </div>
                    </div>

                    <div className="bg-[#FFFFFF] p-[35px] border-[#D8D8D8] border border-[0.3px] shadow-md">
                        <div className="flex items-center">
                            <text className="text-[#1E9A4D] font-semibold md:text-[22px] xl:text-[15px]">
                                Paid earnings
                            </text>
                            <BsQuestionCircle size={17} className="md:hidden xl:block ml-4 text-[#1E9A4D]" />
                            <BsQuestionCircle size={25} className="md:block xl:hidden ml-4 text-[#1E9A4D]" />
                        </div>
                        <div className="">
                            <text className="text-[#1E9A4D] font-medium md:text-[20px] xl:text-[13px]">
                                $0.00
                            </text>
                        </div>
                    </div>

                    <div className="bg-[#FFFFFF] p-[35px] border-[#D8D8D8] border border-[0.3px] shadow-md">
                        <div className="flex items-center">
                            <text className="text-[#1E9A4D] font-semibold md:text-[22px] xl:text-[15px]">
                                Next Payment Round
                            </text>
                            <BsQuestionCircle size={17} className="md:hidden xl:block ml-4 text-[#1E9A4D]" />
                            <BsQuestionCircle size={25} className="md:block xl:hidden ml-4 text-[#1E9A4D]" />
                        </div>
                        <div className="">
                            <text className="text-[#1E9A4D] font-medium text-[13px]">
                                $0.00
                            </text>
                        </div>
                    </div>

                </div>

                {/* tabs */}
                <div className="md:hidden xl:block">
                    <div className=" bg-[#FFFFFF] w-full shadow-inner mt-[50px] grid grid-cols-4 gap-[15px]">

                        <div className="grid justify-items-center pt-[15px] common-pointer">
                            <text className="text-[#1E9A4D] font-medium text-[18px] mb-[15px]">
                                Past 7 Days
                            </text>
                            <Line className="w-[300px] h-[2.5px] bg-[#1E9A4D]" />
                        </div>

                        <div className="grid justify-items-center pt-[15px] common-pointer">
                            <text className="text-[#949494] font-medium text-[18px] mb-[15px]">
                                Past 30 Days
                            </text>
                            <Line className="w-[300px] h-[1px] bg-[#949494]" />
                        </div>

                        <div className="grid justify-items-center pt-[15px] common-pointer">
                            <text className="text-[#949494] font-medium text-[18px] mb-[15px]">
                                This Month
                            </text>
                            <Line className="w-[300px] h-[1px] bg-[#949494]" />
                        </div>

                        <div className="grid justify-items-center pt-[15px] common-pointer">
                            <div className="flex items-center mb-[15px]">
                                <text className="text-[#949494] font-medium text-[18px]">
                                    Specific Date
                                </text>
                                <BsCalendar size={16} className="ml-4 text-[#949494]" />
                            </div>
                            <Line className="w-[300px] h-[1px] bg-[#949494]" />
                        </div>
                    </div>
                </div>

                <div className="md:block xl:hidden mt-[50px] flex w-full">
                    <div className="md:block xl:hidden w-[50%]" onChange={changeHandler}>
                        <select className="p-[22px] rounded-[10px] text-[22px] text-[#000000] w-full border border-[#D3D2D2] border-[0.5px]">
                            <option value="7D"> Past 7 Days </option>
                            <option value="30D"> Past 30 Days </option>
                            <option value="M"> This Month </option>
                            <option value="D"> Specific Date </option>
                        </select>
                    </div>

                    {isVisible === 'D' && (
                        <div className="flex items-center ml-[20px] w-[30%] p-[20px] bg-[#FFFFFF] rounded-[10px] text-[#000000] border border-[#D3D2D2] border-[0.5px]">
                            <MdCalendarToday size={25} className="text-[#000000] mr-2" />
                            <input type="date" className="w-full p-0 border-none bg-none text-[22px] " />
                        </div>
                    )}
                </div>

                {/* content */}
                <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-[15px] mt-[10px]">

                    <div className="bg-[#FFFFFF] p-[35px] border-[#D8D8D8] border border-[0.3px] shadow-md h-[600px]">
                        <div className="flex items-center">
                            <text className="text-[#1E9A4D] font-semibold md:text-[22px] xl:text-[15px]">
                                Metrics Overview
                            </text>
                            <BsQuestionCircle size={17} className="md:hidden xl:block ml-4 text-[#1E9A4D]" />
                            <BsQuestionCircle size={25} className="md:block xl:hidden ml-4 text-[#1E9A4D]" />
                        </div>
                        <div className="mt-[20px] grid grid-cols-3">
                            <div className="items-start bg-[#1E9A4D] bg-opacity-10 border-t-[2px] border-t-[#1E9A4D] py-[15px] px-[15px]">
                                <text className="text-[#7D7B7B] font-medium md:text-[22px] xl:text-[15px]">
                                    Leads
                                </text>
                                <div>
                                    <text className="text-[#000000] md:text-[22px] xl:text-[15px]">
                                        0
                                    </text>
                                </div>
                            </div>
                            <div className="items-start border-t-[2px] border-t-[#949494] py-[15px] px-[15px]">
                                <text className="text-[#7D7B7B] font-medium md:text-[22px] xl:text-[15px]">
                                    Bookings
                                </text>
                                <div>
                                    <text className="text-[#000000] md:text-[22px] xl:text-[15px]">
                                        0
                                    </text>
                                </div>
                            </div>
                            <div className="items-start border-t-[2px] border-t-[#949494] py-[15px] px-[15px]">
                                <text className="text-[#7D7B7B] font-medium md:text-[22px] xl:text-[15px]">
                                    Commision
                                </text>
                                <div>
                                    <text className="text-[#000000] md:text-[22px] xl:text-[15px]">
                                        $0.00
                                    </text>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FFFFFF] p-[35px] border-[#D8D8D8] border border-[0.3px] shadow-md h-[600px]">
                        <div className="flex items-center">
                            <text className="text-[#1E9A4D] font-semibold md:text-[22px] xl:text-[15px]">
                                Vertical Performance by
                            </text>
                            <BsQuestionCircle size={17} className="md:hidden xl:block ml-4 text-[#1E9A4D]" />
                            <BsQuestionCircle size={25} className="md:block xl:hidden ml-4 text-[#1E9A4D]" />
                        </div>
                        <div className="mt-[20px]">
                            <select className="p-[15px] rounded-[10px] md:text-[22px] xl:text-[15px] text-[#000000] w-[50%] border border-[#D3D2D2] border-[0.5px]">

                                <option value="1"> Leads </option>
                                <option value="2"> Bookings </option>
                                <option value="3"> Commision </option>
                            </select>

                        </div>
                    </div>

                </div>

            </div>

            <div className="">
                <Footerepic />
            </div>


        </>
    );

};

export default ReportDashboard;