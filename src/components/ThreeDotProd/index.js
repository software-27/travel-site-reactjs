import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Text, Line } from 'components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ThreeDotProd = ({ fetchProduct, userId, productId, productCode, productPin, productLink }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const token = localStorage.getItem("token");
  const tokenType = localStorage.getItem("tokenType");
  // const userId = localStorage.getItem("userId");
  const menuRef = useRef(null);
  const threedotButtonRef = useRef(null);
  const [showConfirmation, setShowConfirmation] = useState(false);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
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

  const togglePin = async (event) => {
    event.preventDefault();

    console.log("userId: ", userId, " productId: ", productId, "token: ", token);

    try {
      const response = await axios.patch(
        `https://halaltravel.ai/ht/api/product/${userId}/togglePin/${productId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      await fetchProduct(userId);
      console.log("Pin response: ", response.data);

    } catch (error) {
      console.error('Error toggling pin status:', error);
    }
  };

  // function addAdditionalParams(originalLink) {
  //   const additionalParams = `&encoder=27_1&enc_cid=${userId}`;

  //   // Create a URL object from the original URL
  //   const urlObject = new URL(originalLink);

  //   // Append the additional parameters
  //   urlObject.search += additionalParams;

  //   // Get the modified URL
  //   const modifiedUrl = urlObject.href;

  //   return modifiedUrl;
  // }

  function insertUserIdToLink(link) {
    // Split the link into two parts at the position where you want to insert the new parameter
    const [prefix, suffix] = link.split('&lc=');
  
    // Combine the parts with the new parameter
    const modifiedLink = `${prefix}&enc_cid=${userId}&lc=${suffix}`;
  
    return modifiedLink;
  }

  const handleCopyLink = async () => {
    try {
      const input = document.createElement('input');
      input.value = insertUserIdToLink(productLink);
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      console.log('Link copied:', productLink);
      // setCopySuccess(true);

      toast.success('Link successfully copied!', {
        autoClose: 1500,
        position: 'bottom-center',
        closeButton: false,
      });

      // Hide the success message after 1 second
      // setTimeout(() => {
      //   setCopySuccess(false);
      // }, 500);
    } catch (error) {
      console.error('Error copying link:', error);
    }
  };

  const handleRemove = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  const postRemove = async () => {

    console.log("userId: ", userId, " productId: ", productCode, "token: ", token);

    try {
      const response = await axios.delete(`https://halaltravel.ai/ht/api/product/${userId}/${productCode}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
      console.log("Delete response: ", response.data);
      // setMessage("Product is successfully removed.");
      await fetchProduct(userId);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const confirmRemove = () => {
    postRemove();
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
        className={`absolute top-0 right-2 cursor-pointer bg-black bg-opacity-40 sm:w-12 sm:h-12 lg:w-6 lg:h-6 p-1 rounded-full shadow-md transition duration-300 hover:bg-opacity-60 ${menuActive ? '' : ''
          }`}
        onClick={toggleMenu}
        ref={threedotButtonRef}
      >
        <div className="flex items-center justify-center">
          {/* <span className="text-white text-xl">&#8226;&#8226;&#8226;</span> */}
          <img className="sm:w-[30px] sm:h-[30px] lg:w-[15px] lg:h-[15px]" src="images/three_dots.svg" alt="three_dots" />
        </div>

      </button>
      <div
        className={`absolute sm:top-12 lg:top-6 right-2 bg-white text-black border border-gray-300 shadow-md p-2 sm:rounded-lg lg:rounded ${menuActive ? 'block ' : 'hidden'
          }`}
        onClick={handleOptionClick}
        ref={menuRef}
      >
        <ul className="sm:w-[370px] lg:w-[160px] sm:text-3xl lg:text-sm">
          <li className="sm:py-2 lg:py-1 sm:my-2 lg:my-1 sm:ml-5 lg:ml-1 whitespace-nowrap flex items-center hover:opacity-[70%] transition duration-300" onClick={togglePin}>
            {productPin === 'UNPIN' ? (
              <div className="flex items-center">
                <img src="/images/pin_black.png" alt="Icon 1" className="mr-2 sm:h-6 sm:w-6 lg:h-3 lg:w-3" />
                <Text>Pin the product</Text>
              </div>
            ) : (
              <div className="flex items-center">
                <img src="/images/unpin_black.png" alt="Icon 1" className="mr-2 sm:h-6 sm:w-6 lg:h-3 lg:w-3" />
                <Text>Unpin the product</Text>
              </div>
            )}
          </li>
          <Line className="bg-blue_gray-100 h-[0.5px] sm:w-[370px] lg:w-[160px]" />
          <li className="sm:py-2 lg:py-1 sm:my-2 lg:my-1 sm:ml-5 lg:ml-1 whitespace-nowrap flex items-center hover:opacity-[70%] transition duration-300" onClick={handleCopyLink}>
            <img src="/images/copy_link.jpg" alt="Icon 2" className="mr-2 sm:h-6 sm:w-6 lg:h-3 lg:w-3" />
            Copy Link
          </li>
          <Line className="bg-blue_gray-100 h-[0.5px] sm:w-[370px] lg:w-[160px]" />
          <li className="sm:py-2 lg:py-1 sm:my-2 lg:my-1 sm:ml-5 lg:ml-1 whitespace-nowrap flex items-center hover:opacity-[70%] transition duration-300" onClick={handleRemove}>
            <img src="/images/img_trash_black.svg" alt="Icon 3" className="mr-2 sm:w-6 lg:h-3 lg:w-3" />
            Untag product
          </li>
        </ul>
        {copySuccess && (
          <>
            <div className="sm:hidden lg:block font-medium">
              <div className="block absolute bg-[#43A44F] shadow-xl text-white px-6 py-2 mt-5 rounded text-md">
                Link Copied!
              </div>
            </div>
            <div className="sm:block lg:hidden">
              <div className="block absolute bg-[#43A44F] shadow-xl text-white px-10 py-5 mt-16 rounded text-3xl">
                Link Copied!
              </div>
            </div>
          </>
        )}
        {message && (
          <div className="absolute bg-green-400 shadow-lg text-white p-2 mt-10 right-7 rounded">
            Product removed
          </div>
        )}
        {/* Confirmation popup */}
        {showConfirmation && (
          <>
            <div className="sm:hidden lg:block">
              <div className="block absolute right-0 text-md">
                <div className="bg-gray-100 border border-gray-300 shadow-2xl p-4 rounded">
                  <p>Confirm untag product?</p>
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
                  <p>Confirm untag product?</p>
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

export default ThreeDotProd;

