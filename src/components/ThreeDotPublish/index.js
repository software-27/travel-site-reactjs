
import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Text } from 'components';
import ContentSettingEdit from "components/ContentSettingEdit/index";
import ReactDOM from "react-dom";
import LinkBtnPublish from 'components/linkBtnPublish/index';

const ThreeDotPublish = ({
  description,
  title,
  days,
  attractions,
  interests,
  image,
  itineraryId,
  userId,
  fetchTravel,
  showAlertMessage,
  itineraryLink
}) => {

  const threedotButtonRef = useRef(null);
  const [menuActive, setMenuActive] = useState(false);
  const modalRef = useRef(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState(false);
  const token = localStorage.getItem("token");
  const [isShowContentSettingEdit, setIsShowContentSettingEdit] =
    React.useState(false);
  const [isLinkBtnPublish , setIsLinkBtnPublish] = React.useState(false);

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

  const handleOptionClick = (event) => {
    event.preventDefault();
    // event.stopPropagation(); 
  };
  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuActive(!menuActive);
    setShowConfirmation(false);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };
  const handleEdit = () => {
    setIsShowContentSettingEdit(true);
  };
  const handleShare = () => {
    setIsLinkBtnPublish(true);
  };
  const closePopup3 = () => {
    setIsShowContentSettingEdit(false);
    setIsLinkBtnPublish(false);
  };

  const handlePrivate = async () => {
    try {
      const requestBody = {
        userId: userId,
        itineraryId: itineraryId,
        status: "DRAFT",
      };
      await axios.post('https://halaltravel.ai/hv/api/chatgpt/user/itinerary/updatestatus', requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Status updated successfully!');
      showAlertMessage('success');
      await fetchTravel(userId);
    }
    catch (error) {
      console.error('Error updating status:', error);
      showAlertMessage('error');
    }

  }

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
        className={`absolute top-0 right-2 cursor-pointer bg-black bg-opacity-40 lg:w-6 lg:h-6 md:w-[55px] md:h-[55px] p-1 rounded-full shadow-md transition duration-300 hover:bg-opacity-60 ${menuActive ? '' : ''
          }`}
        onClick={toggleMenu}
        ref={threedotButtonRef}
      >
        <div className="flex items-center justify-center">
          {/* <span className="text-white text-xl">&#8226;&#8226;&#8226;</span> */}
          <img className="lg:w-[15px] lg:h-[15px] md:w-[30px] md:h-[30px]" src="images/three_dots.svg" alt="three_dots" />
        </div>

      </button>
      <div
        className={`absolute lg:top-7 md:top-16 right-2 bg-white text-black border border-gray-300 shadow-md rounded-lg ${menuActive ? 'block ' : 'hidden'
          }`}
        onClick={handleOptionClick}
        ref={modalRef}
      >
        <ul className="lg:w-[150px] md:w-[200px] ">
          <li className="pl-4 py-1 lg:text-[14px] md:text-[24px] whitespace-nowrap flex items-center hover:bg-gray-100 transition duration-300" onClick={handlePrivate} >
            {/* <img src="/images/copy_link.jpg" alt="Icon 2" className="mr-2 h-3 w-3" /> */}
            Private
          </li>
          <hr></hr>
          <li className="pl-4 py-1 lg:text-[14px] md:text-[24px] whitespace-nowrap flex items-center hover:bg-gray-100 transition duration-300"
            onClick={handleShare}
          >
            Share
          </li>
          <hr></hr>
          <li
            className="pl-4 py-1 lg:text-[14px] md:text-[24px] whitespace-nowrap flex items-center hover:bg-gray-100 transition duration-300"
            onClick={handleEdit}
          >
            Edit
          </li>
          <hr></hr>
          <li className="pl-4 py-1 lg:text-[14px] md:text-[24px] whitespace-nowrap flex items-center hover:bg-gray-100 transition duration-300" onClick={handleDelete} >
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
      {isLinkBtnPublish &&
        ReactDOM.createPortal(
          <LinkBtnPublish
          closePopup3={closePopup3}
            creatorId={userId}
            itineraryId={itineraryId}
            title={title}
            itineraryLink={itineraryLink}
            modalVisible={isLinkBtnPublish}
          />,
          document.body
        )}

      {isShowContentSettingEdit &&
        ReactDOM.createPortal(
          <ContentSettingEdit
            closePopup3={closePopup3}
            itineraryId={itineraryId}
            showContentSetting={isShowContentSettingEdit}
            days={days}
            title={title}
            attractions={attractions}
            description={description}
            image={image}
            fetchTravel={fetchTravel}
            interests={interests}
          />,
          document.body
        )}
    </div>
  );
};

export default ThreeDotPublish;

