import { Input } from 'components/Input/index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Text, Img, Line, Button, ButtonMp } from "components";
import { useNavigate } from "react-router-dom";
import Footerepic from 'components/Footer/Footerepic/index';
import { FaUserCircle, FaBus } from 'react-icons/fa';
import { BsArrowClockwise, BsArrowCounterclockwise, BsArrowRight } from 'react-icons/bs';
import { BsFileEarmarkXFill } from "react-icons/bs";
import { ticketData } from "./data";
import { MdCancel } from 'react-icons/md';
import { useState, useEffect } from 'react';
import axios from '../../../../node_modules/axios/index';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import LoginPage from 'components/Login/index';
import SignupPage from 'components/SignUp/index';
import LoadingSpinner from 'components/LoadingSpinner/index';



const TicketInfoPage = () => {
    const navigate = useNavigate();

    const [profileData, setProfileData] = useState('');
    const [upcomingTrips, setUpcomingTrips] = useState([]);
    const [pastTrips, setPastTrips] = useState([]);
    const [upcomingData, setUpcomingData] = useState('');
    const [pastData, setPastData] = useState('');
    const [loadingUpcoming, setLoadingUpcoming] = useState(false);
    const [loadingPast, setLoadingPast] = useState(false);
    const [errorUpcoming, setErrorUpcoming] = useState(false);
    const [errorPast, setErrorPast] = useState(false);
    const [currentPageUpcoming, setCurrentPageUpcoming] = useState(1);
    const [currentPagePast, setCurrentPagePast] = useState(1);
    const [totalPagesUpcoming, setTotalPagesUpcoming] = useState(1);
    const [totalPagesPast, setTotalPagesPast] = useState(1);

    const [activeSection, setActiveSection] = useState('upcoming'); // Default to 'upcoming'

    const handleSectionClick = (section) => {
        setActiveSection(section);
        setCurrentPageUpcoming(1);
        setCurrentPagePast(1);
    };

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

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    const userId = localStorage.getItem("userId");

    // *Profile User Data*
    useEffect(() => {

        axios.get(`https://halaltravel.ai/ht/api/profile/${userId}`)
            .then(response => {

                const data = response.data;

                setProfileData(data);

            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    }, [userId]);

    console.log("Profile user: ", profileData);


    // *GET UPCOMING TRIP*
    const pageNumUpcoming = 1;

    async function getUpcomingTrip() {
        setLoadingUpcoming(true);

        try {
            const response = await axios.get(
                `https://halaltravel.ai/ht/api/v1/bus/booking/upcomingTrips?pageNumber=${currentPageUpcoming}`,
                // {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('response UPCOMING (all): ', response.data);
            console.log('response UPCOMING: ', response.data.elements);
            console.log('totalPages UPCOMING: ', response.data.totalPages);

            setUpcomingData(response.data || '');
            setTotalPagesUpcoming(response.data.totalPages);
            setUpcomingTrips(response.data.elements || []);
            setLoadingUpcoming(false);
        } catch (error) {
            console.log('Error:', error);
            setUpcomingData('');
            setUpcomingTrips([]);
            setLoadingUpcoming(false);
            setErrorUpcoming(true);
        }
    }

    // *GET PAST TRIP*
    const pageNumPast = 1;

    async function getPastTrip() {
        setLoadingPast(true);

        try {
            const response = await axios.get(
                `https://halaltravel.ai/ht/api/v1/bus/booking/pastTrips?pageNumber=${currentPagePast}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('response PAST (all): ', response.data);
            console.log('response PAST: ', response.data.elements);
            console.log('totalPages PAST: ', response.data.totalPages);

            setPastData(response.data || '');
            setTotalPagesPast(response.data.totalPages);
            setPastTrips(response.data.elements || []);
            setLoadingPast(false);
        } catch (error) {
            console.log('Error:', error);

            setPastData('');
            setPastTrips([]);
            setLoadingPast(false);
            setErrorPast(true);
        }
    }


    useEffect(() => {
        window.scrollTo(0, 0);

        getUpcomingTrip();

    }, [activeSection, currentPageUpcoming]);


    useEffect(() => {
        window.scrollTo(0, 0);

        getPastTrip();

    }, [activeSection, currentPagePast]);

    console.log('UpcomingTrips: ', upcomingTrips);
    console.log('PastTrips: ', pastTrips);


    function formatDate(inputDate) {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = new Date(inputDate).toLocaleDateString('en-GB', options);
        return formattedDate;
    }

    function formatTime(inputTime) {
        const options = { hour: 'numeric', minute: '2-digit', hour12: true };
        const formattedTime = new Date(`2000-01-01T${inputTime}`).toLocaleTimeString('en-US', options);
        return formattedTime;
    }


    // * PAGINATION *
    const handleArrowClickUpcoming = (direction) => {
        if (direction === 'left' && currentPageUpcoming > 1) {
            setCurrentPageUpcoming(currentPageUpcoming - 1);
        } else if (direction === 'right' && currentPageUpcoming < totalPagesUpcoming) {
            setCurrentPageUpcoming(currentPageUpcoming + 1);
        }
    };

    const getPageButtonsRangeUpcoming = () => {
        const buttonsRange = [];
        const startPage = Math.max(currentPageUpcoming - 1, 1);
        const endPage = Math.min(currentPageUpcoming + 1, Math.ceil(totalPagesUpcoming));

        for (let i = startPage; i <= endPage; i++) {
            buttonsRange.push(i);
        }

        return buttonsRange;
    };

    const handleArrowClickPast = (direction) => {
        if (direction === 'left' && currentPagePast > 1) {
            setCurrentPagePast(currentPagePast - 1);
        } else if (direction === 'right' && currentPagePast < totalPagesPast) {
            setCurrentPagePast(currentPagePast + 1);
        }
    };

    const getPageButtonsRangePast = () => {
        const buttonsRange = [];
        const startPage = Math.max(currentPagePast - 1, 1);
        const endPage = Math.min(currentPagePast + 1, Math.ceil(totalPagesPast));

        for (let i = startPage; i <= endPage; i++) {
            buttonsRange.push(i);
        }

        return buttonsRange;
    };



    function navigateTicket(tripId) {
        const queryParams = {
            TripId: tripId,
        };

        // Convert the queryParams object to a string of query parameters
        const queryString = new URLSearchParams(queryParams).toString();

        navigate(`/bus-booking-details?${queryString}`);
    }



    return (
        <>
            <div className='fixed w-full' style={{ zIndex: 2 }}>
                <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
                <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
                <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
                <HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
            </div>

            {/* Start */}
            <div
                className="w-full font-montserrat md:px-[50px] lg:px-[80px] md:pt-[210px] lg:pt-[132px]"
                style={{
                    backgroundImage: "url('/images/bg_blue.jpg')",
                    backgroundSize: 'cover', // Cover the entire div
                    backgroundPosition: 'top', // Align the background image at the top
                }}
            >
                <div className="flex items-center">
                    <FaUserCircle size={48} className="md:block lg:hidden mr-4 text-[#00A19A]" />
                    <FaUserCircle size={25} className="md:hidden lg:block mr-4 text-[#00A19A]" />
                    <Text className="font-medium opacity-100 md:text-[34px] lg:text-[20px] text-[#00A19A]">
                        Hi, {profileData?.userName ? `${profileData.userName}` : 'User'}!
                    </Text>
                </div>

                {/* web */}
                <div className="md:hidden lg:block">
                    <div className="text-[17px] font-semibold text-center border-b border-gray-200 md:pt-[30px] lg:pt-[10px]">
                        <ul className="flex flex-wrap -mb-px">
                            {/* <li className="me-2">
                                <a href="#" className="inline-block p-4 text-[#626161] border-b-2 border-transparent rounded-t-lg ">Account Details</a>
                            </li>
                            <li className="me-2">
                                <a href="#" className="inline-block p-4 text-[#626161] border-b-2 border-transparent rounded-t-lg">Friends & Family</a>
                            </li> */}
                            <li className="me-2 ">
                                <a href="#" className="inline-block p-4 text-[#626161]  border-b-2 border-[#27267D] rounded-t-lg" aria-current="page">My Tickets</a>
                            </li>
                            {/* <li className="me-2">
                                <a href="#" className="inline-block p-4 text-[#626161] border-b-2 border-transparent rounded-t-lg">Wallet</a>
                            </li> */}
                        </ul>
                    </div>
                </div>

                {/* mobile */}
                <div className="md:block lg:hidden">
                    <div className="flex items-center font-semibold text-center mt-[30px]">
                        <div className="grid items-center w-full p-[30px] mr-[10px] bg-[#00A19A] rounded-[15px] h-[140px]">
                            <Text className="font-medium opacity-100 md:text-[27px] lg:text-[18px] text-[#FFFFFF]">
                                My Tickets
                            </Text>
                        </div>
                        <div className="w-full p-[30px] mr-[10px] bg-[#F4F4F4] rounded-[15px] h-[140px]">
                            {/* <Text className="font-medium opacity-100 md:text-[27px] lg:text-[18px] text-[#000000]">
                                Account Details
                            </Text> */}
                        </div>
                        <div className="w-full p-[30px] mr-[10px] bg-[#F4F4F4] rounded-[15px] h-[140px]">
                            {/* <Text className="font-medium opacity-100 md:text-[27px] lg:text-[18px] text-[#000000]">
                                Friends & Family
                            </Text> */}
                        </div>
                        {/* <div className="grid items-center w-full p-[30px] mr-[10px] bg-[#00A19A] rounded-[15px] h-[140px]">
                            <Text className="font-medium opacity-100 md:text-[27px] lg:text-[18px] text-[#FFFFFF]">
                                My Tickets
                            </Text>
                        </div> */}
                        <div className="grid items-center w-full p-[30px] mr-[10px] bg-[#F4F4F4] rounded-[15px] h-[140px]">
                            {/* <Text className="font-medium opacity-100 md:text-[27px] lg:text-[18px] text-[#000000]">
                                Wallet
                            </Text> */}
                        </div>

                    </div>
                </div>

                {/* all */}
                <div className="mt-[50px] pb-[60px]">
                    <div className="flex items-center">
                        <Text className="font-medium opacity-100 md:text-[29px] lg:text-[18px] text-[#000000]">
                            My Tickets
                        </Text>
                        <div className="md:hidden lg:block">
                            <div className=" ml-[30px] flex items-center bg-[#00A19A] p-2 px-4 rounded-[5px]">
                                <FaBus size={17} className="md:hidden lg:block mr-4 text-[#FFFFFF]" />
                                <FaBus size={42} className="md:block lg:hidden mr-4 text-[#FFFFFF]" />
                                <Text className="font-medium opacity-100 md:text-[27px] lg:text-[14px] text-[#FFFFFF]">
                                    Express Bus
                                </Text>
                            </div>
                        </div>
                    </div>

                    {/* web */}
                    <div className="md:hidden lg:block">
                        <div className="flex mt-[30px] mb-[30px]">
                            <div
                                className={`flex items-center ${activeSection === 'upcoming' ? 'bg-[#00A19A]' : 'bg-[#939191] hover:bg-[#00A19A] hover:bg-opacity-[50%]'
                                    } p-2 px-4 rounded-[5px] common-pointer`}
                                onClick={() => handleSectionClick('upcoming')}
                            >
                                <BsArrowClockwise size={17} className="md:hidden lg:block mr-4 text-[#FFFFFF]" />
                                <BsArrowClockwise size={42} className="md:block lg:hidden mr-4 text-[#FFFFFF]" />
                                <Text className="font-medium opacity-100 md:text-[27px] lg:text-[14px] text-[#FFFFFF] ">
                                    Upcoming Trips
                                </Text>
                            </div>
                            <div
                                className={`ml-[10px] flex items-center ${activeSection === 'past' ? 'bg-[#00A19A]' : 'bg-[#939191] hover:bg-[#00A19A] hover:bg-opacity-[50%]'
                                    } p-2 px-4 rounded-[5px] common-pointer`}
                                onClick={() => handleSectionClick('past')}
                            >
                                <BsArrowCounterclockwise size={17} className="md:hidden lg:block mr-4 text-[#FFFFFF]" />
                                <BsArrowCounterclockwise size={42} className="md:block lg:hidden mr-4 text-[#FFFFFF]" />
                                <Text className="font-medium opacity-100 md:text-[27px] lg:text-[14px] text-[#FFFFFF]">
                                    Past Trips
                                </Text>
                            </div>
                            {/* <div
                                // className={`ml-[10px] flex items-center ${activeSection === 'refund' ? 'bg-[#00A19A]' : 'bg-[#939191] hover:bg-[#00A19A] hover:bg-opacity-[70%]'
                                //     } p-2 px-4 rounded-[5px] common-pointer`}
                                // onClick={() => handleSectionClick('refund')}
                                className={`ml-[10px] flex items-center bg-[#939191] p-2 px-4 rounded-[5px] cursor-not-allowed`}
                            >
                                <MdCancel size={17} className="sm:hidden lg:block mr-4 text-[#FFFFFF]" />
                                <MdCancel size={42} className="sm:block lg:hidden mr-4 text-[#FFFFFF]" />
                                <Text className="font-medium opacity-100 md:text-[27px] lg:text-[14px] text-[#FFFFFF]">
                                    Request Refund
                                </Text>
                            </div> */}
                        </div>
                    </div>

                    {/* mobile */}
                    <div className="md:block lg:hidden mt-[30px]">
                        <select id="option" className="w-[40%] p-6 bg-[#FFFFFF] rounded-[10px] border border-[#949494] border-[0.5px] text-[28px] text-[#423A36]" onChange={(e) => handleSectionClick(e.target.value)}>
                            <option className="text-[28px]" value="upcoming" selected>Upcoming Trips</option>
                            <option className="text-[28px]" value="past">Past Trips</option>
                            {/* <option className="text-[28px]" value="refund">Request Refund</option> */}
                        </select>
                    </div>


                    {/* all */}
                    {/* UPCOMING */}
                    {activeSection === 'upcoming' && (
                        <>
                            <div className="mt-[20px]">
                                {loadingUpcoming ? (
                                    <div className="flex text-[12px] text-[#000000] items-center justify-center border-none py-6 px-6" >
                                        <LoadingSpinner />
                                    </div>
                                ) : upcomingTrips.length === 0 ? (
                                    // <div className="font-medium md:text-[27px] lg:text-[18px] text-[#00A19A] text-center border-none py-6 px-6">
                                    //     - No Record Found -
                                    // </div>
                                    <div className="flex flex-col items-center p-10 text-[#00A19A]">
                                        <BsFileEarmarkXFill className="md:text-[80px] lg:text-[40px]" />
                                        <p className="md:text-[24px] lg:text-[14px] mt-2 font-medium">No record found.</p>
                                    </div>
                                ) : upcomingTrips.map((data, index) => (
                                    <div
                                        key={data.id}
                                        className="bg-[#FFFFFF] border border-[3px] border-[#00A19A] rounded-[15px] md:mt-[40px] lg:mt-[20px] cursor-pointer shadow-md hover:shadow-lg"
                                        onClick={() => navigateTicket(data.id)}
                                    >

                                        <div className="justify-between flex border-b border-b-[1px] border-[#00A19A]">
                                            <div className="flex items-center justify-between md:p-5 lg:p-4 w-full">
                                                <Text className="font-medium md:text-[25px] lg:text-[16px] text-[#000000] ml-4">
                                                    {formatDate(data.departDate)}
                                                </Text>
                                                <Text className="font-medium md:text-[25px] lg:text-[16px] text-[#000000] mr-5">
                                                    {formatTime(data.departTime)}
                                                </Text>
                                            </div>
                                        </div>

                                        <div className="p-5 flex w-[100%]">
                                            <div className="flex flex-col justify-center items-center md:w-[30%] lg:w-[25%]">
                                                {data.operatorCompanyLogo ? (
                                                    <div className='border border-1'>
                                                        <Img
                                                            src={data.operatorCompanyLogo != '' ? data.operatorCompanyLogo : ''}
                                                            className="md:h-[70px] lg:h-[60px] md:w-[140px] lg:w-[100px]"
                                                            alt="logo"
                                                        />
                                                    </div>
                                                ) : (
                                                    <></>
                                                )
                                                }
                                                <div className="flex flex-col mt-5">
                                                    <text className={`font-bold md:text-[22px] lg:text-[14px] text-[#000000]`}>
                                                        {data.operatorCompanyName}
                                                    </text>
                                                </div>
                                            </div>

                                            <div className="flex flex-col md:w-[70%] lg:w-[55%] border-l border-l-black border-r-0 border-t-0 border-b-0 px-10 md:py-1 lg:py-5">
                                                <div className="flex items-center font-bold md:text-[27px] lg:text-[18px] text-black">
                                                    <div className="flex w-4 h-4 mr-2 border-4 border-[#00A19A] rounded-full bg-[#00A19A]"></div>
                                                    <div className='flex flex-row items-center'>
                                                        <div>{data.terminalNameFrom}</div> &nbsp;
                                                        {/* <div className='font-normal md:text-[22px] lg:text-[11px]'>( Depart )</div> */}
                                                    </div>
                                                </div>

                                                <div class="border-l-2 border-dashed border-[#00A19A] h-5 ml-2"></div>

                                                <div className="flex items-center font-bold md:text-[27px] lg:text-[18px] text-black">
                                                    <div className="flex w-4 h-4 mr-2 border-4 border-[#00A19A] rounded-full bg-transparent"></div>
                                                    {/* {bookingDetails.terminalNameTo} */}
                                                    <div className='flex flex-row items-center'>
                                                        <div>{data.terminalNameTo}</div> &nbsp;
                                                        {/* <div className='font-normal md:text-[22px] lg:text-[11px]'>( Arrival )</div> */}
                                                    </div>
                                                </div>
                                                <div className="md:block lg:hidden flex flex-col mt-5">
                                                    <text className={`md:block lg:hidden font-medium md:text-[20px] lg:text-[12px] text-[#626161]`}>
                                                        Booking No.
                                                    </text>
                                                    <text className={`md:block lg:hidden font-medium md:text-[22px] lg:text-[14px] text-[#000000]`}>
                                                        {data.bookingNo}
                                                    </text>
                                                </div>
                                            </div>
                                            <div className="md:hidden lg:block md:w-[0%] lg:w-[20%] flex flex-col justify-end items-end m-5 text-end">
                                                <text className={`md:hidden lg:block font-medium md:text-[20px] lg:text-[12px] text-[#626161]`}>
                                                    Booking No.
                                                </text>
                                                <text className={`md:hidden lg:block font-medium md:text-[22px] lg:text-[14px] text-[#000000]`}>
                                                    {data.bookingNo}
                                                </text>
                                            </div>

                                        </div>

                                    </div>

                                ))}
                            </div>

                            {/* pagination upcoming */}
                            {loadingUpcoming == false && upcomingTrips.length != 0 && (
                                <>
                                    <span className="flex justify-end mr-2 mt-7 mb-[50px]md:text-[24px] lg:text-[13px]">Page {currentPageUpcoming} of {Math.ceil(totalPagesUpcoming)}</span>
                                    <div className="flex flex-row font-poppins items-start items-center justify-center mt-[20px] w-[40%] mx-auto">
                                        <Img
                                            className={`md:h-[20px] md:w-[22px] lg:h-[13px] lg:w-[15px] ${currentPageUpcoming > 1 ? 'common-pointer' : 'hidden'}`}
                                            src="images/img_arrowleftmp.svg"
                                            alt="arrowleft"
                                            onClick={() => handleArrowClickUpcoming('left')}
                                        />
                                        {getPageButtonsRangeUpcoming().map((pageNumber) => (
                                            <ButtonMp
                                                key={pageNumber}
                                                className={`shadow-lg flex md:h-[77px] md:w-[77px] lg:h-[57px] lg:w-[57px] common-pointer items-center justify-center ml-5 rounded-full text-center text-shadow-ts md:text-2xl lg:text-xl tracking-[-0.30px]
                                                ${currentPageUpcoming === pageNumber ? ' bg-cyan-700 text-white' : 'bg-white text-gray-700'}`}
                                                size="txtPoppinsMedium20"
                                                onClick={() => {
                                                    setCurrentPageUpcoming(pageNumber);

                                                    window.scrollTo({
                                                        top: 0,
                                                        behavior: 'smooth',
                                                    });
                                                }}
                                            >
                                                {pageNumber}
                                            </ButtonMp>
                                        ))}
                                        <Img
                                            className={`md:h-[20px] md:w-[22px] lg:h-[13px] lg:w-[15px] ml-7 ${currentPageUpcoming < totalPagesUpcoming ? 'common-pointer' : 'hidden'}`}
                                            src="images/img_arrowright_gray_700_01.svg"
                                            alt="arrowright_One"
                                            onClick={() => handleArrowClickUpcoming('right')}
                                        />
                                    </div>
                                </>
                            )}
                        </>
                    )}

                    {/* PAST */}
                    {activeSection === 'past' && (
                        <>
                            <div className="mt-[20px] mb-[20px]">
                                {loadingPast ? (
                                    <div className="flex text-[12px] text-[#000000] items-center justify-center border-none py-6 px-6" >
                                        <LoadingSpinner />
                                    </div>
                                ) : pastTrips.length === 0 ? (
                                    // <div className="font-medium md:text-[27px] lg:text-[18px] text-[#00A19A] text-center border-none py-6 px-6">
                                    //     - No Record Found -
                                    // </div>
                                    <div className="flex flex-col items-center p-10 text-[#00A19A]">
                                        <BsFileEarmarkXFill className="md:text-[80px] lg:text-[40px]" />
                                        <p className="md:text-[24px] lg:text-[14px] mt-2 font-medium">No record found.</p>
                                    </div>
                                ) : pastTrips.map((data, index) => (
                                    <div
                                        key={data.id}
                                        className="bg-[#FFFFFF] border border-[3px] border-[#00A19A] rounded-[15px] md:mt-[40px] lg:mt-[20px] cursor-pointer shadow-md hover:shadow-lg"
                                        onClick={() => navigateTicket(data.id)}
                                    >
                                        <div className="justify-between flex border-b border-b-[1px] border-[#00A19A]">
                                            <div className="flex items-center justify-between md:p-5 lg:p-4 w-full">
                                                <Text className="font-medium md:text-[25px] lg:text-[16px] text-[#000000] ml-4">
                                                    {formatDate(data.departDate)}
                                                </Text>
                                                <Text className="font-medium md:text-[25px] lg:text-[16px] text-[#000000] mr-5">
                                                    {formatTime(data.departTime)}
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="p-5 flex w-[100%]">
                                            <div className="flex flex-col justify-center items-center md:w-[30%] lg:w-[25%]">
                                                {data.operatorCompanyLogo ? (
                                                    <div className='border border-1'>
                                                        <Img
                                                            src={data.operatorCompanyLogo != '' ? data.operatorCompanyLogo : ''}
                                                            className="md:h-[70px] lg:h-[60px] md:w-[140px] lg:w-[100px]"
                                                            alt="logo"
                                                        />
                                                    </div>
                                                ) : (
                                                    <></>
                                                )
                                                }
                                                <div className="flex flex-col mt-5">
                                                    <text className={`font-bold md:text-[22px] lg:text-[14px] text-[#000000]`}>
                                                        {data.operatorCompanyName}
                                                    </text>
                                                </div>
                                            </div>

                                            <div className="flex flex-col md:w-[70%] lg:w-[55%] border-l border-l-black border-r-0 border-t-0 border-b-0 px-10 md:py-1 lg:py-5">
                                                <div className="flex items-center font-bold md:text-[27px] lg:text-[18px] text-black">
                                                    <div className="flex w-4 h-4 mr-2 border-4 border-[#00A19A] rounded-full bg-[#00A19A]"></div>
                                                    <div className='flex flex-row items-center'>
                                                        <div>{data.terminalNameFrom}</div> &nbsp;
                                                        {/* <div className='font-normal md:text-[22px] lg:text-[11px]'>( Depart )</div> */}
                                                    </div>
                                                </div>

                                                <div class="border-l-2 border-dashed border-[#00A19A] h-5 ml-2"></div>

                                                <div className="flex items-center font-bold md:text-[27px] lg:text-[18px] text-black">
                                                    <div className="flex w-4 h-4 mr-2 border-4 border-[#00A19A] rounded-full bg-transparent"></div>
                                                    {/* {bookingDetails.terminalNameTo} */}
                                                    <div className='flex flex-row items-center'>
                                                        <div>{data.terminalNameTo}</div> &nbsp;
                                                        {/* <div className='font-normal md:text-[22px] lg:text-[11px]'>( Arrival )</div> */}
                                                    </div>
                                                </div>
                                                <div className="md:block lg:hidden flex flex-col mt-5">
                                                    <text className={`md:block lg:hidden font-medium md:text-[20px] lg:text-[12px] text-[#626161]`}>
                                                        Booking No.
                                                    </text>
                                                    <text className={`md:block lg:hidden font-medium md:text-[22px] lg:text-[14px] text-[#000000]`}>
                                                        {data.bookingNo}
                                                    </text>
                                                </div>
                                            </div>
                                            <div className="md:hidden lg:block md:w-[0%] lg:w-[20%] flex flex-col justify-end items-end m-5 text-end">
                                                <text className={`md:hidden lg:block font-medium md:text-[20px] lg:text-[12px] text-[#626161]`}>
                                                    Booking No.
                                                </text>
                                                <text className={`md:hidden lg:block font-medium md:text-[22px] lg:text-[14px] text-[#000000]`}>
                                                    {data.bookingNo}
                                                </text>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>

                            {/* pagination past */}
                            {loadingPast == false && pastTrips.length != 0 && (
                                <>
                                    <span className="flex justify-end mr-2 mt-7 md:text-[24px] lg:text-[13px]">Page {currentPagePast} of {Math.ceil(totalPagesPast)}</span>
                                    <div className="flex flex-row font-poppins items-start items-center justify-center mt-[20px] w-[40%] mx-auto">
                                        <Img
                                            className={`md:h-[20px] md:w-[22px] lg:h-[13px] lg:w-[15px] ${currentPagePast > 1 ? 'common-pointer' : 'hidden'}`}
                                            src="images/img_arrowleftmp.svg"
                                            alt="arrowleft"
                                            onClick={() => handleArrowClickPast('left')}
                                        />
                                        {getPageButtonsRangePast().map((pageNumber) => (
                                            <ButtonMp
                                                key={pageNumber}
                                                className={`shadow-lg flex md:h-[77px] md:w-[77px] lg:h-[57px] lg:w-[57px] common-pointer items-center justify-center ml-5 rounded-full text-center text-shadow-ts md:text-2xl lg:text-xl tracking-[-0.30px]
                                                ${currentPagePast === pageNumber ? ' bg-cyan-700 text-white' : 'bg-white text-gray-700'}`}
                                                size="txtPoppinsMedium20"
                                                onClick={() => {
                                                    setCurrentPagePast(pageNumber);

                                                    window.scrollTo({
                                                        top: 0,
                                                        behavior: 'smooth',
                                                    });
                                                }}
                                            >
                                                {pageNumber}
                                            </ButtonMp>
                                        ))}
                                        <Img
                                            className={`md:h-[18px] md:w-[20px] lg:h-[13px] lg:w-[15px] ml-7 ${currentPagePast < totalPagesPast ? 'common-pointer' : 'hidden'}`}
                                            src="images/img_arrowright_gray_700_01.svg"
                                            alt="arrowright_One"
                                            onClick={() => handleArrowClickPast('right')}
                                        />
                                    </div>
                                </>
                            )}
                        </>
                    )}

                    {/* REFUND */}
                    {/* {activeSection === 'refund' && (
                        <div className="mt-[20px]">
                            {ticketData.map((data, index) => (
                                <div
                                    key={index}
                                    className="bg-[#FFFFFF] border border-[3px] border-[#00A19A] rounded-[15px] mt-[20px] cursor-pointer"
                                    onClick={() => navigateTicket(data.id)}
                                >
                                    <div className="justify-between flex border-b border-b-[1px] border-[#00A19A]">
                                        <div className="flex items-center p-5">
                                            <Text className="font-semibold md:text-[27px] lg:text-[18px] text-[#000000]">
                                                {data.from}
                                            </Text>
                                            <BsArrowRight size={17} className="mx-4 text-[#000000] stroke-[1px]" />
                                            <Text className="font-semibold md:text-[27px] lg:text-[18px] text-[#000000]">
                                                {data.to}
                                            </Text>
                                        </div>
                                        <div className="bg-[#00A19A] rounded-tr-[10px] p-3 px-[100px] py-[20px] flex justify-center h-full">
                                            <Text className="font-semibold md:text-[27px] lg:text-[18px] text-[#FFFFFF]">
                                                {data.price}
                                            </Text>
                                        </div>
                                    </div>
                                    <div className="p-5 flex items-start justify-between">
                                        <div>
                                            <div className="flex items-center">
                                                <div className="bg-[#00A19A] p-3">
                                                    <Text className="font-semibold md:text-[25px] lg:text-[14px] text-[#FFFFFF]">
                                                        {data.tag}
                                                    </Text>
                                                </div>
                                                <Text className="font-medium md:text-[25px] lg:text-[14px] text-[#000000] ml-4">
                                                    {data.date}
                                                </Text>
                                            </div>
                                            <div className="mt-4">
                                                <Text className="font-medium md:text-[25px] lg:text-[14px] text-[#000000]">
                                                    {data.company}
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <Text className="font-medium md:text-[25px] lg:text-[14px] text-[#000000]">
                                                {data.time}
                                            </Text>
                                        </div>
                                        <div>
                                            <div className="mt-3">
                                                <Text className="font-medium md:text-[25px] lg:text-[14px] text-[#000000]">
                                                    1 <Text className="font-medium md:text-[25px] lg:text-[14px] text-[#000000] ml-8">{data.seat1}</Text>
                                                </Text>
                                            </div>
                                            <div className="mt-2">
                                                <Text className="font-medium md:text-[25px] lg:text-[14px] text-[#000000]">
                                                    2 <Text className="font-medium md:text-[25px] lg:text-[14px] text-[#000000] ml-8">{data.seat2}</Text>
                                                </Text>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            ))}

                        </div>
                    )} */}

                </div>


            </div >

            <div className="mt-[50px]">
                <Footerepic />
            </div>


        </>
    );

};

export default TicketInfoPage;