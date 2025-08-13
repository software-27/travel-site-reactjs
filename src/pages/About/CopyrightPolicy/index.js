import React, { useState } from 'react'
import HeaderOTA from 'components/Header/HeaderOTA/index';
import LoginPage from 'components/Login/index';
import SignupPage from 'components/SignUp/index';
import { useAuth } from 'AuthContext';
import Footerepic from 'components/Footer/Footerepic/index';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";


const CopyrightPolicy = () => {
    const [isLoading, setIsLoading] = useState(false);
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

    return (

        <div className='flex flex-col font-montserrat mx-auto w-full h-auto'>
            <div className='fixed w-full' style={{ zIndex: 2 }}>
                <HeaderOTA openPopup1={openPopup1} className="fixed invisible lg:visible" />
                <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
                <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
                <HeaderOTAMobileEpic openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
            </div>

            <div className='xs:px-[50px] lg:px-[200px] xs:pt-[180px] lg:pt-[92px]' style={{ zIndex: 1 }}>
                <span className='justify-left'>
                    <img src='images/LogoEPICTRAVEL1.png'></img>
                </span>
                <h2 className='lg:text-[24px] xs:text-[28px] leading-none tracking-tight pt-8'>
                    Copyright Policy
                </h2>
                <span className='italic lg:text-[15px] xs:text-[20px]'>Last updated: October 5, 2023 </span>
                <div className="pt-[20px]">
                    <div className='space-y-8 text-justify text-black lg:text-[14px] xs:text-[22px]'>
                        <div>
                            <section id='1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>1. Introduction </h4>
                                <p>Welcome to Epic Travel ("we", "our", "us"). We respect the intellectual property rights of
                                    others and expect our users to do the same. This Copyright Policy is designed to help you
                                    understand how we handle copyright issues, including claims of copyright infringement, on
                                    the Epic Travel platform.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>2. Copyright Ownership </h4>
                                <p>All content available on the Epic Travel website and mobile applications, including but not
                                    limited to text, images, videos, graphics, and user-generated content, is protected by
                                    copyright law. Unless explicitly stated otherwise, all content on our platform is the property
                                    of Epic Travel or its content creators and is protected by copyright laws and international
                                    treaties.   </p>
                            </section>
                        </div>
                        <div>
                            <section id='3'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>3. Reporting Copyright Infringements  </h4>
                                <p>If you believe that your copyrighted work has been used on the Epic Travel platform in a
                                    way that constitutes copyright infringement, please provide our designated Copyright Agent
                                    with the following information:  </p>
                                <div className='mt-4 ml-10 space-y-2'>
                                    <li> A description of the copyrighted work you believe has been infringed.    </li>
                                    <li> A description of the material that you claim is infringing and needs to be removed or
                                        access to it disabled, including the URL where it is located.   </li>
                                    <li> Your contact information, including your name, address, telephone number, and email
                                        address.    </li>
                                    <li> A statement that you have a good faith belief that the use of the copyrighted material
                                        is not authorized by the copyright owner, its agent, or the law.    </li>
                                    <li> A statement that the information in your notice is accurate and that you are the
                                        copyright owner or authorized to act on the copyright owner's behalf.   </li>
                                </div>
                                <p className='mt-5'>Please note that we may share your infringement notice and your contact information
                                    with the alleged infringing party.   </p>
                            </section>
                        </div>
                        <div>
                            <section id='4'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>4. Counter-Notification  </h4>
                                <p>If you believe that your material that was removed (or to which access was disabled) is not
                                    infringing, or that you have the authorization from the copyright owner, the copyright
                                    owner's agent, or pursuant to the law, to post and use the content in your material, you
                                    may send a counter-notification to our Copyright Agent containing the following information:  </p>
                                <div className='mt-4 ml-10 space-y-2'>
                                    <li> Your physical or electronic signature.     </li>
                                    <li> Identification of the content that has been removed or to which access has been
                                        disabled and the location at which the content appeared before it was removed or disabled.    </li>
                                    <li> A statement that you have a good faith belief that the content was removed or
                                        disabled because of mistake or a misidentification of the content.     </li>
                                    <li> Your name, address, telephone number, and email address.     </li>
                                    <li> A statement that you consent to the jurisdiction of the federal court in the Federal
                                        Territory of Labuan and a statement that you will accept service of process from the
                                        person who provided notification of the alleged infringement.    </li>
                                </div>
                            </section>
                        </div>
                        <div>
                            <section id='5'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>5. Repeat Infringer Policy  </h4>
                                <p>Epic Travel reserves the right, in its sole discretion, to terminate the accounts of users who are
                                    found to be repeat infringers.  </p>
                                <div className='space-y-2 mt-5'>
                                    <p>Epic Ventures Ltd</p>
                                    <p>Unit 2-08, Level 2, Labuan Times Square,</p>
                                    <p>Jalan Merdeka, 87000, F.T. Labuan, Malaysia</p>
                                    <p>Email: <a href="mailto:dloh@epictravel.ai" className="text-blue-600">dloh@epictravel.ai</a></p>
                                </div>
                                <p className='mt-5'>Please note that this Copyright Policy may be updated or modified from time to time, and it 
                                    is your responsibility to review this policy periodically for changes.   </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footerepic />
        </div>
    )
}

export default CopyrightPolicy;