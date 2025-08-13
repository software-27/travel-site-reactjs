import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Text, Line } from 'components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaTelegram, FaLine } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';

const ThreeDotBlog = ({ fetchBlog, userId, blogPin, blogId, blogLink }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [message, setMessage] = useState(false);
  const token = localStorage.getItem("token");
  const tokenType = localStorage.getItem("tokenType");
  // const userId = localStorage.getItem("userId");
  const menuRef = useRef(null);
  const threedotButtonRef = useRef(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);


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

    console.log("userId: ", userId, " blogId: ", blogId, "token: ", token);

    try {
      const response = await axios.patch(
        `https://halaltravel.ai/ht/api/blog/${userId}/togglePin/${blogId}
        `,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      await fetchBlog(userId);
      setMenuActive(!menuActive);
      console.log("Pin response: ", response.data);

    } catch (error) {
      console.error('Error toggling pin status:', error);
    }
  };

  const handleCopyLink = async () => {
    try {
      const input = document.createElement('input');
      input.value = blogLink;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      console.log('Link copied:', blogLink);

      toast.success('Link successfully copied!', {
        autoClose: 1500,
        position: 'bottom-center',
        closeButton: false,
      });

    } catch (error) {
      console.error('Error copying link:', error);
    }
  };
  const resetModel = () => {
    setModalVisible(false);
  };

  function SocialShare({ copiedLink, title }) {
    const shareOnFacebook = () => {
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(copiedLink)}&t=${encodeURIComponent(title)}`;
      window.open(facebookUrl, '_blank');
    };

    const shareOnTwitter = () => {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(copiedLink)}&text=${encodeURIComponent(title)}`, '_blank');
    };

    const shareOnWhatsApp = () => {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%0A${encodeURIComponent(copiedLink)}`, '_blank');
    };

    const shareViaTelegram = () => {
      const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(copiedLink)}&text=${encodeURIComponent(title)}`;
      window.open(telegramUrl, '_blank');
    };

    // const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
    // window.open(lineUrl, '_blank');

    return (
      <div className=" items-center space-x-4">
        <button onClick={shareOnFacebook} className="bg-blue-600 text-white px-2 py-2 rounded-full hover:bg-blue-700">
          <FaFacebookF size={20} className="sm:hidden lg:block" />
          <FaFacebookF size={50} className="sm:block lg:hidden" /> </button>
        <button onClick={shareOnTwitter} className="bg-blue-400 text-white px-2 py-2 rounded-full hover:bg-blue-500">
          <FaTwitter size={20} className="sm:hidden lg:block" />
          <FaTwitter size={50} className="sm:block lg:hidden" /> </button>
        <button onClick={shareOnWhatsApp} className="bg-green-500 text-white px-2 py-2 rounded-full hover:bg-green-600">
          <FaWhatsapp size={20} className="sm:hidden lg:block" />
          <FaWhatsapp size={50} className="sm:block lg:hidden" />
        </button>
        <button onClick={shareViaTelegram} className="bg-indigo-600 text-white px-2 py-2 rounded-full hover:bg-indigo-700">
          <FaTelegram size={20} className="sm:hidden lg:block" />
          <FaTelegram size={50} className="sm:block lg:hidden" />
        </button>
        {/* <button onClick={lineUrl} className="bg-green-600 text-white px-2 py-2 rounded-full hover:bg-green-700">
          <FaLine />
        </button> */}
      </div>
    );
  }

  // const url = 'https://example.com';
  const title = 'Check out this page!';

  // const handleRemove = (event) => {
  //   event.preventDefault();
  //   setShowConfirmation(true);
  // };

  // const postRemove = async () => {

  //   console.log("userId: ", userId, " productId: ", productCode, "token: ", token);

  //   try {
  //     const response = await axios.delete(`https://halaltravel.ai/ht/api/product/${userId}/${productCode}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         },
  //       });
  //     console.log("Delete response: ", response.data);
  //     setMessage("Product is successfully removed.");
  //     await fetchProduct(userId);
  //   } catch (error) {
  //     console.error('Error deleting product:', error);
  //   }
  // };

  // const confirmRemove = () => {
  //   postRemove();
  //   setShowConfirmation(false);

  //   setTimeout(() => {
  //     setMessage(false);
  //   }, 1000);
  // };

  // const cancelRemove = () => {
  //   setShowConfirmation(false);
  // };

  return (
    <>
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
          className={`absolute sm:top-14 lg:top-7 right-2 bg-white text-black border border-gray-300 shadow-md p-2 sm:rounded-lg lg:rounded ${menuActive ? 'block ' : 'hidden'
            }`}
          onClick={handleOptionClick}
          ref={menuRef}
        >
          <ul className="sm:w-[300px] lg:w-[140px] sm:text-3xl lg:text-sm">
            <li className="sm:py-2 lg:py-1 sm:my-2 lg:my-1 sm:ml-5 lg:ml-1 whitespace-nowrap flex items-center hover:opacity-[70%] transition duration-300" onClick={togglePin}>
              {blogPin === 'UNPIN' ? (
                <div className="flex items-center">
                  <img src="/images/pin_black.png" alt="Icon 1" className="mr-2 sm:h-6 sm:w-6 lg:h-3 lg:w-3" />
                  <Text>Pin the blog</Text>
                </div>
              ) : (
                <div className="flex items-center">
                  <img src="/images/unpin_black.png" alt="Icon 1" className="mr-2 sm:h-6 sm:w-6 lg:h-3 lg:w-3" />
                  <Text>Unpin the blog</Text>
                </div>
              )}
            </li>
            <Line className="bg-blue_gray-100 h-[0.5px] sm:w-[300px] lg:w-[140px]" />
            <li className="sm:py-2 lg:py-1 sm:my-2 lg:my-1 sm:ml-5 lg:ml-1 whitespace-nowrap flex items-center hover:opacity-[70%] transition duration-300"
              onClick={() => setModalVisible(true)}
            >
              <img src="/images/copy_link.jpg" alt="Icon 2" className="mr-2 sm:h-6 sm:w-6 lg:h-3 lg:w-3" />
              Share
            </li>
            {isModalVisible && (
              <div className="modal-overlay" >
                <div className="model-content">
                  <div className="fixed top--6 left-0 sm:w-[200px] sm:h-[100px] lg:w-screen lg:h-screen" ></div>
                  <div className="model-content relative bg-white rounded-lg px-6 py-6 shadow-md space-y-3">
                    <div className="flex justify-between items-center">
                      <text className="text-black sm:text-[35px] lg:text-xl font-light leading-none">Share</text>
                      <button onClick={resetModel}>
                        {<div class="check-svg " js-check-svg>
                          <AiOutlineClose className='text-black sm:w-[35px] sm:h-[35px] lg:w-[25px] lg:h-[25px]' size={25} />
                        </div>}
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <SocialShare copiedLink={blogLink} title={title} />
                    </div>
                    <div className='sm:p-2 lg:p-1 border border-[#e2e8f0] flex items-center rounded-3xl justify-between w-full'>
                      <text className="text-gray-600 font-reg sm:text-[28px] lg:text-[14px] ">
                        {blogLink.length > 65
                          ? `${blogLink.substring(0, 40)}...`
                          : blogLink}</text>
                      <input type="hidden" id="input-url" value="Copied!" />
                      <button
                        className="ml-2 sm:text-[28px] lg:text-[14px] copy-button active:scale-95 bg-[#00A19A] hover:bg-teal-500 hover:bg-blue-400 font-bold text-white py-2 px-4 border-none rounded-3xl"
                        onClick={() => {
                          handleCopyLink();
                          // Removed resetModel() call here to keep the modal open
                        }}
                      >
                        Copy
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            )}
            {/* <Line className="bg-blue_gray-100 h-[0.5px] sm:w-[300px] lg:w-[140px]" /> */}
            {/* <li className="py-1 whitespace-nowrap flex items-center hover:bg-gray-100 transition duration-300" onClick={handleRemove}>
            <img src="/images/img_trash_black.svg" alt="Icon 3" className="mr-2 h-3 w-3" />
            Untag product
          </li> */}
          </ul>


          {/* DELETE BLOG */}
          {/* {message && (
          <div className="absolute bg-green-400 shadow-lg text-white p-2 mt-10 right-7 rounded">
            Product removed
          </div>
        )} */}
          {/* Confirmation popup */}
          {/* {showConfirmation && (
          <div className="absolute right-0">
            <div className="bg-gray-100 border border-gray-300 shadow-lg text-md p-4 rounded">
              <p>Confirm untag product?</p>
              <div className="mt-2 flex justify-center text-xs">
                <button className="px-4 py-2 mr-2 bg-red-600 text-white rounded hover:bg-red-500" onClick={confirmRemove}>Confirm</button>
                <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400" onClick={cancelRemove}>Cancel</button>
              </div>
            </div>
          </div>
        )} */}
        </div>



      </div>

    </>
  );
};

export default ThreeDotBlog;

