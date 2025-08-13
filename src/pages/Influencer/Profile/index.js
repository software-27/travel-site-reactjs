import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from "AuthContext";
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import LoginPage from 'components/Login/index';
import SignupPage from 'components/SignUp/index';
import { Row } from "components/Row/index";
// import PhoneInput from "react-phone-number-input";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import PasswordChecklist from "react-password-checklist";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { parsePhoneNumberFromString } from 'libphonenumber-js';


const Profile = () => {
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

    const userId = localStorage.getItem("userId");
    const [username, setUsername] = useState("");
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState('');
    const [newCountryCode, setNewCountryCode] = useState('');
    const [parsedNumber, setParsedNumber] = useState({ countryCode: '', phoneNumber: '' });
    const [value, setValue] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState({
    //     countryCode: "",
    //     phoneNumber: ""
    // });

    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [showcurrentPassword, setShowCurrentPassword] = useState(false);
    const [shownewPassword, setShowNewPassword] = useState(false);
    const [showconfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [gender, setGender] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const { setIsLoggedIn } = useAuth();
    const [error, setError] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);
    const [isErrorOpen, setErrorOpen] = useState(false);
    const [valid, setValid] = useState(true);
    const handleTogglePassword = () => {
        setShowCurrentPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleTogglePassword2 = () => {
        setShowNewPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleTogglePassword3 = () => {
        setShowConfirmNewPassword((prevShowPassword) => !prevShowPassword);
    };

    function handleSetPassword(event) {
        setNewPassword(event.target.value);
    }
    function handleSetMatchPassword(event) {
        setConfirmNewPassword(event.target.value);
    }

    const handlePhoneNumChange = (value) => {
        setPhoneNumber({
            ...phoneNumber,
            phoneNumber: value
        });
    };

    const handleCountryCodeChange = (value) => {
        setPhoneNumber({
            ...phoneNumber,
            countryCode: value
        });
    };

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


    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const toggleError = () => {
        setErrorOpen(!isErrorOpen);
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        let newPasswordError = '';

        switch (name) {
            case 'first_name':
                setFirstName(value);
                break;
            case 'last_name':
                setLastName(value);
                break;
            case 'dtOfBirth':
                setDateBirth(value);
                break;
            case 'gender':
                setGender(value);
                break;
            case 'currentPassword':
                setCurrentPassword(value);
                break;
            case 'newPassword':
                if (!value || value.length < 8) {
                    newPasswordError = 'Password must be 8 or more characters in length.';
                } else if (!/[A-Z]/.test(value)) {
                    newPasswordError = 'Password must contain 1 or more uppercase characters.';
                } else if (!/[a-z]/.test(value)) {
                    newPasswordError = 'Password must contain 1 or more lowercase characters.';
                } else if (!/[\W_]/.test(value)) {
                    newPasswordError = 'Password must contain 1 or more special characters.';
                }
                setNewPassword(value);
                setNewPasswordError(newPasswordError);
                break;
            case 'confirmNewPassword':
                setConfirmNewPassword(value);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            axios
                .get(`https://halaltravel.ai/ht/api/profile/${userId}`)
                .then((response) => {
                    const data = response.data;
                    const firstName = data.firstName;
                    const lastName = data.lastName;
                    const email = data.email;
                    const gender = data.gender;
                    const dateBirth = data.dtOfBirth;
                    const phoneNumberData = data.phoneNumber;
                    const { countryCode, phoneNumber } = data.phoneNumber;
                    const code = data.phoneNumber.countryCode;
                    const phone = data.phoneNumber.phoneNumber;
                    const formattedPhoneNumber = code + ' ' + phone;

                    setFirstName(firstName);
                    setLastName(lastName);
                    setEmail(email);
                    setGender(gender);
                    setDateBirth(dateBirth);
                    setPhoneNumber(formattedPhoneNumber);
                    setCountryCode(code);
                    setPhone(phone);

                    // console.log("phone", phoneNumber);
                    // console.log("countryCode: ", code);
                    // console.log("countryCode: ", countryCode);
                    // console.log("phoneNumber: ", phone);

                })
                .catch((error) => {
                    setError(error);
                    console.error("Error fetching profile data:", error);
                });
        }
    }, [userId, isLoggedIn]);


    const handleUpdate = async () => {
        const token = localStorage.getItem("token");

        if ((newPassword || confirmNewPassword) && newPassword !== confirmNewPassword) {
            setNewPasswordError("Password does not meet the required criteria.");
            toggleError();
            return;
        }

        if (newPassword || confirmNewPassword) {
            const isCapitalLetter = /[A-Z]/.test(newPassword);
            const isLowerCaseLetter = /[a-z]/.test(newPassword);
            const isSpecialCharacter = /[\W_]/.test(newPassword);
            const isNumber = /[0-9]/.test(newPassword);
            const isMinLength = newPassword.length >= 8;

            if (!isCapitalLetter || !isSpecialCharacter || !isNumber || !isMinLength || !isLowerCaseLetter) {
                setNewPasswordError("Password does not meet the required criteria.");
                toggleError();
                return;
            }
        }

        // console.log("countryCode UPDATE: ", countryCode);
        const requestBody = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: {
                phoneNumber: parsedNumber.phoneNumber,
                countryCode: parsedNumber.countryCode,
            },
            dtOfBirth: dateBirth,
            gender: gender,
            ...(currentPassword && newPassword && confirmNewPassword && {
                currentPassword: currentPassword,
                newPassword: newPassword,
                confirmNewPassword: confirmNewPassword
            })
        };

        console.log("REQUEST: ", requestBody);
        try {
            const response = await axios.put(`https://halaltravel.ai/ht/api/profile/personalInfo`, requestBody, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Profile updated successfully:", response.data);
            toggleModal();
        } catch (error) {
            if (error.response) {
                console.error("Error updating profile:", error.response.data);
            } else if (error.request) {
                console.error("Error updating profile: No response received");
                setNewPasswordError("Provided current password doesn't match the current password");
            } else {
                console.error("Error updating profile:", error.message);
            }
            toggleError();

        };
    };


    return (
        <>
            <div className='bg-[#F5F5F5] h-[2000px]'>
                <div className='fixed w-full' style={{ zIndex: 2 }}>
                    <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
                    <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
                    <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
                    <HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
                </div>

                <div class="xs:pt-[160px] lg:pt-[92px] profile font-sans sm:mx-10 lg:mx-[25%] ">
                    <div class="border bg-[#FFFFFF] rounded-lg mt-4 sm:my-10 p-5">
                        <form class="file-upload ">
                            <div class="row g-3 space-y-2">
                                <h3 class="mb-4 mt-0 sm:text-[35px] lg:text-[28px]">Profile Information</h3>
                                <p className='mt-1 sm:text-[28px] lg:text-sm'>Update your account's profile information and email address.</p>
                                <div className="pt-4 grid grid-cols-6 gap-6 w-[100%]">
                                    <div className="sm:col-span-6 lg:col-span-3">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 sm:text-[25px] lg:text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            className="w-[100%] bg-gray-50 border border-gray-300 text-gray-900 sm:text-[28px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:py-5 lg:py-2 lg:py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={handleInputChange}
                                        />
                                        {/* {errors.firstName && (
                          <div className="text-[#e63946]">{errors.firstName}</div>
                        )} */}
                                    </div>
                                    <div className="sm:col-span-6 lg:col-span-3">
                                        <label
                                            htmlFor="last_name"
                                            className="block mb-2 sm:text-[25px] lg:text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            className="w-[100%] bg-gray-50 border border-gray-300 text-gray-900 sm:text-[28px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:py-5 lg:py-2 lg:py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={handleInputChange}
                                        />
                                        {/* {errors.lastName && (
                          <div className="text-[#e63946]">{errors.lastName}</div>
                        )} */}
                                    </div>

                                    <div className='sm:col-span-6 lg:col-span-6'>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 sm:text-[25px] lg:text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="w-[100%] bg-gray-50 border border-gray-300 text-gray-900 sm:text-[28px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:py-5 lg:py-2 lg:py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="email"
                                            value={email}
                                            disabled={true}
                                        //   onChange={(e) => setLastName(e.target.value)}
                                        />
                                        {/* <text id="email" className='text-gray-900 sm:text-[28px] lg:text-sm'>{email}</text> <text /> */}
                                    </div>
                                    <div>

                                        <div className='sm:col-span-6 lg:col-span-6'>
                                            <label
                                                htmlFor="phoneNumber"
                                                className="block mb-2 sm:text-[25px] lg:text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Phone Number
                                            </label>
                                            <PhoneInput
                                                type="tel"
                                                name="phoneNumber"
                                                international
                                                defaultCountry="my"
                                                className="rounded-lg w-[600%] phone-input rounded-lg text-base sm:text-[28px] lg:text-sm"
                                                value={phoneNumber}
                                                onChange={handlePhoneInputChange}
                                            // disabled={true}
                                            />
                                        </div>
                                    </div>

                                    <div className='col-span-6'>
                                        <label
                                            htmlFor="dtOfBirth"
                                            className="block mb-2 sm:text-[25px] lg:text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Date of birth
                                        </label>
                                        <input
                                            type="date"
                                            name="dtOfBirth"
                                            id="dtOfBirth"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-[28px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:py-5 lg:py-2 lg:py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder=""
                                            value={dateBirth}
                                            onChange={handleInputChange}
                                        />
                                        {/* {errors.dtOfBirth && (
                        <div className="text-[#e63946]">{errors.dtOfBirth}</div>
                      )} */}
                                    </div>
                                    <div className='col-span-6'>
                                        <label
                                            htmlFor="gender"
                                            className="block mb-2 sm:text-[25px] lg:text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Gender
                                        </label>
                                        <select
                                            type="dropdown"
                                            name="gender"
                                            id="gender"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-[28px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:py-5 lg:py-2 lg:py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                            value={gender}
                                            onChange={handleInputChange}
                                        >
                                            <option value=" ">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="not say">I'd rather not to say</option>
                                        </select>
                                        {/* {errors.gender && (
                        <div className="text-[#e63946]">{errors.gender}</div>
                      )} */}
                                    </div>
                                </div>
                            </div>

                            {/* <!-- change password --> */}
                            <div class="py-10 space-y-2">
                                <h3 class="mb-4 mt-0 sm:text-[35px] lg:text-[28px]">Update Password</h3>
                                <p className='mt-1 sm:text-[28px] lg:text-sm mb-4'>Ensure your account is using a long, random password to stay secure.</p>
                                {/* <!-- Old password --> */}
                                <div className='col-span-6'>
                                    <label
                                        htmlFor="currentPassword"
                                        className="block mb-2 sm:text-[25px] lg:text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Current Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showcurrentPassword ? 'text' : 'password'}
                                            name="currentPassword"
                                            id="currentPassword"
                                            className="bg-gray-50 border border-gray-300 text-[#6B7280] sm:text-[28px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:py-5 lg:py-2 lg:py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                                            placeholder="••••••••"
                                            value={currentPassword}
                                            onChange={handleInputChange}
                                            required=""
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                                            onClick={handleTogglePassword}
                                        >
                                            {showcurrentPassword ? (
                                                <FaRegEye className="sm:w-[45px] sm:h-[45px] lg:w-[25px] lg:h-[25px] text-gray-300 hover:text-gray-400" />
                                            ) : (
                                                <FaRegEyeSlash className="sm:w-[45px] sm:h-[45px] lg:w-[25px] lg:h-[25px] text-gray-300" />
                                            )}
                                        </button>
                                    </div>

                                </div>
                                {/* <!-- New password --> */}
                                <div>
                                    <label
                                        htmlFor="newPassword"
                                        className="block mb-2 sm:text-[25px] lg:text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={shownewPassword ? 'text' : 'password'}
                                            name="newPassword"
                                            id="newPassword"
                                            className="bg-gray-50 border border-gray-300 text-[#6B7280] sm:text-[28px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:py-5 lg:py-2 lg:py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                                            placeholder="••••••••"
                                            value={newPassword}
                                            onChange={handleSetPassword}
                                            required=""
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                                            onClick={handleTogglePassword2}
                                        >
                                            {shownewPassword ? (
                                                <FaRegEye className="sm:w-[45px] sm:h-[45px] lg:w-[25px] lg:h-[25px] text-gray-300 hover:text-gray-400" />
                                            ) : (
                                                <FaRegEyeSlash className="sm:w-[45px] sm:h-[45px] lg:w-[25px] lg:h-[25px] text-gray-300" />
                                            )}
                                        </button>
                                    </div>

                                </div>
                                {/* <!-- Confirm password --> */}
                                <div>
                                    <label
                                        htmlFor="confirmNewPassword"
                                        className="block mb-2 sm:text-[25px] lg:text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Confirm New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showconfirmNewPassword ? 'text' : 'password'}
                                            name="confirmNewPassword"
                                            id="confirmNewPassword"
                                            className="bg-gray-50 border border-gray-300 text-[#6B7280] sm:text-[28px] lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:py-5 lg:py-2 lg:py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                                            placeholder="••••••••"
                                            value={confirmNewPassword}
                                            onChange={handleSetMatchPassword}
                                            required=""

                                        />
                                        <button
                                            type="button"
                                            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                                            onClick={handleTogglePassword3}
                                        >
                                            {showconfirmNewPassword ? (
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
                                            value={newPassword}
                                            valueAgain={confirmNewPassword}
                                            messages={{
                                                minLength: "Password must be 8 or more characters in length.",
                                                specialChar:
                                                    "Password should contain at least one special character.",
                                                number: "Password must contain at least one numeric letter.",
                                                capital: "Password should contain at least one uppercase letter.",
                                                match: "Password and confirm password should be match.",
                                                lowercase: "Password must contain at least one lowercase letter.",
                                            }}
                                        />
                                    </div>
                                    {isErrorOpen && (
                                        <div
                                            data-te-modal-init
                                            className="text-center fixed left-0 top-0 z-[1055] flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-70"
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
                                                        Oops, something went wrong.
                                                    </h5>
                                                    <p className="xs:text-[28px] lg:text-[13px] font-medium leading-normal text-gray-800">
                                                        {newPasswordError}
                                                    </p>

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


                                </div>
                            </div>


                            {/* <!-- button --> */}
                            <div class="gap-3 d-md-flex justify-content-md-end text-center">
                                <button type="button"
                                    class="btn btn-primary btn-lg sm:text-[35px] lg:text-[14px] font-montserrat font-medium"
                                    onClick={handleUpdate}>
                                    Update profile
                                </button>
                            </div>

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
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00A19A" class="w-12 h-12">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>

                                            </div>
                                            <h1 className="xs:text-[32px] lg:text-[22px] font-medium leading-normal text-gray-800">
                                                Congratulation </h1>
                                            <p className="xs:text-[24px] lg:text-[14px] text-gray-600">Your changes have been successfully saved!

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


                        </form>
                    </div>
                </div >
            </div >
        </>
    );
};

export default Profile