import HeaderOTA from 'components/Header/HeaderOTA/index';
import { useState } from 'react';
import { Input } from 'components/Input/index';
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
import { Text, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";



const OTACameronPage = () => {
    const navigate = useNavigate();

    function handleNavigate12() {
        navigate("/about-us");
    }

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
        <>

            <HeaderOTA openPopup1={openPopup1} className="fixed invisible lg:visible" />
            <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
            <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />            <Img
                src="images/otacameron.jpg"
                className="w-screen h-full object-cover rounded-[10px]"
                alt="otacameron"
            />


        </>
    );

};

export default OTACameronPage;