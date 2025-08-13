import React, { useEffect, useState } from "react";
import { Column, Row, Text, Input, Line, Button, SelectBox } from "components";
import { useNavigate } from "react-router-dom";
import { SelectRating } from "components/SelectRating";
import Header from "components/Header/Header";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import ForgotPassword from "components/ForgotPass/index";
import HeaderOTA from "components/Header/HeaderOTA/index";
// import InvalidTokenMessage from "components/InvalidTokenMessage/index";
import axios from "axios";
import { useAuth } from "AuthContext";
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";


const ResetPasswordPage = () => {
  const [tokenValid, setTokenValid] = useState(false);
  const navigate = useNavigate();
  function handleNavigate20() {
    navigate("/#");
  }
  
  // const [showInvalidTokenMessage, setShowInvalidTokenMessage] = useState(false);
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);
  const [isPopup3Open, setIsPopup3Open] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [loginPopupMessage, setLoginPopupMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { setIsLoggedIn, isLoggedIn } = useAuth();
  
 

  // const { setIsLoggedIn } = useAuth();

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

  const handleNavigate = () => {
    if (isLoggedIn) {
      navigate("/");
    } else {
    }
  };
  useEffect(() => {
    // Check if the user is logged in
    if (isLoggedIn) {
      // Redirect to the main page
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  
  useEffect(() => {
    // Get the current URL
    const url = new URL(window.location.href);

    // Extract the token from the URL
    const token = url.searchParams.get("token");
    console.log("Token:", token);
    if (token) {
      // Send a request to your server to validate the token
      fetch(
        `https://halaltravel.ai/ht/api/auth/resetPassword/tokenValidation/${token}`
      )
        .then((response) => {
          if (response.status === 200) {
            // Token is valid
            setTokenValid(true);
            console.log("true");
          } else {
            // Token is invalid
            setTokenValid(false);
            console.log("false");
            alert(
              "Reset password token is not valid or has expired. Please request a new token."
            );
            // setShowInvalidTokenMessage(true);
          }
        })
        .catch((error) => {
          //console.error("Error while validating the token", error);
          setTokenValid(false);
          // Open the login popup
          setIsPopup3Open(true);
          // Show the invalid token message
          //setShowInvalidTokenMessage(true);
          alert(
            "Reset password token is not valid or has expired. Please request a new token."
          );

          // console.log("false");
        });
    }
  }, []);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleResetPassword = () => {
    const resetPasswordEndpoint =
      "https://halaltravel.ai/ht/api/auth/resetPassword/setNewPassword";

    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");
    console.log("token:", token);
    console.log("password:", password);
    console.log("cpass:", confirmPassword);

    const requestBody = {
      token: token,
      password: password,
      confirmPassowrd: confirmPassword,
    };
    axios
    .post(resetPasswordEndpoint, requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.status === 200) {
        alert("Pasword successfully reset. You can sign in using the new password.");
        navigate("/", { state: { showLoginPopup: true,  } });
      } else {
        console.error('Password reset failed');
      }
    })
    .catch((error) => {
      let errorMessage = "";
  
      if (axios.isAxiosError(error)) {
        // AxiosError - errors related to the HTTP request
        if (error.response) {
          // Server responded with an error status
          // = error.response.data.message;
        } else if (error.request) {
          // Request made but no response received
         // errorMessage = "";
        } else {
          // Something else happened
         // errorMessage = `Axios error: ${error.message}`;
        }
      } else if (error instanceof Error) {
        // General JavaScript Error
       // errorMessage = error.message;
      }
  
      // Validate password
      if (password.trim() === "") {
        errorMessage += "\nPassword must not be blank";
      } else {
        // Check each condition using regular expressions
        if (!/[a-z]/.test(password)) {
          errorMessage += "\nPassword must contain at least one lowercase letter";
        }
        if (!/[A-Z]/.test(password)) {
          errorMessage += "\nPassword must contain at least one uppercase letter";
        }
        if (!/[0-9]/.test(password)) {
          errorMessage += "\nPassword must contain at least one digit";
        }
        if (password.length < 8) {
          errorMessage += "\nPassword must be at least 8 characters long";
        }
        // Add additional special character check using a regular expression
        if (!/[@#$%^&+=]/.test(password)) {
          errorMessage += "\nPassword must contain at least one special character";
        }
      }
  
      // Validate confirm password
      if (confirmPassword.trim() === "") {
        errorMessage += "\nConfirm Password must not be blank";
      } else if (password !== confirmPassword) {
        errorMessage += "\nPassword and Confirm Password must match";
      }
  
      // Display the accumulated error messages
      alert(errorMessage);
    });
  

  }
  return (
    <>
      <Column className="bg-gray_100 scroll-smooth w-[100%] pb-6 h-screen justify-start items-center">
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
        <ForgotPassword isOpen={isPopup3Open} closePopup3={closePopup3} />
        <HeaderOTAMobileEpic openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
        <Column className="sm:w-[90%] lg:w-[80%] gap-0.5 h-full justify-start mt-4">
          {tokenValid ? (
            <Column className="p-6 bg-white_A701 rounded shadow-bs3 h-fit lg:mt-[24px] xl:mt-[34px] 2xl:mt-[40px] 3xl:mt-[50px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] sm:w-full lg:w-[65%]">
              <Text className="font-sans mb-2 sm:text-[37px] lg:text-xl" variant="h5">
                Please choose a new EpicTravel password 
              </Text>
              <Text className="mt-2 font-sans lg:text-sm sm:text-[28px]">New Password</Text>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg lg:h-9 sm:h-20 lg:text-sm sm:text-[28px] focus:ring-blue-500 focus:border-blue-500 block w-[50%] 2xl:mt-2 "
                type="text"
                size="smSrc"
                required
                value={password}
                onChange={handlePasswordChange}
              ></input>
              <Text className="mt-2 font-sans lg:text-sm sm:text-[28px]">
                Confirm New Password
              </Text>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg lg:h-9 sm:h-20 lg:text-sm sm:text-[28px] focus:ring-blue-500 focus:border-blue-500 block w-[50%] 2xl:mt-2 "
                type="text"
                size="smSrc"
                required
                //type="password"  // Use type="password" to hide the entered text
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              ></input>
              {error && (
                <div style={{ color: "red" }}>
                  <p>Error:</p>
                  <ul>
                    {error.split("\n").map((item, index) => (
                      <li key={index}>{item.trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
              {successMessage && (
                <div style={{ color: "green" }}>{successMessage}</div>
              )}
              <button
                className="mt-10 cursor-pointer bg-[#00a19a] lg:h-9 sm:h-20 text-white_A700 font-medium tracking-tighter rounded-lg lg:text-sm sm:text-[28px] px-5 py-2.5 flex items-center justify-center w-fit h-[35px] md:ml-[0] ml-[20px]"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </Column>
          ) : (
            <>
              {isLoginPopupOpen && (
                <LoginPage
                  onClose={() => setIsLoginPopupOpen(false)} // Close the login popup when needed
                />
              )}

              {/* {showInvalidTokenMessage && (
                <InvalidTokenMessage
                  onClose={() => setShowInvalidTokenMessage(false)} // Close the invalid token message when needed
                />
              )} */}

              {!isLoginPopupOpen && (
                <div>
                  <h2>Invalid Token</h2>
                  <p>
                    Reset password token is not valid or has expired. Please
                    request a new token.
                  </p>
                </div>
              )}
            </>
          )}
        </Column>
      </Column>
    </>
  );
};

export default ResetPasswordPage;
