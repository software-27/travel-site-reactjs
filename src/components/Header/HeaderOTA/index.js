import React from "react";
import { useAuth } from "AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row, Text, Button, Img } from "components";
import { FiMenu } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import axios from "axios";
import GlobalConstant from "constant/global";
// import { setCookie } from "components/useGoogleTranslateScript/index";
// import useGoogleTranslateScript from "components/useGoogleTranslateScript/index2";
import GoogleTranslate from "../GT/GoogleTranslate";


const HeaderOTA = ({ openPopup1 }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [nav1, setNav1] = useState(false);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId");
  const defaultProfileImageUrl = "images/default_profile_login.jpg";
  const [profileImage, setProfileImagePath] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleSignOut = (event) => {
    // Clear the entire local storage
    localStorage.clear();
    isLoggedIn(false); // Update the isLoggedIn state
    navigate("/");
  };

  useEffect(() => {
    // Function to check if click is outside of dropdowns
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-btn') && !event.target.closest('.dropdown-content')) {
        setNav1(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const toggleDropdown2 = () => {
    setNav1((prevState) => !prevState); // Toggles the state between true and false
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // localStorage.setItem("showLogin", showLogin);
  // if (showLogin) {
  //   console.log("showLogin is true");
  // } else {
  //   console.log("showLogin is false");
  // }

  useEffect(() => {
    console.log('logo: ', GlobalConstant.LOGO)
    if (isLoggedIn) {
      axios
        .get(`https://halaltravel.ai/ht/api/profile/${userId}`)
        .then((response) => {
          const data = response.data;
          const profileImage = data.profileImage;
          const userName = data.userName;
          const email = data.email;

          setProfileImagePath(profileImage);
          setUserName(userName);
          setLoading(false);
          setEmail(email);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
          console.error("Error fetching profile data:", error);
        });
    }
  }, [userId, isLoggedIn]);

  // const [selectedLanguage, setSelectedLanguage] = useState("en");

  // useEffect(() => {
  //   // Retrieve the selected language from local storage, if available
  //   const storedLanguage = localStorage.getItem("selectedLanguage");
  //   if (storedLanguage) {
  //     setSelectedLanguage(storedLanguage);
  //   }
  // }, []);
  //  useGoogleTranslateScript();
  // const handleLanguageChange = (event) => {
  //   const newLanguage = event.target.value;

  //   console.log(`Selected language: ${`newLanguage`}`);

  //   // Set the selected language in local storage
  //   localStorage.setItem("selectedLanguage", newLanguage);

  //   // Set the googtrans cookie with the selected language
  //   setCookie("googtrans", `/${newLanguage}`, "Session");

  //   console.log("Cookie set:", document.cookie);

  //   // Reload the page to apply the language change
  //   console.log("Reloading page...");
  //   window.location.reload();
  // };


  return (
    <header className="bg-white_A701 font-montserrat inline-flex md:flex-col flex-row p-2 items-center justify-center shadow-bs h-max w-full invisible lg:visible hidden lg:flex ">
      <Row className="row-1 w-full z-0 items-center justify-start p-2 gap-4">
        <div className="inline-flex justify-start items-center">
          <Img
            // eslint-disable-next-line no-undef
            src={`/images/${GlobalConstant.LOGO}`}
            // className="place-self-center justify-start md:mt-0 w-auto"
            class="common-pointer place-self-center xl:h-[60px] md:mt-0 common-image"
            alt="frame"
            onClick={() => navigate("/")}
          />
        </div>

        <div class="flex justify-start text-center w-[70%] ">
          <a href="#planholiday" className="text-center w-fit ">
            <Text
              className="font-montserrat text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
              as="h7"
              variant="h7"
            >
              PLAN A HOLIDAY
            </Text>
          </a>
          <a href="#travelideas" className="text-center w-fit ml-9 underline-white">
            <Text
              className="font-montserrat text-[#008D36] text-cente r text-green_800 tracking-[-0.21px] w-auto"
              as="h7"
              variant="h7"
            >
              TRAVEL IDEAS
            </Text>
          </a>
          {/* <div className="text-center w-fit ml-9">
            <Text
              className="font-montserrat text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
              as="h7"
              variant="h7"
            >
              PROMOS
            </Text>
          </div> */}
          <a href="/epic-creator-guide" className="text-center w-fit ml-9">
            <Text
              className="font-montserrat text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
              as="h7"
              variant="h7"
            >
              CREATOR PROGRAM
            </Text>
          </a>
          {/* <div className="text-center w-fit ml-9">
            <Text
              className="font-montserrat text-[#008D36] text-center text-green_800  w-auto"
              as="h7"
              variant="h7"
            >
              RESOURCES
            </Text>
          </div> */}
        </div>

        {isLoggedIn ? (
          <>
            <div className="flex justify-end text-center items-center w-[30%] ">
              <div className="items-center justify-center">
                <IoIosNotificationsOutline size={35} className="" />
              </div>
              <GoogleTranslate />
              <div >
                <button
                  className="dropdown-btn py-1 px-2 inline-flex border border-[#008D36] mx-2 text-[#008D36] rounded-full items-center"
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar2"
                  onClick={toggleDropdown2}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <FiMenu className="mr-2" />
                  {/* {profileImage ? ( */}
                  {profileImage ? (
                    <img
                      src={`${profileImage}`}
                      alt=""
                      className="w-9 h-9 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                    />
                  ) : (
                    <img
                      src={`${defaultProfileImageUrl}`}
                      alt=""
                      className="w-9 h-9 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                    />
                  )}
                </button>
                {showTooltip && (
                  <div className="font-semibold text-gray-300 uppercase absolute top-10 tooltip justify-items-end right-4 mt-8 py-1.5 px-3 bg-black rounded text-xs shadow">
                    {userName}
                  </div>
                )}
                <div
                  id="dropdownNavbar2"
                  className={`dropdown-content z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-[250px] dark:bg-gray-700 dark:divide-gray-600 ${nav1 ? "" : "hidden"
                    } absolute right-2`}
                >
                  <ul
                    class="py-2 text-sm text-left text-gray-700 dark:text-gray-400 "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      {userName ? (
                        <>
                          <text class="block px-4 pt-2 text-center font-semibold">
                            Hi, {userName}!
                          </text>
                          <text class="block px-4 pt-1 pb-3 text-center font-thin text-xs">
                            {email}
                          </text>
                        </>
                      ) : (
                        <>
                          <text class="block px-4 pt-2 text-center font-semibold">
                            Hi, {userName}!
                          </text>

                          <text class="block px-4 pt-1 pb-3 text-center font-thin text-xs">
                            {email}
                          </text>
                        </>
                      )}
                    </li>
                    <hr></hr>
                    <li>
                      <a
                        href="/profile"
                        class="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Personal Info
                      </a>
                    </li>
                    <li>
                      <a
                        href="/my-travelplan"
                        class="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Travel Plan
                      </a>
                    </li>
                    <li>
                      <a
                        href="/influencer-creator"
                        class="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Storefront
                      </a>
                    </li>
                    <li>
                      <a
                        href="/manage-content"
                        class="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Social Posting
                      </a>
                    </li>
                    <li>
                      <a
                        href="/edit-creator"
                        class="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit Storefront
                      </a>
                    </li>
                    <li>
                      <a
                        href="/bus-ticket-info"
                        class="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Bookings
                      </a>
                    </li>
                    <li>
                      <a
                        href="/report-details"
                        class="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                    <hr></hr>
                    <li>
                      <a
                        href="/"
                        class="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="gap-3 flex justify-end text-center items-center w-[20%] ">
            <GoogleTranslate />
            <Button
              className="cursor-pointer bg-[#00a19a] text-white_A700 text-xs flex items-center justify-center min-w-[138px] h-[35px] md:ml-[0] ml-[20px] md:mt-0.5 w-auto font-medium"
              shape="RoundedBorder6"
              size="sm"
              onClick={openPopup1}
            >
              Sign-in / Register
            </Button>
          </div>
        )}
      </Row>
    </header>
  );
};

export default HeaderOTA;
