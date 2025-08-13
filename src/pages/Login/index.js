
import { useNavigate } from "react-router-dom";
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "AuthContext";



const LoginPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
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

            console.log('--------------', data);
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

                    // Redirect to the home page after successful login
                    navigate("/");
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
                        } else if (error.response.data.errorMessage === "Incorrect password") {
                            setError("Incorrect password. Please try again.");
                        }
                    } else if (error.response.status === 400) {
                        // Handle validation errors
                        setError("Fields validation failed. Please check the form fields.");
                    }
                }
            });
    };

    return (
        <>
            <HeaderOTAAdmin />

            <div className="h-screen content-center w-full bg-gray-300">
                <div class="bg-gray-50 dark:bg-gray-900">
                    <div class="flex flex-col items-center justify-center sm:pt-2 mx-auto md:h-screen lg:py-0">
                        <div class="w-full bg-white rounded-lg shadow shadow-[#00a19a] shadow-xs shadow:opacity-50 dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                        <input
                                            type="email"
                                            name="username"
                                            id="username"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                                            placeholder="name@gmail.com"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required="" />
                                        {usernameError && <p class="text-sm text-red-500">{usernameError}</p>}
                                        {/* {error && error === "Incorrect password" && <p class="text-sm text-red-500">{error}</p>} */}
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-[#00a19a] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#00a19a]"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required="" />
                                        {passwordError && <p class="text-sm text-red-500">{passwordError}</p>}
                                        {/* {error && error === "Incorrect password" && <p class="text-sm text-red-500">{error}</p>} */}
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                    {error && <p class="text-sm text-red-500">{error}</p>}
                                    <button type="submit" class="w-full text-white bg-blue-500 hover:bg-blue-700
                             focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >Sign in</button>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );

};

export default LoginPage;