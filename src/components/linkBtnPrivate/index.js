
import React, { useState, useEffect, useRef } from 'react';
import { IoShare } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import GlobalConstant from "constant/global";
import Icon from '@mdi/react';
import { mdiShareVariant } from '@mdi/js';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaTelegram, FaLine } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LinkBtnPrivate = ({itineraryLink, modalVisible, itineraryId,creatorId,closePopup3}) => {
  //const [modalVisible, setModalVisible] = useState(false);
  const [isLinkCopied, setLinkCopied] = useState(false); // New state for tracking copied link
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);
  const threedotButtonRef = useRef(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const userId = localStorage.getItem("userId");
  console.log("userId: ", userId)

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

  const handleCopyLink = async () => {
    try {
      const input = document.createElement('input');
      input.value = itineraryLink;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      console.log('Link copied:', itineraryLink);

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
    closePopup3();
    setLinkCopied(false); // Reset link copied status
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
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + copiedLink)}`, '_blank');
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
  const title = 'Check out this awesome itinerary!';

  return (
<>
    {modalVisible ? (
        
        <div className="modal-overlay" >
          <div className="model-content">
            <div className="fixed top--6 left-0 sm:w-[200px] sm:h-[100px] lg:w-screen lg:h-screen" ></div>
            <div className="model-content relative bg-white rounded-lg px-6 py-6 shadow-md space-y-3">
              <div className="flex justify-between items-center">
                <text className="text-black sm:text-[40px] lg:text-xl font-light leading-none">Share</text>
                <button onClick={resetModel}>
                  {<div class="check-svg " js-check-svg>
                    <AiOutlineClose className='text-black sm:w-[35px] sm:h-[35px] lg:w-[25px] lg:h-[25px]' size={25} />
                  </div>}
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <SocialShare copiedLink={itineraryLink} title={title} />
              </div>
              <div className='sm:p-2 lg:p-1 border border-[#e2e8f0] flex items-center rounded-3xl justify-between w-full'>
              <text className="text-gray-600 font-reg sm:text-[35px] lg:text-[14px] ">
                        {itineraryLink.length > 65
                          ? `${itineraryLink.substring(0, 40)}...`
                          : itineraryLink}</text>                <input type="hidden" id="input-url" value="Copied!" />
                <button
                  className="ml-2 sm:text-[35px] lg:text-[14px] copy-button active:scale-95 bg-[#00A19A] hover:bg-teal-500 hover:bg-blue-400 font-bold text-white py-2 px-4 border-none rounded-3xl"
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
        ) : (
        ""
      )}
    </>
  );
};

export default LinkBtnPrivate;


