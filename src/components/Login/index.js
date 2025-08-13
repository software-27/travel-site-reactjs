import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "AuthContext";
import { Row } from "components/Row/index";
import { Column } from 'components/Column/index';
import { Text } from 'components/index';
import { FaShoppingCart, FaThumbtack, FaTimes, FaCheck } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginPage = ({ isOpen, openPopup2, openPopup3, closePopup1 }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useAuth();
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setUsernameError("");
  }, [username]);

  useEffect(() => {
    setPasswordError("");
  }, [password]);

  useEffect(() => {
    setError("");
  }, [username, password]);

  const handleSubmit = async (event) => {
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
      // closePopup1();

    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const submitForm = (data) => {
    // setError("");
    const url = "https://halaltravel.ai/ht/api/auth/signin";

    const customPath = localStorage.getItem("customPath");

    const resetForm = () => {
      setUsername("");
      setPassword("");
      setUsernameError("");
      setPasswordError("");
      setError("");
    };

    // const dataToPass = {
    //   theme: localStorage.getItem("theme"),
    //   message: localStorage.getItem("message"),
    //   days: localStorage.getItem("days"),
    //   date: new Date(localStorage.getItem("date")),
    // };
    const storedQueryParamsString = localStorage.getItem("state");

    // Parse the JSON string back to an object
    const dataToPass = JSON.parse(storedQueryParamsString);

    // Submit the form data to the server using axios or any other HTTP library
    axios
      .post(url, data)
      .then((response) => {
        // Handle the response from the backend (success)
        console.log("Response:", response.data);

        if (response.status === 200) {
          //Successful signin
          console.log("Sign in successful!");

          // Access the response data
          const { type, token, userId } = response.data;
          localStorage.setItem("tokenType", type);
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);

          setIsLoggedIn(true);
          if (customPath) {
            if (customPath != "") {
              console.log("direct");
              console.log("dataToPass: ", dataToPass);
              localStorage.removeItem('customPath');
              navigate(`/${customPath}`, { state: dataToPass });
            } else {
              console.log("tutup");
              closePopup1();
              resetForm();
            }
          } else {
            console.log("tutup all");
            closePopup1();
            resetForm();
            //window.history.back();
          }

          // Redirect to the home page after successful login
          //navigate("/");
          closePopup1();
        }
      })

      .catch((error) => {
        // Handle the error response from the backend (failure)
        console.log("ERROR: ", error);

        let errorMessage = "An error occurred. Please try again later."; // Default error message

        if (error.response) {
          // Log the error response from the server
          console.error("Error Response:", error.response.data);

          // Handle different error scenarios
          if (error.response.status === 401) {
            errorMessage = error.response.data.message === "Bad credentials"
              ? "Incorrect password. Please try again."
              : "Username not found. Please check your email.";
            console.log("error 401: ", error.response.data.message);
          } else if (error.response.status === 400) {
            // Handle validation errors
            errorMessage = "Fields validation failed. Please check the form fields.";
            console.log("error 400 ");
          }
        } else {
          console.log("other error");
        }

        // Set the error message to state
        setError(errorMessage);
      });

  };

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");

    // Use the retrieved data as needed
    if (storedToken && storedUserId) {
      setIsLoggedIn(true); // Update the isLoggedIn state
      // You can use the token and userId here
    }
  }, []);
  return (
    <>
      {isOpen ? (
        <>
          {/* Web view */}
          <div className="sm:hidden lg:block cursor-pointer justify-center shadow-3xl rounded-3xl items-center mx-[300px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div class="flex flex-col items-center justify-center sm:pt-2 mx-auto md:h-screen lg:py-0">
              <div class="w-full bg-white rounded-lg shadow shadow-[#00a19a] shadow-xs shadow:opacity-50 dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <Row>
                    <h1 class="w-[95%] text-xl font-bold leading-tight tracking-tight text-[#00A19A] md:text-2xl dark:text-white">
                      Sign in to your account
                    </h1>
                    <FaTimes
                      className="w-[5%] text-right mt-6 h-5  text-black common-pointer"
                      onClick={() => {
                        closePopup1();
                        localStorage.removeItem('customPath');
                      }}
                    />
                  </Row>
                  <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label
                        for="username"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your username
                      </label>
                      <input
                        type="email"
                        name="username"
                        id="username"
                        class="bg-gray-50 border border-gray-300 text-[#6B7280] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                        placeholder="name@gmail.com"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required=""
                      />
                      {usernameError && (
                        <p class="text-sm text-red-500">{usernameError}</p>
                      )}
                    </div>
                    {/* <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="bg-gray-50 border border-gray-300 text-[#6B7280] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required=""
                      />
                      {passwordError && (
                        <p class="text-sm text-red-500">{passwordError}</p>
                      )}

                    </div> */}
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          id="password"
                          className="bg-gray-50 border border-gray-300 text-[#6B7280] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required=""
                        />
                        <button
                          type="button"
                          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                          onClick={handleTogglePassword}
                        >
                          {showPassword ? (
                            <FaRegEye className="w-[25px] h-[25px] text-gray-300" />
                          ) : (
                            <FaRegEyeSlash className="w-[25px] h-[25px] text-gray-300 hover:text-gray-400" />
                          )}
                        </button>
                      </div>
                      {passwordError && (
                        <p className="text-sm text-red-500">{passwordError}</p>
                      )}

                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label
                            for="remember"
                            class="text-gray-500 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <text
                        class="text-sm text-[#34BEB4] font-medium text-primary-600 hover:underline dark:text-primary-500"
                        onClick={openPopup3}
                      >
                        Forgot password?
                      </text>
                    </div>
                    <div>
                      {error && (
                        <p className="mb-2 text-sm text-red-500">{error}</p>
                      )}
                      <button
                        type="submit"
                        class="w-full text-white bg-blue-500 hover:bg-blue-700
                             focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Sign in
                      </button>
                    </div>
                    <p class="text-sm font-light text-[#6B7280] dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <a
                        class="font-medium text-sm text-[#34BEB4] hover:underline dark:text-primary-500"
                        onClick={openPopup2}
                      >
                        Sign up
                      </a>
                    </p>
                    <text className="text-xs mt-2">To ensure a smooth login experience to vm.epictravel.ai web, please use browsers such as Google Chrome and Microsoft Edge.</text>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile view */}
          <div className="sm:block lg:hidden">
            <div class="bg-white scrollbar-hide rounded-3xl cursor-pointer justify-center shadow-3xl items-center lg:mx-[400px] lg:my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <Column className="sm:py-[50px] sm:w-[100%] sm:h-[100%]">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <div className='flex items-center'>
                    <Text className="w-[100%] text-start py-[20px] sm:text-[37px] lg:text-xl text-[#00A19A] font-bold">
                      Sign in to your account
                    </Text>
                    <button className="text-end items-end justify-end">
                      <FaTimes
                        className="sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                        onClick={() => {
                          closePopup1();
                          localStorage.removeItem('customPath');
                        }} />
                    </button>
                  </div>

                  <form class="space-y-6 mt-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        for="username"
                        class="block mb-2 text-[28px] font-medium text-gray-900 dark:text-white"
                      >
                        Your username
                      </label>
                      <input
                        type="email"
                        name="username"
                        id="username"
                        class="bg-gray-50 border border-gray-300 font-regular text-gray-900 text-[28px] rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                        placeholder="Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required=""
                      />
                      {usernameError && (
                        <p class="text-[25px] text-red-500">{usernameError}</p>
                      )}
                      {/* {error && error === "Incorrect password" && <p class="text-sm text-red-500">{error}</p>} */}
                    </div>

                    <div>
                      <label htmlFor="password" className="block mb-2 text-[28px] font-medium text-gray-900 dark:text-white">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          id="password"
                          className="bg-gray-50 border border-gray-300 font-regular text-gray-900 text-[28px] rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required=""
                        />
                        <button
                          type="button"
                          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                          onClick={handleTogglePassword}
                        >
                          {showPassword ? (
                            <FaRegEye className="w-[45px] h-[45px] text-gray-300" />
                          ) : (
                            <FaRegEyeSlash className="w-[45px] h-[45px] text-gray-300 hover:text-gray-400" />
                          )}
                        </button>
                      </div>
                      {passwordError && (
                        <p class="text-[25px] text-red-500">{passwordError}</p>
                      )}
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                      <div class="flex items-center">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            class="w-8 h-8 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div class="ml-3 text-[25px]">
                          <label
                            for="remember"
                            class="text-[#6B7280] dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        class="text-[25px] text-[#34BEB4] font-medium text-primary-600 hover:underline dark:text-primary-500"
                        onClick={openPopup3}
                      >
                        Forgot password?
                      </a>
                    </div>
                    {error && (
                      <p className="mb-2 text-[28px] text-red-500">{error}</p>
                    )}
                    <button
                      type="submit"
                      class="mt-10 w-full  text-white bg-blue-500 hover:bg-blue-700
                             focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold tracking-tighter rounded-lg text-[28px] sm:h-20 px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign in
                    </button>

                    <p class="text-[25px] font-light text-[#6B7280] dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <a
                        href="#"
                        class="disabled font-medium text-[28px] text-[#34BEB4] hover:underline hover:underline-[#34BEB4] dark:text-primary-500"
                        onClick={openPopup2}
                      >
                        Sign up
                      </a>
                    </p>


                  </form>
                </div>
              </Column>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default LoginPage;
