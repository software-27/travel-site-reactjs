import React, { useRef, useState, useEffect } from "react";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";
import ForgotPassword from "components/ForgotPass/index";
import HeaderOTAMobileEpic from "components/Header/HeaderOTAMobileEpic/index";
import FilterPage from "components/Filter/index";
import { ButtonMp, Row, Column, Text, Button, Img } from "components";
import { FaTimes } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Icon from "@mdi/react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import loadGoogleMapsApi from "load-google-maps-api";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import { BiWorld } from "react-icons/bi";
import {
  mdiBookmark,
  mdiDotsHorizontal,
  mdiCircleSmall,
  mdiBookmarkOutline,
  mdiPlusCircle,
} from "@mdi/js";
import { AiOutlineClose } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  data,
  fetchAllTravelPlan,
  fetchTravelPlan,
  fetchItineraryDetails,
  fetchItineraryDestination,
  // dataDl,

} from "data/data";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData2 } from "redux/actions2";
import "./LoadingSpinner.css";
import "./Popup.css";
import "./Loading2.css";
import { useAuth } from "AuthContext";
// import LoadingBar from "./LoadingBar";
import "styles/tailwind.css";


const ListTravelPlan = () => {
  const [isPopupFilterOpen, setIsPopupFilterOpen] = useState(false);
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);
  const [isPopup3Open, setIsPopup3Open] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showAI, setShowAI] = React.useState(false);
  const [alltravelPlan, setAllTravelPlan] = useState([]);
  const [isPlan, setIsPlan] = useState(false);
  const [isLoadingg, setIsLoadingg] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const userId = localStorage.getItem("userId");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [title, setTitle] = useState();
  const { isLoggedIn } = useAuth();
  const [isLoading2, setIsLoading2] = useState(false);
  const [characterEx, setCharacterEx] = useState(0);
  const [characterIn, setCharacterIn] = useState(0);

  const { creatorId, itineraryId, itineraryTitle } = useParams();


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for instant scrolling
    });
  };

  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  const loadingTexts = [
    "Hold tight as our system assembles your travel plan...",
    "Relax while we organize your travel plan...",
    "Grabbing the travel routes for your journey...",
    "Fine-tuning your travel plan to make it even better...",
    "Ready to unveil a carefully curated travel plan just for you...",
    "Hang tight, while we ensuring your travel itinerary unfolds flawlessly...",
    // Add more loading texts as needed
  ];
  useEffect(() => {
    // Simulate asynchronous actions with delays
    const fetchData = async () => {
      try {
        for (let i = 0; i < loadingTexts.length; i++) {
          setLoadingTextIndex(i);
          await simulateAsyncAction(); // Replace this with your actual asynchronous action
        }

        // All steps completed successfully
        setIsLoadingg(false);
        setIsLoading2(false);
      } catch (error) {
        console.error("Error during loading:", error);
        setIsLoadingg(true);
        setIsLoading2(true);
      }
    };

    fetchData();
  }, []);

  const simulateAsyncAction = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 6000); // Simulate a delay (replace with your actual async action)
    });
  };

  // Function to show the success message
  const showSuccess = () => {
    setShowSuccessMessage(true);
  };

  // Function to hide the success message
  const hideSuccess = () => {
    setShowSuccessMessage(false);
  };

  const [bookmarkedItineraries, setBookmarkedItineraries] = useState([]);
  const [successMessageType, setSuccessMessageType] = useState("saved");

  const fetchBookmarkedItineraries = async () => {
    try {
      const response = await axios.get(
        `https://halaltravel.ai/hv/api/chatgpt/user/itinerary-bookmark/${userId}`
      );
      const data = response.data;
      setBookmarkedItineraries(
        data.map((bookmark) => ({
          itineraryId: bookmark.userItineraryId, // Ensure this matches your data structure
          bookmarkId: bookmark.id,
        }))
      );

      // Fetch logic...
      const isCurrentlyBookmarked = data.some(
        (bookmark) => Number(bookmark.userItineraryId) === Number(itineraryId)
      );
      setIsBookmarked(isCurrentlyBookmarked); // Make sure this logic correctly reflects the bookmark status
    } catch (error) {
      console.error("Failed to fetch bookmarked itineraries:", error);
    }
  };
  //console.log("xxx",bookmarkedItineraries)
  // Correctly use useEffect to call fetchBookmarkedItineraries
  useEffect(() => {
    fetchBookmarkedItineraries();
  }, [userId, itineraryId]);
  // Re-fetch when userId or itineraryId changes

  const isItineraryBookmarked = (userItineraryId) => {
    return bookmarkedItineraries.some(
      (item) => Number(item.itineraryId) === Number(userItineraryId)
    );
  };

  const handleUnsaveClick = async (itineraryId) => {
    // Find the bookmark entry for the current itinerary to get its bookmarkId
    const bookmark = bookmarkedItineraries.find(
      (item) => Number(item.itineraryId) === Number(itineraryId)
    );

    if (!bookmark) {
      console.error("Bookmark entry not found");
      return;
    }

    try {
      const response = await axios.delete(
        `https://halaltravel.ai/hv/api/chatgpt/user/itinerary-bookmark/${userId}/${bookmark.bookmarkId}`,
        {
          headers: {
            "Content-Type": "application/json",
            // Include authorization headers if required
          },
        }
      );

      if (response.status === 200 || response.status === 204) {
        console.log("Bookmark successfully deleted");
        // Update the state to reflect the deletion

        setBookmarkedItineraries((current) =>
          current.filter((item) => item.bookmarkId !== bookmark.bookmarkId)
        );
        setSuccessMessageType("unsaved");
        setShowSuccessMessage(true);
        fetchBookmarkedItineraries();
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
        // Optionally: Update any other state that depends on the list of bookmarks
      } else {
        console.error(
          "Failed to delete bookmark with status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error while deleting bookmark:", error);
    }
  };

  const handleBookmarkClick = async (itineraryId) => {
    try {
      // Fetch the itinerary details, including userItineraryId
      const data = await fetchItineraryDetails(itineraryId);

      if (data) {
        const userItineraryId = data.userItineraryId;

        // Update the requestBody with the obtained userItineraryId
        const requestBody = {
          user_id: userId,
          user_itinerary_id: userItineraryId,
        };

        setTitle(data.itineraryDetails.itineraryTitle);
        // console.log("PRINTT", requestBody);

        const response = await axios.post(
          "https://halaltravel.ai/hv/api/chatgpt/user/itinerary-bookmark",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          //setIsBookmarked(true);
          setSuccessMessageType("saved");
          setShowSuccessMessage(true);
          fetchBookmarkedItineraries();
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
          //showSuccess();
        } else {
          console.error("Error bookmarking itinerary");
        }
      } else {
        // Handle the case where data is null or userItineraryId is not available
        console.error("Error: User bookmark are not available");
      }
    } catch (error) {
      // Handle network errors or other errors here
      console.error("Error:", error);
    }
  };

  const loginStatus = (id, action) => {
    if (isLoggedIn) {
      action(id); // Perform the action (bookmark or unbookmark) if logged in
    } else {
      setIsPopup1Open(true); // Show login prompt if not logged in
      localStorage.setItem("customPath", "my-travelplan"); // Save intended action path
    }
  };


  const navigate = useNavigate();
  // setIsLoggedIn(true);
  const openPopup1 = () => {
    setIsPopup1Open(true);
    setIsPopup2Open(false); // Close Popup2 when Popup1 is opened
  };
  const openFilter = () => {
    setIsPopupFilterOpen(true);
  };

  const openPopup2 = () => {
    setIsPopup2Open(true);
    setIsPopup1Open(false); // Close Popup1 when Popup2 is opened
  };
  const openPopup3 = () => {
    setIsPopup3Open(true);
    setIsPopup1Open(false); // Close Popup1 when Popup3 is opened
  };
  const closeFilter = () => {
    setIsPopupFilterOpen(false);
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

  // console.log("eeee:", destination);
  // // // fetch travel plan
  // const fetchAllTravel = async () => {
  //   try {
  //     const data = await fetchAllTravelPlan();
  //     if (data) {
  //       setAllTravelPlan(data.alltravelPlan);
  //       setIsPlan(true);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching alltravelplan:", error);
  //   }
  // };
  const location = useLocation();
  // console.log("stste:", location.state);
  const receivedData = location.state;
  const dataSelected = location.state;
  // console.log("data selected", dataSelected);
  const [results, setResults] = useState([]);
  const [resultsApply, setResultsApply] = useState([]);
  const [resultsAll, setResultsAll] = useState([]);


  const { destination, state, country } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // * PAGINATION *
  const handleArrowClick = (direction) => {
    if (direction === "left" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "right" && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageButtonsRange = () => {
    const buttonsRange = [];
    const startPage = Math.max(currentPage - 1, 0);
    const endPage = Math.min(currentPage + 1, totalPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      buttonsRange.push(i);
    }

    return buttonsRange;
  };

  useEffect(() => {
    setIsLoadingg(true);
    scrollToTop();
    // Define your API endpoint
    const apiUrl =
      "https://halaltravel.ai/hv/api/chatgpt/user/itinerary/search/filter/page";

    // Create the request payload
    const requestData = {
      destination: destination,
      ...(state && { state: state }),
      country: country,
      attractions: (dataSelected && dataSelected.attractions) || [],
      interests: (dataSelected && dataSelected.interests) || [],
      page: currentPage,
    };

    console.log("req pageee:", requestData);

    const fetchData = async () => {
      try {
        // Make the API request
        const response = await axios.post(apiUrl, requestData);

        // Handle the API response here
        const data = response.data;
        setTotalPages(data.totalPages || 0);
        // Assuming the array of items is under the 'data' property
        const items = data.content || [];
        const itemsAll = data || [];
        // Use the 'items' array as needed
        setResultsAll(itemsAll);

        setResults(items);
        setIsLoadingg(false);
        // console.log("API responsess:", items);
        // console.log("API responsess:", itemsAll);

        console.log("API response page:", data);
      } catch (error) {
        // Handle any errors
        console.error("API error:", error);
      }
    };
    const calculatedProgress = (currentPage / totalPages) * 100;
    setProgress(calculatedProgress);

    // Call the fetchData function
    fetchData();
  }, [destination, state, country, dataSelected, currentPage]);

  //loading bar
  const [progress, setProgress] = useState(0);
  const isLastPage = resultsAll.last;
  const [currentTotal, setCurrentTotal] = useState(0);

  useEffect(() => {
    // Log the values to debug the issue
    console.log('numberOfElements:', resultsAll.numberOfElements, 'number:', resultsAll.number, 'totalElements:', resultsAll.totalElements);

    // Calculate currentTotal only if all values are present and numeric
    if (!isNaN(resultsAll.numberOfElements) && !isNaN(resultsAll.number) && !isNaN(resultsAll.totalElements)) {
      const calculatedTotal = isLastPage
        ? resultsAll.totalElements
        : resultsAll.numberOfElements * (resultsAll.number + 1);
      setCurrentTotal(calculatedTotal);
    } else {
      // Handle the case where values are missing or not numeric
      console.error('Invalid values for calculation');
      // Consider setting currentTotal to a default or error value
      setCurrentTotal(0); // or another appropriate value indicating an error
    }
  }, [isLastPage, resultsAll]);

  const [newDestination, setNewDestination] = useState(destination);
  const [newState, setNewState] = useState(state);
  const [newCountry, setNewCountry] = useState(country);



  // Autocomplete
  const [isApiLoaded, setApiLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cursorColor, setCursorColor] = useState("black");
  useEffect(() => {
    loadGoogleMapsApi({
      key: "AIzaSyB40jqFnXxo_4ZX7WezdrlR4NicJsseyu8",
      libraries: ["places"], // this line ensures the Places library is loaded
    }).then(() => {
      setApiLoaded(true);
    });

    const interval = setInterval(() => {
      setCursorColor((prevColor) =>
        prevColor === "black" ? "transparent" : "black"
      );
    }, 500); // Toggle cursor color every 500ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [selectedooc, setselectedooc] = useState("");

  var updatedestination = "";

  const handleChange = async (newInput) => {
    setNewDestination(newInput);
    updatedestination = newInput;
    await setNewDestination(newInput);
    await setselectedooc("");

    // setIsLoading(address.length <= 0);
    // alert(address);
  };
  // const handleChange = (newValue) => {
  //   setAddress(newValue);
  // };

  // const handleSelect = async (destination) => {
  //   //alert(address)
  //   const rows = destination.split(",");

  //   if (rows.length > 0) {
  //     setDestination1(rows[0]);
  //     setm(rows[0]);
  //     upatedestination = rows[0];
  //   } else {
  //     setDestination1(destination);
  //     setm(destination);
  //     upatedestination = destination;
  //   }

  //   await setselectedooc(destination);
  //   geocodeByAddress(destination)
  //     .then((results) => {
  //       let city;
  //       let country;
  //       // console.log("Results:", results);
  //       for (let i = 0; i < results[0].destination_components.length; i++) {
  //         if (results[0].destination_components[i].types.includes("locality")) {
  //           city = results[0].destination_components[i].long_name;
  //         }
  //         if (results[0].destination_components[i].types.includes("country")) {
  //           country = results[0].destination_components[i].long_name;
  //         }
  //       }

  //       if (typeof city === "undefined") {
  //         //  alert(results[0])
  //         // setAddress(country);
  //         // setm(country)
  //         // upateaddresss = country
  //       } else {
  //         // setAddress(city);
  //         // setm(city)
  //         // upateaddresss = city
  //       }

  //       return getLatLng(city + ", " + country);
  //     })
  //     .then((latLng) => console.log("Success", latLng))
  //     .catch((error) => console.error("Errorrrrr", error));
  //   setNav(!nav);
  //   setDisabled(!isDisabled);
  // };

  const handleSelect = async (selectedDestination) => {
    // Split the selected destination into parts
    const rows = selectedDestination.split(",");

    let selectedCity = "";
    let selectedState = "";
    let selectedCountry = "";

    if (rows.length > 0) {
      selectedCity = rows[0].trim();
      setNewDestination(selectedCity);
      updatedestination = selectedCity;
    } else {
      setNewDestination(selectedDestination);
      updatedestination = selectedDestination;
    }

    setNewDestination(selectedCity);
    updatedestination = selectedCity;
    // setNewState(state);
    // setNewCountry(country);
    await setselectedooc(selectedDestination);
    await setNewState(selectedState);
    await setNewCountry(selectedCountry);

    // Use react-places-autocomplete getLatLng to get latitude and longitude
    geocodeByAddress(selectedDestination)
      .then((results) => {
        // console.log("Results:", results);
        for (let i = 0; i < results[0].address_components.length; i++) {
          if (results[0].address_components[i].types.includes("locality")) {
            selectedCity = results[0].address_components[i].long_name;
          }
          if (
            results[0].address_components[i].types.includes(
              "administrative_area_level_1"
            )
          ) {
            setNewState(results[0].address_components[i].long_name);
          }
          if (results[0].address_components[i].types.includes("country")) {
            setNewCountry(results[0].address_components[i].long_name);
          }
        }

        return getLatLng(selectedCity + ", " + newCountry);
      })
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Errorrrrr", error));

    setNav(!nav);
    setDisabled(!isDisabled);
  };

  const [isClicked, setIsClicked] = useState(false);
  const wrapperRef = useRef(null);
  const [m, setm] = useState("");
  const [day, setday] = useState("");

  const [nav, setNav] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const fetchAndRenderItineraryDetails = async (itineraryId, userId) => {
    try {
      setIsLoading2(true);
      scrollToTop();
      // console.log("CLICK - ITINERARY ID: ", itineraryId);

      const data = await fetchItineraryDetails(itineraryId);
      const data2 = await fetchItineraryDestination(itineraryId);

      let itineraryDetails = data;
      let userItineraryActivity = data.itineraryDetails.userItineraryActivity;
      let travelPlanId = data.itineraryDetails.itineraryId;
      let day = data.itineraryDetails.day;
      let title = data.itineraryDetails.itineraryTitle;
      let location = data.itineraryDetails.location;
      let itineraryDestination = data2;
      let destination = data2.itineraryDestination.destination;

      // console.log("itineraryDetailsPC: ", itineraryDetails);
      // console.log("userItineraryActivityPC: ", userItineraryActivity);
      // console.log("itineraryIdPC: ", travelPlanId);
      // console.log("Title : ", title);

      navigate("/obs", {
        state: {
          location,
          title,
          itineraryDestination,
          destination,
          day,
          itineraryDetails,
          userItineraryActivity,
          travelPlanId,
          userId,
        },
      });
      setIsLoading2(false);
      // console.log('Combined Data:', combinedData);
    } catch (error) {
      console.error("Error fetching itinerary details:", error);
    }
  };

  const handleTravelPlanClick = (creatorId, itineraryId, title) => {
    const encodedTitle = encodeURIComponent(title);
    navigate(`/itinerary-save/${creatorId}/${itineraryId}/` + encodedTitle);
  };

  // Travelplan
  // const [destination1, setDestination1] = useState('');
  const [days, setDays] = useState("");
  const [language, setLanguage] = useState("");
  const [attractions, setAttractions] = useState([]);
  const [interests, setInterests] = useState([]);
  const [include, setInclude] = useState("");
  const [exclude, setExclude] = useState("");
  const [date, setDate] = useState(new Date());
  // Assuming date is a Date object
  const formattedDate = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date
      .getDate()
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;

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
      // If it is not selected, check if the maximum limit (3) is reached
      if (selectedAttraction.length < 3) {
        // Add the attraction to the selected attractions
        setSelectedAttraction([...selectedAttraction, attraction]);
      } else {
        // Display an alert or message indicating that the maximum limit is reached
        alert("You can select up to three attractions.");
      }
    }
  };

  const handleInterestClick = (interest) => {
    // Check if the interest is already selected
    if (selectedInterest.includes(interest)) {
      // If it is selected, remove it from the selected interests
      setSelectedInterest(selectedInterest.filter((item) => item !== interest));
    } else {
      // If it is not selected, check if the maximum limit (7) is reached
      if (selectedInterest.length < 5) {
        // Add the interest to the selected interests
        setSelectedInterest([...selectedInterest, interest]);
      } else {
        // Display an alert or message indicating that the maximum limit is reached
        alert("You can select up to five interests.");
      }
    }
  };

  // console.log("Interest: ", interests);
  // console.log("SelectedAttraction: ", selectedAttraction);
  // console.log("SelectedInterest: ", selectedInterest);

  const handleFetchInterests = () => {
    // Fetch interests based on the selected attractions
    fetchInterests();
  };

  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const handleGenerateClick = async () => {
    // console.log("GENERATE BUTTON CLICKED");

    try {
      // Prepare the query parameters
      if (
        !destination ||
        !language ||
        !days ||
        !formattedDate ||
        !selectedAttraction ||
        !selectedInterest
      ) {
        window.alert("Please fill in all the blanks before generating.");
        return;
      }

      const queryParams = {
        theme: 0,
        message: newDestination,
        state: newState,
        country: newCountry,
        days: days,
        date: formattedDate,
        language: language,
        attractions: selectedAttraction,
        interests: selectedInterest,
        include: include,
        exclude: exclude,
      };

      if (isLoggedIn) {
        try {
          dispatch(fetchData2(queryParams));
          navigate("/ota1", { state: queryParams });
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
      else {
        setShowAI(false);
        setIsPopup1Open(true);
        localStorage.setItem("customPath", "ota1");
        localStorage.setItem("state", JSON.stringify(queryParams));
      }

    } catch (error) {
      console.error("Error generating data:", error);
    }
  };

  const inputRef = useRef(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "exclude") {
      setExclude(value); // Assuming exclude is a comma-separated string
    } else if (name === "include") {
      setInclude(value); // Assuming include is a comma-separated string
    } else if (name === "date") {
      setDate(value);
    }

    if (exclude.length <= 50) {
      setCharacterEx(exclude.length);
    }
  };

  // Set the minimum date to the current date
  const minDate = new Date();

  return (
    <>
      {showSuccessMessage && (
        <div className="success-message">
          <div className="message-line">
            Travel plan <strong>{successMessageType === 'saved' ? 'saved to' : 'unsaved from'}</strong> your bookmark
            <button onClick={() => setShowSuccessMessage(false)} className="close-button">X</button>
          </div>
          <div className="message-line">
            {title} has been <strong>{successMessageType === 'saved' ? 'saved to' : 'unsaved from'}</strong>{' '}
          </div>
          <div className="message-line">
            <a href="/my-travelplan">My Travel Plan</a>.
          </div>
        </div>
      )}
      <div className="lg:h-[800px] md:h-[2400px] bg-[#F5F5F5]">
        <div className="bg-[#F5F5F5] flex flex-col font-montserrat lg:h-[fit] md:h-[fit]">
          <div className="fixed w-full" style={{ zIndex: 2 }}>
            <HeaderOTAAdmin openPopup1={openPopup1} className="absolute" />
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
            <FilterPage
              openFilter={openFilter}
              isOpenFilter={isPopupFilterOpen}
              closeFilter={closeFilter}
              address={destination}
              state={state}
              country={country}
            />
            <HeaderOTAMobileEpic
              openPopup1={openPopup1}
              className="visible fixed overflow-hidden lg:invisible lg:hidden"
            />
          </div>

          <Row
            className="bg-[#F5F5F5] md:w-[100%] lg:w-[100%] xs:pt-[160px] lg:pt-[92px] lg:px-[55px]"
            style={{ paddingTop: "lg:92px md:52px" }}
          >
            <div className="md:w-[35%] lg:w-[12%] lg:mt-8 md:mt-8 border-b-2 border-[#009444] p-2">
              <text className=" md:text-[35px] lg:text-[16px] font-semibold font-montserrat common-pointer text-[#009444]">
                My Travel Plan
              </text>
            </div>
            {isLoadingg ? null : (
              <>
                {results.length === 0 && (
                  <text className="md:w-[68%] lg:w-[80%] md:text-right lg:text-left md:mr-5 lg:mr-0 mt-10 ml-8 md:text-[32px] lg:text-[16px] font-medium font-montserrat common-pointer text-[#6B7280]">
                    No results found for "{destination}"
                  </text>
                )}
              </>
            )}

            {/* Display results if there are any */}

            {isLoadingg ? (
              <text className="md:w-[68%] lg:w-[80%] md:text-right lg:text-left md:mr-5 lg:mr-0 mt-10 ml-8 md:text-[32px] lg:text-[16px] font-medium font-montserrat common-pointer text-[#6B7280]"></text>
            ) : (
              <>
                {results.length > 0 && (
                  <text className="md:w-[68%] lg:w-[80%] md:text-right lg:text-left md:mr-5 lg:mr-0 mt-10 ml-8 md:text-[32px] lg:text-[16px] font-medium font-montserrat common-pointer text-[#6B7280]">
                    Search results for "{destination}"
                  </text>
                )}
              </>
            )}

            <div className=" lg:block sm:hidden items-end ">
              <Button
                className="cursor-pointer bg-[#00a19a] lg:mt-8 md:mt-8 text-white_A700 text-xs flex items-center justify-center min-w-[100px] h-[35px] md:ml-[0] ml-[20px] w-auto font-medium"
                shape="RoundedBorder6"
                size="sm"
                onClick={openFilter}
              >
                Filter by
              </Button>
            </div>
            <div class="lg:hidden sm:block">
              <Button
                className="text-[30px] fixed bottom-14 left-1/2 bg-[#00a19a] text-white_A700 text-xs flex items-center justify-center min-w-[100px] h-[80px] w-[200px] font-medium rounded-full shadow-md"
                style={{ 
                  zIndex: 1000,
                  transform: "translateX(-50%)"}}
                onClick={openFilter}
              >
                Filter by
              </Button>
            </div>
          </Row>

          <hr></hr>

          {/* To display hidden button */}
          {isLoading2 ? (
            <>
              {/* mobile view */}
              <div
                id="loading-container"
                className="loader-container21 md:block lg:hidden "
              >
                <div className="loader md:block lg:hidden "></div>
                <p className="loading-text md:block lg:hidden text-center ">
                  {loadingTexts[loadingTextIndex]}
                </p>
              </div>

              {/* web view */}
              <div
                id="loading-container"
                className="loader-container21 lg:block md:hidden "
              >
                <div className="loader lg:block md:hidden"></div>
                <p className="loading-text lg:block md:hidden text-center">
                  {loadingTexts[loadingTextIndex]}
                </p>
              </div>
            </>
          ) : (
            <>
              <Row className="lg:mb-0 md:mb-3">
                <text className="mt-10 md:text-[28px] lg:text-[14px] sm:pl-6 lg:pl-[60px] font-semibold">
                  {currentTotal}
                </text>
                <text className="mt-10 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px]">
                  of
                </text>
                <text className="mt-10 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px] font-semibold">
                  {resultsAll.totalElements}
                </text>
                <text className="mt-10 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px] ">
                  Travel Plans
                </text>
              </Row>

              <div className="bg-[#F5F5F5] sm:p-5 lg:p-0 sm:px-5 lg:px-[55px] sm:py-4 lg:py-3 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-[30px] lg:gap-9">
                {/* add ai */}
                <div
                  className="bg-white sm:w-auto sm:h-[630px] lg:w-auto lg:h-[360px] 2xl:h-[420px] cursor-pointer border flex flex-col items-center justify-center shadow-lg border rounded-lg hover:scale-105 duration-300"
                  onClick={() => setShowAI(true)}
                >
                  <Icon
                    path={mdiPlusCircle}
                    className="text-[#00A19A] items-center text-center"
                    size={1.5}
                  />
                  <p className="font-bold sm:text-[24px] lg:text-[14px]">
                    Travel smarter with AI
                  </p>
                </div>

                {showAI ? (
                  <>
                    <div className="bg-gray-50 xs:top-0 lg:top-0 rounded-3xl cursor-pointer justify-center shadow-3xl items-center lg:mx-[400px] lg:my-[20px] flex-nowrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      {/*Content*/}

                      <Column className="sm:py-[50px] sm:w-[100%] sm:h-[100%] lg:py-[10px] lg:w-[100%] lg:h-fit">
                        <Row className="text-end items-end justify-end mr-4">
                          <FaTimes
                            className="mr-4 mt-6 sm:h-10 sm:w-10 lg:h-5 lg:w-5 text-black common-pointer"
                            onClick={() => setShowAI(false)}
                          />
                        </Row>
                        <Row className="w-[100%] items-start justify-start">
                          <Text className="w-[60%] text-start py-[30px] ml-[60px] sm:text-[37px] lg:text-xl text-black font-light">
                            Tell us about your travel plan!
                          </Text>
                        </Row>
                        <div className="m-2 mt-2 grid grid-cols-2 gap-4 mx-[60px]">
                          {/* web view */}
                          <div class="sm:hidden lg:block xl:block 2xl:block">
                            <span className="font-medium sm:text-[28px] lg:text-[14px]">
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
                                value={newDestination}
                                onChange={handleChange}
                                onSelect={handleSelect}
                              >
                                {({
                                  getInputProps,
                                  suggestions,
                                  getSuggestionItemProps,
                                  loading,
                                }) => {
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
                                            "font-normal not-italic font-montserrat p-[0] sm:text-[8px] md:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black placeholder:required text-slate_700 w-[100%] outline-none border-none",
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
                                                  width: "300px",
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
                                                  width: "300px",
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
                          {/* mobile view */}
                          <div className="sm:block lg:hidden">
                            <label
                              for="language"
                              className="font-medium sm:text-[28px] lg:text-[14px]"
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
                                value={destination}
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
                                        value={newDestination}
                                        onChange={handleChange}
                                        onSelect={handleSelect}
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
                          <div className="">
                            <label
                              for="language"
                              className="font-medium sm:text-[28px] lg:text-[14px]"
                            >
                              Output language:
                            </label>
                            <select
                              id="languages"
                              className="placeholder-[#d5d5d5] rounded-xl border border-[#00a19a] text-gray-900 sm:text-[26px] lg:text-xs focus:border-[#00a19a] block sm:h-24 lg:h-9 sm:w-[100%] lg:w-[100%]"
                              value={language}
                              onChange={(e) => setLanguage(e.target.value)}
                              required
                            >
                              <option value="text-[#d5d5d5]">Select</option>
                              <option value="english">English</option>
                              <option value="malay">Malay</option>
                              <option value="chinese_simplified">
                                Chinese Simplified
                              </option>
                              <option value="chinese_traditional">
                                Chinese Traditional
                              </option>
                              <option value="indonesian">Indonesian</option>
                              <option value="thai">Thai</option>
                              <option value="japanese">Japanese</option>
                              <option value="korean">Korean</option>
                              <option value="filipino">Filipino</option>
                              <option value="hindi">Hindi</option>
                              <option value="spanish">Spanish</option>
                              <option value="arabic">Arabic</option>
                              <option value="french">French</option>
                              <option value="bengali">Bengali</option>
                              <option value="russian">Russian</option>
                              <option value="portuguese">Portuguese</option>
                              <option value="vietnamese">Vietnamese</option>
                            </select>
                          </div>
                        </div>

                        <div className="m-2 mt-2 grid grid-cols-2 gap-4 mx-[60px]">
                          <div className="">
                            <label
                              for="days"
                              className="font-medium sm:text-[28px] lg:text-[14px]"
                            >
                              No. of days:
                            </label>
                            <select
                              id="days"
                              className="placeholder-[#d5d5d5] rounded-xl border border-[#00a19a] sm:text-[28px] lg:text-xs text-gray-900 focus:ring-blue-500 focus:border-blue-500 block sm:h-24 lg:h-9 sm:w-[100%] lg:w-full"
                              value={days}
                              onChange={(e) => setDays(e.target.value)}
                              required
                            >
                              <option value=" ">Select</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>

                          {/* mobile view */}
                          <div className="sm:block lg:hidden">
                            <label
                              for="date"
                              className="font-medium sm:text-[28px] lg:text-[14px]"
                            >
                              Date:
                            </label>
                            <div className="sm:block lg:hidden items-center flex justify-start p-4 gap-4 outline outline-[1px] outline-[#00a19a] rounded-xl sm:h-24 lg:h-9 hover:outline-blue-500/75">
                              <FiCalendar
                                size={30}
                                className="ml-2 text-[#00a19a]"
                              />
                              <input
                                type="date"
                                id="myDate"
                                name="myDate"
                                min={minDate.toISOString().split("T")[0]}
                                className="border-none text-black text-[28px] pt-6 bg-transparent"
                                defaultValue={
                                  startDate.toISOString().split("T")[0]
                                }
                                // onChange={(date) => setStartDate(date)}
                                onChange={(event) =>
                                  setStartDate(new Date(event.target.value))
                                }
                              ></input>
                            </div>
                          </div>

                          {/* web view */}
                          <div className="sm:hidden lg:block xl:block 2xl:block">
                            <label
                              for="date"
                              className="font-medium sm:text-[28px] lg:text-[14px]"
                            >
                              Date:
                            </label>
                            <div className="sm:hidden md:hidden lg:block xl:block 2xl:block bg-white_A700 flex flex-row gap-[5px] items-center outline outline-[1px] outline-[#00a19a] rounded-xl w-[100%] lg:h-9">
                              <FiCalendar
                                size={30}
                                className="ml-2 text-[#00a19a]"
                              />
                              <DatePicker
                                className="font-normal font-montserrat not-italic p-[0] lg:text-xs text-black placeholder:required text-slate_700 w-[100%]"
                                wrapClassName="w-[100%] "
                                placeholder="Date"
                                name="date"
                                shape="RoundedBorder3"
                                size="sm"
                                type="date"
                                minDate={minDate}
                                value={date}
                                selected={date}
                                onChange={(date) => setDate(date)}
                              />
                              {/* </Input> */}
                            </div>
                          </div>
                        </div>

                        <div className="mx-[60px] mt-6">
                          <label
                            htmlFor="typeofattraction"
                            className="font-medium sm:text-[28px] lg:text-[14px]"
                          >
                            Type of attractions: (Choose at least 2 Attractions)
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
                            className="font-medium sm:text-[28px] lg:text-[14px]"
                          >
                            Your Interests: (Choose at least 2 Interests)
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

                        <div className="mt-4 mx-[60px]">
                          <label
                            for="exclusion"
                            className="font-medium sm:text-[28px] lg:text-[14px]"
                          >
                            Exclude: (optional)
                          </label>
                          <input
                            className="placeholder-[#9A9A9A] bg-white border border-[#00a19a] text-gray-900 sm:text-[26px] lg:text-xs focus:border-[#00a19a] rounded-xl block sm:h-24 lg:h-9 sm:w-[100%] lg:w-[100%]"
                            type="text"
                            name="exclude"
                            size="smSrc"
                            value={exclude.substring(0, 50)}
                            onChange={handleInputChange}
                            required
                            placeholder="Insert places that you want to exlude"
                            title="E.g. Batu Caves"
                          ></input>
                          <div className="flex justify-between">
                            <p className="sm:text-[26px] lg:text-xs">
                              Separate each entry with a comma
                            </p>
                            <text className="sm:text-[26px] lg:text-xs">
                              {characterEx}/50 max characters
                            </text>
                          </div>
                        </div>

                        <div className="mt-4 mx-[60px] mb-2">
                          <label
                            for="inclusion"
                            className="font-medium sm:text-[28px] lg:text-[14px]"
                          >
                            Include: (optional)
                          </label>
                          <input
                            className="placeholder-[#9A9A9A] bg-white border border-[#00a19a] text-gray-900 sm:text-[26px] lg:text-xs focus:border-[#00a19a] rounded-xl block sm:h-24 lg:h-9 sm:w-[100%] lg:w-[100%]"
                            name="include"
                            type="text"
                            size="smSrc"
                            required
                            value={include}
                            onChange={handleInputChange}
                            placeholder="Insert places that you want to include"
                            title="E.g. Pavillion Kuala Lumpur"
                          ></input>
                          <div className="flex justify-between">
                            <p className="sm:text-[26px] lg:text-xs">
                              Separate each entry with a comma
                            </p>
                            <text className="sm:text-[26px] lg:text-xs">
                              0/50 max characters
                            </text>
                          </div>
                        </div>

                        <Row className="justify-between lg:mb-3 mx-[60px] text-end mt-[30px] ">
                          <button
                            className="bg-[#00A19A] md:text-[30px] lg:text-[14px] justify-end items-end lg:w-[15%] md:w-[20%] text-white font-medium px-4 py-1.5 rounded-lg "
                            onClick={() => {
                              setShowAI(false);
                            }
                            }
                          >
                            Back
                          </button>

                          <button
                            className="bg-[#00A19A] md:text-[30px] lg:text-[14px] inline-flex justify-center items-center lg:w-fit md:w-[45%] text-center text-white font-medium px-4 py-2 rounded-lg "
                            onClick={handleGenerateClick}
                          >
                            {isLoggedIn ? (
                              <>Generate</>
                            ) : (
                              <>
                                <MdOutlineEmail className="lg:w-[20px] lg:h-[20px] md:w-[35px] md:h-[35px] mr-2" />
                                Sign in to Continue
                              </>
                            )}
                          </button>
                        </Row>
                      </Column>
                    </div>

                    <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}

                {isLoadingg ? (
                  <>
                    <div
                      className="md:hidden lg:block"
                      style={{
                        position: "fixed",
                        top: "80px",
                        left: 0,
                        width: "100%",
                        zIndex: 999,
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "8px",
                          backgroundColor: "#eee",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: `${progress}%`,
                            height: "100%",
                            backgroundColor: "#00A19A",
                            transition: "width 0.3s ease",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div
                      className="md:block lg:hidden"
                      style={{
                        position: "fixed",
                        top: "150px",
                        left: 0,
                        width: "100%",
                        zIndex: 999,
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "10px",
                          backgroundColor: "#eee",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: `${progress}%`,
                            height: "100%",
                            backgroundColor: "#00A19A",
                            transition: "width 0.3s ease",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div
                      id="loading-container"
                      className="loader-container md:block lg:hidden "
                    >
                      <div className="loader md:block lg:hidden"></div>
                      <p className="loading-text md:block lg:hidden text-center">
                        {loadingTexts[loadingTextIndex]}
                      </p>
                    </div>
                    <div
                      id="loading-container"
                      className="loader-container lg:block md:hidden"
                    >
                      <div className="loader lg:block md:hidden"></div>
                      <p className="loading-text lg:block md:hidden text-center">
                        {loadingTexts[loadingTextIndex]}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {results.map((results, index) => (
                      <div className="bg-white md:w-full md:h-[630px] lg:w-full lg:h-[360px] 2xl:h-[420px] border shadow-lg rounded-lg hover:scale-105 duration-300">
                        <div className="relative" key={index}>
                        <button
                            className="absolute top-2 right-2 cursor-pointer"
                            onClick={() =>
                              loginStatus(
                                results.id,
                                isItineraryBookmarked(results.id)
                                  ? handleUnsaveClick
                                  : handleBookmarkClick
                              )
                            }
                          >
                            <Icon
                              path={mdiBookmarkOutline}
                              className={`sm:w-[60px] sm:h-[60px] lg:w-[30px] lg:h-[30px] ${
                                isItineraryBookmarked(results.id)
                                  ? "text-[#FFFFFF] bg-[#00A19A]"
                                  : "text-[#00A19A] bg-[#FFFFFF]"
                              } w-fit h-fit p-1 rounded-full common-pointer`}
                            />
                          </button>
                          <img
                            src={`https://halaltravel.ai/hv/api/chatgpt/user/itinerary/coverimage/${results.coverImage}`}
                            alt={results.alt}
                            className="w-full sm:h-[350px] lg:h-[200px] 2xl:h-[220px] object-cover sm:rounded-t-lg lg:rounded-t-lg"
                          />
                        </div>

                        <div
                          className="items-center sm:p-6 lg:p-3 common-pointer"
                          onClick={() => {
                            handleTravelPlanClick(
                              results.userId,
                              results.id,
                              results.title
                            );
                          }}
                        >
                          <Row>
                            <p
                              className="ml-3 justify-center font-bold w-fit md:text-[28px] lg:text-[14px] lg:block md:hidden"
                              title={results.title}
                            >
                              {results.title.length > 28
                                ? `${results.title.substring(0, 28)}...`
                                : results.title}
                              {/* Private Tour Kuala Lumpur */}
                              {/* {filteredFood.name.length > 20 ? filteredFood.name.substring(0, 20) + '...' : filteredFood.name} */}
                            </p>
                            <p
                              className="ml-3 justify-center font-bold w-fit md:text-[28px] lg:text-[14px] lg:hidden md:block"
                              title={results.title}
                            >
                              {results.title.length > 23
                                ? `${results.title.substring(0, 23)}...`
                                : results.title}
                              {/* Private Tour Kuala Lumpur */}
                              {/* {filteredFood.name.length > 20 ? filteredFood.name.substring(0, 20) + '...' : filteredFood.name} */}
                            </p>
                          </Row>
                          <p
                            className="ml-3 mt-1 w-fit md:text-[25px] lg:text-[12px] lg:h-[40px] 2xl:h-[75px] md:h-[20px] lg:block md:hidden"
                          //   title={filteredFood.desc}
                          >
                            {results.description.length > 65
                              ? `${results.description.substring(0, 65)}...`
                              : results.description}
                            {/* Get a bird’s-eye view over Kuala Lumpur */}
                            {/* {filteredFood.desc.length > 40 ? filteredFood.desc.substring(0, 40) + '...' : filteredFood.desc} */}
                          </p>
                          <p
                            className="ml-3 mt-1 w-fit md:text-[23px] lg:text-[12px] lg:h-[40px] md:h-[70px] lg:hidden md:block"
                          //   title={filteredFood.desc}
                          >
                            {results.description.length > 60
                              ? `${results.description.substring(0, 60)}...`
                              : results.description}
                            {/* Get a bird’s-eye view over Kuala Lumpur */}
                            {/* {filteredFood.desc.length > 40 ? filteredFood.desc.substring(0, 40) + '...' : filteredFood.desc} */}
                          </p>

                          {/* <div className="ml-3 mt-3">
                <Row>
                <text className=" text-[12px] mt-0.5 ">
                    Adventure
                  </text>
                  <Icon
                    path={mdiCircleSmall } 
                    size={1}
                    className=" w-fit h-fit"
                  />
                  <text className=" text-[12px] mt-0.5 ">
                    History
                  </text>
                </Row>

            </div> */}
                          <style>
                            {`
                        .interests-tooltip {
                          display: none;
                          position: absolute;
                          background-color: white;
                          border: 0.5px solid black;
                          padding: 8px;
                          z-index: 1;
                          right: 0; /* Align to the right */
                          flex-direction: row;
                        }

                        .tag-container {
                          position:;
                          display: inline-block;
                        }

                        .tag:hover .interests-tooltip {
                          display: block;
                        }
                      `}
                          </style>
                          <div className="flex justify-between mx-3 items-center lg:h-[30px] sm:h-[20px] md:mt-4 lg:mt-0 font-bold">
                            <div className="tags truncate w-[200px] items-center ">
                              {results.interests &&
                                results.interests.length > 0 ? (
                                <>
                                  {results.interests
                                    .slice(0, 2)
                                    .map((tag, tagIndex) => (
                                      <span
                                        key={tagIndex}
                                        className="tag w-[210px] sm:text-[22px] xl:text-[11px] lg:text-[11px] font-medium"
                                        style={{ maxWidth: "0px" }} // Set the maximum width for tags
                                      >
                                        {tagIndex > 0 && (
                                          <span className="dot lg:text-[20px] md:text-[20px] mx-2 font-medium">
                                            •
                                          </span>
                                        )}
                                        {tag.length > 15
                                          ? tag.substring(0, 15) + "..."
                                          : tag}
                                      </span>
                                    ))}
                                  {results.interests.length > 1 && (
                                    <span
                                      className="tag sm:text-[22px] lg:h-[30px] xl:text-[11px] lg:text-[11px] font-medium"
                                      style={{ maxWidth: "100px" }} // Set the maximum width for tags
                                    >
                                      <div class="interests-tooltip">
                                        {results.interests
                                          .slice(2)
                                          .map((interest, index) => (
                                            <div
                                              key={index}
                                              style={{ maxWidth: "100px" }}
                                            >
                                              {interest.length > 15
                                                ? interest.substring(0, 15) +
                                                ".."
                                                : interest}
                                            </div>
                                          ))}
                                      </div>
                                      {"      "} +{results.interests.length - 2}
                                    </span>
                                  )}
                                </>
                              ) : (
                                <span className="tag sm:text-[22px] lg:h-[30px] xl:text-[11px] lg:text-[11px] font-medium">
                                  No interests.
                                </span>
                              )}
                            </div>
                            {/* to display state */}

                            <div className="state truncate items-center">
                              {results.state && (
                                <span className="flex items-center sm:text-[22px] xl:text-[11px] lg:text-[11px] font-medium">
                                  <FaMapMarkerAlt className="inline-block mr-1" />
                                  {results.state.replace(
                                    "Federal Territory of ",
                                    ""
                                  ).length > 9
                                    ? `${results.state
                                      .replace("Federal Territory of ", "")
                                      .substring(0, 9)}...`
                                    : results.state.replace(
                                      "Federal Territory of ",
                                      ""
                                    )}
                                </span>
                              )}
                            </div>

                            {/* to display state and country */}

                            {/* <div>
  {results.state && results.country && (
    <span className="sm:text-[22px] xl:text-[11px] lg:text-[11px] font-medium">
      <FaMapMarkerAlt className="inline-block mr-1" />
      {results.state.length > 9
        ? `${results.state.substring(0, 9)}...`
        : results.state}, {results.country}
    </span>
  )}
</div> */}
                          </div>

                          <div className="justify-between ml-2 mr-3 lg:mt-[0px] md:mt-[25px] flex lg:mb-0 md:mb-1">
                            <div className="">
                              <Row>
                                <Icon
                                  path={mdiBookmark}
                                  size={1}
                                  className="text-[#00A19A]  w-fit h-fit lg:mt-0 md:mt-2"
                                />
                                <text className=" text-[#00A19A] lg:text-[12px] font-semibold md:text-[24px] mt-0.5">
                                  {results.savedCount} Saves
                                </text>
                              </Row>
                            </div>

                            <div className="">
                              {/* Render if username is not null */}
                              {results.username !== null && (
                                <>
                                  <text
                                    username={results.username}
                                    className="lg:text-[12px] md:text-[24px] italic text-[#000000] lg:block md:hidden"
                                  >
                                    {results.username.length > 20
                                      ? results.username.substring(0, 20) +
                                      "..." // Display first 20 characters and add ellipsis
                                      : results.username}
                                  </text>
                                  <text
                                    username={results.username}
                                    className="lg:text-[12px] md:text-[24px] italic text-[#000000] md:block lg:hidden"
                                  >
                                    {results.username.length > 18
                                      ? results.username.substring(0, 18) +
                                      "..." // Display first 20 characters and add ellipsis
                                      : results.username}
                                  </text>
                                </>
                              )}
                              {/* Render a space character if username is null */}
                              {results.username === null && (
                                <>
                                  <text
                                    username={results.username}
                                    className="lg:text-[12px] md:text-[24px] italic text-[#000000] lg:block md:hidden"
                                  >
                                    {" "}
                                  </text>
                                  <text
                                    username={results.username}
                                    className="lg:text-[12px] md:text-[24px] italic text-[#000000] md:block lg:hidden"
                                  >
                                    {" "}
                                  </text>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </>
          )}

          {isLoadingg || isLoading2 ? null : (
            <>
              <Row className="justify-end w-[100%]">
                <text className="mt-6 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px]">
                  Page
                </text>
                <text className="mt-6 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px]">
                  {currentPage + 1}
                </text>
                <text className="mt-6 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px]">
                  of
                </text>
                <text className="mt-6 md:text-[28px] lg:text-[14px] sm:pl-2 lg:pl-[5px] sm:pr-6 lg:pr-[60px] ">
                  {totalPages}
                </text>
              </Row>

              <div className=" lg:mb-[100px] md:mb-[230px] md:hidden lg:block flex flex-row font-poppins items-start common-pointer justify-center ml-[0px] mt-[46px] w-[100%] h-[fit]">
                <Img
                  className={`lg:mr-2 md:mr-6 lg:h-[13px] md:h-[35px] lg:mt-[20px] md:mt-[46px] lg:w-[15px] md:w-[35px]${currentPage > 0 ? "common-pointer" : "hidden"
                    }`}
                  src="https://vm.epictravel.ai/images/img_arrowleftmp.svg"
                  onClick={() => handleArrowClick("left")}
                />
                {getPageButtonsRange().map((pageNumber) => (
                  <ButtonMp
                    key={pageNumber}
                    className={` shadow-lg flex lg:h-[50px] lg:w-[50px] md:h-[120px] md:w-[120px] common-pointer items-center justify-center ml-5 rounded-full text-center text-shadow-ts lg:text-[16px] md:text-[35px] tracking-[-0.30px] 
                              ${currentPage === pageNumber
                        ? " bg-cyan-700 text-white"
                        : "bg-white text-gray-700"
                      }`}
                    size="txtPoppinsMedium20"
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber + 1}
                  </ButtonMp>
                ))}
                <Img
                  className={` lg:ml-7 md:ml-11 lg:h-[13px] md:h-[35px] lg:mt-[20px] md:mt-[46px] lg:w-[15px] md:w-[35px]${currentPage < totalPages ? "common-pointer" : "hidden"
                    }`}
                  src="https://vm.epictravel.ai/images/img_arrowright_gray_700_01.svg"
                  alt="arrowright_One"
                  onClick={() => handleArrowClick("right")}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ListTravelPlan;



