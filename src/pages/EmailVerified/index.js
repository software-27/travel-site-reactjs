import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgotPassword from 'components/ForgotPass/index';
import LoginPage from 'components/Login/index';
import SignupPage from 'components/SignUp/index';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import HeaderOTA from 'components/Header/HeaderOTA/index';
import { FaCheckSquare } from "react-icons/fa";
import { CgCloseR } from "react-icons/cg";
import axios from "../../../node_modules/axios/index";

const EmailVerified = () => {
    const [isPopup1Open, setIsPopup1Open] = useState(false);
    const [isPopup2Open, setIsPopup2Open] = useState(false);
    const [isPopup3Open, setIsPopup3Open] = useState(false);
    const [tokenValid, setTokenValid] = useState(false);
    const [tokenValidNot, setTokenValidNot] = useState(false);


    const navigate = useNavigate();
    function handleNavigate() {
        navigate("/");
    }

    const openPopup1 = () => {
        setIsPopup1Open(true);
        setIsPopup2Open(false); // Close Popup2 when Popup1 is opened
    };

    const openPopup2 = () => {
        setIsPopup2Open(true);
        setIsPopup1Open(false); // Close Popup1 when Popup2 is opened
    };
    const openPopup3 = () => {
        setIsPopup3Open(true);
        setIsPopup1Open(false); // Close Popup1 when Popup3 is opened
    };
    const openPopup4 = () => {
        // setIsPopup4Open(true);
        setIsPopup2Open(false);
    }

    const closePopup1 = () => {
        setIsPopup1Open(false);
    };

    const closePopup2 = () => {
        setIsPopup2Open(false);
    };
    const closePopup3 = () => {
        setIsPopup3Open(false);
    };
    const closePopup4 = () => {
        // setIsPopup4Open(false);
    };

    const success = () => {
        setTokenValid(true);
    };
    const notsuccess = () => {
        setTokenValid(true);
    };

    useEffect(() => {
        // Get the current URL
        const url = new URL(window.location.href);

        // Extract the token from the URL
        const verificationToken = url.searchParams.get("verificationToken");
        console.log("Token:", verificationToken);
        if (verificationToken) {
            async function postActivation() {
                try {
                    const response = await axios.post(
                        `https://halaltravel.ai/ht/api/auth/activateAccount/${verificationToken}`,
                        {
                        }
                    );

                    if (response.status === 200) {
                        // Token is valid
                        setTokenValid(true);
                        
                        //success();
                        console.log("true");
                        // alert(
                        //     "successful"
                        // );
                        // navigate('/tour-marketplace');
                    } else {

                    }

                } catch (error) {
                    // setTokenValid(false);
                    setTokenValidNot(true);
                    // Open the login popup
                    setIsPopup3Open(true);
                    // Show the invalid token message
                    //setShowInvalidTokenMessage(true);
                    // alert(
                    //     "Reset password token is not valid or has expired. Please request a new token."
                    // );
                }
            }

            postActivation();
        }
    }, []);

    useEffect(() => {

    }, [tokenValid]);

    console.log("tokenvalis", tokenValid)

    return (
        <div>
            <div className="fixed w-full" style={{ zIndex: 2 }}>
                <HeaderOTA
                    openPopup1={openPopup1}
                    className="fixed invisible lg:visible"
                />
                <LoginPage
                    isOpen={isPopup1Open}
                    openPopup2={openPopup2}
                    openPopup3={openPopup3}
                    closePopup1={closePopup1}
                />
                <SignupPage
                    isOpen={isPopup2Open}
                    closePopup2={closePopup2}
                    openPopup1={openPopup1}
                />
                {/* <ForgotPassword isOpen={isPopup3Open} closePopup3={closePopup3} /> */}
                <HeaderOTAMobileEpic openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
            </div>

            {tokenValid && (
                <>
                    <div className="flex justify-center items-center h-screen">
                        <div className="grid items-center">
                            <section>
                                <div className="card">
                                    <div className="card-header flex flex-col justify-center items-center">
                                        <FaCheckSquare size={30} fill="#87B87F" />
                                        <h2>Your Email has been successfully verified</h2>
                                    </div>
                                    <div className="card-footer mt-4">
                                        <button
                                            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-2.5 px-3 w-full"
                                            onClick={handleNavigate}>
                                            Please Login
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </>
            )

            }

            {tokenValidNot && (
                <>

                    <div className="flex justify-center items-center h-screen">
                        <div className="grid items-center">
                            <section>
                                <div className="card">
                                    <div className="card-header flex flex-col justify-center items-center">
                                        <CgCloseR size={30} fill="#880808" />
                                        <h2>Your Email not successfully verified</h2>
                                        <p>Reset password token is not valid or has expired. Please request a new token.</p>
                                    </div>
                                    <div className="card-footer mt-4">
                                        <button
                                            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-2.5 px-3 w-full"
                                            onClick={handleNavigate}>
                                            Please Sign up again
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </>
            )
            }


        </div>
    )
}

export default EmailVerified