import React, { useState } from 'react'
import HeaderOTA from 'components/Header/HeaderOTA/index';
import LoginPage from 'components/Login/index';
import SignupPage from 'components/SignUp/index';
import { useAuth } from 'AuthContext';
import Footerepic from 'components/Footer/Footerepic/index';
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";

const TermsService = () => {
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

            <div className='xs:p-[50px] lg:px-[200px] xs:pt-[180px] lg:pt-[92px]' style={{ zIndex: 1 }}>
                <span className='justify-left'>
                    <img src='images/LogoEPICTRAVEL1.png'></img>
                </span>
                <h2 className='lg:text-[24px] xs:text-[28px] leading-none tracking-tight pt-8'>
                    Terms and Service
                </h2>
                <p className='lg:text-[14px] xs:text-[22px] text-justify pt-5 text-black'>Please read these Terms of Service (the “<span className='font-bold'>Terms</span>”) and our Privacy Policy
                    (<a href="/privacy-policy" className='text-[#166fd4]'>https://epictravel.ai/privacy-policy</a>) (“<span className='font-bold'>Privacy Policy</span>”) carefully because they govern your
                    use of the website located at <a href="/" className='text-[#166fd4]'>https://www.epictravel.ai/</a> (the “<span className='font-bold'>Site</span>”) and corresponding
                    mobile applications (“<span className='font-bold'>App</span>”) where Epic Travel (“<span className='font-bold'>Epic Travel</span>”, “<span className='font-bold'>we</span>”, “<span className='font-bold'>our</span>”, or “<span className='font-bold'>us</span>”) provides
                    a travel content platform and related services. To make these Terms easier to read, the Site,
                    our services and App are collectively called the “<span className='font-bold'>Services</span>.”
                </p>
                <p className='lg:text-[14px] xs:text-[22px] text-justify font-bold pt-5 text-black'>IMPORTANT NOTICE REGARDING ARBITRATION FOR U.S. CUSTOMERS: WHEN YOU AGREE
                    TO THESE TERMS YOU ARE AGREEING (WITH LIMITED EXCEPTION) TO RESOLVE ANY
                    DISPUTE BETWEEN YOU AND EPIC TRAVEL THROUGH BINDING, INDIVIDUAL ARBITRATION
                    RATHER THAN IN COURT. PLEASE REVIEW CAREFULLY SECTION 18 “DISPUTE RESOLUTION”
                    BELOW FOR DETAILS REGARDING ARBITRATION.
                </p>
                <p className='italic lg:text-[15px] xs:text-[20px] mt-[5px]'>Last updated: October 5, 2023 </p>

                <div className="table-of-contents pt-5">
                    {/* <h3 className='text-black'>Table of Contents</h3> */}
                    <div className='space-y-2 text-black lg:text-[14px] xs:text-[22px]'>
                        <div>
                            <a href='#1'>1. Agreement to Terms</a>
                        </div>
                        <div>
                            <a href='#2'>2. Privacy Policy</a>
                        </div>
                        <div>
                            <a href='#3'>3. Changes to these Terms or the Services </a>
                        </div>
                        <div>
                            <a href='#4'>4. Our Services </a>
                        </div>
                        <div className='ml-[15px]'>
                            <div>
                                <a href='#4.1'>4.1 Overview </a>
                            </div>
                            <div>
                                <a href='#4.2'>4.2 Becoming a Seller </a>
                            </div>
                        </div>
                        <div>
                            <a href='#5'>5. How We Use Your Information</a>
                        </div>
                        <div>
                            <a href='#6'>6. Content Ownership, Responsibility, and Removal </a>
                        </div>
                        <div className='ml-[15px]'>
                            <div>
                                <a href='#6.1'>6.1. Posting Content </a>
                            </div>
                            <div>
                                <a href='#6.2'>6.2. Permissions to Your User Content </a>
                            </div>
                            <div>
                                <a href='#6.3'>6.3. Your Responsibility for User Content </a>
                            </div>
                            <div>
                                <a href='#6.4'>6.4. Removal of User Content </a>
                            </div>
                            <div>
                                <a href='#6.5'>6.5. Epic Travel's Intellectual Property </a>
                            </div>
                            <div>
                                <a href='#6.6'>6.6. Permission Granted by Epic Travel to Travel Content </a>
                            </div>
                        </div>
                        <div>
                            <a href='#7'>7. Payments </a>
                        </div>
                        <div>
                            <a href='#8'>8. Feedback  </a>
                        </div>
                        <div>
                            <a href='#9'>9. Rights and Terms for Apps  </a>
                        </div>
                        <div className='ml-[15px]'>
                            <div>
                                <a href='#9.1'>9.1. App License </a>
                            </div>
                            <div>
                                <a href='#9.2'>9.2. Additional Information: Apple App Store </a>
                            </div>
                        </div>
                        <div>
                            <a href='#10'>10. General Prohibitions and Epic Travel's Enforcement Rights</a>
                        </div>
                        <div>
                            <a href='#11'>11. Links to Third Party Websites or Resources  </a>
                        </div>
                        <div>
                            <a href='#12'>12. DMCA/Copyright Policy </a>
                        </div>
                        <div>
                            <a href='#13'>13. Termination </a>
                        </div>
                        <div>
                            <a href='#14'>14. Warranty Disclaimers  </a>
                        </div>
                        <div>
                            <a href='#15'>15. Indemnity </a>
                        </div>
                        <div>
                            <a href='#16'>16. Limitation of Liability </a>
                        </div>
                        <div>
                            <a href='#17'>17. Governing Law and Forum Choice  </a>
                        </div>
                        <div>
                            <a href='#18'>18. Dispute Resolution </a>
                        </div>
                        <div className='ml-[15px]'>
                            <div>
                                <a href='#18.1'>18.1. Informal Resolution </a>
                            </div>
                            <div>
                                <a href='#18.2'>18.2. Binding Arbitration </a>
                            </div>
                            <div>
                                <a href='#18.2.1'>18.2.1. Class Action Waiver </a>
                            </div>
                            <div>
                                <a href='#18.2.2'>18.2.2. Arbitration Administrator </a>
                            </div>
                            <div>
                                <a href='#18.2.3'>18.2.3. Arbitration Location and Procedure </a>
                            </div>
                            <div>
                                <a href='#18.2.4'>18.2.4. Costs of Arbitration </a>
                            </div>
                            <div>
                                <a href='#18.3'>18.3. Exception to Arbitration  </a>
                            </div>
                            <div>
                                <a href='#18.4'>18.4. Opt-Out  </a>
                            </div>
                            <div>
                                <a href='#18.5'>18.5. Governing Law  </a>
                            </div>
                            <div>
                                <a href='#18.6'>18.6. Severability  </a>
                            </div>
                        </div>
                        <div>
                            <a href='#19'>19. General Terms</a>
                        </div>
                        <div className='ml-[15px]'>
                            <div>
                                <a href='#19.1'>19.1. Entire Agreement  </a>
                            </div>
                            <div>
                                <a href='#19.2'>19.2. Severability  </a>
                            </div>
                            <div>
                                <a href='#19.3'>19.3. Waiver  </a>
                            </div>
                            <div>
                                <a href='#19.4'>19.4. Assignment  </a>
                            </div>
                            <div>
                                <a href='#19.5'>19.5. Relationship  </a>
                            </div>
                            <div>
                                <a href='#19.6'>19.6. Headings  </a>
                            </div>
                            <div>
                                <a href='#19.7'>19.7. Changes to the Terms  </a>
                            </div>
                            <div>
                                <a href='#19.8'>19.8. Contact Information </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="pt-[20px]">
                    <div className='space-y-8 text-justify text-black lg:text-[14px] xs:text-[22px]'>
                        <div>
                            <section id='1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>1. Agreement to Terms</h4>
                                <p>Through the utilization of our Services, you signify your acceptance and agreement to abide
                                    by these Terms. If you do not concur with these Terms, please refrain from using the
                                    Services. If you are accessing and employing the Services on behalf of an organization (like
                                    your employer) or another legal entity, you affirm and guarantee that you possess the
                                    authority to legally obligate that entity to adhere to these Terms. In such instances,
                                    references to "you" and ""your" pertain to that particular entity.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>2. Privacy Policy </h4>
                                <p>We kindly request you to examine our Privacy Policy, which additionally regulates your
                                    utilization of the Services. This document contains details about how we collect, employ,
                                    and distribute your information.   </p>
                            </section>
                        </div>
                        <div>
                            <section id='3'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>3. Changes to these Terms or the Services </h4>
                                <p>We reserve the right to periodically revise the Terms at our own discretion. In the event of
                                    such revisions, we will provide notification by posting the updated Terms on the Site, within
                                    the App, or through other communication methods. It's crucial for you to review the Terms
                                    whenever updates occur or when you utilize the Services. If you choose to continue using
                                    the Services after the updated Terms have been posted, it signifies your acceptance and
                                    agreement to the modifications. If you do not concur with these changes, you should cease
                                    using the Services. Given that our Services are continually evolving, we maintain the
                                    authority to alter or discontinue the entirety or specific portions of the Services at any time
                                    and without prior notice, at our sole discretion.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='4'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>4. Our Services  </h4>
                                {/* <p>To improve the functionality and user experience of our Services, we automatically collect certain data. This may include information about your device, such as its type, operating system, and unique identifiers. We also gather data related to your usage patterns, interactions with content, and preferences while using our platform. </p> */}
                            </section>
                        </div>
                        <div>
                            <section id='4.1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>4.1. Overview  </h4>
                                <p>Via our platform, we provide an online space for users to exchange and explore travel-
                                    related content and data, commonly referred to as "Travel Content." When you utilize our
                                    platform to generate and distribute Travel Content, you are identified as a "Content
                                    Creator" as per these Terms. Conversely, in the context of these Terms, a "Visitor" pertains
                                    to a user of our platform who engages with and, on occasion, acquires access to Travel
                                    Content that Content Creators make accessible. It's important to note that our role under
                                    these Terms primarily involves facilitating the accessibility of our platform, serving as an
                                    intermediary connecting Visitors and Content Creators.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='4.2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>4.2. Becoming a Seller  </h4>
                                <p>Periodically, Visitors may also be presented with the opportunity to procure access to
                                    specific premium Travel Content by remitting a fee as specified by Epic Travel or the
                                    Content Creator. We label this type of content as "Paid Content" in these Terms. Content
                                    Creators keen on offering Paid Content or the option to receive "tips" from Visitors must
                                    submit an application to Epic Travel to be recognized as a "Seller." Commence the
                                    application process by adhering to the instructions available on our platform. It's important
                                    to note that we hold the prerogative to accept or decline any Seller applications without any
                                    specific rationale. Should your application receive approval, and upon your acceptance of
                                    the stipulations articulated in the "Seller Addendum" provided to you in conjunction with
                                    the application procedure, you will attain the status of a Seller. This addendum
                                    encompasses provisions elucidating the payment mechanisms for Sellers in exchange for
                                    access to their Paid Content, along with other particulars pertinent to a Seller's provision of
                                    such content through our platform.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='5'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>5. Who May Use the Services?   </h4>
                                <p>You may access and use the Epic Travel Services provided you are at least 18 years of age
                                    and possess the legal capacity to enter into a binding agreement with Epic Travel and are
                                    not prohibited from using our Services by applicable laws. Some aspects of our Services,
                                    such as Content Creator or Seller functionalities, may necessitate the creation of an
                                    account. It is your responsibility to ensure the security of your account and maintain
                                    accurate account information. If you suspect any unauthorized use of your account, please
                                    promptly contact us at <a href="mailto:dloh@epictravel.ai" className='text-[#166fd4]'>dloh@epictravel.ai</a>.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='6'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>6. Content Ownership, Responsibility, and Removal  </h4>
                                {/* <p>We may use your information for administrative purposes, such as verifying accounts, managing user requests, and conducting internal data analysis to enhance our Services. </p> */}
                            </section>
                        </div>
                        <div>
                            <section id='6.1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>6.1. Posting Content  </h4>
                                <p>You may post content, including photos, comments, links, and other materials (collectively,
                                    “User Content”), that is subject to copyright and other intellectual property rights of
                                    yourself and third parties. You agree that any User Content that you post do not, and will
                                    not violate any law or infringe any rights of any third party, including without limitation any
                                    Intellectual Property Rights (as defined below), publicity rights, or rights of privacy.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='6.2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>6.2. Permissions to Your User Content  </h4>
                                <p>You grant Epic Travel a non-exclusive, transferable, sub-licensable, royalty-free, worldwide
                                    license to use, store, display, reproduce, save, modify, create derivative works, perform, and
                                    distribute your User Content on Epic Travel solely for the purposes of operating, developing,
                                    providing, and using the Epic Travel Services. Nothing in these Terms shall restrict other
                                    legal rights Epic Travel may have to User Content, for example under other licenses.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='6.3'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>6.3. Your Responsibility for User Content  </h4>
                                <p>By posting User Content, you agree to be solely responsible for the content and any harm
                                    resulting from that Content. You represent that you have all the necessary rights to post
                                    that Content and that you're not violating any law or rights by posting it.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='6.4'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>6.4. Removal of User Content  </h4>
                                <p>If you remove User Content from the Services, our general license to that Content will end
                                    after a reasonable time. However, you understand and accept that removed Content may
                                    persist in backup copies for a reasonable period (but will not be available to others).  </p>
                            </section>
                        </div>
                        <div>
                            <section id='6.5'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>6.5. Epic Travel's Intellectual Property  </h4>
                                <p>Epic Travel does not claim any ownership in any User Content that you post on or through
                                    the Services. Instead, when you post User Content on or through the Services, you grant
                                    Epic Travel a non-exclusive, royalty-free, perpetual, irrevocable, and fully sub-licensable
                                    right to use, reproduce, modify, adapt, publish, translate, create derivative works from,
                                    distribute, perform, and display such User Content throughout the world in any media. </p>
                            </section>
                        </div>
                        <div>
                            <section id='6.6'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>6.6. Permission Granted by Epic Travel to Travel Content  </h4>
                                <p>In connection with your use of the Services, Epic Travel may send you service
                                    announcements, administrative messages, and other information. You may opt out of some
                                    of those communications.   </p>
                            </section>
                        </div>
                        <div>
                            <section id='7'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>7. Payments  </h4>
                                <p>You understand that use of the Services may result in charges to you for the services or
                                    goods you receive (“Charges”). We will receive and/or enable your payment of the
                                    applicable Charges for services or goods obtained through your use of the Services. Charges
                                    will be inclusive of applicable taxes where required by law.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='8'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>8. Feedback  </h4>
                                <p>We welcome your comments, feedback, suggestions, and other communications regarding
                                    the Services (“Feedback”). If you provide any Feedback to us, you agree that we may use the
                                    Feedback for any purpose, including to improve the Services and develop new features and offerings.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='9'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>9. Rights and Terms for Apps </h4>
                                {/* <p>You can choose to opt-out of certain data collection and processing. For instance, you can unsubscribe from our promotional emails or disable location services on your device. Please note that some features of the Services may be affected by these choices. </p> */}
                            </section>
                        </div>
                        <div>
                            <section id='9.1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>9.1. App License  </h4>
                                <p>Subject to your compliance with these Terms, Epic Travel grants you a limited, non-
                                    exclusive, non-sublicensable, revocable, non-transferrable license to: (i) download and use
                                    the Apps on your personal device(s); and (ii) access and view any content made available in
                                    or through the Apps strictly in accordance with these Terms.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='9.2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>9.2. Additional Information: Apple App Store  </h4>
                                <p>You acknowledge and agree that these Terms are solely between you and Epic Travel, not
                                    Apple, and that Apple has no responsibility for the Apps or content thereof. Your use of the Apps
                                    must comply with the App Store Terms of Service. You acknowledge that Apple has no
                                    obligation whatsoever to furnish any maintenance and support services with respect to the Apps.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='10'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>10. General Prohibitions and Epic Travel's Enforcement Rights (Continued) </h4>
                                <p>You agree not to engage in any of the following prohibited activities:  </p>
                                <div className='mt-4 ml-10 space-y-2'>
                                    <li> <span className='font-bold'>Violating Law:</span> You may not use the Services for any purpose that is illegal or
                                        prohibited by these Terms. You are responsible for ensuring that your use of the Services complies with all applicable laws and regulations.   </li>
                                    <li> <span className='font-bold'>Fraud, Deception, or Misrepresentation:</span> You may not engage in fraudulent,
                                        deceptive, or misleading conduct while using the Services. This includes misrepresenting
                                        your identity, qualifications, or any information submitted to Epic Travel.  </li>
                                    <li> <span className='font-bold'>Harassment and Abuse:</span> You may not harass, abuse, threaten, or intimidate other
                                        users of the Services or any Epic Travel employees or agents.   </li>
                                    <li> <span className='font-bold'>Interference with the Services:</span> You may not interfere with or disrupt the Services,
                                        servers, or networks connected to the Services, or disobey any requirements, procedures,
                                        policies, or regulations of networks connected to the Services.   </li>
                                    <li> <span className='font-bold'>Unauthorized Access:</span> You may not access or use the Services in any way that is not
                                        expressly authorized by Epic Travel, including any attempt to probe, scan, or test the
                                        vulnerability of the Services or breach any security or authentication measures.  </li>
                                    <li> <span className='font-bold'>Reverse Engineering:</span> You may not engage in fraudulent,
                                        deceptive, or misleading conduct while using the Services. This includes misrepresenting
                                        your identity, qualifications, or any information submitted to Epic Travel.  </li>
                                    <li> <span className='font-bold'>Circumventing Protections:</span> You may not bypass, remove, deactivate, or impair any
                                        protection mechanisms, such as digital rights management, used with the Services.   </li>
                                    <li> <span className='font-bold'>Impersonation:</span> You may not impersonate any person or entity or falsely state or
                                        otherwise misrepresent your affiliation with a person or entity.  </li>
                                    <li> <span className='font-bold'>Selling or Reselling the Services:</span> You may not reproduce, duplicate, copy, sell, resell,
                                        or exploit any portion of the Services, use the Services, or access the Services without the
                                        express written permission of Epic Travel.   </li>
                                    <li> <span className='font-bold'>Violating Others' Rights:</span> You may not infringe upon the rights of others, including
                                        privacy, publicity, intellectual property, or other proprietary rights.   </li>
                                    <li> <span className='font-bold'>Illegal Content:</span> You may not post, upload, publish, submit, or transmit any content
                                        that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene,
                                        libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.   </li>
                                    <li> <span className='font-bold'>Unauthorized Use of Content:</span> You may not use the Services to distribute or use any
                                        content or materials in any manner that infringes any copyright, trademark, patent, trade
                                        secret, or other proprietary right of any party.  </li>
                                </div>
                                <p className='mt-5'>Epic Travel reserves the right to fully investigate and prosecute violations of any of the above prohibitions of the law. In addition, Epic Travel may take a range of enforcement actions, including but not limited to suspending or
                                    terminating your account, removing or disabling access to any User Content, and cooperating with law enforcement authorities.   </p>

                            </section>
                        </div>
                        <div>
                            <section id='11'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>11. Links to Third-Party Websites or Resources  </h4>
                                <p>The Services may contain links to third-party websites or resources. We provide these links
                                    as a convenience, but we do not endorse or make any representations about these third-party
                                    websites or resources. You acknowledge and agree that we are not responsible for the
                                    availability, content, or accuracy of these third-party websites or resources. Your use of
                                    third-party websites or resources is at your own risk.   </p>
                            </section>
                        </div>
                        <div>
                            <section id='12'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>12. DMCA/Copyright Policy  </h4>
                                <p>Epic Travel respects copyright law and expects its users to do the same. It is our policy to
                                    terminate, in appropriate circumstances, the accounts of users who repeatedly infringe or
                                    are believed to be infringing the rights of copyright holders.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='13'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>13. Termination  </h4>
                                <p>We reserve the right to suspend or terminate your access to and use of the Services at our
                                    sole discretion and without notice, for any reason, including your breach of these Terms.
                                    Upon termination, your right to access or use the Services will immediately cease.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='14'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>14. Warranty Disclaimers  </h4>
                                <p>The Services are provided "as is" and "as available" without warranties of any kind, either
                                    express or implied, including, but not limited to, the implied warranties of merchantability,
                                    fitness for a particular purpose, or non-infringement.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='15'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>15. Indemnity   </h4>
                                <p>You agree to indemnify and hold Epic Travel, its affiliates, officers, agents, employees, and
                                    partners harmless from and against all claims, liabilities, damages (actual and
                                    consequential), losses, and expenses arising from or in any way related to your use of the
                                    Services or your violation of these Terms.   </p>
                            </section>
                        </div>
                        <div>
                            <section id='16'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>16. Limitation of Liability    </h4>
                                <p>To the fullest extent permitted by applicable law, Epic Travel and its affiliates, officers,
                                    agents, employees, and partners shall not be liable for any indirect, incidental, special,
                                    consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                                    directly or indirectly, or any loss of data, use, goodwill, or other intangible losses
                                    resulting from (a) your use or inability to use the Services; (b) any unauthorized access
                                    to or use of our servers and/or any personal information stored therein; (c) any interruption
                                    or cessation of transmission to or from the Services; (d) any bugs, viruses, Trojan horses, or
                                    the like, which may be transmitted to or through the Services; (e) any errors or omissions in
                                    any content or for any loss or damage incurred as a result of the use of any content posted, emailed,
                                    transmitted, or otherwise made available through the Services; and (f) user content or the defamatory,
                                    offensive, or illegal conduct of any third party.    </p>
                            </section>
                        </div>
                        <div>
                            <section id='17'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>17. Governing Law and Forum Choice   </h4>
                                <p>These Terms shall be governed by and construed in accordance with the laws of the Federal
                                    Territory of Labuan, without regard to its conflict of law principles. You agree that any
                                    action at law or in equity arising out of or relating to these Terms shall be filed only in the
                                    state or federal courts located in the Federal Territory of Labuan, and you hereby consent
                                    and submit to the personal jurisdiction of such courts for the purposes of litigating any such action.  </p>
                            </section>
                        </div>
                        <div>
                            <section id='18'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>18. Dispute Resolution   </h4>
                            </section>
                        </div>
                        <div>
                            <section id='18.1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>18.1. Informal Resolution   </h4>
                                <p>In the event of a dispute, claim, or controversy arising out of or relating to these Terms, you
                                    and Epic Travel agree to first attempt to resolve the dispute informally. You will contact Epic Travel's
                                    customer support team to describe your issue, and Epic Travel will attempt to resolve the dispute
                                    informally by contacting you via email. If the dispute cannot be resolved within thirty (30) days
                                    after it is first submitted to customer support, either party may initiate arbitration as described
                                    in Section 18.2 below.   </p>
                            </section>
                        </div>
                        <div>
                            <section id='18.2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>18.2. Binding Arbitration    </h4>
                                <p>If you and Epic Travel cannot resolve a dispute informally, both parties agree that any
                                    dispute, claim, or controversy arising from or related to these Terms or their breach,
                                    termination, enforcement, interpretation, or validity, including the scope or applicability
                                    of this arbitration agreement, will be settled through arbitration in the Federal Territory of
                                    Labuan. This arbitration shall be conducted before a single arbitrator, and the
                                    administration of the arbitration will be handled by the authorized arbitration administrator
                                    in Labuan, following its Commercial Arbitration Rules and Procedures, or any other rules
                                    that both parties may mutually consent to. The decision made by the arbitrator can be
                                    enforced in any court with jurisdiction over the matter.    </p>
                            </section>
                        </div>
                        <div>
                            <section id='18.2.1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>18.2.1. Class Action Waiver   </h4>
                                <p>You and Epic Travel agree that any arbitration or legal action shall be limited to the dispute
                                    between us and not include any dispute or claim by any other party. You and Epic Travel
                                    expressly waive any right to participate in any class action involving disputes between us. </p>
                            </section>
                        </div>
                        <div>
                            <section id='18.2.2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>18.2.2. Arbitration Administrator   </h4>
                                <p>The arbitration shall be administered by an authorised arbitration administrator, a neutral
                                    third-party chosen by mutual agreement of the parties. The arbitrator shall be a person with
                                    substantial experience in resolving intellectual property and commercial contract disputes and
                                    shall be selected from the appropriate list of arbitrators in accordance with the authorised
                                    arbitration administrator’s rules and procedures. </p>
                            </section>
                        </div>
                        <div>
                            <section id='18.2.3'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>18.2.3. Arbitration Location and Procedure   </h4>
                                <p>The arbitration shall be conducted in the Federal Territory of Labuan, unless you and Epic Travel
                                    agree otherwise. The arbitration shall be conducted in accordance with the rules of the authorised
                                    arbitration administrator in effect at the time of filing of the arbitration, except as they may be
                                    modified by these Terms or by mutual agreement of the parties. The arbitrator shall render a written
                                    decision within 90 days after the hearing. </p>
                            </section>
                        </div>
                        <div>
                            <section id='18.2.4'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>18.2.4. Costs of Arbitration   </h4>
                                <p>The cost of the arbitration, including the arbitrator’s fees, shall be shared equally by the parties unless
                                    the arbitrator finds in favour of one party in a manner that is deemed equitable under the circumstances. </p>
                            </section>
                        </div>
                        <div>
                            <section id='18.3'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>18.3. Exception to Arbitration   </h4>
                                <p>Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement
                                    or misappropriation of the other party’s patent, copyright, trademark, or trade secret shall not be subject to this
                                    arbitration agreement.    </p>
                            </section>
                        </div>
                        <div>
                            <section id='18.4'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>18.4. Opt-Out    </h4>
                                <p>You may opt-out of this arbitration agreement. If you do so, neither you nor Epic Travel can require the other to
                                    participate in an arbitration proceeding. To opt-out, you must notify Epic Travel in writing within 30 days of
                                    the date that you first became subject to this arbitration provision.   </p>
                            </section>
                        </div>
                        <div>
                            <section id='18.5'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>18.5. Governing Law    </h4>
                                <p>This arbitration arrangement is regulated by the Federal Arbitration Act, in accordance with Labuan arbitration procedures.    </p>
                            </section>
                        </div>
                        <div>
                            <section id='18.6'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>18.6. Severability    </h4>
                                <p>If any provision of this arbitration agreement is found unenforceable, the unenforceable provision shall be severed, and
                                    the remaining arbitration terms shall be enforced.    </p>
                            </section>
                        </div>
                        <div>
                            <section id='19'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>19. General Terms    </h4>
                            </section>
                        </div>
                        <div>
                            <section id='19.1'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>19.1. Entire Agreement    </h4>
                                <p>These Terms constitute the entire agreement between you and Epic Travel concerning the subject matter hereof. They encompass
                                    all discussions, negotiations, and prior agreements, whether oral or written, regarding your use of the Services. This means
                                    that any prior understandings or agreements, whether in email, verbal discussions, or written contracts, are hereby null and
                                    void and superseded by these Terms.    </p>
                            </section>
                        </div>
                        <div>
                            <section id='19.2'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>19.2. Severability     </h4>
                                <p>If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, the remaining
                                    provisions shall remain in full force and effect. The unenforceable or invalid provision will be replaced by a valid and
                                    enforceable provision that closely matches the intent of the original provision to the maximum extent possible under
                                    applicable law.     </p>
                            </section>
                        </div>
                        <div>
                            <section id='19.3'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>19.3. Waiver     </h4>
                                <p>The failure of Epic Travel to enforce any right or provision in these Terms shall not constitute a waiver of that right
                                    or provision unless explicitly acknowledged and agreed upon in writing by Epic Travel. Any waiver of any right or
                                    provision by Epic Travel will be effective only as to that specific instance and purpose and will not be considered
                                    a waiver of any other right or provision.     </p>
                            </section>
                        </div>
                        <div>
                            <section id='19.4'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>19.4. Assignment     </h4>
                                <p>You may not assign or transfer these Terms, or any of your rights or obligations herein, without the prior written
                                    consent of Epic Travel. Epic Travel may assign or transfer these Terms, in whole or in part, to any third party without
                                    your consent. Any assignment or transfer in violation of this section will be null and void.     </p>
                            </section>
                        </div>
                        <div>
                            <section id='19.5'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>19.5. Relationship     </h4>
                                <p>No agency, partnership, joint venture, employee-employer, or franchiser-franchisee relationship is intended or created by
                                    these Terms. You acknowledge that you are an independent contractor, and that no other relationship is intended or
                                    established through your use of the Services.     </p>
                            </section>
                        </div>
                        <div>
                            <section id='19.6'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>19.6. Headings     </h4>
                                <p>The headings used in these Terms are for convenience only and do not affect the interpretation of these Terms.     </p>
                            </section>
                        </div>
                        <div>
                            <section id='19.7'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>19.7. Changes to the Terms     </h4>
                                <p>Epic Travel reserves the right to modify or revise these Terms at any time, at its sole discretion. Any changes
                                    to these Terms will be effective immediately upon posting on the Epic Travel platform. You are responsible for
                                    regularly reviewing these Terms. Your continued use of the Services after any changes to these Terms constitutes
                                    your acceptance of those changes.     </p>
                            </section>
                        </div>
                        <div>
                            <section id='19.8'>
                                <h4 className='lg:text-[16px] xs:text-[28px]'>19.8. Contact Information      </h4>
                                <p>For any questions or concerns about these Terms or the Services, you may contact Epic Travel at the following address:      </p>
                                <div className='space-y-2 mt-5'>
                                    <p>Epic Ventures Ltd</p>
                                    <p>Unit 2-08, Level 2, Labuan Times Square,</p>
                                    <p>Jalan Merdeka, 87000, F.T. Labuan, Malaysia</p>
                                    <p>Email: <a href="mailto:dloh@epictravel.ai" className="text-blue-600">dloh@epictravel.ai</a></p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
            <Footerepic />
        </div>
    )
}

export default TermsService;