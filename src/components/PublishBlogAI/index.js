import React, { useRef, useEffect, useState } from 'react'
import { Text, Input, Img, Button, Line, Row, Column } from "components";
import { FaTimes, FaPlus } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchData } from "redux/actions";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./BlogAILoadingSpinner.css";
import Compressor from '@xkeshi/image-compressor';
import { BiWorld } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import PlacesAutocomplete from "react-places-autocomplete";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

const PublishBlogAI = ({ title, editorText, showContentSetting, openPopup3, closePopup3 }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingg, setIsLoadingg] = useState(false);
    const [isPublished, setIsPublished] = useState(false);
    const userId = localStorage.getItem("userId");
    const [blogHeader, setBlogHeader] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isAuthErrorOpen, setAuthErrorOpen] = useState(false);
    const [isErrorOpen, setErrorOpen] = useState(false);
    const [summary, setSummary] = useState(" ");
    const [serviceList, setServiceList] = useState([{ service: "" }]);
    const { destination, state, country } = useParams();
    const [newDestination, setNewDestination] = useState(destination);
    const [destinations, setDestinations] = useState({});
    const [newState, setNewState] = useState(state);
    const [newCountry, setNewCountry] = useState(country);
    const [selectedAttraction, setSelectedAttraction] = useState([]);
    const [selectedInterest, setSelectedInterest] = useState([]);
    const [attractions, setAttractions] = useState([]);
    const [interests, setInterests] = useState([]);

    const [blogData, setBlogData] = useState({
        title: title,
        blog: editorText,
        summary: summary,
    });

    useEffect(() => {
        setBlogData({ title: title, blog: editorText });
    }, [title, editorText]);

    const [nav, setNav] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

    const handleServiceAdd = () => {
        // Use Date.now() as a simple unique ID for demonstration purposes.
        // For more complex applications, consider using a UUID generator.
        const newItem = {
            id: Date.now(), // Unique ID
            service: ""
        };
        setServiceList([...serviceList, newItem]);
    };

    const handleRemoveService = (id) => {
        // Prevent the removal if the service is the first in the list.
        if (serviceList.length > 1) {
            setServiceList(serviceList.filter(service => service.id !== id));
        }
    };

    const inputRef = useRef(null);
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleChangeDestination = (id, value) => {
        setDestinations(prevDestinations => ({
            ...prevDestinations,
            [id]: { ...prevDestinations[id], location: value } // only update location
        }));
    };


    const handleSelect = async (selectedDestination, id) => {
        const parts = selectedDestination.split(', ');
        const location = parts[0];
        geocodeByAddress(selectedDestination)
            .then(results => {
                const addressComponents = results[0].address_components;
                // let location = location; // full description from autocomplete suggestion
                let state = '';
                let country = '';

                for (const component of addressComponents) {
                    if (component.types.includes('administrative_area_level_1')) {
                        state = component.long_name;
                    } else if (component.types.includes('country')) {
                        country = component.long_name;
                    }
                }

                // Set the destination details
                setDestinations(prevDestinations => ({
                    ...prevDestinations,
                    [id]: { location, state, country }
                }));

                // Console log for debugging
                console.log(`Selected: Location - ${location}, State - ${state}, Country - ${country}`);
            })
            .catch(error => console.error('Error', error));

            setNav(!nav);
            setDisabled(!isDisabled);
    };

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const toggleError = () => {
        setErrorOpen(!isErrorOpen);
    };

    const toggleAuthError = () => {
        setAuthErrorOpen(!isAuthErrorOpen);
    };

    const handlecover_imageChange = async (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            try {
                const compressedFile = await compressImage(selectedFile);
                setBlogHeader(compressedFile);
            } catch (error) {
                toast.error('Error compressing image', {
                    position: 'top-center',
                    autoClose: 5000,
                });
                console.error('Error compressing image:', error);
            }
        }
    };

    const compressImage = async (file) => {
        return new Promise(async (resolve, reject) => {
            const originalSize = file.size / 1024; // Convert size to kilobytes

            // Check if the original image size is greater than 1000 KB
            if (originalSize > 1000) {
                try {
                    let compressedFile;
                    let compressedSize;

                    // Iterate with different quality settings until the size is below 1000 KB
                    for (let quality = 0.8; quality >= 0.1; quality -= 0.1) {
                        compressedFile = await new Promise((resolve, reject) => {
                            new Compressor(file, {
                                quality: quality,
                                success(result) {
                                    resolve(result);
                                },
                                error(error) {
                                    reject(error);
                                },
                            });
                        });

                        compressedSize = compressedFile.size / 1024; // Convert size to kilobytes

                        if (compressedSize <= 1000) {
                            break; // Exit the loop if the size is below or equal to 1000 KB
                        }
                    }

                    console.log(`Original Size: ${originalSize.toFixed(2)} KB`);
                    console.log(`Compressed Size: ${compressedSize.toFixed(2)} KB`);

                    resolve(compressedFile);
                } catch (error) {
                    reject(error);
                }
            } else {
                console.log(`Image size is not greater than 1000 KB. No compression needed.`);
                resolve(file);
            }
        });
    };

    const handleImageRemove = (imageTypes) => {
        imageTypes.forEach((imageType) => {
            switch (imageType) {
                case 'cover_image':
                    console.log('Removing Cover Image');
                    setBlogHeader(null);
                    break;
                default:
                    break;
            }
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogData({
            ...blogData,
            [name]: value,
        });
        if (name === 'summary' && value.length <= 700) {
            setCharacterCount(value.length);
        }
    };


    const handleTitleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({
            ...blogData,
            [name]: value,
        })
    };

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

    // useEffect(() => {
    //     setBlogData((prevBlogData) => ({
    //         ...prevBlogData,
    //         attractions: selectedAttraction,
    //         interests: selectedInterest,
    //     }));
    // }, [selectedAttraction, selectedInterest]); // Only re-run the effect if selectedAttraction changes


    const handleAttractionClick = (attraction) => {
        setSelectedAttraction((prevSelectedAttraction) => {
            if (prevSelectedAttraction.includes(attraction)) {
                // If already selected, filter it out
                return prevSelectedAttraction.filter((item) => item !== attraction);
            } else {
                // If not already selected, add to the array
                // Also, check if the maximum limit of 3 is not reached
                if (prevSelectedAttraction.length < 3) {
                    return [...prevSelectedAttraction, attraction];
                } else {
                    // Here you might want to show a toast or some error message instead
                    alert("You can select up to three attractions.");
                    return prevSelectedAttraction;
                }
            }
        });
    };


    const handleInterestClick = (interest) => {
        // Check if the interest is already selected
        if (selectedInterest.includes(interest)) {
            // If it is selected, remove it from the selected interests
            setSelectedInterest(selectedInterest.filter((item) => item !== interest));
        } else {
            // If it is not selected, check if the maximum limit (5) is reached
            if (selectedInterest.length < 5) {
                // Add the interest to the selected interests
                setSelectedInterest([...selectedInterest, interest]);
            } else {
                // Display an alert or message indicating that the maximum limit is reached
                alert("You can select up to five interests.");
            }
        }
    };

    // handle confirm and apply changes button
    const handleSaveButtonClick = async () => {
        // setIsLoading(true);
        setIsLoadingg(true);

        // const apiUrl = `https://halaltravel.ai/ht/api/blog/${userId}`;
        const apiUrl = `https://halaltravel.ai/ht/api/blog/v2/${userId}`;
        const token = localStorage.getItem("token");
        const formData = new FormData();

        const locationsPayload = serviceList.map(service => destinations[service.id]).filter(Boolean);
        console.log('Submitting with destination:', locationsPayload);

        if (locationsPayload.length === 0) {
            // If the locations array is empty, show an error and stop the form submission
            toast.error('Destination cannot be empty. Please input destination before publishing.', {
                position: 'top-center',
                autoClose: 5000,
            });
            setIsLoading(false);
            setIsLoadingg(false);
            return;
        }

        if (!editorText) {
            toast.error('Content cannot be empty. Please add content before publishing.', {
                position: 'top-center',
                autoClose: 5000,
            });
            setIsLoading(false);
            setIsLoadingg(false);
            return;
        }

        if (!blogData.title) {
            toast.error('Title cannot be empty. Please input title before publishing.', {
                position: 'top-center',
                autoClose: 5000,
            });
            setIsLoading(false);
            setIsLoadingg(false);
            return;
        }

        if (!blogData.summary) {
            toast.error('Summary cannot be empty. Please input summary before publishing.', {
                position: 'top-center',
                autoClose: 5000,
            });
            setIsLoading(false);
            setIsLoadingg(false);
            return;
        }

        if (!blogHeader) {
            toast.error('Header image cannot be empty. Please upload a header image before publishing.', {
                position: 'top-center',
                autoClose: 5000,
            });
            setIsLoading(false);
            setIsLoadingg(false);
            return;
        }

        // if (selectedAttraction.length === 0) {
        //     toast.error('Attraction field cannot be left blank. Please select an attraction before attempting to publish.', {
        //         position: 'top-center',
        //         autoClose: 5000,
        //     });
        //     setIsLoading(false);
        //     setIsLoadingg(false);
        //     return;
        // }

        // 200console.log('Submitting with interest:', selectedInterest);

        // if (selectedInterest.length === 0) {
        //     toast.error('Interest field cannot be left blank. Please select an interest before attempting to publish.', {
        //         position: 'top-center',
        //         autoClose: 5000,
        //     });
        //     setIsLoading(false);
        //     setIsLoadingg(false);
        //     return;
        // }

        const fullPayload = {
            ...blogData,
            locations: locationsPayload,
            attractions: selectedAttraction, 
            interests: selectedInterest, 
        };

        const json = JSON.stringify(fullPayload);
        const blob = new Blob([json], {
            type: 'application/json'
        });

        formData.append('blogHeader', blogHeader);
        formData.append('blogData', blob);
        console.log('fullPayload', fullPayload);

        try {

            const response = await axios.post(apiUrl, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('formData:', formData);
            console.log('Blog saved successfully:', formData);

            if (response.status === 201) {

                const blogId = response.data.id;

                const updateStatusResponse = await axios.patch(`https://halaltravel.ai/ht/api/blog/updateStatus/${blogId}`, {
                    status: 'PUBLISHED'
                },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }

                    });

                if (updateStatusResponse.status === 200) {
                    console.log('API call to update status successful');
                    closePopup3();
                    toggleModal();
                } else {
                    console.error('API call to update status failed');
                }
            } else {
                console.error('Error saving blog:', response.data.message);
            }

        } catch (error) {
            if (error.response && error.response.status === 401) {
                toggleAuthError();
                console.error("Unauthorized access. Error post blog:", error);
            } else {
                toggleError();
                console.error("Error post blog 1:", error);
            }
            console.error('Error post blog:', error.response);

        } finally {
            setIsLoading(false);
            setIsLoadingg(false); // Set loading state to false regardless of success or failure
        }
    };


    return (
        <>
            {showContentSetting ? (
                <>
                    <div className="font-montserrat bg-gray-50 xs:top-40 lg:top-20 rounded-3xl cursor-pointer justify-center shadow-3xl items-center lg:mx-[400px] lg:my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        {/*Content title*/}

                        <Column className="sm:py-[50px] sm:w-[100%] sm:h-[100%] lg:py-[10px] lg:w-[100%] lg:h-fit">
                            <div className='flex mx-[60px] items-center'>
                                <Text className="w-[100%] text-start py-[20px] sm:text-[37px] lg:text-xl text-[#00A19A] font-medium">
                                    Create Your Blog Post
                                </Text>
                                <button className="text-end items-end justify-end">
                                    <FaTimes
                                        className="sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                                        // onClick={() => setShowContentSetting(false)}
                                        onClick={closePopup3}
                                    />
                                </button>
                            </div>

                            <hr className='mb-3'></hr>
                            {/*Content*/}
                            <div className='m-2'>

                                {/* Autocomplete web view */}
                                {serviceList.map((singleService, index) => (
                                    <div className="m-2 mt-2 flex justify-center ">
                                        <div className="flex gap-9 items-end w-[85%] ">
                                            <div key={singleService.id} className="w-[90%] sm:hidden lg:block xl:block 2xl:block">
                                                <span className="text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]">
                                                    Destination:
                                                </span>
                                                <div className="bg-white_A700 flex flex-row gap-[5px] items-center justify-start outline outline-[1px] outline-[#00a19a] rounded-[5px] sm:h-24 lg:h-9 w-[100%]">
                                                    <BiWorld
                                                        size={30}
                                                        fill="#00a19a"
                                                        className="lg:ml-2 md:ml-4 lg:h-[22px] lg:w-[22px] md:h-[38px] md:w-[38px]"
                                                    />
                                                    <PlacesAutocomplete
                                                        apiKey="AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8"
                                                        value={destinations[singleService.id]?.location || ''}
                                                        onChange={(value) => handleChangeDestination(singleService.id, value)}
                                                        onSelect={(selectedDestination) => handleSelect(selectedDestination, singleService.id)}

                                                    >
                                                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                                                            //to disable suggestion for epictravel

                                                            // const suggestionsToDisable = [
                                                            //   "Kuala Lumpur, Malaysia",
                                                            //   "Pulau Pinang, Malaysia"
                                                            // ];
                                                            // const filteredSuggestions = suggestions.filter(
                                                            //   (suggestion) => {
                                                            //     // Check if the suggestion is a big city or a country
                                                            //     // return suggestions;
                                                            //     const isDisabled = suggestionsToDisable.includes(suggestion.description);
                                                            //     return !isDisabled;
                                                            //   }
                                                            // );

                                                            //for vm
                                                            const suggestionsToDisable = [
                                                                "Kuala Lumpur, Malaysia",
                                                                "Pulau Pinang, Malaysia",
                                                            ];

                                                            const filteredSuggestions =
                                                                suggestions.filter((suggestion) => {
                                                                    // Check if the suggestion description includes "Malaysia" and is not in the disabled list
                                                                    const includesMalaysia =
                                                                        suggestion.description
                                                                            .toLowerCase()
                                                                            .includes("malaysia");
                                                                    const isDisabled =
                                                                        suggestionsToDisable.includes(
                                                                            suggestion.description
                                                                        );

                                                                    return includesMalaysia && !isDisabled;
                                                                });

                                                            return (
                                                                <div>
                                                                    <input
                                                                        {...getInputProps({
                                                                            placeholder: "Destination",
                                                                            className:
                                                                                "font-normal not-italic font-montserrat p-[0] sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black placeholder:required text-slate_700 w-[500px] outline-none  border-none",
                                                                        })}

                                                                    />

                                                                    <div
                                                                        className="autocomplete-dropdown-container"
                                                                        style={{
                                                                            position: "absolute",
                                                                            zIndex: 1000,
                                                                            marginTop: 10,
                                                                            marginLeft: -40,
                                                                            border: isLoading ? "none" : "none",
                                                                            boxShadow: isLoading
                                                                                ? "0 0px 0px 0 rgba(0, 0, 0, 0.2)"
                                                                                : "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                                                            width: "18%",
                                                                        }}
                                                                    >
                                                                        {isLoading ? (
                                                                            <div>
                                                                                <strong>Loading...</strong>
                                                                                <CircularProgress
                                                                                    size={12}
                                                                                    style={{ color: "black" }}
                                                                                />
                                                                            </div>
                                                                        ) : (
                                                                            filteredSuggestions.map(
                                                                                (suggestion) => {
                                                                                    const className =
                                                                                        suggestion.active
                                                                                            ? "suggestion-item--active"
                                                                                            : "suggestion-item";
                                                                                    const style = suggestion.active
                                                                                        ? {
                                                                                            font: "Montserrat",
                                                                                            backgroundColor: "#bee3e2",
                                                                                            paddingLeft: "5px",
                                                                                            paddingTop: "15px",
                                                                                            paddingBottom: "10px",
                                                                                            cursor: "pointer",
                                                                                            color: "black",
                                                                                            fontSize: "12px",
                                                                                            fontWeight: "normal",
                                                                                            outlineColor: "#00a19a",
                                                                                            height: "5em",
                                                                                            width: "510px",
                                                                                            borderOutlineColor:
                                                                                                "#00a19a",
                                                                                            borderColor: "#00a19a",
                                                                                        }
                                                                                        : {
                                                                                            font: "Montserrat",
                                                                                            backgroundColor: "#fafafa",
                                                                                            cursor: "pointer",
                                                                                            color: "black",
                                                                                            fontSize: "12px",
                                                                                            fontWeight: "normal",
                                                                                            outlineColor: "#00a19a",
                                                                                            height: "5em",
                                                                                            width: "510px",
                                                                                            borderOutlineColor:
                                                                                                "#00a19a",
                                                                                            paddingLeft: "5px",
                                                                                            paddingTop: "15px",
                                                                                            paddingBottom: "10px",
                                                                                            borderColor: "#00a19a",
                                                                                        };
                                                                                    return (
                                                                                        <div
                                                                                            {...getSuggestionItemProps(
                                                                                                suggestion,
                                                                                                {
                                                                                                    className,
                                                                                                    style,
                                                                                                }
                                                                                            )}
                                                                                        >
                                                                                            <span
                                                                                                style={{
                                                                                                    display: "flex",
                                                                                                    flexDirection: "column",
                                                                                                }}
                                                                                            >
                                                                                                <span
                                                                                                    style={{
                                                                                                        display: "flex",
                                                                                                        alignItems: "center",
                                                                                                    }}
                                                                                                >
                                                                                                    <FaMapMarkerAlt
                                                                                                        style={{
                                                                                                            marginRight: "2px",
                                                                                                            fontSize: "20px",
                                                                                                        }}
                                                                                                    />
                                                                                                    <strong
                                                                                                        style={{
                                                                                                            marginLeft: "5px",
                                                                                                            marginTop: "-10px",
                                                                                                        }}
                                                                                                    >
                                                                                                        {
                                                                                                            suggestion.description.split(
                                                                                                                ","
                                                                                                            )[0]
                                                                                                        }
                                                                                                    </strong>
                                                                                                </span>
                                                                                                <span
                                                                                                    style={{
                                                                                                        display: "block",
                                                                                                        marginLeft: "25px",
                                                                                                        marginTop: "-5px",
                                                                                                    }}
                                                                                                >
                                                                                                    {/* {suggestion.description
                                                		.split(",")
                                                		.slice(-1)} */}
                                                                                                    {suggestion.description
                                                                                                        .split(",")
                                                                                                        .slice(-2)
                                                                                                        .join(", ")}
                                                                                                </span>
                                                                                            </span>
                                                                                        </div>
                                                                                    );
                                                                                }
                                                                            )
                                                                        )}

                                                                    </div>
                                                                </div>
                                                            );
                                                        }}
                                                    </PlacesAutocomplete>
                                                </div>
                                            </div>
                                            {/* Autocomplete mobile view */}

                                            <div className="sm:block lg:hidden">
                                                <label
                                                    for="language"
                                                    className="text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]"
                                                >
                                                    Destination:
                                                </label>
                                                <div className="w-full inline-flex items-center text-center p-5 gap-4 justify-start border border-1 border-[#00a19a] rounded-xl hover:outline-blue-500/75">
                                                    <CiSearch
                                                        size={55}
                                                        fill="#00a19a"
                                                        className="ml-4 text-gray_700 "
                                                    />
                                                    {/* <BiWorld size={30} fill="#00a19a" className="lg:ml-2 md:ml-4 lg:h-[22px] lg:w-[22px] md:h-[38px] md:w-[38px]" /> */}

                                                    <input
                                                        placeholder="Destination"
                                                        className="bg-transparent font-montserrat items-center justify-start not-italic p-[0] sm:text-[30px] md:text-[30px] lg:text-[9px] placeholder:required text-slate_700 w-[160%] outline-none border-none"
                                                        onClick={() => {
                                                            setNav(!nav);
                                                            setDisabled(!isDisabled);
                                                            focusInput();
                                                        }}
                                                        disabled={isDisabled}
                                                        value={destinations[singleService.id]?.location || ''}
                                                        
                                                    />
                                                    {nav ? (
                                                        <div className="bg-black/80 fixed w-screen h-screen z-10 bottom-0 left-0"></div>
                                                    ) : (
                                                        ""
                                                    )}
                                                    <div
                                                        className={
                                                            nav
                                                                ? "fixed bottom-0 rounded-t-[90px] left-0 w-screen h-[110em] p-4 bg-white z-10 duration-300"
                                                                : "fixed bottom-[-100%] left-0 w-screen h-[110em] p-4 bg-white z-10 duration-300"
                                                        }
                                                    >
                                                        <text className="font-montserrat absolute top-40 left-11 text-[40px] font-medium">
                                                            Enter Destination
                                                        </text>

                                                        <AiOutlineClose
                                                            onClick={() =>
                                                                setNav(!nav) & setDisabled(!isDisabled)
                                                            }
                                                            size={60}
                                                            className="absolute right-10 top-14 cursor-pointer"
                                                        />

                                                        <nav className="h-fit m-8 snap-y">
                                                            <div className="snap-end grid mt-60 grid-cols-2 w-[100%]">
                                                                <div className="col-span-2 w-[100%] inline-flex h-[10em] items-center rounded-[20px] rounded-[20px] text-center bg-white/80 p-6 gap-4 justify-start outline outline-[1px] outline-blue-500/75">
                                                                    <CiSearch
                                                                        size={50}
                                                                        className="ml-2 text-gray_700 "
                                                                    />
                                                                    <PlacesAutocomplete
                                                                        apiKey="AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8"
                                                                        value={destinations[singleService.id]?.location || ''}
                                                                        onChange={(value) => handleChangeDestination(singleService.id, value)}
                                                                        onSelect={(selectedDestination) => handleSelect(selectedDestination, singleService.id)}
                
                                                                    >
                                                                        {({
                                                                            getInputProps,
                                                                            suggestions,
                                                                            getSuggestionItemProps,
                                                                            loading,
                                                                        }) => {
                                                                            // const filteredSuggestions =
                                                                            //   suggestions.filter((suggestion) => {
                                                                            //     // Check if the suggestion description includes "Malaysia"
                                                                            //     return suggestion.description
                                                                            //       .toLowerCase()
                                                                            //       .includes("malaysia");
                                                                            //   });

                                                                            //to disable suggestion for epictravel

                                                                            // const suggestionsToDisable = [
                                                                            //   "Kuala Lumpur, Malaysia",
                                                                            //   "Pulau Pinang, Malaysia"
                                                                            // ];
                                                                            // const filteredSuggestions = suggestions.filter(
                                                                            //   (suggestion) => {
                                                                            //     // Check if the suggestion is a big city or a country
                                                                            //     // return suggestions;
                                                                            //     const isDisabled = suggestionsToDisable.includes(suggestion.description);
                                                                            //     return !isDisabled;
                                                                            //   }
                                                                            // );

                                                                            //for vm
                                                                            const suggestionsToDisable = [
                                                                                "Kuala Lumpur, Malaysia",
                                                                                "Pulau Pinang, Malaysia",
                                                                            ];

                                                                            const filteredSuggestions =
                                                                                suggestions.filter((suggestion) => {
                                                                                    // Check if the suggestion description includes "Malaysia" and is not in the disabled list
                                                                                    const includesMalaysia =
                                                                                        suggestion.description
                                                                                            .toLowerCase()
                                                                                            .includes("malaysia");
                                                                                    const isDisabled =
                                                                                        suggestionsToDisable.includes(
                                                                                            suggestion.description
                                                                                        );

                                                                                    return (
                                                                                        includesMalaysia && !isDisabled
                                                                                    );
                                                                                });

                                                                            return (
                                                                                <div>
                                                                                    <input
                                                                                        ref={inputRef}
                                                                                        {...getInputProps({
                                                                                            placeholder:
                                                                                                "Key in your destination",
                                                                                            className:
                                                                                                "custom-input font-medium font-montserrat items-center justify-start not-italic p-[0] sm:text-[35px] md:text-[35px] placeholder:required placeholder-gray-300 text-gray-400 w-[160%] outline-none border-none",
                                                                                            style: {},
                                                                                        })}
                                                                                    />

                                                                                    <div
                                                                                        className="autocomplete-dropdown-container"
                                                                                        style={{
                                                                                            position: "absolute",
                                                                                            zIndex: 1000,
                                                                                            padding: 10,
                                                                                            marginLeft: -130,
                                                                                            marginTop: 80,
                                                                                            width: "96%",
                                                                                            height: "100%",
                                                                                        }}
                                                                                    >
                                                                                        {loading
                                                                                            ? null
                                                                                            : filteredSuggestions.map(
                                                                                                (suggestion) => {
                                                                                                    const className =
                                                                                                        suggestion.active
                                                                                                            ? "suggestion-item--active"
                                                                                                            : "suggestion-item";
                                                                                                    const style =
                                                                                                        suggestion.active
                                                                                                            ? {
                                                                                                                backgroundColor:
                                                                                                                    "#bee3e2",
                                                                                                                font: "Montserrat",
                                                                                                                cursor:
                                                                                                                    "pointer",
                                                                                                                color: "#000",
                                                                                                                paddingTop:
                                                                                                                    "40px",
                                                                                                                fontSize:
                                                                                                                    "32px",
                                                                                                                paddingRight:
                                                                                                                    "20px",
                                                                                                                height: "4em",
                                                                                                                width: "600px",
                                                                                                                fontWeight:
                                                                                                                    "normal",
                                                                                                                textAlign:
                                                                                                                    "left",
                                                                                                            }
                                                                                                            : {
                                                                                                                backgroundColor:
                                                                                                                    "#ffffff",
                                                                                                                paddingLeft:
                                                                                                                    "30px",
                                                                                                                font: "Montserrat",
                                                                                                                cursor:
                                                                                                                    "pointer",
                                                                                                                color: "#000",
                                                                                                                fontSize:
                                                                                                                    "35px",
                                                                                                                paddingTop:
                                                                                                                    "40px",
                                                                                                                height: "5em",
                                                                                                                fontWeight:
                                                                                                                    "normal",
                                                                                                                textAlign:
                                                                                                                    "left",
                                                                                                            };
                                                                                                    return (
                                                                                                        <div
                                                                                                            {...getSuggestionItemProps(
                                                                                                                suggestion,
                                                                                                                {
                                                                                                                    className,
                                                                                                                    style,
                                                                                                                }
                                                                                                            )}
                                                                                                        >
                                                                                                            <span
                                                                                                                style={{
                                                                                                                    display: "flex",
                                                                                                                    flexDirection:
                                                                                                                        "column",
                                                                                                                }}
                                                                                                            >
                                                                                                                <span
                                                                                                                    style={{
                                                                                                                        display:
                                                                                                                            "flex",
                                                                                                                        alignItems:
                                                                                                                            "center",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    <FaMapMarkerAlt
                                                                                                                        style={{
                                                                                                                            marginRight:
                                                                                                                                "4",
                                                                                                                            fontSize:
                                                                                                                                "50px",
                                                                                                                            marginTop:
                                                                                                                                "30px",
                                                                                                                        }}
                                                                                                                    />
                                                                                                                    <strong
                                                                                                                        style={{
                                                                                                                            marginLeft:
                                                                                                                                "30px",
                                                                                                                            marginTop:
                                                                                                                                "-20px",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        {
                                                                                                                            suggestion.description.split(
                                                                                                                                ","
                                                                                                                            )[0]
                                                                                                                        }
                                                                                                                    </strong>
                                                                                                                </span>
                                                                                                                <line className="w-full h-2 color-[#f5f5f5]"></line>
                                                                                                                <span
                                                                                                                    style={{
                                                                                                                        display:
                                                                                                                            "block",
                                                                                                                        fontStyle:
                                                                                                                            "oblique",
                                                                                                                        marginLeft:
                                                                                                                            "95px",
                                                                                                                        marginTop:
                                                                                                                            "-20px",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    {/* {suggestion.description
                                            		              .split(",")
                                            		              .slice(-1)} */}
                                                                                                                    {suggestion.description
                                                                                                                        .split(",")
                                                                                                                        .slice(-2)
                                                                                                                        .join(", ")}
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    );
                                                                                                }
                                                                                            )}
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        }}
                                                                    </PlacesAutocomplete>
                                                                </div>
                                                            </div>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-[10%] text-end">
                                                {index === 0 && serviceList.length < 8 && (
                                                    // <Button className="flex items-center bg-teal-500 rounded-[10px] hover:bg-teal-700
                                                    // w-40 h-40 md:w-[20px] md:h-[20px] "
                                                    //     style={{ height: '20px', width: '20px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                    //     onClick={handleServiceAdd}
                                                    //     disabled={index === 7}>
                                                    //     <FaPlus className="text-[#FFFFFF] text-lg md:text-xs" style={{ fontSize: '0.75em' }} />
                                                    // </Button>
                                                    <Button
                                                        className="flex items-center justify-center bg-teal-500 rounded-full hover:bg-teal-700 
                                                        w-[30px] h-[30px] md:w-[20px] md:h-[20px]"
                                                        onClick={handleServiceAdd}
                                                        disabled={index === 7}
                                                        style={{ height: '20px', width: '20px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}

                                                    >
                                                        <FaPlus className="text-white text-md md:text-xs" style={{ fontSize: '0.75em' }} />
                                                    </Button>
                                                )}

                                                {index !== 0 && (
                                                    <Button
                                                        onClick={() => handleRemoveService(singleService.id)}
                                                        className="flex items-center bg-[#dc3545] rounded-full hover:bg-red-700
                                                        w-[30px] h-[30px] md:w-[20px] md:h-[20px]"
                                                        aria-label="Remove destination"
                                                        style={{ height: '20px', width: '20px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                    >
                                                        <FaTimes className="text-white text-md md:text-xs" style={{ fontSize: '0.75em' }} />
                                                    </Button>
                                                )}
                                            </div>


                                        </div>
                                    </div>
                                ))}




                                <div className="mt-4 mx-[60px]">
                                    <label for='title' className='text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]'>Title</label>
                                    <input
                                        className="placeholder-[#9A9A9A] rounded bg-white border border-[#D3D3D3] text-gray-900 sm:text-[26px] lg:text-xs block sm:h-24 lg:h-9 w-[100%]"
                                        type="text"
                                        size="smSrc"
                                        required
                                        value={blogData.title}
                                        placeholder="Name your blog title"
                                        title="E.g. 2 Days to Manila"
                                        name='title'
                                        onChange={handleTitleChange}

                                    ></input>
                                </div>

                                <div className="mt-4 mx-[60px] ">
                                    <label for='desc' className='text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]'>Blog Summary
                                    </label>
                                    <textarea
                                        className="placeholder-[#9A9A9A] rounded bg-white border border-[#D3D3D3] text-gray-900 sm:text-[26px] lg:text-xs block sm:h-40 lg:h-20 w-[100%]"
                                        type="text"
                                        size="smSrc"
                                        required
                                        placeholder="The summary of this blog will be featured in the carousel display on the blog page."
                                        name="summary"
                                        value={blogData.summary}
                                        maxLength={700}
                                        onChange={handleInputChange}
                                    ></textarea>
                                    <div className="">
                                        <text className="flex justify-end sm:text-[26px] lg:text-xs">
                                            {characterCount}/700 max characters
                                        </text>
                                    </div>
                                </div>

                                <div className="mt-4 mx-[60px] ">

                                    <label for='dropzone_cover_img' className='text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]'>Insert Cover Image

                                        {/* insert cover_image */}

                                        <div className='w-full border border-[#D3D3D3] rounded-sm border-dashed text-center justify-center items-center h-35'>

                                            <div className="relative flex items-center justify-center">

                                                <div className='overflow-hidden relative'>
                                                    {(blogHeader) && (
                                                        // <div className="relative flex items-center justify-center">
                                                        <button
                                                            title='Remove Image'
                                                            className="absolute top-3 right-5 p-1 bg-[#808080] rounded-full text-white"
                                                            style={{
                                                                padding: 0,
                                                                borderRadius: '50%',
                                                                width: '25px',
                                                                height: '25px',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}
                                                            onClick={() => handleImageRemove(['cover_image'])}
                                                        >
                                                            X
                                                        </button>
                                                        // </div>
                                                    )}

                                                    {!blogHeader ? (
                                                        <div>
                                                            <p className='text-center text-[#9A9A9A] sm:text-[28px] lg:text-[14px] font-normal mt-5'>Add cover image</p>

                                                            <label
                                                                htmlFor="coverImg"
                                                                className='bg-[#EDEDED] inline-flex items-center justify-center font-medium sm:w-[40px] sm:h-[40px] lg:w-[22px] lg:h-[22px] rounded-full mb-3'
                                                            >
                                                                <AiOutlinePlus className='lg:h-[22px] lg:w-[22px] sm:h-[38px] sm:w-[38px] text-center text-[#00A19A]' />
                                                                <input
                                                                    id="coverImg"
                                                                    type="file"
                                                                    className="hidden"
                                                                    name='cover_image'
                                                                    onChange={handlecover_imageChange}
                                                                />
                                                            </label>

                                                        </div>

                                                    ) : (
                                                        <img
                                                            src={URL.createObjectURL(blogHeader)}
                                                            alt="Selected Cover"
                                                            className="w-569 h-379"
                                                            name="cover_image"
                                                        />
                                                    )}
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <span className='text-gray-400 sm:text-[26px] lg:text-xs'>Maximum upload image size: 1.5 MB</span>
                                        </div>
                                        <div>
                                            <span className='text-gray-400 sm:text-[26px] lg:text-xs'>
                                                Recommended size of image: 842 x 400 pixels</span>
                                        </div>
                                    </label>

                                </div>

                                <div className="mx-[60px] mt-6">
                                    <label
                                        htmlFor="typeofattraction"
                                        className="text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]"
                                    >
                                        Type of attractions: (Choose at least 2 Attractions) (Optional)
                                    </label>
                                    <div className="font-montserrat tracking-tighter flex flex-wrap gap-2 items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                                        {attractions.map((attraction, index) => (
                                            <button
                                                key={index}
                                                value={attraction}
                                                className={`m-1 border sm:text-[28px] lg:text-[14px] ${selectedAttraction.includes(attraction)
                                                    ? "bg-teal-500 text-white"
                                                    : ""
                                                    } hover:bg-teal-500 hover:text-white rounded-xl px-5 py-1 sm:h-20 lg:h-9 ${selectedAttraction.length === 3 &&
                                                        !selectedAttraction.includes(attraction)
                                                        ? "bg-gray-300 text-gray-500 border-gray-300 hover:bg-gray-300 hover:text-gray-500 hover:border-gray-300 cursor-not-allowed"
                                                        : "border-teal-500"
                                                    }`}
                                                onChange={(e) => setAttractions(e.target.value)}
                                                onClick={() =>
                                                    handleAttractionClick(attraction)
                                                }
                                                disabled={
                                                    selectedAttraction.length === 3 &&
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
                                        className="text-[#00A19A] font-medium sm:text-[28px] lg:text-[14px]"
                                    >
                                        Your Interests: (Choose at least 2 Interests) (Optional)
                                    </label>
                                    <div className="font-montserrat tracking-tighter flex flex-wrap gap-2 items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[14px] 3xl:mt-[22px] w-[100%]">
                                        {/* <button
                                  className="m-1 font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center px-5 py-1 rounded-xl
                                  border border-teal-500 text-black"
                                  // onClick={handleFetchInterests}
                                >
                                  {/* {showInterests ? 'Interests: ' + interests.join(', ') : 'Fetch Interests'} */}
                                        {/* {interests.length > 0 ? '' + interests.join(', ') : ''} */}
                                        {/* </button> */}
                                        {interests.map((interest, index) => (
                                            <button
                                                key={index}
                                                value={interests}
                                                className={`m-1 border sm:text-[28px] lg:text-[14px] ${selectedInterest.includes(interest)
                                                    ? "bg-teal-500 text-white"
                                                    : ""
                                                    } hover:bg-teal-500 hover:text-white rounded-xl px-5 py-1 sm:h-20 lg:h-9 ${selectedInterest.length === 5 &&
                                                        !selectedInterest.includes(interest)
                                                        ? "bg-gray-300 text-gray-500 border-gray-300 hover:bg-gray-300 hover:text-gray-500 hover:border-gray-300 cursor-not-allowed"
                                                        : "border-teal-500"
                                                    }`}
                                                onChange={(e) => setInterests(e.target.value)}
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


                                <div className='mt-8 text-center'>
                                    <button className='rounded-lg px-2 py-2 bg-[#00A19A] sm:h-20 lg:h-9 text-white sm:text-[28px] lg:text-[14px]'
                                        onClick={handleSaveButtonClick}
                                        disabled={isLoading}
                                    >{isLoadingg && (
                                        <div className="loader-containerAI">
                                            <div className="loader"></div>
                                            <p className="loading-text">loading...</p>
                                        </div>
                                    )}
                                        Confirm and apply changes</button>
                                </div>

                            </div>

                        </Column>
                    </div>

                    <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : (
                ""
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00A19A" class="w-12 h-12">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </div>
                            <h1 className="xs:text-[32px] lg:text-[22px] font-medium leading-normal text-gray-800">
                                Congratulation </h1>
                            <p className="xs:text-[24px] lg:text-[14px] text-gray-600">You have successfully created the blog.
                            </p>
                            {/* <p className="xs:text-[24px] lg:text-[14px] text-gray-600">
                                Please proceed to the
                                <a href="/manage-content" className="text-black font-bold"> social posting</a>
                                <span> section to adjust the blog's status.</span>
                            </p> */}

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
                            {/* <p className="text-sm text-gray-600">Go to
                          <a href="/edit-creator" className="text-black font-bold"> My Storefront
                          </a>
                        </p> */}

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

            {isAuthErrorOpen && (
                <div
                    data-te-modal-init
                    className="fixed left-0 top-0 z-[1055] flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-70"
                >
                    <div
                        data-te-modal-dialog-ref
                        className="xs:w-[700px] lg:w-[500px] w-full mx-4 bg-white rounded-md shadow-lg"
                    >
                        {/* Modal Content */}
                        <div className="p-4 item-center">
                            <h5 className="text-center xs:text-[30px] lg:text-[20px] font-bold leading-normal text-gray-800">
                                Error: Unauthorized
                            </h5>
                            <br></br>
                            <h5 className="text-center xs:text-[28px] lg:text-[18px] font-medium leading-normal text-gray-800">
                                An error has occurred due to an authentication issue. Please log in again.
                            </h5>
                            {/* Add your modal content here */}
                            {/* <p className="text-sm text-gray-600">Go to
                          <a href="/edit-creator" className="text-black font-bold"> My Storefront
                          </a>
                        </p> */}

                        </div>

                        {/* Modal Footer */}
                        <div className="flex justify-end p-4 bg-gray-100 rounded-b-md">
                            <button
                                type="button"
                                onClick={toggleAuthError}
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

export default PublishBlogAI