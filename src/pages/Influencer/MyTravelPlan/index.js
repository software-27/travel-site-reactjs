import React, { useState, useEffect } from "react";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import ForgotPassword from "components/ForgotPass/index";
import { Row, Text, Button, Img } from "components";
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import SavedContent from "components/myTravelPlan/savedContent/index";
import PrivateContent from "components/myTravelPlan/privateContent/index";
import PublishContent from "components/myTravelPlan/publishContent/index";

const MyTravelPlan = () => {
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);
  const [isPopup3Open, setIsPopup3Open] = useState(false);
  // const { setIsLoggedIn } = useAuth();
  //   Filter Type blog/photos/etc

  // setIsLoggedIn(true);
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

  const closePopup1 = () => {
    setIsPopup1Open(false);
  };

  const closePopup2 = () => {
    setIsPopup2Open(false);
  };
  const closePopup3 = () => {
    setIsPopup3Open(false);
  };

  const [selectedButton, setSelectedButton] = useState("Created by me");
  const [isCreatedByMeSelected, setIsCreatedByMeSelected] = useState(false);
  const [showPrivateContent, setShowPrivateContent] = useState(true);
  const [showPublishContent, setShowPublishContent] = useState(false);

  // State variables to track button click status
  const [privateButtonClicked, setPrivateButtonClicked] = useState(true);
  const [publishButtonClicked, setPublishButtonClicked] = useState(false);

  // Function to handle button clicks and update the selected button
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);

    if (buttonName === "Created by me") {
      setIsCreatedByMeSelected(true);
      setShowPrivateContent(true); 
    } else {
      setIsCreatedByMeSelected(false);
      setShowPrivateContent(false); 
      // Hide Private content when another button is selected
      setShowPublishContent(false); // Hide Publish content when another button is selected
    }
  };

  // Function to handle clicking the Private button
  const handlePrivateClick = () => {
    setShowPrivateContent(!showPrivateContent);
    setShowPublishContent(false); // Hide Publish content when Private is clicked
    setPrivateButtonClicked(!privateButtonClicked);
    setPublishButtonClicked(false);
  };

  // Function to handle clicking the Publish Travel Plan button
  const handlePublishClick = () => {
    setShowPublishContent(!showPublishContent);
    setShowPrivateContent(false); // Hide Private content when Publish Travel Plan is clicked
    setPublishButtonClicked(!publishButtonClicked);
    setPrivateButtonClicked(false);
  };

  
  

  return (
    <div className="bg-[#F5F5F5] flex flex-col font-montserrat h-[1000px]">
      <div className='fixed w-full' style={{ zIndex: 2 }}>
      <HeaderOTAAdmin
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
      <ForgotPassword isOpen={isPopup3Open} closePopup3={closePopup3} />
      <HeaderOTAMobileEpic
          openPopup1={openPopup1}
          className="visible fixed overflow-hidden lg:invisible lg:hidden"
        />
      </div>
      <Row className="bg-[#F5F5F5] xs:pt-[160px] lg:pt-[92px]" >
        <div className="sm:w-[50%] lg:w-[16%] ml-[40px] mt-8">
          <text className="bg-[#F5F5F5] font-montserrat text-[#008D36] lg:text-[20px] sm:text-[35px] font-semibold">
            My Travel Plan
          </text>
        </div>
        <div className="sm:w-[100%] lg:w-[50%] mt-8 space-x-2 bg-[#F5F5F5]">
          <button
            className={`lg:w-[20%] md:w-[40%] md:ml-4 lg:ml-0 rounded-t-lg bg-white h-8 rounded-t-lg bg-white sm:text-[28px] lg:text-sm sm:h-14 lg:h-8 ${selectedButton === "Created by me"
                ? "bg-teal-500 text-white"
                : "bg-white text-teal-500"
              }`}
            onClick={() => handleButtonClick("Created by me")}
          >
            Created by me
          </button>

          <button
            className={`sm:w-[30%] lg:w-[15%] rounded-t-lg bg-white sm:text-[28px] lg:text-sm sm:h-14 lg:h-8 ${selectedButton === "Bookmark"
                ? "bg-teal-500 text-white"
                : "bg-white text-teal-500"
              }`}
            onClick={() => handleButtonClick("Bookmark")}
          >
            Bookmark
          </button>
          {/* <button className="w-[15%] rounded-t-lg bg-white text-[#008D36] h-8">Saved</button> */}
        </div>
      </Row>
      <hr></hr>

      {/* To display hidden button */}
      <div className="mt-4 bg-[#F5F5F5]">
        {/* {selectedButton === "All" && (
          <>
       <AllContent/>
    
       </>
        )} */}
        {selectedButton === "Created by me" && (
          <div>
            <div className="space-x-3">
              <button
                className={`ml-[40px] sm:w-[20%] lg:w-[10%] rounded-lg sm:h-14 lg:h-8 sm:text-[28px] lg:text-sm ${
                  privateButtonClicked
                    ? "bg-teal-500 text-white"
                    : "bg-white text-teal-500"
                }`}
                onClick={handlePrivateClick}
              >
                Private
              </button>
              <button
                className={`sm:w-[20%] lg:w-[10%] rounded-lg sm:h-14 lg:h-8 sm:text-[28px] lg:text-sm ${
                  publishButtonClicked
                    ? "bg-teal-500 text-white"
                    : "bg-white text-teal-500"
                }`}
                onClick={handlePublishClick}
              >
                Published
              </button>

              {showPrivateContent && (
              <PrivateContent/>
              )}
              {showPublishContent && 
              <PublishContent/>}
            </div>
          </div>
        )}
        {selectedButton === "Bookmark" && (
         <SavedContent/>
        )}
      </div>
      
    </div>
  );
};

export default MyTravelPlan;
