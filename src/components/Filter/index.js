import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "AuthContext";
import { Row } from "components/Row/index";
import { Column } from "components/Column/index";
import { Text } from "components/index";
import { FaShoppingCart, FaThumbtack, FaTimes, FaCheck } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const FilterPage = ({ isOpenFilter, closeFilter, address, state, country }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useAuth();
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    setError("");
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

          // Redirect to the home page after successful login
          //navigate("/");
          closeFilter();
        }
      })

      .catch((error) => {
        // Handle the error response from the backend (failure)
        console.log("ERROR: ", error);

        if (error.response) {
          console.error("Error Response:", error.response.data);

          // Handle different error scenarios
          if (error.response.status === 401) {
            if (error.response.data.errorMessage === "Username not found") {
              setError("Username not found. Please check your email.");
              console.log(
                "error 401 username: ",
                error.response.data.errorMessage
              );
            } else if (
              error.response.data.errorMessage === "Incorrect password"
            ) {
              setError("Incorrect password. Please try again.");
              console.log(
                "error 401 password: ",
                error.response.data.errorMessage
              );
            }
          } else if (error.response.status === 400) {
            // Handle validation errors
            setError("Fields validation failed. Please check the form fields.");
            console.log("error 400 ");
          }
        } else {
          console.log("other error");
        }
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

  // Travelplan
  const [destination, setDestination] = useState(address);
  const [state1, setState] = useState(state);
  const [country1, setCountry] = useState(country);

  const [days, setDays] = useState("");
  const [language, setLanguage] = useState("");
  const [attractions, setAttractions] = useState([]);
  const [interests, setInterests] = useState([]);
  const [selectedAttraction, setSelectedAttraction] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [showInterests, setShowInterests] = useState(false);

  useEffect(() => {
    // Fetch initial attractions when the component mounts
    fetchAttractions();
  }, []);

  const fetchAttractions = async () => {
    try {
      const response = await axios.get(
        "https://halaltravel.ai/hu/api/chatgpt/attraction"
      );
      setAttractions(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  const fetchInterests = async (selectedAttractions) => {
    // Send a POST request with the selected attractions
    try {
      const response = await axios.post(
        "https://halaltravel.ai/hu/api/chatgpt/interests",
        selectedAttractions
      );

      if (response.status === 200) {
        setInterests(response.data);
      } else {
        console.error("Error fetching interests:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching interests:", error);
    }
  };

  useEffect(() => {
    // Fetch interests based on the selected attractions whenever selectedAttractions change
    fetchInterests(selectedAttraction);
  }, [selectedAttraction]);

  const handleAttractionClick = (attraction) => {
    // Check if the attraction is already selected
    if (selectedAttraction.includes(attraction)) {
      // If it is selected, remove it from the selected attractions
      setSelectedAttraction(
        selectedAttraction.filter((item) => item !== attraction)
      );
    } else {
      // If it is not selected, add the attraction to the selected attractions
      setSelectedAttraction([...selectedAttraction, attraction]);
    }
  };

  const handleInterestClick = (interest) => {
    // Check if the interest is already selected
    if (selectedInterest.includes(interest)) {
      // If it is selected, remove it from the selected interests
      setSelectedInterest(selectedInterest.filter((item) => item !== interest));
    } else {
      // If it is not selected, add the interest to the selected interests
      setSelectedInterest([...selectedInterest, interest]);
    }
  };
  const dataSelected = {
    attractions: selectedAttraction,
    interests: selectedInterest,
  };


  // function handleApply() {
  //  closeFilter();
  //  navigate(`/list-travelplan/${destination}/${state1}/${country1}`, {state :dataSelected});
  // }

  function handleApply() {
    closeFilter();
    if (state) {
      navigate(`/list-travelplan/${destination}/${state1}/${country1}`, { state: dataSelected });
    } else {
      navigate(`/list-travelplan/${destination}/${country1}`, { state: dataSelected });
    }
  };


console.log("data:", dataSelected)
  console.log("SelectedAttraction: ", selectedAttraction);
  console.log("SelectedInterest: ", selectedInterest);
  return (
    <>
      {isOpenFilter ? (
        <>
          <div className="md:hidden lg:block 2xl:block cursor-pointer justify-center shadow-3xl rounded-3xl  md:mx-0 lg:mx-0 lg:mr-0 lg:ml-[860px] my-[0px] flex-nowrap overflow-x-hidden  fixed inset-0 z-50 outline-none focus:outline-none">
            <div class="flex flex-col items-center justify-center sm:pt-2 mx-auto md:h-screen lg:py-0">
              <div class="h-full w-full overflow-y-auto bg-white rounded-lg shadow shadow-[#00a19a] shadow-xs shadow:opacity-50 dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <Row>
                    <h1 class="w-[95%] block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      FILTER BY:
                    </h1>
                    <FaTimes
                      className="w-[5%] text-right h-5  text-black common-pointer"
                      onClick={closeFilter}
                    />
                  </Row>
                  <div className="mx-[0px] mt-6">
                    <label
                      htmlFor="typeofattraction"
                      className="font-medium sm:text-[28px] lg:text-[14px]"
                    >
                      Select Attractions:
                    </label>
                    <div className="font-montserrat tracking-tighter flex flex-wrap gap-2 items-center lg:mt-[8px] xl:mt-[10px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      {attractions.map((attraction, index) => (
                        <button
                          key={index}
                          value={attraction}
                          className={`border sm:text-[28px] lg:text-[14px] ${
                            selectedAttraction.includes(attraction)
                              ? "bg-teal-500 text-white"
                              : ""
                          } hover:bg-teal-500 hover:text-white rounded-xl px-5 py-1 sm:h-20 lg:h-9 border-teal-500`}
                          onClick={() => handleAttractionClick(attraction)}
                        >
                          {attraction}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mx-[0px] mt-6">
                    <label
                      htmlFor="typeofattraction"
                      className="font-medium sm:text-[28px] lg:text-[14px]"
                    >
                      Select Interests:
                    </label>
                    <div className="font-montserrat tracking-tighter flex flex-wrap gap-2 items-center lg:mt-[8px] xl:mt-[10px] 2xl:mt-[14px] 3xl:mt-[22px] w-[100%]">
                      {interests.map((interest, index) => (
                        <button
                          key={index}
                          value={interest}
                          className={`border sm:text-[28px] lg:text-[14px] ${
                            selectedInterest.includes(interest)
                              ? "bg-teal-500 text-white"
                              : ""
                          } hover:bg-teal-500 hover:text-white rounded-xl px-5 py-1 sm:h-20 lg:h-9 border-teal-500`}
                          onClick={() => handleInterestClick(interest)}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* <hr></hr>
                  <div>
                    <h1 class="w-[95%] block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      FILTER BY CONTENT TYPE
                    </h1>
                    <div class="w-[50%] flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                      <input
                        id="bordered-checkbox-1"
                        type="checkbox"
                        value=""
                        name="bordered-checkbox"
                        class="mx-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="bordered-checkbox-1"
                        class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Travel Plan
                      </label>
                    </div>
                    <div class="w-[50%] mt-2 flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                      <input
                        id="bordered-checkbox-2"
                        type="checkbox"
                        value=""
                        name="bordered-checkbox"
                        class="mx-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="bordered-checkbox-2"
                        class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Travel Blog
                      </label>
                    </div>
                  </div> */}
                 
                  <Row className="justify-between lg:mb-3 mx-[0px] text-end mt-[30px] ">
                    <button className="bg-[#00A19A] md:text-[30px] lg:text-[14px] justify-end items-end lg:w-[20%] md:w-[20%] text-white font-medium px-4 py-1.5 rounded-lg ">
                      Reset
                    </button>
                    <button
                      className="bg-[#00A19A] md:text-[30px] lg:text-[14px] justify-end items-end lg:w-[25%] md:w-[20%] text-center text-white font-medium px-4 py-1.5 rounded-lg "
                      onClick={handleApply}
                    >
                      Apply
                    </button>
                  </Row>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:block lg:hidden">
            <div class="bg-gray-50  scrollbar-hide rounded-3xl cursor-pointer justify-center shadow-3xl items-center lg:mx-[400px] lg:my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <Column className="sm:py-[50px] sm:w-[100%] sm:h-[100%]">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <div className="flex items-center">
                    <Text className="w-[100%] mx-[60px] text-start py-[20px] sm:text-[37px] lg:text-xl text-black font-bold">
                      FILTER BY:
                    </Text>
                    <button className="text-end items-end justify-end">
                      <FaTimes
                        className="sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                        onClick={closeFilter}
                      />
                    </button>
                  </div>
                  <div className="mx-[60px] mt-6">
                    <label
                      htmlFor="typeofattraction"
                      className="font-medium sm:text-[28px] lg:text-[14px]"
                    >
                      Select Attractions:
                    </label>
                    <div className="mt-6 font-montserrat tracking-tighter flex flex-wrap gap-2 items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                      {attractions.map((attraction, index) => (
                        <button
                          key={index}
                          value={attraction}
                          className={`m-1 border sm:text-[28px] lg:text-[14px] ${
                            selectedAttraction.includes(attraction)
                              ? "bg-teal-500 text-white"
                              : ""
                          } hover:bg-teal-500 hover:text-white rounded-xl px-5 py-1 sm:h-20 lg:h-9 ${
                            selectedAttraction.length === 3 &&
                            !selectedAttraction.includes(attraction)
                              ? "bg-gray-300 text-gray-500 border-gray-300 hover:bg-gray-300 hover:text-gray-500 hover:border-gray-300 cursor-not-allowed"
                              : "border-teal-500"
                          }`}
                          onChange={(e) => setAttractions(e.target.value)}
                          onClick={() => handleAttractionClick(attraction)}
                          disabled={
                            selectedAttraction.length === 5 &&
                            !selectedAttraction.includes(attraction)
                          }
                        >
                          {attraction}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mx-[60px] mt-6">
                    <label
                      htmlFor="typeofattraction"
                      className="font-medium sm:text-[28px] lg:text-[14px] "
                    >
                      Select Interests:
                    </label>
                    <div className=" mt-6 font-montserrat tracking-tighter flex flex-wrap gap-2 items-center w-[100%]">
                      {interests.map((interest, index) => (
                        <button
                          key={index}
                          value={interest}
                          className={`m-1 border sm:text-[28px] lg:text-[14px] ${
                            selectedInterest.includes(interest)
                              ? "bg-teal-500 text-white"
                              : ""
                          } hover:bg-teal-500 hover:text-white rounded-xl px-5 py-1 sm:h-20 lg:h-9 ${
                            selectedInterest.length === 5 &&
                            !selectedInterest.includes(interest)
                              ? "bg-gray-300 text-gray-500 border-gray-300 hover:bg-gray-300 hover:text-gray-500 hover:border-gray-300 cursor-not-allowed"
                              : "border-teal-500"
                          }`}
                          onClick={() => handleInterestClick(interest)}
                          disabled={
                            selectedInterest.length === 5 &&
                            !selectedInterest.includes(interest)
                          }
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* <hr></hr>
                  <div className="mx-[60px]">
                    <h1 class="w-[95%]  font-bold mb-2 sm:text-[37px] lg:text-[16px] lg:mb-2 sm:mb-6 text-gray-900 dark:text-white">
                      FILTER BY CONTENT TYPE
                    </h1>
                    <div class="w-[50%] mt-6 flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                      <input
                        id="bordered-checkbox-1"
                        type="checkbox"
                        value=""
                        name="bordered-checkbox"
                        class="mx-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="bordered-checkbox-1"
                        class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Travel Plan
                      </label>
                    </div>
                    <div class="w-[50%] mt-2 flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                      <input
                        id="bordered-checkbox-2"
                        type="checkbox"
                        value=""
                        name="bordered-checkbox"
                        class="mx-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="bordered-checkbox-2"
                        class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Travel Blog
                      </label>
                    </div>
                  </div> */}
                  <Row className="justify-between lg:mb-3 mx-[0px] text-end mt-[30px] ">
                    <button className="bg-[#00A19A] md:text-[30px] lg:text-[14px] justify-end items-end lg:w-[20%] md:w-[20%] text-white font-medium px-4 py-1.5 rounded-lg ">
                      Reset
                    </button>
                    <button
                      className="bg-[#00A19A] md:text-[30px] lg:text-[14px] justify-end items-end lg:w-[25%] md:w-[20%] text-center text-white font-medium px-4 py-1.5 rounded-lg "
                      onClick={handleApply}
                    >
                      Apply
                    </button>
                  </Row>
                </div>
              </Column>
            </div>
          </div>

          <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default FilterPage;
