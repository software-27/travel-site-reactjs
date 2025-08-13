import React from "react";
import { useState } from "react";
import { Text, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import { useAuth } from "AuthContext";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";

const HomePagePartnerPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

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

  // setIsLoggedIn(true);

  return (
    <>
      <div className="w-full font-ptsans">
      <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
        <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
        <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
        <div className="py-5 pl-[50px]">


          <div className="mt-5 border border-black px-2 w-fit">
            <text className="font-bold text-[40px]">
              Dashboard
            </text>
            {isLoggedIn ? (
        <p>Welcome, logged-in user!</p>
      ) : (
        <p>Please log in to access more features.</p>
      )}
          </div>

        </div>

      </div>
    </>
  );
};

export default HomePagePartnerPage;
