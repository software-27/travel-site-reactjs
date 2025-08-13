import HeaderOTA from 'components/Header/HeaderOTA/index';
import React, { useState } from "react";
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import Footerepic from 'components/Footer/Footerepic/index';
import "../../../styles/stepper.css";
import { MdOutlineDone } from "react-icons/md";
import { Img } from "components";
import { AiFillStar } from 'react-icons/ai';
import { VscPerson } from "react-icons/vsc";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa"
import { SiAmericanexpress } from "react-icons/si";


const PaymentInfo = () => {

    const steps = ["Customer Info", "Payment Info", "Booking is confirmed"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    // const displayStep = (step) => {
    //     switch (step){
    //         case 1: return <step1 />
    //         case 2: return <step2 />
    //         case 3: return <step3 />
    //     }
    // }

    return (
        <>
            <div className="relative justify-center items-center space-y-12 h-fit w-full">

            <HeaderOTA className="fixed invisible lg:visible" />
            <HeaderOTAMobileEpic className="visible fixed overflow-hidden lg:invisible lg:hidden" />

                <div className="flex w-full justify-center items-center">
                    {
                        steps?.map((step, i) => (
                            <div
                                key={i}
                                className={`step-item ${i === 0 && "complete"} ${i === 1 && "active"}`}
                            >
                                <div className="step">
                                    {
                                        (i === 0) ? <MdOutlineDone size={22} /> : i + 1
                                    }
                                </div>
                                <p className="text-slate-500">{step}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex w-[85%] font-montserrat h-fit">
                        <div className="grid grid-cols-3 grid-flow-row gap-4 w-full">
                            {/* choice alert */}
                            <div className="flex items-center gap-2 pl-4 border border-0.5 col-span-2 row-span-1 border-l-8 border-l-[#464747] border-[#EEE9E9] shadow shadow-slate-50">
                                <MdOutlineDone className="text-[#464747]" />  We won’t charge your credit card. It’s only required for booking.
                            </div>
                            {/* Nearby place */}
                            <div className="grid grid-cols-2 gap-4 flex justify-start p-4 border border-0.5 row-span-2 border-[#EEE9E9] shadow shadow-slate-50">
                                <div className="w-[250px]">
                                    <Img
                                        src="https://pix8.agoda.net/hotelImages/4861656/-1/db07c2744c9aa9deb0f7a144aa3c1e44.png?ca=9&ce=1&s=1024x768"
                                        className="w-full h-[160px] object-cover border border-[0.5px] shadow-sm"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="justify-start">
                                        <text className="flex text-[16px] font-semibold">TROVE Johor Bharu</text>
                                    </div>
                                    <div className="flex items-center justify-start">
                                        <AiFillStar size={18} className="text-[#EEA024]" />
                                        <AiFillStar size={18} className="text-[#EEA024]" />
                                        <AiFillStar size={18} className="text-[#EEA024]" />
                                        <AiFillStar size={18} className="text-[#EEA024]" />
                                    </div>
                                    <div className="w-[85%] mt-4">
                                        <text className="text-[12px]">Jalan Dato' Abdullah Tahir,Johor Bahru City Center, Johor Bahru, Johor, Malaysia, 83000</text>
                                    </div>
                                    <div className="mt-6">
                                        <text className="text-[#5392F9] text-[11px] font-medium">What's Nearby</text>
                                    </div>
                                </div>
                            </div>
                            {/** Deals countdown */}
                            <div className="flex px-4 gap-2 items-center border border-0.5 col-span-2 row-span-1 border-[#EEE9E9] shadow shadow-slate-50 ">
                                {/**to add timer function <p className="place-items-end">timerrr</p>*/}
                                <IoMdTime />00:10:00
                                <text className='flex items-end justify-end w-full'>We are holding your price!</text>
                            </div>
                            {/*Information form */}
                            <div className="border border-0.5 col-span-2 p-4 row-span-22 border-[#EEE9E9] shadow shadow-slate-50">
                                <div className='flex my-4 justify-between items-center w-[90%]'>
                                    <text className="font-bold">CREDIT/DEBIT CARD</text>
                                    <div className='flex items-end space-x-2'>
                                        <RiVisaLine size={20} />
                                        <FaCcMastercard size={20} />
                                        <SiAmericanexpress size={20} />
                                    </div>
                                </div>

                                {/**PaymentMethod */}
                                <div className="w-[90%] justify-start gap-2 mt-8">
                                    <text className="text-[12px] flex font-[505]">Select payment method<p className="text-red-600">*</p></text>
                                    <input className="w-full flex h-fit p-2 text-slate-700 border-0 border-b-[1px] border-dark-grey placeholder-gray-400 shadow shadow-slate-200 text-[12px]" placeholder="Visa / MasterCard / Amex" />
                                </div>
                                {/**Reminder */}
                                <div className="w-[90%] justify-start gap-2 mt-8">
                                    <text className="text-[12px] flex font-[505]">If paying with a Malaysian debit card, please ensure your card has been authorized by your bank for online purchases.</text>
                                    <p className="w-full flex h-fit p-2 text-slate-700 bg-[#E5DFDF] border-0 border-b-[1px] border-dark-grey shadow shadow-slate-200 text-[12px] text-center">Your card is only required for booking confirmation. You will have to pay at the property upon arrival. </p>
                                </div>
                                {/**CardHolder */}
                                <div className="w-[90%] justify-start gap-2 mt-8">
                                    <text className="text-[12px] flex font-[505]">Card holder name<p className="text-red-600">*</p></text>
                                    <input className="w-full h-fit p-2 text-slate-700 border-0 border-b-[1px] border-dark-grey placeholder-gray-400 shadow shadow-slate-200 text-[12px]" placeholder="John Smith" />
                                </div>
                                {/**Credit/debit card number */}
                                <div className="w-[90%] justify-start gap-2 mt-8">
                                    <text className="text-[12px] flex font-[505]">Credit/debit card number<p className="text-red-600">*</p></text>
                                    <input className="w-full h-fit p-2 text-slate-700 border-0 border-b-[1px] border-slate-300 placeholder-gray-400 shadow shadow-slate-200 text-[12px]" placeholder="XXXX XXXX XXXX XXXX" />
                                </div>
                                <div className="flex w-[90%] justify-center gap-4 mt-6 ">
                                    {/**Expiry date */}
                                    <div className="w-[50%] justify-start gap-2 mt-4">
                                        <text className="text-[12px] flex font-[505]">Expiry date<p className="text-red-600">*</p></text>
                                        <input className="w-full h-fit p-2 text-slate-700 border-0 border-b-[1px] border-slate-300 placeholder-gray-400 shadow shadow-slate-200 text-[12px]" placeholder="MM/YY" />
                                    </div>
                                    {/**CVC/CVV */}
                                    <div className="w-[50%] justify-start gap-2 mt-4">
                                        <text className="text-[12px] flex font-[505]">CVC/CVV<p className="text-red-600">*</p></text>
                                        <input className="w-full h-fit p-2 text-slate-700 border-0 border-b-[1px] border-slate-300 placeholder-gray-400 shadow shadow-slate-200 text-[12px]" placeholder="Security Code" />
                                    </div>
                                </div>
                                {/**Checking */}
                                <div className="flex-row w-[90%] mt-8">
                                    <div class="flex items-center w-full mb-4 gap-2">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-3.5 h-3.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-checkbox" class="font-montserrat ms-2 text-[12px] font-medium text-gray-900 dark:text-gray-300">Email me exclusive offers. </label>
                                    </div>
                                </div>

                            </div>
                            {/* Booking Details */}
                            <div className="flex border border-0.5 col-span-1 row-span-1 border-[#EEE9E9] py-4 justify-center shadow shadow-slate-50">
                                <div className=" grid grid-flow-row auto-rows-auto w-[90%] h-fit">
                                    <div className="grid grid-cols-2 flex justify-start w-full gap-40">
                                        {/**Date and number of days */}
                                        <div className="flex  h-fit items-center ">
                                            <text className="flex font-semibold text-[12px]">11 Nov 2023 - 14 Nov 2023</text>
                                        </div>
                                        <div className="flex h-fit items-center">
                                            <text className="flex font-semibold text-[12px]">3 Nights</text>
                                        </div>
                                    </div>
                                    {/**bed type */}
                                    <div className="grid grid-cols-2 flex justify-start w-full gap-52">
                                        <text className="flex font-medium text-[12px]">1 x Standard Twin</text>
                                        <text className="flex font-medium text-[12px] underline text-[#5392F9] ml-2">Change</text>
                                    </div>
                                    {/**Rating */}
                                    <div className="grid grid-cols-2 flex justify-start w-full gap-4">
                                        <div className="flex items-end pt-[30px]">
                                            <div className="px-2 py-1 bg-[#5392F9] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]">
                                                <text className="font-[505] text-[14px] text-[#FFFFFF]">
                                                    4.3
                                                </text>
                                                <text className="font-medium text-[12px] text-[#FFFFFF] ml-1">
                                                    / 5
                                                </text>
                                            </div>
                                            <text className="flex text-[11px] ml-2">
                                                from 1,293
                                                <div className="text-[11px] ml-1">
                                                    Reviews
                                                </div>
                                            </text>
                                        </div>
                                    </div>
                                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                    <div className="grid grid-cols-2 flex justify-start w-full gap-4">
                                        <div className="w-[150px]">
                                            <Img
                                                src="https://pix8.agoda.net/hotelImages/4861656/-1/db07c2744c9aa9deb0f7a144aa3c1e44.png?ca=9&ce=1&s=1024x768"
                                                className="w-full h-[160px] object-cover border border-[0.5px] shadow-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            {/**number of room & pax */}
                                            <div className="justify-start flex items-center gap-2">
                                                <VscPerson size={26} /><text className="flex text-[12px] font-normal">1 room, 2 adults, 2 children (ages: 8, and 8)</text>
                                            </div>
                                            {/**max pax */}
                                            <div className="justify-start flex items-center gap-2">
                                                <MdOutlinePeopleAlt size={20} /><text className="flex text-[12px] font-normal">Max: 2 adults, 2 children (0-11years)</text>
                                            </div>
                                            <div className="justify-start flex items-center gap-2">
                                                <MdOutlineDone size={20} /><text className="flex text-[12px] font-normal">Parking</text>
                                            </div>
                                            <div className="justify-start flex items-center gap-2">
                                                <MdOutlineDone size={20} /><text className="flex text-[12px] font-normal">Coffee & Tea</text>
                                            </div>
                                            <div className="justify-start flex items-center gap-2">
                                                <MdOutlineDone size={20} /><text className="flex text-[12px] font-normal">Free Wi-fi</text>
                                            </div>
                                            <div className="justify-start flex items-center gap-2">
                                                <MdOutlineDone size={20} /><text className="flex text-[12px] font-normal">Drinking water</text>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                    {/**room price */}
                                    <div className="grid grid-cols-2 flex justify-start w-full gap-40">
                                        <text className="flex font-medium text-[12px]">Room price (1 room x 3 nights)</text>
                                        <text className="flex font-medium text-[12px]">$ 135</text>
                                    </div>
                                    {/**booking fee */}
                                    <div className="grid grid-cols-2 flex justify-start w-full my-1 gap-64">
                                        <text className="flex font-medium text-[12px]">Booking fees</text>
                                        <text className="flex font-medium text-[12px] text-[#5392F9] ml-1">FREE</text>
                                    </div>
                                    {/**Total Price */}
                                    <div className="grid grid-cols-2 flex justify-start w-full gap-72 mt-4 mb-1">
                                        <text className="flex font-semibold text-[14px]">Price</text>
                                        <text className="flex font-semibold text-[14px] ml-3">$ 135</text>
                                    </div>
                                    <text className="flex font-medium text-[10px]">Included in price: Tax 6%, service charge 10%</text>
                                    <text className="flex font-medium text-[11px] my-3">Your currency selection affect price charged or displayed to you under these terms</text>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="flex border p-4 border-0.5 w-[56.5%] ml-28 border-[#EEE9E9] shadow shadow-slate-50">
                    <div className="w-full justify-center items-center">
                        <text className="text-[12px]">By proceeding with this booking, I agree to the <text className="text-[#5392F9] underline">Terms of Use</text> and <text className="text-[#5392F9] underline">Privacy and Policy</text></text>
                        <button
                            className="btn"
                            onClick={() => {
                                currentStep === steps.length
                                    ? setComplete(true)
                                    : setCurrentStep((prev) => prev + 1);

                            }}
                        >
                            {currentStep === steps.length ? "Finish" : "Book Now"}
                        </button>
                        <text className="text-[12px]">The confirmation for your booking will be emailed at <a href="mailto:youremail@mail.com" className="text-blue-600">youremail@mail.com</a></text>
                    </div>
                </div>
            </div>

            <div className="w-[56.5%] ml-28 justify-start gap-2">
                <button className='mt-[16px] mb-[16px] items-center justify-center rounded-[8px] bg-[#CCC9C9] pl-[24px] pr-[24px] pt-[12px] pb-[12px] font-weight-500 text-white'>Back to booking details</button>
            </div>
            <Footerepic></Footerepic>
        </>
    )
}

export default PaymentInfo;