import React, { useState } from "react";
import HeaderOTA from 'components/Header/HeaderOTA/index';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import Footerepic from 'components/Footer/Footerepic/index';
import "../../../styles/stepper.css";
import { MdOutlineDone } from "react-icons/md";





const BookingConfirm = () => {

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
            <div className="relative justify-center items-center space-y-12 h-screen w-full">

            <HeaderOTA className="fixed invisible lg:visible" />
            <HeaderOTAMobileEpic className="visible fixed overflow-hidden lg:invisible lg:hidden" />

                <div className="flex w-full justify-center items-center">
                    {
                        steps?.map((step, i) => (
                            <div
                                key={i}
                                className={`step-item ${i < 2 ? "complete" : ""} ${i === steps.length - 1 ? "active" : ""}`}
                            >
                                <div className="step">
                                    {
                                        (i < 2) ? <MdOutlineDone size={22} /> : i + 1
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
                            <div className="h-[80px] flex items-center gap-2 pl-4 border border-0.5 col-span-3 row-span-2 border-t-8 border-t-green-600 border-[#EEE9E9] shadow shadow-slate-50">
                                <MdOutlineDone className="text-green-600" /> Your booking is confirmed
                            </div>

                            {/** Deals countdown */}
                            <div className="p-[60px] items-center justify-center text-center border border-0.5 col-span-3 border-[#EEE9E9] shadow shadow-slate-50 ">
                                <div className="flex flex-col items-center justify-center">
                                    <MdOutlineDone size={50} className="text-green-600" />
                                </div>
                                <div className='mt-6'>
                                    <p className='mb-2'>The confirmation letter will be sent to you on your email.</p>
                                    <p>
                                        <a href="mailto:youremail@mail.com" className="text-blue-600 text-[12px]">youremail@mail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footerepic className="bottom-0"></Footerepic>
        </>
    )
}

export default BookingConfirm;