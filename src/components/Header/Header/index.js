import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row, Text, Button, Img } from "components";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillJournalBookmarkFill, BsPersonFill } from "react-icons/bs";
import { MdTravelExplore, MdOutlineDiscount } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import LoginPage from "components/Login/index";
import { FaShoppingCart, FaThumbtack, FaTimes, FaCheck } from "react-icons/fa";
import axios from "axios";
import GlobalConstant from "constant/global";


const Header = ({ openPopup1 }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [nav1, setNav1] = useState(false);
  const [nav3, setNav3] = useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
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
    navigate("/")
  };

  const toggleDropdown = () => {
    setNav((prevState) => !prevState); // Toggles the state between true and false
  };

  const toggleDropdown2 = () => {
    setNav1((prevState) => !prevState); // Toggles the state between true and false
  };

  const toggleDropdown3 = () => {
    setNav3((prevState) => !prevState); // Toggles the state between true and false
  };

  const [username, setUsername] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useAuth();
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear previous error messages
    setError("");
    setUsernameError("");
    setPasswordError("");

    // Perform client-side validation
    let isValid = true;

    if (!username) {
      setUsernameError("Email is required.");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(username)) {
      setUsernameError("Invalid email format.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    }

    // Proceed with API call if validation passes
    if (isValid) {
      const data = {
        username: username,
        password: password,
      };

      console.log("--------------", data);
      console.log(JSON.stringify(data, null, 2));

      // Call the submitForm function to make the API call
      submitForm(data);
    }
  };

  const submitForm = (data) => {
    const url = "https://halaltravel.ai/ht/api/auth/signin";

    // Submit the form data to the server using axios or any other HTTP library
    axios
      .post(url, data)
      .then((response) => {
        // Handle the response from the backend (success)
        console.log("Response:", response.data);

        if (response.status === 200) {
          //Successful signin
          console.log("Signup successful!");

          // Access the response data
          const { type, token, userId } = response.data;
          localStorage.setItem("tokenType", type);
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);

          setIsLoggedIn(true); // Update the isLoggedIn state
          setShowLogin(false);

          // Redirect to the home page after successful login
          //navigate("/");
        }
      })

      .catch((error) => {
        // Handle the error response from the backend (failure)
        if (error.response) {
          console.error("Error Response:", error.response.data);

          // Handle different error scenarios
          if (error.response.status === 401) {
            if (error.response.data.errorMessage === "Username not found") {
              setError("Username not found. Please check your email.");
            } else if (
              error.response.data.errorMessage === "Incorrect password"
            ) {
              setError("Incorrect password. Please try again.");
            }
          } else if (error.response.status === 400) {
            // Handle validation errors
            setError("Fields validation failed. Please check the form fields.");
          }
        }
      });
  };

  localStorage.setItem("showLogin", showLogin);
  if (showLogin) {
    console.log("showLogin is true");
  } else {
    console.log("showLogin is false");
  }

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get(`https://halaltravel.ai/ht/api/profile/${userId}`)
        .then((response) => {
          const data = response.data;
          const profileImage = data.profileImage;
          const userName = data.userName;
          const email  = data.email;

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

  return (
    <header className="bg-white_A701 font-montserrat inline-flex md:flex-col flex-row p-2 items-center justify-center shadow-bs h-max w-full invisible lg:visible hidden lg:flex ">
      <Row className="row-1 w-full z-0 items-center justify-start p-2 gap-4">
        <div className="justify-start items-center">
          <Img
            // src="/images/LogoEPICTRAVEL.svg"
            src={`/images/${GlobalConstant.LOGO}`}
            // className="place-self-center justify-start md:mt-0 w-auto"
            class="common-pointer place-self-center xl:h-[60px] md:mt-0 w-auto common-image"
            alt="frame"
            onClick={() => navigate("/")}
          />
        </div>

        

        {isLoggedIn ? (
          <>
 {/* navbar */}
 <div class="flex justify-items-end text-center items-center justify-start-end gap-2 w-[90%] ">
              <div className="cursor-pointer text-center  w-fit m-4 ml-5">
                <Text
                  className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                  as="h7"
                  variant="h7"
                  onClick={() => navigate("/home")}
                >
                  Home
                </Text>
              </div>
              <div className="cursor-pointer text-center w-fit m-4">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-montserrat text-[15px] text-[#008D36] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleDropdown}>
                  Listing
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg></button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${nav ? "" : "hidden"
                    } absolute`}
                >
                  <ul class="py-2 text-sm text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="/property" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Acommodation</a>
                    </li>
                    <li>
                      <a href="/flight" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Flight</a>
                    </li>
                    <li>
                      <a href="/tour" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tour</a>
                    </li>
                  </ul>
                </div>

              </div>
              <div className="cursor-pointer text-center w-fit m-4">
                <Text
                  className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                  as="h7"
                  variant="h7"
                  onClick={() => navigate("/flight")}
                >
                  Planner Pro
                </Text>
              </div>
              <div className="cursor-pointer text-center w-fit m-4">
                <button
                  id="dropdownNavbarLink3"
                  data-dropdown-toggle="dropdownNavbar3"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-montserrat text-[15px] text-[#008D36] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleDropdown3}>
                  Marketplace
                  <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar3"
                  className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${nav3 ? "" : "hidden"
                    } absolute left-30 top-18`}
                >
                  <ul class="py-2 text-sm text-left text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="/tour-marketplace" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Viator</a>
                    </li>
                    <li>
                      <a href="/tour-marketplace2" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Epic</a>
                    </li>
                    <li>
                      <a href="/tour-marketplace3" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Flight & Transport</a>
                    </li>
                    <li>
                      <a href="/tour-marketplace4" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Deals</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cursor-pointer text-center w-fit m-4">
                <Text
                  className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                  as="h7"
                  variant="h7"
                  onClick={() => navigate("/")}
                >
                  FAQ
                </Text>
              </div>
              <div className="cursor-pointer text-center w-fit m-4">
                <Text
                  className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                  as="h7"
                  variant="h7"
                  onClick={() => navigate("/")}
                >
                  Contact Us
                </Text>
              </div>
              <div className="cursor-pointer text-center w-fit m-4">
                <Text
                  className="font-montserrat text-[15px] text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
                  as="h7"
                  variant="h7"
                  onClick={() => navigate("/manage-user")}
                >
                  Manage User
                </Text>
              </div>

            </div>
          
            <div className="flex justify-end text-center items-center w-[30%] ">
              <div className="items-center justify-center">
                <IoIosNotificationsOutline size={35} className="" />
              </div>
              <div>
                <button
                  className="py-1 px-2 inline-flex border border-[#008D36] mx-2 text-[#008D36] rounded-full items-center"
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
                  className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-[250px] dark:bg-gray-700 dark:divide-gray-600 ${
                    nav1 ? "" : "hidden"
                  } absolute right-2`}
                >
                  <ul
                    class="py-2 text-sm text-left text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      {userName ? (
                        <>
                        <text
                          class="block px-4 pt-2 text-center font-semibold"
                        >
                          Hi, {userName}!
                        </text>
                        <text
                         class="block px-4 pt-1 pb-3 text-center font-thin text-xs">
                          {email}
                          </text>
                        </>
                      ) :( <>
                      <text
                        class="block px-4 pt-2 text-center font-semibold"
                      >
                        Hi, {userName}!
                      </text>

                      <text
                         class="block px-4 pt-1 pb-3 text-center font-thin text-xs">
                          {email}
                          </text>

                    </>
                  ) } 
                  
                      
                    </li>
                    <hr></hr>
                    <li>
                      <a
                        href="#"
                        class="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        My Travel Plan
                      </a>
                    </li>
                    <li>
                      <a
                        href="/influencer-creator"
                        class="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        My Storefront
                      </a>
                    </li>
                    <li>
                      <a
                        href="/manage-content"
                        class="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        My Social Posting
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

            <>
            <div class="flex justify-start text-center w-[70%] ">
          <div className="text-center w-fit ">
            <Text
              className="font-montserrat text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
              as="h7"
              variant="h7"
            >
              PLAN A HOLIDAY
            </Text>
          </div>
          <div className="text-center w-fit ml-9">
            <Text
              className="font-montserrat text-[#008D36] text-cente r text-green_800 tracking-[-0.21px] w-auto"
              as="h7"
              variant="h7"
            >
              TRAVEL IDEAS
            </Text>
          </div>
          <div className="text-center w-fit ml-9">
            <Text
              className="font-montserrat text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
              as="h7"
              variant="h7"
            >
              PROMOS
            </Text>
          </div>
          <div className="text-center w-fit ml-9">
            <Text
              className="font-montserrat text-[#008D36] text-center text-green_800 tracking-[-0.21px] w-auto"
              as="h7"
              variant="h7"
            >
              CREATOR PROGRAM
            </Text>
          </div>
          <div className="text-center w-fit ml-9">
            <Text
              className="font-montserrat text-[#008D36] text-center text-green_800  w-auto"
              as="h7"
              variant="h7"
            >
              RESOURCES
            </Text>
          </div>
        </div>
          <div className="flex justify-end text-center items-center w-[20%] ">
            <Button
              className="cursor-pointer bg-[#00a19a] text-white_A700 text-xs flex items-center justify-center min-w-[138px] h-[35px] md:ml-[0] ml-[20px] md:mt-0.5 w-auto font-medium"
              shape="RoundedBorder6"
              size="sm"
              onClick={openPopup1}
            >
              Sign-in / Register
            </Button>
          </div>
          </>
        )}
      </Row>

    </header>
  );
}

export default Header;
