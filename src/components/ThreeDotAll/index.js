

import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Text } from 'components';

const ThreeDotAll = ({ itineraryId, userId, fetchTravel }) => {
  const threedotButtonRef = useRef(null);
  const [menuActive, setMenuActive] = useState(false);
  const modalRef = useRef(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !threedotButtonRef.current.contains(event.target)
      ) {
        setMenuActive(false);
        setShowConfirmation(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuActive(!menuActive);
    setShowConfirmation(false);
  };

  const handleOptionClick = (event) => {
    event.preventDefault();
    // event.stopPropagation(); 
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };


  const handleDeleteClick = async () => {

    try {
      // Make the API call to delete
      await axios.delete(`https://halaltravel.ai/hv/api/chatgpt/user/itinerary/${userId}/${itineraryId}`);

      console.log('Deletion successful!');
      await fetchTravel(userId);
    } catch (error) {

      console.error('Error deleting itinerary:', error);
    }
  };

  const confirmRemove = () => {
    handleDeleteClick();
    setShowConfirmation(false);

    setTimeout(() => {
      setMessage(false);
    }, 1000);
  };

  const cancelRemove = () => {
    setShowConfirmation(false);
  };


  return (
    <div className="relative inline-block">
      <button
        className={`absolute top-0 right-2 cursor-pointer bg-black bg-opacity-40 w-6 h-6 p-1 rounded-full shadow-md transition duration-300 hover:bg-opacity-60 ${menuActive ? '' : ''
          }`}
        onClick={toggleMenu}
        ref={threedotButtonRef}
      >
        <div className="flex items-center justify-center">
          {/* <span className="text-white text-xl">&#8226;&#8226;&#8226;</span> */}
          <img className="w-[15px] h-[15px]" src="images/three_dots.svg" alt="three_dots" />
        </div>

      </button>
      <div
        className={`absolute top-7 right-2 bg-white text-black border border-gray-300 shadow-md rounded-lg ${menuActive ? 'block ' : 'hidden'
          }`}
        onClick={handleOptionClick}
        ref={modalRef}
      >
        <ul className="w-[150px] ">
          {/* <li className="pl-4 py-1 whitespace-nowrap flex items-center hover:bg-gray-100 transition duration-300" >
            <img src="/images/copy_link.jpg" alt="Icon 2" className="mr-2 h-3 w-3" />
            Publish
          </li> */}
          <hr></hr>
          <li className="pl-4 py-1 whitespace-nowrap flex items-center hover:bg-gray-100 transition duration-300">
            {/* <img src="/images/copy_link.jpg" alt="Icon 2" className="mr-2 h-3 w-3" /> */}
            Share
          </li>
          <hr></hr>
          {/* <li className="pl-4 py-1 whitespace-nowrap flex items-center hover:bg-gray-100 transition duration-300" >
           
            <img src="/images/img_trash_black.svg" alt="Icon 3" className="mr-2 h-3 w-3" />
            Duplicate
          </li> */}
          <hr></hr>
          <li className="pl-4 py-1 whitespace-nowrap flex items-center hover:bg-gray-100 transition duration-300" onClick={handleDelete} >
            {/* <img src="/images/img_trash_black.svg" alt="Icon 3" className="mr-2 h-3 w-3" /> */}
            Delete
          </li>

        </ul>
        {message && (
          <div className="absolute bg-green-400 shadow-lg text-white p-2 mt-10 right-7 rounded">
            Travel plan deleted
          </div>
        )}
        {showConfirmation && (
          <>
            <div className="sm:hidden lg:block">
              <div className="block absolute right-0 text-md">
                <div className="bg-gray-100 border border-gray-300 shadow-2xl p-4 rounded">
                  <p>Confirm delete travel plan?</p>
                  <div className="mt-2 flex justify-center text-xs">
                    <button className="px-4 py-2 mr-2 bg-red-600 text-white rounded hover:bg-red-500" onClick={confirmRemove}>Confirm</button>
                    <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400" onClick={cancelRemove}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:block lg:hidden">
              <div className="block absolute right-10 text-3xl ">
                <div className="bg-white border border-gray-300 shadow-2xl p-6 rounded-lg">
                  <p>Confirm delete travel plan?</p>
                  <div className="mt-5 flex justify-center text-2xl">
                    <button className="px-7 py-4 mr-5 bg-red-600 text-white rounded-lg hover:bg-red-500" onClick={confirmRemove}>Confirm</button>
                    <button className="px-7 py-4 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400" onClick={cancelRemove}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}



      </div>



    </div>
  );
};

export default ThreeDotAll;

