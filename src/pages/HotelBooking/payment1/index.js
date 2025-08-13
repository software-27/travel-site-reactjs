import React, { useState } from "react";
import Footerepic from 'components/Footer/Footerepic/index';
import "../../../styles/stepper.css";
import { MdOutlineDone } from "react-icons/md";
import { Img} from "components";
import { AiFillStar } from 'react-icons/ai';
import { VscPerson } from "react-icons/vsc";
import { MdOutlinePeopleAlt } from "react-icons/md";
import HeaderOTA from 'components/Header/HeaderOTA/index';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";





const CustomerInfo = () => {

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

    return(
        <>
            <div className="relative justify-center items-center space-y-12 h-fit pb-10 w-full">

                <HeaderOTA className="fixed invisible lg:visible" />
                <HeaderOTAMobileEpic className="visible fixed overflow-hidden lg:invisible lg:hidden" />

                <div className="flex w-full justify-center items-center">
                    {
                        steps?.map((step,i)=>(
                            <div 
                                key={i} 
                                className={`step-item ${currentStep === i + 1 && "active"} ${
                                    (i + 1 < currentStep || complete) && "complete"
                                }`}
                            >
                                <div className="step md:text-[28px] xl:text-[15px] 2xl:text-[15px]">
                                    {
                                        (i + 1 < currentStep || complete) ?  <MdOutlineDone size={22}/> : i + 1
                                    }
                                </div>
                                <p className="text-slate-500 mt-[10px] md:text-[24px] xl:text-[15px] 2xl:text-[15px]">{step}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full flex justify-center">
                <div className="flex w-[85%] font-montserrat h-fit">
                <div className="grid xl:grid-cols-3 2xl:grid-cols-3 grid-flow-row gap-4 w-full">
                {/* choice alert */}
                <div className="flex md:p-5 xl:p-4 2xl:p-4 items-center border border-0.5 col-span-2 border-[#EEE9E9] shadow shadow-slate-50 ">
                    <MdOutlineDone size={20} className="md:hidden xl:block 2xl:block text-green-600"/>
                    <MdOutlineDone size={36} className="md:block xl:hidden 2xl:hidden text-green-600"/>
                    <text className="md:text-[20px] xl:text-[14px] 2xl:text-[14px]">
                        <text className="ml-4 mr-1 text-green-600 font-medium "> 
                            Great choice! 
                        </text>  
                        - with an average guest rating of 
                        <text className="mr-1 ml-1 text-green-600 font-semibold"> 
                            4.3 
                        </text>
                        from 293 reviewers.
                    </text>
                </div>
                {/* Nearby place */}
                <div className="grid grid-cols-2 gap-4 flex justify-start p-4 border border-0.5 row-span-2 border-[#EEE9E9] shadow shadow-slate-50">
                    <div className="md:w-[450px] xl:w-[250px] 2xl:w-[250px]">
                        <Img
                            src="https://pix8.agoda.net/hotelImages/4861656/-1/db07c2744c9aa9deb0f7a144aa3c1e44.png?ca=9&ce=1&s=1024x768"
                            className="w-full md:h-[350px] xl:h-[160px] 2xl:h-[160px] object-cover border border-[0.5px] shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="justify-start">
                            <text className="flex md:text-[34px] xl:text-[16px] 2xl:text-[16px] font-semibold">TROVE Johor Bharu</text>
                        </div>
                        <div className="flex items-center justify-start">
                            <AiFillStar size={18} className="md:hidden xl:block 2xl:block text-[#EEA024]"/> 
                            <AiFillStar size={18} className="md:hidden xl:block 2xl:block text-[#EEA024]"/>
                            <AiFillStar size={18} className="md:hidden xl:block 2xl:block text-[#EEA024]"/> 
                            <AiFillStar size={18} className="md:hidden xl:block 2xl:block text-[#EEA024]"/>

                            <AiFillStar size={24} className="md:block xl:hidden 2xl:hidden text-[#EEA024]"/> 
                            <AiFillStar size={24} className="md:block xl:hidden 2xl:hidden text-[#EEA024]"/>
                            <AiFillStar size={24} className="md:block xl:hidden 2xl:hidden text-[#EEA024]"/> 
                            <AiFillStar size={24} className="md:block xl:hidden 2xl:hidden text-[#EEA024]"/>
                        </div>
                        <div className="w-[85%] mt-4">   
                            <text className="md:text-[20px] xl:text-[12px] 2xl:text-[12px]">
                                Jalan Dato' Abdullah Tahir,Johor Bahru City Center, Johor Bahru, Johor, Malaysia, 83000
                            </text>
                        </div>
                        <div className="mt-6"> 
                            <text className="text-[#5392F9] md:text-[18px] xl:text-[11px] 2xl:text-[11px] font-medium">
                                What's Nearby
                            </text>
                        </div>
                    </div>  
                </div>
                {/** Deals countdown */}
                <div className="flex md:p-5 xl:p-4 2xl:p-4  items-center border border-0.5 gap-24 col-span-2 row-span-1 border-[#EEE9E9] shadow shadow-slate-50">
                    {/**to add timer function <p className="place-items-end">timerrr</p>*/}
                    <text className="md:text-[20px] xl:text-[14px] 2xl:text-[14px]">
                        We're holding your price!
                    </text> 
                </div>
                {/*Information form */}
                <div className="border border-0.5 col-span-2 p-4  row-span-22 border-[#EEE9E9] shadow shadow-slate-50">
                    <text className="font-bold my-4 md:text-[28px] xl:text-[12px] 2xl:text-[12px]">
                        Let us know who you are
                    </text>
                    {/**Fullname */}
                    <div className="w-[90%] justify-start gap-2 mt-8">
                        <text className="md:text-[22px] xl:text-[12px] 2xl:text-[12px] flex font-[505]">Full name<p className="text-red-600">*</p></text>
                        <input className="w-full flex h-fit p-2 text-slate-700 border-0 border-b-[1px] border-dark-grey placeholder-gray-400 shadow shadow-slate-200 md:text-[22px] xl:text-[12px] 2xl:text-[12px]" placeholder="John Smith"/>
                    </div>
                    {/**Email */}
                    <div className="w-[90%] justify-start gap-2 mt-8">
                        <text className="md:text-[22px] xl:text-[12px] 2xl:text-[12px] flex font-[505]">Email<p className="text-red-600">*</p></text>
                        <input className="w-full h-fit p-2 text-slate-700 border-0 border-b-[1px] border-dark-grey placeholder-gray-400 shadow shadow-slate-200 md:text-[22px] xl:text-[12px] 2xl:text-[12px]" placeholder="abc123@gmail.com"/>
                    </div>
                    {/**re enter email */}
                    <div className="w-[90%] justify-start gap-2 mt-8">
                        <text className="md:text-[22px] xl:text-[12px] 2xl:text-[12px] flex font-[505]">Re-enter email<p className="text-red-600">*</p></text>
                        <input className="w-full h-fit p-2 text-slate-700 border-0 border-b-[1px] border-slate-300 placeholder-gray-400 shadow shadow-slate-200 md:text-[22px] xl:text-[12px] 2xl:text-[12px]" placeholder="abc123@gmail.com"/>
                    </div>
                    <div className="flex w-[90%] justify-center gap-4 mt-6 ">
                        {/**Phone number */}
                        <div className="w-[50%] justify-start gap-2 mt-4">
                            <text className="md:text-[22px] xl:text-[12px] 2xl:text-[12px] flex font-[505]">Phone number<p className="text-red-600">*</p></text>
                            <input className="w-full h-fit p-2 text-slate-700 border-0 border-b-[1px] border-slate-300 placeholder-gray-400 shadow shadow-slate-200 md:text-[22px] xl:text-[12px] 2xl:text-[12px]" placeholder="abc123@gmail.com"/>
                        </div>
                        {/**Country */}
                        <div className="w-[50%] justify-start gap-2 mt-4">
                            <text className="md:text-[22px] xl:text-[12px] 2xl:text-[12px] flex font-[505]">Country/region of residence<p className="text-red-600">*</p></text>
                            <input className="w-full h-fit p-2 text-slate-700 border-0 border-b-[1px] border-slate-300 placeholder-gray-400 shadow shadow-slate-200 md:text-[22px] xl:text-[12px] 2xl:text-[12px]" placeholder="abc123@gmail.com"/>
                        </div>
                    </div>
                    {/**Checking */}
                    <div className="flex-row w-[90%] mt-8"> 
                        <div class="flex items-center w-full mb-4 gap-2">
                            <input id="default-checkbox" type="checkbox" value="" class="md:w-[30px] xl:w-3.5 2xl:w-3.5 md:h-[30px] xl:h-3.5 2xl:h-3.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-checkbox" class="ml-4 font-montserrat ms-2 md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-medium text-gray-900 dark:text-gray-300">I can confirm that all guests are nationals or permanent residents of Malaysia and qualify for Malaysian tourism tax exemption </label>
                        </div>
                        <div class="flex items-center w-full mb-4 gap-2">
                            <input id="default-checkbox" type="checkbox" value="" class="md:w-[30px] xl:w-3.5 2xl:w-3.5 md:h-[30px] xl:h-3.5 2xl:h-3.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-checkbox" class="ml-4 font-montserrat ms-2 md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-medium text-gray-900 dark:text-gray-300">Make this booking for someone else </label>
                        </div>
                    </div>
                    {/**What you need */}
                    
                    <div className="grid grid-flow-row auto-rows-auto justify-start gap-2 mt-10 w-full">
                        <text className="font-bold md:text-[28px] xl:text-[12px] 2xl:text-[12px]">Let us know what you need</text>
                        <text className="font-medium md:text-[22px] xl:text-[12px] 2xl:text-[12px]">Requests are subject to availability. We'll send yours right after you book.</text>

                        {/**smoking */}
                        <text className="font-medium md:text-[22px] xl:text-[12px] 2xl:text-[12px] mt-4">Smoking Preference</text>
                        <div className="flex w-full gap-14">
                            <div class="flex items-center mb-4">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="md:w-[30px] xl:w-3.5 2xl:w-3.5 md:h-[30px] xl:h-3.5 2xl:h-3.5 text-blue-600 bg-gray-100 border-gray-300 mx-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-radio-1" class="ml-4 ms-2 md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-medium text-gray-900 dark:text-gray-300">Non-smoking</label>
                            </div>
                            <div class="flex items-center mb-4">
                                <input id="default-radio-2" type="radio" value="" name="default-radio" class="md:w-[30px] xl:w-3.5 2xl:w-3.5 md:h-[30px] xl:h-3.5 2xl:h-3.5 text-blue-600 bg-gray-100 border-gray-300 mx-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-radio-2" class="ml-4 ms-2 md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-medium text-gray-900 dark:text-gray-300">Smoking</label>
                            </div>
                        </div>
                        {/**Bed configuration */}
                        <text className="font-medium md:text-[22px] xl:text-[12px] 2xl:text-[12px] mt-4">Bed Preference</text>
                        <div className="flex w-full gap-8">
                            <div class="flex items-center mb-4">
                                <input id="default-radio-1" type="radio" value="" name="default-radio1" class="md:w-[30px] xl:w-3.5 2xl:w-3.5 md:h-[30px] xl:h-3.5 2xl:h-3.5 text-blue-600 bg-gray-100 border-gray-300 mx-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-radio-1" class="ml-4 ms-2 md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-medium text-gray-900 dark:text-gray-300">I'd like a large bed</label>
                            </div>
                            <div class="flex items-center mb-4">

                                <input id="default-radio-2" type="radio" value="" name="default-radio1" class="md:w-[30px] xl:w-3.5 2xl:w-3.5 md:h-[30px] xl:h-3.5 2xl:h-3.5 text-blue-600 bg-gray-100 border-gray-300 mx-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-radio-2" class="ml-4 ms-2 md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-medium text-gray-900 dark:text-gray-300">I'd like twin beds</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Booking Details */}
                <div className="flex border border-0.5 md:col-span-2 xl:col-span-1 2xl:col-span-1 row-span-1 border-[#EEE9E9] md:p-5 xl:p-0 2xl:p-0 md:py-0 xl:py-4 2xl:py-4 md:justify-start xl:justify-center 2xl:justify-center shadow shadow-slate-50">
                    <div className=" grid grid-flow-row auto-rows-auto w-[90%] h-fit">
                        <div className="grid grid-cols-2 flex justify-start w-full gap-40">
                            {/**Date and number of days */}
                            <div className="flex  h-fit items-center ">
                                <text className="flex font-semibold md:text-[22px] xl:text-[12px] 2xl:text-[12px]">11 Nov 2023 - 14 Nov 2023</text>
                            </div>
                            <div className="flex h-fit items-center">
                                <text className="flex font-semibold md:text-[22px] xl:text-[12px] 2xl:text-[12px]">3 Nights</text>
                            </div>
                        </div>
                        {/**bed type */}
                        <div className="grid grid-cols-2 flex justify-start w-full gap-52">
                            <text className="flex font-medium md:text-[22px] xl:text-[12px] 2xl:text-[12px]">1 x Standard Twin</text>
                            <text className="flex font-medium md:text-[22px] xl:text-[12px] 2xl:text-[12px] underline text-[#5392F9] ml-2">Change</text>
                        </div>
                        {/**Rating */}
                        <div className="grid grid-cols-2 flex justify-start w-full gap-4">
                            <div className="flex items-end pt-[30px]">
                                <div className="px-2 py-1 bg-[#5392F9] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]">
                                    <text className="font-[505] md:text-[24px] xl:text-[14px] 2xl:text-[14px] text-[#FFFFFF]">
                                        4.3
                                    </text>
                                    <text className="font-medium md:text-[22px] xl:text-[12px] 2xl:text-[12px] text-[#FFFFFF] ml-1">
                                        / 5
                                    </text>
                                </div>
                                <text className="flex md:text-[20px] xl:text-[11px] 2xl:text-[11px] ml-2">
                                    from 1,293
                                    <div className="md:text-[20px] xl:text-[11px] 2xl:text-[11px] ml-1">
                                        Reviews
                                    </div>
                                </text>
                            </div>
                        </div>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <div className="grid grid-cols-2 flex justify-start w-full gap-4">
                            <div className="md:w-[250px] xl:w-[150px] 2xl:w-[150px]">
                                <Img
                                    src="https://pix8.agoda.net/hotelImages/4861656/-1/db07c2744c9aa9deb0f7a144aa3c1e44.png?ca=9&ce=1&s=1024x768"
                                    className="w-full md:h-[250px] xl:h-[160px] 2xl:h-[160px] object-cover border border-[0.5px] shadow-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                {/**number of room & pax */}
                                <div className="justify-start flex items-center gap-2">
                                    <VscPerson size={26} className="md:hidden xl:block 2xl:block" />
                                    <VscPerson size={36} className="md:block xl:hidden 2xl:hidden"/>
                                    <text className="flex md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-normal">1 room, 2 adults, 2 children (ages: 8, and 8)</text>
                                </div>
                                {/**max pax */}
                                <div className="justify-start flex items-center gap-2">
                                    <MdOutlinePeopleAlt size={20} className="md:hidden xl:block 2xl:block"/>
                                    <MdOutlinePeopleAlt size={36} className="md:block xl:hidden 2xl:hidden"/>
                                    <text className="flex md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-normal">Max: 2 adults, 2 children (0-11years)</text>
                                </div>
                                <div className="justify-start flex items-center gap-2">
                                    <MdOutlineDone size={20} className="md:hidden xl:block 2xl:block"/>
                                    <MdOutlineDone size={36} className="md:block xl:hidden 2xl:hidden"/>
                                    <text className="flex md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-normal">Parking</text>
                                </div>
                                <div className="justify-start flex items-center gap-2">
                                    <MdOutlineDone size={20} className="md:hidden xl:block 2xl:block"/>
                                    <MdOutlineDone size={36} className="md:block xl:hidden 2xl:hidden"/>
                                    <text className="flex md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-normal">Coffee & Tea</text>
                                </div>
                                <div className="justify-start flex items-center gap-2">
                                    <MdOutlineDone size={20} className="md:hidden xl:block 2xl:block"/>
                                    <MdOutlineDone size={36} className="md:block xl:hidden 2xl:hidden"/>
                                    <text className="flex md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-normal">Free Wi-fi</text>
                                </div>
                                <div className="justify-start flex items-center gap-2">
                                    <MdOutlineDone size={20} className="md:hidden xl:block 2xl:block"/>
                                    <MdOutlineDone size={36} className="md:block xl:hidden 2xl:hidden" />
                                    <text className="flex md:text-[22px] xl:text-[12px] 2xl:text-[12px] font-normal">Drinking water</text>
                                </div>
                            </div> 
                        </div>
                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        {/**room price */}
                        <div className="grid grid-cols-2 flex justify-between w-full">
                            <text className="flex font-medium md:text-[22px] xl:text-[12px] 2xl:text-[12px]">Room price (1 room x 3 nights)</text>
                            <text className="flex font-medium md:text-[22px] xl:text-[12px] 2xl:text-[12px]">$ 135</text>
                        </div>
                        {/**booking fee */}
                        <div className="grid grid-cols-2 flex justify-between w-full my-1">
                            <text className="flex font-medium md:text-[22px] xl:text-[12px] 2xl:text-[12px]">Booking fees</text>
                            <text className="flex font-medium md:text-[22px] xl:text-[12px] 2xl:text-[12px] text-[#5392F9] ml-1">FREE</text>
                        </div>
                        {/**Total Price */}
                        <div className="grid grid-cols-2 flex justify-between w-full mt-4 mb-1">
                            <text className="flex font-semibold md:text-[24px] xl:text-[14px] 2xl:text-[14px]">Price</text>
                            <text className="flex font-semibold md:text-[24px] xl:text-[14px] 2xl:text-[14px] ml-3">$ 135</text>
                        </div>
                        <text className="flex font-medium md:text-[20px] xl:text-[10px] 2xl:text-[10px]">Included in price: Tax 6%, service charge 10%</text>
                        <text className="flex font-medium md:text-[22px] xl:text-[12px] 2xl:text-[12px] my-3">Your currency selection affect price charged or displayed to you under these terms</text>

                    
                    </div>
                </div>
                
            </div>
            </div>
            
            </div>
            <div className="flex border p-4 border-0.5 md:w-[85%] xl:w-[56.5%] 2xl:w-[56.5%] md:ml-[75px] xl:ml-28 2xl:ml-28 border-[#EEE9E9] shadow shadow-slate-50">
                <div className="w-full justify-center items-center">
                    <text className="md:text-[22px] xl:text-[12px] 2xl:text-[12px]">By proceeding with this booking, I agree to the <text className="text-[#5392F9] underline">Terms of Use</text> and <text className="text-[#5392F9] underline">Privacy and Policy</text></text>
                    <button 
                        className="btn md:text-[26px] xl:text-[14px] 2xl:text-[14px]"
                        onClick={() =>{
                            currentStep === steps.length 
                            ? setComplete(true) 
                            : setCurrentStep((prev) => prev + 1);
                            
                        }}
                    >
                        {currentStep === steps.length ? "Finish" : "Next"} 
                    </button>
                </div>
            </div>  

            </div>
            <Footerepic></Footerepic>
        </>
    )
}

export default CustomerInfo;