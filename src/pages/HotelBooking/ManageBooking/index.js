import HeaderOTA from 'components/Header/HeaderOTA/index';
import React, { useState } from "react";
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import Footerepic from 'components/Footer/Footerepic/index';
import "../../../styles/stepper.css";
import { Column, Row, Text, Input, Line, Button, SelectBox } from "components";
import { MdOutlineDone } from "react-icons/md";
import { Img } from "components";
import { RiListSettingsLine } from "react-icons/ri";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdSearch } from 'react-icons/md';




const ManageBooking = () => {

    const steps = ["Customer Info", "Payment Info", "Booking is confirmed"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const [activeTab, setActiveTab] = useState('Upcoming');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="relative justify-center pb-10 items-center space-y-12 h-fit w-full">

            <HeaderOTA className="fixed invisible lg:visible" />
            <HeaderOTAMobileEpic className="visible fixed overflow-hidden lg:invisible lg:hidden" />

                <div className="w-full flex justify-center">
                    <div className="flex w-[85%] font-montserrat h-fit">
                        <div className="grid grid-cols-3 grid-flow-row gap-4 w-full">
                            <text className='mb-2 font-semibold'>My bookings</text>
                            {/* choice alert */}
                            <div className='w-full col-span-3 shadow shadow-slate-50'>
                                <div className='flex justify-evenly h-[60px] bg-black rounded-lg mb-2'>
                                    <Column className={` lg:text- bg-gray_100 w-full justify-center font-semibold text-center items-center ${activeTab === 'Upcoming' ? 'bg-[#5392F9] text-white' : 'text-black border-b-4 border-[#5392F9]'}`}
                                        onClick={() => handleTabClick('Upcoming')}
                                    >
                                        Upcoming
                                    </Column>
                                    <Column className={` lg:text- bg-gray_100 w-full justify-center font-semibold text-center items-center ${activeTab === 'Completed' ? 'bg-[#5392F9]  text-white' : 'text-black border-b-4 border-[#5392F9]'}`}
                                        onClick={() => handleTabClick('Completed')}
                                    >
                                        Completed
                                    </Column>
                                    <Column className={` bg-gray_100 w-full justify-center text-center font-semibold items-center ${activeTab === 'Cancelled' ? 'bg-[#5392F9] text-white' : 'text-black border-b-4 border-[#5392F9]'}`}
                                        onClick={() => handleTabClick('Cancelled')}
                                    >
                                        Cancelled
                                    </Column>
                                </div>


                                {/* Content based on the selected tab */}
                                {activeTab === 'Upcoming' && (
                                    <div className='mt-4 space-y-4'>
                                        <div className='flex justify-between'>
                                            <button className='inline-flex py-1 px-2 rounded-full bg-gray-100 border border-1 border-[#949494] w-fit items-center'>
                                                <RiListSettingsLine size={20} />
                                                <text className='ml-2 text-[#5C5C5F] text-[13px] font-semibold'>Sort by: Check-in date</text>
                                                <IoChevronDownOutline size={18} className='ml-2' />
                                            </button>
                                            <div className='bg-gray-100 border border-gray-200 justify-between rounded-full inline-flex items-center h-fit py-1 px-2 sm:w-[400px] lg:w-[250px]'>
                                                <input class='bg-transparent placeholder-[#A0A0A3] p-1 w-full focus:outline-none border-none sm:text-[18px] lg:text-[13px]'
                                                    type='text' placeholder='Search by booking ID' />
                                                <MdSearch className='text-[#A0A0A3]' size={20} />
                                            </div>
                                        </div>

                                        <div className=''>
                                            <p className='font-semibold text-[28px]'>Johor Bahru</p>
                                            <text>Sat, Nov 11</text>
                                        </div>

                                        <div className='p-4 space-y-4 border border-0.5border-[#EEE9E9] shadow shadow-slate-50 rounded-lg'>
                                            <text className='font-semibold'>ID: 2132399881</text>
                                            <div className="grid grid-cols-2 gap-4 flex justify-start border border-0.5 row-span-2 border-[#EEE9E9] shadow shadow-slate-50 w-full">
                                                <div className="w-[120px]">
                                                    <Img
                                                        src="https://pix8.agoda.net/hotelImages/4861656/-1/db07c2744c9aa9deb0f7a144aa3c1e44.png?ca=9&ce=1&s=1024x768"
                                                        className="w-full h-[160px] object-cover border border-[0.5px] shadow-sm"
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-center w-[250px]">
                                                    <div className="justify-start">
                                                        <text className="flex text-[16px] font-semibold">TROVE Johor Bharu</text>
                                                    </div>
                                                    <div className='mt-2 grid grid-cols-2 w-full '>
                                                        <div className='flex flex-col'>
                                                            <text className='text-[#464747]'>Check in</text>
                                                            <text className='text-black font-regular'>Sat, Nov 11</text>
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <text className='text-[#464747]'>Check out</text>
                                                            <text className='text-black font-regular'>Tue, Nov 14</text>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex justify-end">
                                                <button className='items-center justify-center rounded-[8px] bg-[#5392F9] pl-[24px] pr-[24px] pt-[12px] pb-[12px] font-weight-500 text-white'>Manage booking</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'Completed' && (
                                    <div>
                                        <text>insert your context here</text>
                                    </div>
                                )}
                                {activeTab === 'Cancelled' && (
                                    <div>
                                        <text>insert your context here</text>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footerepic className="bottom-0"></Footerepic>
        </>
    )
}

export default ManageBooking;