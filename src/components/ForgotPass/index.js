import React, { useState, useEffect } from "react";
import { Row } from "components/Row/index";
import { Column } from 'components/Column/index';
import { Text } from 'components/index';
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import Icon from "@mdi/react";
import { mdiCheckCircle, mdiAlertCircle } from "@mdi/js";

const ForgotPassword = ({ isOpen, closePopup3 }) => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object with the email
    const data = { email };

    try {
      // Make a POST request to your API endpoint
      const response = await axios.post(
        "https://halaltravel.ai/ht/api/auth/resetPassword",
        data
      );

      if (response.status === 200) {
        // Email sent successfully
        console.log("success");
        setSuccessMessage("Email has been sent successfully.");
        setErrorMessage(""); // Clear any previous error message
      }

      // Close the popup or perform other actions as needed
      // closePopup3();
    } catch (error) {
      // Handle any errors
      setErrorMessage("No user found with the given email.");
      setSuccessMessage(""); // Clear any previous success message
    }
  };



  return (
    <>
      {isOpen ? (
        <>
          {/* Web view */}
          <div className="sm:hidden xl:block 2xl:block cursor-pointer justify-center shadow-3xl rounded-3xl items-center sm:mx-[0] lg:mx-[300px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div class="flex flex-col items-center justify-center sm:pt-2 mx-auto md:h-screen lg:py-0">
              <div class="w-full bg-white rounded-lg shadow shadow-[#00a19a] shadow-xs shadow:opacity-50 dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 sm:p-8">

                  <div className='flex items-center'>
                    <Text className="w-[100%] text-start py-[20px] sm:text-[37px] lg:text-xl text-[#00A19A] font-bold">
                      Forgot your password?
                    </Text>
                    <button className="text-end items-end justify-end">
                      <FaTimes
                        className="sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                        onClick={() => {
                          setEmail(""); // Reset the email input
                          setSuccessMessage(""); // Reset the success message
                          setErrorMessage("");
                          closePopup3(); // Close the popup
                        }}
                      />
                    </button>
                  </div>

                  <form class="" onSubmit={handleSubmit}>
                    <div>
                      <label
                        for="email"
                        class="mb-2 mx-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email address
                      </label>
                      {successMessage && (
                        <div class="mx-2 text-green-500 flex mb-2">
                          <Icon
                            path={mdiCheckCircle}
                            size={0.9}
                            className="mr-1"
                          />
                          {successMessage}
                        </div>
                      )}

                      {errorMessage && (
                        <div class="mx-2 text-red-500 flex mb-2">
                          <Icon
                            path={mdiAlertCircle}
                            size={0.9}
                            className="mr-1"
                          />
                          {errorMessage}
                        </div>
                      )}
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                        placeholder="user@example.com"
                        required=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {/* {error && error === "Incorrect password" && <p class="text-sm text-red-500">{error}</p>} */}
                    </div>

                    <text class="mt-2 mx-2 text-gray-500 font-thin block text-xs dark:text-white">
                      To reset your password, please enter your email address — we’ll send you a link to
                      reset it.
                    </text>

                    <button
                      type="submit"
                      class="mt-10 w-full text-white bg-blue-500 hover:bg-blue-700
                             focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold tracking-tighter rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Send Link
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* mobile view */}
          <div className="sm:block lg:hidden">
            <div class="bg-white scrollbar-hide rounded-3xl cursor-pointer justify-center shadow-3xl items-center lg:mx-[400px] lg:my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <Column className="sm:py-[50px] sm:w-[100%] sm:h-[100%]">
                <div class="p-8">
                  <div className='flex items-center'>
                    <Text className="w-[100%] text-start py-[20px] sm:text-[37px] lg:text-xl text-[#00A19A] font-bold">
                      Forgot your password?
                    </Text>
                    <button className="text-end items-end justify-end">
                      <FaTimes
                        className="sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                        onClick={() => {
                          setEmail(""); // Reset the email input
                          setSuccessMessage(""); // Reset the success message
                          setErrorMessage("");
                          closePopup3(); // Close the popup
                        }}
                      />
                    </button>
                  </div>

                  <form class=" mt-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        for="email"
                        class="mb-2 mx-2 block text-[28px] font-medium text-gray-900 dark:text-white"
                      >
                        Email address
                      </label>
                      {successMessage && (
                        <div class="mx-2 text-green-500 text-[25px] flex mb-2">
                          <Icon
                            path={mdiCheckCircle}
                            size={1.5}
                            className="mr-1"
                          />
                          {successMessage}
                        </div>
                      )}

                      {errorMessage && (
                        <div class="mx-2 text-red-500 text-[25px] flex mb-2">
                          <Icon
                            path={mdiAlertCircle}
                            size={1.5}
                            className="mr-1"
                          />
                          {errorMessage}
                        </div>
                      )}
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-[28px] rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                        placeholder="user@example.com"
                        required=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {/* {error && error === "Incorrect password" && <p class="text-sm text-red-500">{error}</p>} */}
                    </div>

                    <text class="mt-2 mx-2 text-gray-500 font-thin block text-[22px] text-justify">
                      To reset your password, please enter your email address — we’ll send you a link to
                      reset it.
                    </text>

                    <button
                      type="submit"
                      class="mt-10 w-full h-20 text-white bg-blue-500 hover:bg-blue-700
                             focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold tracking-tighter rounded-lg text-[28px] px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Send Link
                    </button>
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

export default ForgotPassword;
