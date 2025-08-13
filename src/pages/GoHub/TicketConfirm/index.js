import { Input } from 'components/Input/index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Text, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import Footerepic from 'components/Footer/Footerepic/index';
import { FaBus } from 'react-icons/fa';
import { MdEventSeat } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import { TbTicketOff } from "react-icons/tb";
import { BiExpandVertical } from "react-icons/bi";
import { ticketData, bookingDetails } from "./data";
import './styles.css';
import { useState, useEffect } from 'react';
import axios from '../../../../node_modules/axios/index';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import LoginPage from 'components/Login/index';
import SignupPage from 'components/SignUp/index';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from 'components/LoadingSpinner/index';
import { mdiToyBrickSearchOutline } from '../../../../node_modules/@mdi/js/mdi';
import QRCode from 'qrcode.react';
import { MdOutlineAddModerator } from "react-icons/md";


const TicketConfirmPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
    const [bookingDetails, setBookingDetails] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // setIsLoading(true);
        const searchParams = new URLSearchParams(location.search);
        const bookingNo = searchParams.get('BookingNo');
        console.log("bookingno: ", bookingNo);

        const tripId = searchParams.get('TripId');
        console.log("tripId: ", tripId);

        async function getBookingDetails() {
            try {
                const response = await axios.get(
                    `https://halaltravel.ai/ht/api/v1/bus/booking/${bookingNo}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = response.data;
                console.log("Booking Details: ", data);

                setBookingDetails(data);
                setIsLoading(false);

            } catch (error) {
                console.log('Error:', error);
                setIsLoading(false);
                setBookingDetails('');
            }
        }

        getBookingDetails();
    }, []);


    function formatDate(inputDate) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const dateObject = new Date(inputDate);
        return dateObject.toLocaleDateString('en-GB', options);
    }

    function formatTime(inputTime) {
        const options = { hour: 'numeric', minute: '2-digit', hour12: true };
        const timeObject = new Date(`1970-01-01T${inputTime}`);
        return timeObject.toLocaleTimeString('en-US', options);
    }

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-GB', options);
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
        const formattedTime = date.toLocaleTimeString('en-US', timeOptions);
        return `${formattedDate}, ${formattedTime}`;
    };

    // *CURRENCY*
    const currencySymbols = {
        USD: "$",
        EUR: "€",
        GBP: "£",
        AUD: "$",
        AED: "د.إ",
        ARS: "$",
        BRL: "R$",
        CAD: "$",
        CHF: "CHF",
        CLP: "$",
        CNY: "¥",
        COP: "$",
        DKK: "kr",
        FJD: "FJ$",
        HHL: "HHL",
        HKD: "HK$",
        IDR: "Rp",
        ILS: "₪",
        INR: "₹",
        ISK: "kr",
        JPY: "¥",
        KRW: "₩",
        MXN: "$",
        MYR: "RM",
        NOK: "kr",
        NZD: "$",
        PEN: "S/",
        PHP: "₱",
        PLN: "zł",
        RUB: "₽",
        SEK: "kr",
        SGD: "$",
        THB: "฿",
        TRY: "₺",
        TWD: "NT$",
        VND: "₫",
        ZAR: "R",
    };

    const [expandedIndexes, setExpandedIndexes] = useState([]);

    const handleToggleExpand = (index) => {
        if (expandedIndexes.includes(index)) {
            setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
        } else {
            setExpandedIndexes([...expandedIndexes, index]);
        }
    };



    return (
        <>
            <div className='fixed w-full' style={{ zIndex: 2 }}>
                <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
                <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
                <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
                <HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
            </div>

            <div
                id="ticketConfirm"
                className="w-full font-montserrat"
                style={{
                    backgroundImage: "url('/images/bg_blue.jpg')",
                    backgroundSize: 'cover', // Cover the entire div
                    backgroundPosition: 'top', // Align the background image at the top
                }}
            >

                <div id="ticketConfirm" className="w-full font-montserrat xs:px-[80px] lg:px-[150px] xs:pt-[200px] lg:pt-[132px]">

                    {/* All */}
                    {isLoading ? (
                        <>
                            <div className="h-[400px]">
                                <div className="flex justify-center">
                                    <LoadingSpinner />
                                </div>
                                <p className="flex justify-center mt-3 font-medium md:text-[30px] lg:text-[15px]">Loading..</p>
                            </div>
                        </>
                    ) : bookingDetails === '' ? (
                        <>
                            <div className="flex flex-col items-center p-10">
                                <TbTicketOff className="md:text-[100px] lg:text-[50px]" />
                                <p className="md:text-[24px] lg:text-[14px] mt-2 font-medium">No tickets found.</p>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="flex flex-col items-center justify-center font-bold md:mb-14 lg:mb-10">
                                <text className="md:text-[35px] lg:text-[20px] text-[#00A19A]">
                                    Your booking is confirmed!
                                </text>
                                <text className="md:text-[23px] lg:text-[14px] text-[#00A19A]">
                                    Booking No : {bookingDetails.bookingNo}
                                </text>
                                <text className="md:text-[20px] lg:text-[12px] text-[#999797]">
                                    {formatDateTime(bookingDetails.bookingOn)}
                                </text>
                            </div>
                            <div>
                                {bookingDetails.trips.map((trip, tripIndex) => (
                                    <>
                                        <div key={tripIndex} className="mb-[70px]">

                                            {/* web view */}
                                            <div className='md:hidden lg:block '>
                                                <div className="xs:mb-[40px] lg:mb-[30px] bg-[#00A19A] p-5 grid grid-cols-3 gap-4 shadow-md">
                                                    <div className="flex items-center font-bold justify-start xs:col-span-3 lg:col-span-2">
                                                        <text className="md:text-[35px] lg:text-[20px] text-[#FFFFFF]">
                                                            {trip.terminalNameFrom}
                                                        </text>
                                                        <BsArrowRight size={17} className="mx-4 text-[#FFFFFF] stroke-[1px]" />
                                                        <text className="md:text-[35px] lg:text-[20px] text-[#FFFFFF]">
                                                            {trip.terminalNameTo}
                                                        </text>
                                                    </div>
                                                    <div className="flex items-center border-[1px] border-[#00A19A] justify-end xs:col-span-3 lg:col-span-1">
                                                        <div>
                                                            <text className="font-semibold md:text-[20px] lg:text-[12px] text-[#FFFFFF]">
                                                                TRIP NO. :
                                                            </text>
                                                        </div>
                                                        <div className="ml-2 p-2 bg-[#FFFFFF] ">
                                                            <text className="font-semibold md:text-[20px] lg:text-[12px] text-[#00A19A]">
                                                                {trip.tripCode ? trip.tripCode : '-'}
                                                            </text>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* mobile view */}
                                            <div className='md:block lg:hidden '>
                                                <div className="xs:mb-[40px] lg:mb-[30px] bg-[#00A19A] p-5 shadow-md">
                                                    <div className="flex flex-col font-bold justify-start">
                                                        <text className="flex flex-row items-center md:text-[35px] lg:text-[20px] text-[#FFFFFF]">
                                                            {trip.terminalNameFrom}
                                                            <BsArrowRight size={32} className="mx-4 text-[#FFFFFF] stroke-[1px]" />
                                                        </text>
                                                        <text className="md:text-[35px] lg:text-[20px] text-[#FFFFFF]">
                                                            {trip.terminalNameTo}
                                                        </text>
                                                    </div>
                                                    {/* <div className="flex items-center border-[1px] border-[#00A19A] justify-end xs:col-span-3 lg:col-span-1">
                                                    <div>
                                                        <text className="font-semibold md:text-[20px] lg:text-[12px] text-[#FFFFFF]">
                                                            TRIP NO. :
                                                        </text>
                                                    </div>
                                                    <div className="ml-2 p-2 bg-[#FFFFFF] ">
                                                        <text className="font-semibold md:text-[20px] lg:text-[12px] text-[#00A19A]">
                                                            {trip.tripCode ? trip.tripCode : '-'}
                                                        </text>
                                                    </div>
                                                </div> */}
                                                </div>
                                            </div>


                                            {trip.tickets.map((ticket, index) => (
                                                <>
                                                    {/* Web view */}
                                                    <div key={index} className="md:hidden lg:block xs:mb-[40px] lg:mb-[30px]">
                                                        <div className="border-[1px] border-[#999797] py-8 pl-8 pr-4 mt-[20px] bg-[#FFFFFF] shadow-md rounded-lg">
                                                            <div className="flex items-center w-[100%] relative">
                                                                <div className='w-[70%]'>
                                                                    <div className="flex flex-col">
                                                                        <div className="flex items-center font-bold md:text-[33px] lg:text-[20px] text-black">
                                                                            <div className="flex w-4 h-4 mr-2 border-4 border-[#00A19A] rounded-full bg-[#00A19A]"></div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <div>{trip.terminalNameFrom}</div> &nbsp;
                                                                                {/* <div className='font-normal md:text-[22px] lg:text-[11px]'>( Depart )</div> */}
                                                                            </div>
                                                                        </div>

                                                                        {ticket.pickName ? (
                                                                            <div class="flex items-center relative md:text-[22px] lg:text-[11px]">
                                                                                <div class="flex relative before:absolute before:inset-0 before:w-[2px] before:bg-transparent before:border-l-2 before:border-dashed before:border-[#00A19A] before:mx-2">
                                                                                    <div className='ml-6 my-2 font-medium'>Pickup: &nbsp;</div>
                                                                                    <div className='my-2'>Pickup: {ticket.pickName}</div>
                                                                                </div>
                                                                            </div>

                                                                        ) : (
                                                                            <div class="flex items-center">
                                                                                <div class="h-5 border-l-2 border-dashed border-[#00A19A] mx-2"></div>
                                                                            </div>
                                                                        )}

                                                                        <div className="flex items-center font-bold md:text-[33px] lg:text-[20px] text-black">
                                                                            <div className="flex w-4 h-4 mr-2 border-4 border-[#00A19A] rounded-full bg-transparent"></div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <div>{trip.terminalNameTo}</div> &nbsp;
                                                                                {/* <div className='font-normal md:text-[22px] lg:text-[11px]'>( Arrival )</div> */}
                                                                            </div>
                                                                        </div>

                                                                        {ticket.dropName ? (
                                                                            <div class="flex items-center relative md:text-[22px] lg:text-[11px]">
                                                                                <div class="flex">
                                                                                    <div className='ml-6 my-2 font-medium'>Dropoff: &nbsp;</div>
                                                                                    <div className='my-2'>Dropoff: {ticket.dropName}</div>
                                                                                </div>
                                                                            </div>

                                                                        ) : (
                                                                            <></>
                                                                        )}
                                                                    </div>

                                                                    <div className='mt-3 flex flex-col items-end'>
                                                                        <div className="md:text-[23px] lg:text-[14px] text-black font-medium">
                                                                            <text className='font-bold'>Date:</text> {formatDate(trip.departDate)}
                                                                        </div>
                                                                        <div className="mt-2 md:text-[23px] lg:text-[14px] text-black font-medium">
                                                                            <text className='font-bold'>Time:</text> {formatTime(trip.departTime)}
                                                                        </div>
                                                                    </div>

                                                                    <div className="flex items-center md:mt-[50px] lg:mt-[30px]">
                                                                        <FaBus size={26} className="text-[#00A19A]" />
                                                                        <div className="ml-4 flex justify-between items-center w-full">
                                                                            <text className="font-medium md:text-[22px] lg:text-[14px] text-[#00A19A]">
                                                                                Trip Details
                                                                            </text>
                                                                            <Line className="md:w-[70%] lg:w-[80%] bg-[#00A19A] h-[1px] ml-4" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-[30px] flex justify-between items-center ml-3">
                                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                            {trip.operatorCompanyLogo ? (
                                                                                <div className='border border-1'>
                                                                                    <Img
                                                                                        src={trip.operatorCompanyLogo != '' ? trip.operatorCompanyLogo : ''}
                                                                                        className="md:h-[70px] lg:h-[50px] md:w-[140px] lg:w-[100px]"
                                                                                        alt="logo"
                                                                                    />
                                                                                </div>
                                                                            ) : (
                                                                                <></>
                                                                            )
                                                                            }
                                                                            <text className={`font-medium md:text-[22px] lg:text-[14px] text-[#000000] ${trip.operatorCompanyLogo ?
                                                                                "ml-5" : "ml-0"}`}>
                                                                                {trip.operatorCompanyName}
                                                                            </text>
                                                                        </div>
                                                                        <div className="flex items-center">
                                                                            <div className="p-1 bg-[#00A19A]">
                                                                                <text className="font-semibold md:text-[22px] lg:text-[12px] text-[#FFFFFF] px-2">
                                                                                    TRIP NO.
                                                                                </text>
                                                                            </div>
                                                                            <div className="ml-4">
                                                                                <text className="font-semibold md:text-[22px] lg:text-[12px] text-[#00A19A]">
                                                                                    {trip.tripCode ? trip.tripCode : '-'}
                                                                                </text>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-[30px] flex justify-between items-center mb-[10px] ml-3">
                                                                        <div className="flex items-center mt-2">
                                                                            <div className="p-1 bg-[#00A19A]">
                                                                                <text className="font-semibold md:text-[22px] lg:text-[12px] text-[#FFFFFF] px-2">
                                                                                    SEAT NO.
                                                                                </text>
                                                                            </div>
                                                                            <div className="mt-1 flex items-center ml-4">
                                                                                <MdEventSeat size={28} className="text-[#00A19A]" />
                                                                                <text className="ml-4 font-semibold md:text-[22px] lg:text-[12px] text-[#00A19A]">
                                                                                    {ticket.seatName}
                                                                                </text>
                                                                            </div>
                                                                        </div>
                                                                        <div className="grid place-items-end">
                                                                            <text className="font-medium md:text-[22px] lg:text-[14px] text-[#000000]">
                                                                                {ticket.passengerIdentityName}
                                                                            </text>
                                                                            <text className="font-medium md:text-[22px] lg:text-[14px] text-[#000000]">
                                                                                {ticket.passengerIdentityNo}
                                                                            </text>
                                                                        </div>
                                                                    </div>

                                                                    {/* Expandable section */}
                                                                    {expandedIndexes.includes(index) && (
                                                                        <div className="mt-[20px]">
                                                                            <div className="flex items-start md:mt-[40px] lg:mt-[30px]">
                                                                                <div className="flex justify-between items-center w-full">
                                                                                    <MdOutlineAddModerator size={36} className="text-[#00A19A]" />
                                                                                    <div className="ml-4 flex justify-between items-center w-full">
                                                                                        <text className="font-medium md:text-[22px] lg:text-[14px] text-[#00A19A]">
                                                                                            Add Ons
                                                                                        </text>
                                                                                        <Line className="md:w-[70%] lg:w-[80%] bg-[#00A19A] h-[1px] ml-4" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            {ticket.addOns && ticket.addOns.length > 0 && (
                                                                                <div className="mt-[20px] md:text-[22px] lg:text-[14px] ml-3">
                                                                                    {ticket.addOns.map((addOn, addOnIndex) => (
                                                                                        <div key={addOnIndex} className="flex items-center mr-4">
                                                                                            <p className="font-bold mr-2 mt-2">{addOn.categoryName}:</p>
                                                                                            <p className="font-medium">{currencySymbols[bookingDetails.payment.currency]} {addOn.price}</p>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    )}

                                                                </div>


                                                                <div className='w-[8%]'>
                                                                    <div className="absolute inset-0 border-r-2 border-dashed border-gray-400" style={{ right: '24%', marginRight: '-1px' }}></div>
                                                                </div>

                                                                <div className='flex flex-col w-[22%] items-center'>
                                                                    {ticket.boardingPassNo ? (
                                                                        <div className="self-stretch flex justify-center items-center">
                                                                            <QRCode value={ticket.boardingPassNo} className="h-full w-auto border border-gray-400" />
                                                                        </div>
                                                                    ) : (
                                                                        <div className="border border-gray-400 text-[11px] flex justify-center items-center">
                                                                            <div className='p-2 py-14 bg-gray-100'>No QR Code required.</div>
                                                                        </div>
                                                                    )}

                                                                    <div className="flex flex-col items-center mt-[50px]">
                                                                        <div className='mb-1'>
                                                                            <text className="font-semibold md:text-[20px] lg:text-[12px] text-[#00A19A]">
                                                                                Ticket No.
                                                                            </text>
                                                                        </div>
                                                                        <div className="p-2 bg-[#FFFFFF] border-[1px] border-[#00A19A]">
                                                                            <text className="font-semibold md:text-[20px] lg:text-[12px] text-[#00A19A]">
                                                                                {ticket.bookingOperatorTicketNo}
                                                                            </text>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-col items-center mt-[20px]">
                                                                        <div className='mb-1'>
                                                                            <text className="font-semibold md:text-[20px] lg:text-[12px] text-[#00A19A]">
                                                                                Operator Ticket Ref No.
                                                                            </text>
                                                                        </div>
                                                                        <div className="p-2 bg-[#FFFFFF] border-[1px] border-[#00A19A]">
                                                                            <text className="font-semibold md:text-[20px] lg:text-[12px] text-[#00A19A]">
                                                                                {ticket.operatorTicketNo}
                                                                            </text>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>


                                                            {/* Button to toggle expand/collapse */}
                                                            {ticket.addOns.length > 0 && (
                                                                <div className="flex items-center justify-center mt-[20px] font-medium text-[#00A19A] md:text-[22px] lg:text-[14px]" >
                                                                    <button onClick={() => handleToggleExpand(index)}>
                                                                        {expandedIndexes.includes(index) ?
                                                                            <>
                                                                                <div className="flex items-center">
                                                                                    <span>See less </span>&nbsp;&nbsp;
                                                                                    <BiExpandVertical />
                                                                                </div>
                                                                            </>
                                                                            :
                                                                            <>
                                                                                <div className="flex items-center">
                                                                                    <span>See more </span>&nbsp;&nbsp;
                                                                                    <BiExpandVertical />
                                                                                </div>
                                                                            </>
                                                                        }
                                                                    </button>
                                                                </div>
                                                            )}

                                                        </div>

                                                    </div >

                                                    {/* Mobile view */}
                                                    <div key={index} className="md:block lg:hidden xs:mb-[40px] lg:mb-[30px]">
                                                        <div className="border-[1px] border-[#999797] p-10 mt-[20px] bg-[#FFFFFF] shadow-md rounded-xl">
                                                            <div className="items-center w-[100%]">
                                                                <div>
                                                                    <div className="flex flex-col">
                                                                        <div className="flex items-center font-bold md:text-[33px] lg:text-[20px] text-black">
                                                                            <div className="flex w-6 h-6 mr-2 border-4 border-[#00A19A] rounded-full bg-[#00A19A]"></div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <div>{trip.terminalNameFrom}</div> &nbsp;
                                                                                {/* <div className='font-normal md:text-[22px] lg:text-[11px]'>( Depart )</div> */}
                                                                            </div>
                                                                        </div>

                                                                        {ticket.pickName ? (
                                                                            <div class="flex items-center relative md:text-[22px] lg:text-[11px]">
                                                                                <div class="flex relative before:absolute before:inset-0 before:w-[2px] before:bg-transparent before:border-l-2 before:border-dashed before:border-[#00A19A] before:mx-2">
                                                                                    <div className='ml-8 my-2 font-medium'>Pickup: &nbsp;</div>
                                                                                    <div className='my-2'>{ticket.pickName}</div>
                                                                                </div>
                                                                            </div>

                                                                        ) : (
                                                                            <div class="flex items-center">
                                                                                <div class="h-5 border-l-2 border-dashed border-[#00A19A] mx-2"></div>
                                                                            </div>
                                                                        )}

                                                                        <div className="flex items-center font-bold md:text-[33px] lg:text-[20px] text-black">
                                                                            <div className="flex w-6 h-6 mr-2 border-4 border-[#00A19A] rounded-full bg-transparent"></div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <div>{trip.terminalNameTo}</div> &nbsp;
                                                                                {/* <div className='font-normal md:text-[22px] lg:text-[11px]'>( Arrival )</div> */}
                                                                            </div>
                                                                        </div>

                                                                        {ticket.dropName ? (
                                                                            <div class="flex items-center relative md:text-[22px] lg:text-[11px]">
                                                                                <div class="flex">
                                                                                    <div className='ml-8 my-2 font-medium'>Dropoff: &nbsp;</div>
                                                                                    <div className='my-2'>{ticket.dropName}</div>
                                                                                </div>
                                                                            </div>

                                                                        ) : (
                                                                            <></>
                                                                        )}
                                                                    </div>

                                                                    <div className='mt-5 flex flex-col items-end'>
                                                                        <div className="md:text-[23px] lg:text-[14px] text-black font-medium">
                                                                            <text className='font-bold'>Date:</text> {formatDate(trip.departDate)}
                                                                        </div>
                                                                        <div className="mt-2 md:text-[23px] lg:text-[14px] text-black font-medium">
                                                                            <text className='font-bold'>Time:</text> {formatTime(trip.departTime)}
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>

                                                            <div className="flex items-start mt-10 mb-14">
                                                                <FaBus size={36} className="text-[#00A19A]" />
                                                                <div className="ml-4 flex justify-between items-center w-full">
                                                                    <text className="font-medium md:text-[22px] lg:text-[14px] text-[#00A19A]">
                                                                        Trip Details
                                                                    </text>
                                                                    <Line className="md:w-[70%] lg:w-[80%] bg-[#00A19A] h-[1px] ml-4" />
                                                                </div>
                                                            </div>

                                                            <div className="mt-[30px] flex justify-between items-center ml-3">
                                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                    {trip.operatorCompanyLogo ? (
                                                                        <Img
                                                                            src={trip.operatorCompanyLogo != '' ? trip.operatorCompanyLogo : ''}
                                                                            className="md:h-[70px] lg:h-[50px] md:w-[140px] lg:w-[100px]"
                                                                            alt="logo"
                                                                        />
                                                                    ) : (
                                                                        <></>
                                                                    )
                                                                    }
                                                                    <text className={`font-medium md:text-[22px] lg:text-[14px] text-[#000000] ${trip.operatorCompanyLogo ?
                                                                        "ml-5" : "ml-0"}`}>
                                                                        {trip.operatorCompanyName}
                                                                    </text>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <div className="p-1 bg-[#00A19A]">
                                                                        <text className="font-semibold md:text-[22px] lg:text-[12px] text-[#FFFFFF] px-2">
                                                                            TRIP NO.
                                                                        </text>
                                                                    </div>
                                                                    <div className="ml-4">
                                                                        <text className="font-semibold md:text-[22px] lg:text-[12px] text-[#00A19A]">
                                                                            {trip.tripCode ? trip.tripCode : '-'}
                                                                        </text>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mt-10 flex justify-between items-center ml-3">
                                                                <div className="flex items-center mt-2">
                                                                    <div className="p-1 bg-[#00A19A]">
                                                                        <text className="font-semibold md:text-[22px] lg:text-[12px] text-[#FFFFFF] px-2">
                                                                            SEAT NO.
                                                                        </text>
                                                                    </div>
                                                                    <div className="mt-1 flex items-center ml-4">
                                                                        <MdEventSeat size={28} className="text-[#00A19A]" />
                                                                        <text className="ml-4 font-semibold md:text-[22px] lg:text-[12px] text-[#00A19A]">
                                                                            {ticket.seatName}
                                                                        </text>
                                                                    </div>
                                                                </div>
                                                                <div className="grid place-items-end">
                                                                    <text className="font-medium md:text-[22px] lg:text-[14px] text-[#000000]">
                                                                        {ticket.passengerIdentityName}
                                                                    </text>
                                                                    <text className="font-medium md:text-[22px] lg:text-[14px] text-[#000000]">
                                                                        {ticket.passengerIdentityNo}
                                                                    </text>
                                                                </div>
                                                            </div>

                                                            {/* Expandable section */}
                                                            {expandedIndexes.includes(index) && (
                                                                <div className="mt-[20px]">
                                                                    <div className="flex items-start md:mt-[40px] lg:mt-[30px]">
                                                                        <div className="flex justify-between items-center w-full">
                                                                            <MdOutlineAddModerator size={46} className="text-[#00A19A]" />
                                                                            <div className="ml-4 flex justify-between items-center w-full">
                                                                                <text className="font-medium md:text-[22px] lg:text-[14px] text-[#00A19A]">
                                                                                    Add Ons
                                                                                </text>
                                                                                <Line className="md:w-[70%] lg:w-[80%] bg-[#00A19A] h-[1px] ml-4" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {ticket.addOns && ticket.addOns.length > 0 && (
                                                                        <div className="mt-[20px] md:text-[22px] lg:text-[14px] ml-3">
                                                                            {ticket.addOns.map((addOn, addOnIndex) => (
                                                                                <div key={addOnIndex} className="flex items-center mr-4">
                                                                                    <p className="font-bold mr-2 mt-2">{addOn.categoryName}:</p>
                                                                                    <p className="font-medium">{currencySymbols[bookingDetails.payment.currency]} {addOn.price}</p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}


                                                            <div className="flex items-start mt-14 mb-14">
                                                                <div class="w-full border-t-2 border-dashed border-[#00A19A] my-2"></div>
                                                            </div>

                                                            <div className='flex flex-col items-center'>
                                                                {ticket.boardingPassNo ? (
                                                                    <div className="self-stretch flex justify-center items-center">
                                                                        <QRCode size={350} value={ticket.boardingPassNo} className="h-full w-auto border border-gray-400" />
                                                                    </div>
                                                                ) : (
                                                                    <div className="border border-gray-400 text-[23px] flex justify-center items-center">
                                                                        <div className='p-5 bg-gray-100'>No QR Code required.</div>
                                                                    </div>
                                                                )}

                                                                <div className="flex flex-row items-center mt-[50px]">
                                                                    <div className='mb-2'>
                                                                        <text className="font-semibold md:text-[23px] lg:text-[12px] text-[#00A19A]">
                                                                            Ticket No.
                                                                        </text>
                                                                    </div>
                                                                    &nbsp;&nbsp;&nbsp;
                                                                    <div className="p-2 bg-[#FFFFFF] border-[1px] border-[#00A19A]">
                                                                        <text className="font-semibold md:text-[23px] lg:text-[12px] text-[#00A19A]">
                                                                            {ticket.bookingOperatorTicketNo}
                                                                        </text>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-row items-center mt-[20px]">
                                                                    <div className='mb-2'>
                                                                        <text className="font-semibold md:text-[23px] lg:text-[12px] text-[#00A19A]">
                                                                            Operator Ticket Ref No.
                                                                        </text>
                                                                    </div>
                                                                    &nbsp;&nbsp;&nbsp;
                                                                    <div className="p-2 bg-[#FFFFFF] border-[1px] border-[#00A19A]">
                                                                        <text className="font-semibold md:text-[23px] lg:text-[12px] text-[#00A19A]">
                                                                            {ticket.operatorTicketNo}
                                                                        </text>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            {/* Button to toggle expand/collapse */}
                                                            {ticket.addOns.length > 0 && (
                                                                <div className="flex items-center justify-center mt-10 font-medium text-[#00A19A] md:text-[22px] lg:text-[14px]" >
                                                                    <button onClick={() => handleToggleExpand(index)}>
                                                                        {expandedIndexes.includes(index) ?
                                                                            <>
                                                                                <div className="flex items-center">
                                                                                    <span>See less </span>&nbsp;&nbsp;
                                                                                    <BiExpandVertical />
                                                                                </div>
                                                                            </>
                                                                            :
                                                                            <>
                                                                                <div className="flex items-center">
                                                                                    <span>See more </span>&nbsp;&nbsp;
                                                                                    <BiExpandVertical />
                                                                                </div>
                                                                            </>
                                                                        }
                                                                    </button>
                                                                </div>
                                                            )}

                                                        </div>

                                                    </div >

                                                    <div class="border-t border-custom-dashed border-[#C4C4C4] w-full my-10"></div>
                                                </>
                                            ))}
                                        </div>
                                    </>
                                ))}

                            </div>

                            <div className="flex justify-end font-bold">
                                <text className="md:text-[30px] lg:text-[20px] text-[#00A19A] mb-20">
                                    Total Paid: {currencySymbols[bookingDetails.payment.currency]}{bookingDetails.payment.totalPrice}
                                </text>
                                {/* <text className="md:text-[27px] lg:text-[17px] text-[#00A19A]">
                                Paid Via:
                                </text>
                                {bookingDetails.payment.paymentItems.map((item, index) => (
                                    <div key={index}>
                                        <p>{item.paymentMethodName} - {currencySymbols[item.currency]} {item.totalPrice}</p>
                                    </div>
                                ))} */}
                            </div>

                        </>
                    )}

                </div>
            </div>

            <div className="mt-[0px]">
                <Footerepic />
            </div>


        </>
    );

};

export default TicketConfirmPage;