import React, { useState } from 'react'
import HeaderOTA from 'components/Header/HeaderOTA/index';
import LoginPage from 'components/Login/index';
import SignupPage from 'components/SignUp/index';
import { useAuth } from 'AuthContext';
import Footerepic from 'components/Footer/Footerepic/index';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";

const PrivacyPolicy = () => {
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
                    Privacy Policy
                </h2>
                <span className='italic lg:text-[15px] xs:text-[20px]'>Last updated: October 5, 2023 </span>
                <div className="table-of-contents pt-5">
                    {/* <h3>Table of Contents</h3> */}
                    <div className='space-y-2 text-black lg:text-[14px] xs:text-[22px]'>
                        <div>
                            <a href='#1'>1. Scope</a>
                        </div>
                        <div>
                            <a href='#2'>2. Personal Information We Collect</a>
                        </div>
                        <div className='ml-[15px]'>
                            <div>
                                <a href='#2.1'>2.1 Information You Provide to Us Directly</a>
                            </div>
                            <div>
                                <a href='#2.2'>2.2 Information Collected Automatically</a>
                            </div>
                            <div>
                                <a href='#2.3'>2.3 Information Collected from Other Sources</a>
                            </div>
                        </div>
                        <div>
                            <a href='#3'>3. How We Use Your Information</a>
                        </div>
                        <div className='ml-[15px]'>
                            <div>
                                <a href='#3.1'>3.1 Provide Our Services</a>
                            </div>
                            <div>
                                <a href='#3.2'>3.2 Administrative Purposes</a>
                            </div>
                            <div>
                                <a href='#3.3'>3.3 Marketing and Advertising of Our Products and Services</a>
                            </div>
                            <div>
                                <a href='#3.4'>3.4 Other Purpose</a>
                            </div>
                        </div>
                        <div>
                            <a href='#4'>4. How We Disclose Your Information</a>
                        </div>
                        <div className='ml-[15px]'>
                            <div>
                                <a href='#4.1'>4.1 Disclosures to Provide Our Services</a>
                            </div>
                            <div>
                                <a href='#4.2'>4.2 Disclosures to Protect Us and Others</a>
                            </div>
                            <div>
                                <a href='#4.3'>4.3 Disclosure in Event of Mergers, Sale, or Other Asset Transfers</a>
                            </div>
                        </div>
                        <div>
                            <a href='#5'>5. Your Privacy Choices and Rights</a>
                        </div>
                        <div className='ml-[15px]'>
                            <div>
                                <a href='#5.1'>5.1 Access and Update</a>
                            </div>
                            <div>
                                <a href='#5.2'>5.2 Opting Out</a>
                            </div>
                            <div>
                                <a href='#5.3'>5.3 Deletion</a>
                            </div>
                        </div>
                        <div>
                            <a href='#6'>6. Security of Your Information</a>
                        </div>
                        <div>
                            <a href='#7'>7. International Data Transfers</a>
                        </div>
                        <div>
                            <a href='#8'>8. Retention of Personal Information</a>
                        </div>
                        <div>
                            <a href='#9'>9. Children’s Information</a>
                        </div>
                        <div>
                            <a href='#10'>10. Other Provisions</a>
                        </div>
                        <div>
                            <a href='#11'>11. Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="pt-[20px]">
                    <div className='space-y-8 text-justify text-black lg:text-[14px] xs:text-[22px]'>
                        <div>
                            <section id='1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>1. Scope</h4>
                                <p>This Privacy Policy applies to all aspects of your interaction with Epic Travel, encompassing our website, mobile applications, and related services (collectively referred to as the "Services"). By using our Services, you agree to the practices described in this policy. </p>
                            </section>
                        </div>
                        <div>
                            <section id='2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>2. Personal Information We Collect</h4>
                                <p>At Epic Travel, we collect various types of information to offer and enhance our Services:  </p>
                            </section>
                        </div>
                        <div>
                            <section id='2.1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>2.1 Information You Provide to Us Directly </h4>
                                <p>When you interact with Epic Travel, you may provide us with personal information. This includes details such as your name, email address, date of birth, and account credentials when you create an account. Additionally, you may voluntarily submit information when you engage with our support team or fill out surveys, feedback forms, or user profiles. </p>
                            </section>
                        </div>
                        <div>
                            <section id='2.2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>2.2 Information Collected Automatically </h4>
                                <p>To improve the functionality and user experience of our Services, we automatically collect certain data. This may include information about your device, such as its type, operating system, and unique identifiers. We also gather data related to your usage patterns, interactions with content, and preferences while using our platform. </p>
                            </section>
                        </div>
                        <div>
                            <section id='2.3'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>2.3 Information Collected from Other Sources </h4>
                                <p>In some cases, we may obtain information about you from other sources, such as third-party services or partners. This information may include demographic data or information to enhance your experience on Epic Travel, such as integrating your account with social media platforms. </p>
                            </section>
                        </div>
                        <div>
                            <section id='3'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>3. How We Use Your Information </h4>
                                <p>We utilize the information we collect for a variety of purposes: </p>
                            </section>
                        </div>
                        <div>
                            <section id='3.1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>3.1 Provide Our Services </h4>
                                <p>Your information is essential for us to deliver our Services effectively. We use it to personalize your experience, suggest travel content, and facilitate communication within our platform. </p>
                            </section>
                        </div>
                        <div>
                            <section id='3.2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>3.2 Administrative Purposes </h4>
                                <p>We may use your information for administrative purposes, such as verifying accounts, managing user requests, and conducting internal data analysis to enhance our Services. </p>
                            </section>
                        </div>
                        <div>
                            <section id='3.3'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>3.3 Marketing and Advertising of Our Products and Services </h4>
                                <p>With your consent, we may use your contact information to send you promotional messages, newsletters, and advertisements related to Epic Travel and its partners. You have the option to opt-out of such communications. </p>
                            </section>
                        </div>
                        <div>
                            <section id='3.4'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>3.4 Other Purposes </h4>
                                <p>We may use your information for other purposes not explicitly mentioned in this policy, but always within the bounds of applicable laws and regdivations. </p>
                            </section>
                        </div>
                        <div>
                            <section id='4'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>4. How We Disclose Your Information </h4>
                                <p>Epic Travel values your privacy and only shares your information when necessary: </p>
                            </section>
                        </div>
                        <div>
                            <section id='4.1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>4.1 Disclosures to Provide Our Services </h4>
                                <p>To offer you the best possible experience, we collaborate with trusted service providers who may require access to your information. However, these providers are contractually bound to maintain the confidentiality and security of your data. </p>
                            </section>
                        </div>
                        <div>
                            <section id='4.2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>4.2 Disclosures to Protect Us and Others </h4>
                                <p>We may disclose your information when required to protect the rights, privacy, safety, or property of Epic Travel, our users, or the public. This includes taking actions to prevent fraud, violations of our Terms of Service, or imminent harm. </p>
                            </section>
                        </div>
                        <div>
                            <section id='4.3'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>4.3 Disclosure in Event of Mergers, Sale, or Other Asset Transfers </h4>
                                <p>In the event of a merger, acquisition, sale, or other business transaction, we may share your information with involved parties. We will notify you of such transactions and any changes to the way your information is handled. </p>
                            </section>
                        </div>
                        <div>
                            <section id='5'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>5. Your Privacy Choices and Rights </h4>
                                <p>We respect your choices and rights regarding your data: </p>
                            </section>
                        </div>
                        <div>
                            <section id='5.1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>5.1 Access and Update </h4>
                                <p>You have the right to access and update your personal information through your account settings. Please ensure that your information is accurate and current. </p>
                            </section>
                        </div>
                        <div>
                            <section id='5.2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>5.2 Opting Out </h4>
                                <p>You can choose to opt-out of certain data collection and processing. For instance, you can unsubscribe from our promotional emails or disable location services on your device. Please note that some features of the Services may be affected by these choices. </p>
                            </section>
                        </div>
                        <div>
                            <section id='5.3'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>5.3 Deletion </h4>
                                <p>If you decide to stop using Epic Travel, you can request the deletion of your account. Contact us at <a href="mailto:dloh@epictravel.ai" className='text-[#166fd4]'> dloh@epictravel.ai</a>, and we will assist you in this process. Be aware that we may retain certain information for legal and business purposes, as outlined in our Data Retention section. </p>
                            </section>
                        </div>
                        <div>
                            <section id='6'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>6. Security of Your Information </h4>
                                <p>Epic Travel prioritizes data security and has implemented rigorous measures to protect your information. However, it's essential to recognize that no online transmission or storage method is entirely fool-proof. While we do our utmost to safeguard your data, we cannot guarantee its absolute security. </p>
                            </section>
                        </div>
                        <div>
                            <section id='7'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>7. International Data Transfers </h4>
                                <p>Epic Travel may operate globally, which may involve transferring your information internationally. We ensure that such transfers comply with applicable data protection laws to maintain the security and privacy of your information. </p>
                            </section>
                        </div>
                        <div>
                            <section id='8'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>8. Retention of Personal Information </h4>
                                <p>We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy or as required by applicable laws. If you have any questions about specific retention periods, please contact us at <a href="mailto:dloh@epictravel.ai" className='text-[#166fd4]'> dloh@epictravel.ai</a>.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='9'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>9. Children’s Information </h4>
                                <p>Epic Travel does not knowingly collect personal information from children under the age of 13. If you believe we have inadvertently collected such information, please contact us, and we will take appropriate steps to delete it. </p>
                            </section>
                        </div>
                        <div>
                            <section id='10'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>10. Other Provisions </h4>
                                <p>This section may include additional details about specific practices or legal requirements that apply to Epic Travel. Please read this section carefully for comprehensive information about our data handling. </p>
                            </section>
                        </div>
                        <div>
                            <section id='11'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>11. Contact Us </h4>
                                <p>If you have any questions, concerns, or inquiries about our Privacy Policy or data practices, please ontact us at <a href="mailto:dloh@epictravel.ai" className='text-[#166fd4]'> dloh@epictravel.ai</a>. We are committed to addressing your concerns and ensuring that your experience with Epic Travel is both enjoyable and secure. </p>
                                <p>Your privacy is of utmost importance to us, and we are dedicated to being transparent about our data practices while continuously working to enhance the privacy and security of your information. Thank you for choosing Epic Travel. </p>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
            <Footerepic />
        </div>
    )
}

export default PrivacyPolicy;