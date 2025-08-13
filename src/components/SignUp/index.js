import { useNavigate } from "react-router-dom";
//import PhoneInput from "react-phone-number-input";
//import PhoneInput from 'react-phone-number-input/input';
import { PhoneInput } from "react-international-phone";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useState, useEffect } from "react";
import axios from "axios";
import { Text } from 'components/index';
import { Row } from "components/Row/index";
import { Column } from 'components/Column/index';
import { FaTimes, FaCheck, FaUserCheck } from "react-icons/fa";
import Icon from "@mdi/react";
import { mdiCheckCircle, mdiAlertCircle } from "@mdi/js";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordChecklist from "react-password-checklist";

const SignupPage = ({ isOpen, closePopup2, openPopup1 }) => {
  const navigate = useNavigate();
  // const [countryCode, setCountryCode] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [parsedNumber, setParsedNumber] = useState({ countryCode: '', phoneNumber: '' });
  const [value, setValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [countryCodeMap, setCountryCodeMap] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [isErrorOpen, setErrorOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleError = () => {
    setErrorOpen(!isErrorOpen);
  };

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phoneNumber: "",
    dtOfBirth: "",
    gender: "",
  });

  const handlePhoneInputChange = (newValue) => {
    setValue(newValue);

    // Parse the phone number from the input value
    const phoneNumber = parsePhoneNumberFromString(newValue);

    if (phoneNumber) {
      setParsedNumber({
        countryCode: `+${phoneNumber.countryCallingCode}`,
        phoneNumber: phoneNumber.nationalNumber,
      });
    } else {
      // Handle invalid phone number
      setParsedNumber({ countryCode: '', phoneNumber: '' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const localPhoneNumber = value ? value.replace("+60", "") : null;

    const data = {
      firstName: firstName,
      lastName: lastName,
      password: password.trim(),
      email: email,
      phoneNumber: {
        phoneNumber: parsedNumber.phoneNumber,
        countryCode: parsedNumber.countryCode,
      },
      dtOfBirth: dateBirth,
      gender: gender,
      website:"https://vm.epictravel.ai"
    };

    console.log("--------------", data);
    console.log(JSON.stringify(data, null, 2));

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Password does not match" });
      return;
    }

    if (password || confirmPassword) {
      const isCapitalLetter = /[A-Z]/.test(password);
      const isLowerCaseLetter = /[a-z]/.test(password);
      const isSpecialCharacter = /[\W_]/.test(password);
      const isNumber = /[0-9]/.test(password);
      const isMinLength = password.length >= 8;

      if (!isCapitalLetter || !isSpecialCharacter || !isNumber || !isMinLength || !isLowerCaseLetter) {
        setErrors({ ...errors, password: "Password does not meet the required criteria." });
        return;
      }
    }

    // Perform form validation before submitting
    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    // // Check if there are any validation errors
    if (Object.keys(validationErrors).length === 0) {
      // If no errors, submit the form
      submitForm(data);

    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Validate first name
    if (data.firstName.trim() === "") {
      errors.firstName = "First name is required";
    }

    // Validate last name
    if (data.lastName.trim() === "") {
      errors.lastName = "Last name is required";
    }

    // Validate password
    if (password === "") {
      errors.password = "Password is required";
    } else {
      // Check each condition using regular expressions
      if (!/[a-z]/.test(password)) {
        errors.password = "Password must contain at least one lowercase letter";
      } else if (!/[A-Z]/.test(password)) {
        errors.password = "Password must contain at least one uppercase letter";
      } else if (!/[0-9]/.test(password)) {
        errors.password = "Password must contain at least one digit";
      } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
      }
    }

    // Validate email
    if (data.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }

    // Validate phone number
    if (!data.phoneNumber || data.phoneNumber.phoneNumber === "") {
      errors.phoneNumber = "Phone number is required";
    }

    // Validate dtOfBirth
    if (data.dtOfBirth === "") {
      errors.dtOfBirth = "Date of birth is required";
    }

    // Validate gender
    if (data.gender === "") {
      errors.gender = "Gender is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const submitForm = (data) => {
    // Your authentication token obtained from the API provider
    const authToken =
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbm1oZzFAZ21haWwuY29tIiwiaWF0IjoxNjg5OTExNTM2LCJleHAiOjE2OTA1MTYzMzYsInJvbGVzIjpbXX0.rOYKMSwsz7ikJK9fFOBb7wFCEwhTd87JPhRDaQ5BsiGptBAssREEDyWVI-YFfd31daRRWwbMt1T5olOcKhj0rQ";

    // Replace 'backend-url' with the actual URL of your backend API endpoint
    const url = "https://halaltravel.ai/ht/api/auth/signupv2";

    // Submit the form data to the server using axios or any other HTTP library
    axios
      .post(url, data)
      .then((response) => {
        // Handle the response from the backend (success)
        console.log("Response:", response.data);

        if (response.status === 201) {
          // Successful signup
          console.log("Account created successfully!", response.data.message);
          toast.success("Account created successfully!");
          toggleModal();
          // You can show a success message to the user or redirect to another page
          // Example: navigate('/success');
          closePopup2();
        }
      })
      .catch((error) => {
        // Handle the error response from the backend (failure)
        if (error.response) {
          console.error("Error Response:", error.response.data);

          if (error.response.status === 400) {
            if (
              error.response.data.message ===
              "Error: email address is already taken"
            ) {
              // Show error message for existing email address
              const errorMessage = "Email address is already taken";
              setErrors({ ...errors, email: errorMessage });
            } else if (
              error.response.data.message === "Fields validation failed"
            ) {
              // Show error messages for invalid fields
              console.error(
                "Fields validation failed:",
                error.response.data.invalidFields
              );

              // Check if there is a validation error for 'phoneNumber'
              const phoneNumberError = error.response.data.invalidFields.find(
                (field) => field.fieldName === "phoneNumber"
              );

              if (
                phoneNumberError &&
                phoneNumberError.validationError === "Invalid phone number"
              ) {
                const errorMessage = "Invalid phone number.";
                setErrors({ ...errors, phoneNumber: errorMessage });
              }

              // Check if there is a validation error for 'firstName'
              const firstNameError = error.response.data.invalidFields.find(
                (field) => field.fieldName === "firstName"
              );

              if (
                firstNameError &&
                firstNameError.validationError === "Field is required"
              ) {
                const errorMessage = "First name is required.!!!!!";
                setErrors({ ...errors, firstName: errorMessage });
              }

              // Check if there is a validation error for 'lastName'
              const lastNameError = error.response.data.invalidFields.find(
                (field) => field.fieldName === "lastName"
              );

              if (
                lastNameError &&
                lastNameError.validationError === "Field is required"
              ) {
                const errorMessage = "Last name is required.";
                setErrors({ ...errors, lastName: errorMessage });
              }

              // Check if there is a validation error for 'password'
              const passwordError = error.response.data.invalidFields.find(
                (field) => field.fieldName === "password"
              );

              if (
                passwordError &&
                passwordError.validationError === "Field is required"
              ) {
                const errorMessage = "Password is required.";
                setErrors({ ...errors, password: errorMessage });
              }

              // Check if there is a validation error for 'gender'
              const genderError = error.response.data.invalidFields.find(
                (field) => field.fieldName === "gender"
              );

              if (
                genderError &&
                genderError.validationError === "Field is required"
              ) {
                const errorMessage = "Gender is required.";
                setErrors({ ...errors, gender: errorMessage });
              }
            }
          }
        } else {
          console.error("Error:", error.message);
          toast.error("Account unsuccessfully created!");
          toggleError();
        }
      });

    // Redirect to the home page after successful do acc
    //navigate("/login");
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      {isOpen ? (
        <>
          <div className="font-montserrat bg-gray-50 xs:top-0 lg:top-0 rounded-3xl cursor-pointer justify-center shadow-3xl items-center lg:mx-[200px] xl:mx-[400px] 2xl:[600px] lg:my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {/*Content title*/}

            <Column className="sm:py-[50px]  sm:w-[100%] sm:h-[100%] lg:py-[10px] lg:w-[100%] lg:h-fit">
              <div className='flex sm:mx-8 lg:mx-[60px] items-center'>
                <Text className="w-[100%] text-start py-[20px] sm:text-[37px] lg:text-xl text-[#00A19A] font-bold">
                  Create your account
                </Text>
                <button className="text-end items-end justify-end">
                  <FaTimes
                    className="sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                    onClick={closePopup2}
                  />
                </button>
              </div>

              {/* Web view */}
              <div className="mx-[60px] sm:hidden lg:block xl:block 2xl:block">
                <form
                  className="space-y-2 mb-4"
                  action="#"
                  onSubmit={handleSubmit}
                >

                  <Row className="space-x-5 w-[100%]">
                    <div className="w-[50%]">
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="w-[100%] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {errors.firstName && (
                        <div className="text-[#e63946]">{errors.firstName}</div>
                      )}
                    </div>
                    <div className="w-[50%]">
                      <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="w-[100%] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      {errors.lastName && (
                        <div className="text-[#e63946]">{errors.lastName}</div>
                      )}
                    </div>
                  </Row>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <div className="text-[#e63946]">{errors.email}</div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
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
                          <FaRegEye className="sm:w-[45px] sm:h-[45px] lg:w-[25px] lg:h-[25px] text-gray-300 hover:text-gray-400" />
                        ) : (
                          <FaRegEyeSlash className="sm:w-[45px] sm:h-[45px] lg:w-[25px] lg:h-[25px] text-gray-300" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <div className="text-[#e63946]">{errors.password}</div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="confirm_password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirm_password"
                        id="confirm_password"
                        className="bg-gray-50 border border-gray-300 text-[#6B7280] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                        placeholder="Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required=""
                      />
                      <button
                        type="button"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                        onClick={handleToggleConfirmPassword}
                      >
                        {showConfirmPassword ? (
                          <FaRegEye className="sm:w-[45px] sm:h-[45px] lg:w-[25px] lg:h-[25px] text-gray-300 hover:text-gray-400" />
                        ) : (
                          <FaRegEyeSlash className="sm:w-[45px] sm:h-[45px] lg:w-[25px] lg:h-[25px] text-gray-300" />
                        )}
                      </button>
                    </div>
                    <div className='py-4'>
                      <PasswordChecklist
                        rules={[
                          "capital",
                          "match",
                          "specialChar",
                          "minLength",
                          "lowercase",
                          "number",
                        ]}
                        minLength={8}
                        value={password}
                        valueAgain={confirmPassword}
                        messages={{
                          minLength: "Password must be 8 or more characters in length.",
                          specialChar:
                            "Password should contain at least one special character.",
                          number: "Password must contain at least one numeric letter.",
                          capital: "Password should contain at least one uppercase letter.",
                          match: "Password and confirm password should match.",
                          lowercase: "Password must contain at least one lowercase letter.",
                        }}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <div className="text-[#e63946]">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      type="tel"
                      international
                      defaultCountry="my"
                      // disableFormatting={true}
                      // disableDialCodeAndPrefix={true}
                      // showDisabledDialCodeAndPrefix={true}
                      value={value}
                      className="custom-phone-input"
                      onChange={handlePhoneInputChange}
                    />
                    {errors.phoneNumber && (
                      <div className="text-[#e63946]">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="dtOfBirth"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dtOfBirth"
                      id="dtOfBirth"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      value={dateBirth}
                      onChange={(e) => setDateBirth(e.target.value)}
                    />
                    {errors.dtOfBirth && (
                      <div className="text-[#e63946]">{errors.dtOfBirth}</div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gender
                    </label>
                    <select
                      type="dropdown"
                      name="gender"
                      id="gender"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      value={gender} // Bind the 'gender' state to the value attribute
                      onChange={(e) => setGender(e.target.value)} // Update 'gender' state on change
                    >
                      <option value=" ">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="not say">I'd rather not to say</option>
                    </select>
                    {errors.gender && (
                      <div className="text-[#e63946]">{errors.gender}</div>
                    )}
                  </div>

                  {/* Rest of your form fields */}
                  <div className="flex items-start mb-4">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        onChange={handleCheckboxChange}
                        checked={isChecked}
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          class="font-medium text-[#34BEB4] hover:underline dark:text-primary-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" mb-3 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    disabled={!isChecked}
                  //  onClick={handleNavigate1}
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="/#"
                      className="font-medium text-[#34BEB4] hover:underline dark:text-primary-500"
                      onClick={openPopup1}
                    >
                      Login here
                    </a>
                  </p>
                  <text className="text-xs mt-2 ">To ensure a smooth sign up experience to vm.epictravel.ai web, please use browsers such as Google Chrome and Microsoft Edge.</text>
                  {/* <button type="submit">Submit</button> */}
                </form>
              </div>
              {/* Mobile view */}
              <div className="sm:block lg:hidden mx-8">
                <form
                  className="space-y-6 mt-4"
                  action="#"
                  onSubmit={handleSubmit}
                >
                  <Row className="space-x-5 w-[100%]">
                    <div className="w-[50%]">
                      <label
                        htmlFor="first_name"
                        className="mx-2 block mb-2 text-[28px] font-medium text-gray-900 dark:text-white"
                      >
                        First Name
                      </label>
                      {errors.firstName && (
                        <div class="mx-2 text-red-500 text-[25px] flex mb-2">
                          <Icon
                            path={mdiAlertCircle}
                            size={1.5}
                            className="mr-1"
                          />
                          {errors.firstName}
                        </div>
                      )}
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 font-regular text-gray-900 text-[28px] rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    <div className="w-[50%]">
                      <label
                        htmlFor="last_name"
                        className="mx-2 block mb-2 text-[28px] font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      {errors.lastName && (
                        <div class="mx-2 text-red-500 text-[25px] flex mb-2">
                          <Icon
                            path={mdiAlertCircle}
                            size={1.5}
                            className="mr-1"
                          />
                          {errors.lastName}
                        </div>
                      )}
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 font-regular text-gray-900 text-[28px] rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </Row>
                  <div>
                    <label
                      htmlFor="email"
                      className="mx-2 block mb-2 text-[28px] font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    {errors.email && (
                      <div class="mx-2 text-red-500 text-[25px] flex mb-2">
                        <Icon
                          path={mdiAlertCircle}
                          size={1.5}
                          className="mr-1"
                        />
                        {errors.email}
                      </div>
                    )}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 font-regular text-gray-900 text-[28px] rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mx-2 block mb-2 text-[25px] font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    {errors.password && (
                      <div class="mx-2 text-red-500 text-[25px] flex mb-2">
                        <Icon
                          path={mdiAlertCircle}
                          size={1.5}
                          className="mr-1"
                        />
                        {errors.password}
                      </div>
                    )}
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
                  </div>

                  <div>
                    <label
                      htmlFor="confirm_password"
                      className="mx-2 block mb-2 text-[28px] font-medium text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    {errors.confirmPassword && (
                      <div class="mx-2 text-red-500 text-[25px] flex mb-2">
                        <Icon
                          path={mdiAlertCircle}
                          size={1.5}
                          className="mr-1"
                        />
                        {errors.confirmPassword}
                      </div>
                    )}
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirm_password"
                        id="confirm_password"
                        className="bg-gray-50 border border-gray-300 font-regular text-gray-900 text-[28px] rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                        placeholder="Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required=""
                      />
                      <button
                        type="button"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                        onClick={handleToggleConfirmPassword}
                      >
                        {showConfirmPassword ? (
                          <FaRegEye className="w-[45px] h-[45px] text-gray-300" />
                        ) : (
                          <FaRegEyeSlash className="w-[45px] h-[45px] text-gray-300 hover:text-gray-400" />
                        )}
                      </button>
                    </div>
                    <div className='py-4 text-[25px]'>
                      <PasswordChecklist
                        rules={[
                          "capital",
                          "match",
                          "specialChar",
                          "minLength",
                          "lowercase",
                          "number",
                        ]}
                        minLength={8}
                        value={password}
                        valueAgain={confirmPassword}
                        messages={{
                          minLength: "Password must be 8 or more characters in length.",
                          specialChar:
                            "Password should contain at least one special character.",
                          number: "Password must contain at least one numeric letter.",
                          capital: "Password should contain at least one uppercase letter.",
                          match: "Password and confirm password should match.",
                          lowercase: "Password must contain at least one lowercase letter.",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="mx-2 block mb-2 text-[25px] font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    {errors.phoneNumber && (
                      <div class="mx-2 text-red-500 text-[25px] flex mb-2">
                        <Icon
                          path={mdiAlertCircle}
                          size={1.5}
                          className="mr-1"
                        />
                        {errors.phoneNumber}
                      </div>
                    )}
                    <PhoneInput
                      type="tel"
                      international
                      defaultCountry="my"
                      // disableFormatting={true}
                      // disableDialCodeAndPrefix={true}
                      // showDisabledDialCodeAndPrefix={true}
                      value={value}
                      className="custom-phone-input"
                      onChange={handlePhoneInputChange}
                    />

                  </div>

                  <div>
                    <label
                      htmlFor="dtOfBirth"
                      className="mx-2 block mb-2 text-[28px] font-medium text-gray-900 dark:text-white"
                    >
                      Date of Birth
                    </label>
                    {errors.dtOfBirth && (
                      <div class="mx-2 text-red-500 text-[25px] flex mb-2">
                        <Icon
                          path={mdiAlertCircle}
                          size={1.5}
                          className="mr-1"
                        />
                        {errors.dtOfBirth}
                      </div>
                    )}
                    <input
                      type="date"
                      name="dtOfBirth"
                      id="dtOfBirth"
                      className="bg-gray-50 border border-gray-300 text-start text-gray-900 text-[28px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      value={dateBirth}
                      onChange={(e) => setDateBirth(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="gender"
                      className="mx-2 block mb-2 text-[28px] font-medium text-gray-900 dark:text-white"
                    >
                      Gender
                    </label>
                    {errors.gender && (
                      <div class="mx-2 text-red-500 text-[25px] flex mb-2">
                        <Icon
                          path={mdiAlertCircle}
                          size={1.5}
                          className="mr-1"
                        />
                        {errors.gender}
                      </div>
                    )}
                    <select
                      type="dropdown"
                      name="gender"
                      // id="gender"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-[28px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      value={gender} // Bind the 'gender' state to the value attribute
                      onChange={(e) => setGender(e.target.value)} // Update 'gender' state on change
                    >
                      <option value=" ">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="not say">I'd rather not to say</option>
                    </select>
                  </div>

                  {/* Rest of your form fields */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-8 h-8 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        onChange={handleCheckboxChange}
                        checked={isChecked}
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-[25px]">
                      <label
                        for="terms"
                        className="font-light text-[25px] text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          class="font-medium text-[#34BEB4] hover:underline dark:text-primary-500"
                          href="/terms-service"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" mb-3 text-white h-20 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold tracking-tighter rounded-lg text-[28px] w-full px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    disabled={!isChecked}
                  //  onClick={handleNavigate1}
                  >
                    Create an account
                  </button>
                  <p className="text-[25px] font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="/#"
                      className="font-medium text-[28px] text-[#34BEB4] hover:underline dark:text-primary-500"
                      onClick={openPopup1}
                    >
                      Login here
                    </a>
                  </p>
                  {/* <button type="submit">Submit</button> */}
                </form>
              </div>

            </Column>
          </div>

          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        " "
      )}
      {isModalOpen && (
        <div
          data-te-modal-init
          className="fixed left-0 top-0 z-[1055] flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-70"
        >
          <div
            data-te-modal-dialog-ref
            className="xs:w-[700px] lg:w-[500px] w-full mx-4 bg-white rounded-md shadow-lg"
          >
            {/* Modal Content */}
            <div className="text-center p-4 ">
              <div className='p-2 items-center'>
                <FaUserCheck size={30} className="text-[#00A19A]" />
              </div>
              <h1 className="xs:text-[32px] lg:text-[22px] font-medium leading-normal text-gray-800">
                Activate your account </h1>
              <p className="text-gray-600 xs:text-[24px] lg:text-[14px]">
                We have sent a verification email to {email}.<br />
                Open the email and verify your account.
              </p>

            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-4 bg-gray-100 rounded-b-md">
              <button
                type="button"
                onClick={toggleModal}
                className="mr-2 inline-block bg-[#00A19A] px-6 py-2 xs:text-[18px] lg:text-[12px] font-medium uppercase leading-normal text-white hover:text-white bg-white-300 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isErrorOpen && (
        <div
          data-te-modal-init
          className="fixed left-0 top-0 z-[1055] flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-70"
        >
          <div
            data-te-modal-dialog-ref
            className="xs:w-[700px] lg:w-[500px] w-full mx-4 bg-white rounded-md shadow-lg"
          >
            {/* Modal Content */}
            <div className="p-4">
              <h5 className="xs:text-[30px] lg:text-[20px] font-bold leading-normal text-gray-800">
                ERROR
              </h5>
              <br></br>
              <h5 className="xs:text-[28px] lg:text-[18px] font-medium leading-normal text-gray-800">
                An error has occurred. Please try again.
              </h5>
              {/* Add your modal content here */}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-4 bg-gray-100 rounded-b-md">
              <button
                type="button"
                onClick={toggleError}
                className="mr-2 inline-block bg-[#ED5951] px-6 py-2 xs:text-[18px] lg:text-[12px] font-medium uppercase leading-normal text-white hover:text-white bg-white-300 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPage;
