
import React, { useState, useEffect } from 'react';
import { IoShare } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import GlobalConstant from "constant/global";
import './index.css';
import Icon from '@mdi/react';
import { mdiShareVariant } from '@mdi/js';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaTelegram, FaLine } from "react-icons/fa";

const LinkBtn = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLinkCopied, setLinkCopied] = useState(false); // New state for tracking copied link

  const userId = localStorage.getItem("userId");
  console.log("userId: ", userId)

  const baseURL = window.location.origin;

  const copiedLink =
    // 'https://www.figma.com/file/Fs8Z05HE81VjJ8Q4ELrOlj/Share-Doc-Window?node-id=0%3A1';
    baseURL + `/influencer-user/${userId}`;
  // `http://localhost:3000/influencer-user`;

  console.log("copiedLink: ", copiedLink)

  const resetModel = () => {
    setModalVisible(false);
    setLinkCopied(false); // Reset link copied status
  };

  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    document.body.appendChild(textArea);
    textArea.value = copiedLink;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setLinkCopied(true); // Set link copied status to true
  };

  // Use useEffect to automatically reset the link copied status after a delay
  useEffect(() => {
    if (isLinkCopied) {
      const timeout = setTimeout(() => {
        setLinkCopied(false);
      }, 6000); // 60000 milliseconds = 1 minute

      return () => clearTimeout(timeout);
    }
  }, [isLinkCopied]);

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
          <FaFacebookF size={60} className="sm:block lg:hidden" /> </button>
        <button onClick={shareOnTwitter} className="bg-blue-400 text-white px-2 py-2 rounded-full hover:bg-blue-500">
          <FaTwitter size={20} className="sm:hidden lg:block" />
          <FaTwitter size={60} className="sm:block lg:hidden" /> </button>
        <button onClick={shareOnWhatsApp} className="bg-green-500 text-white px-2 py-2 rounded-full hover:bg-green-600">
          <FaWhatsapp size={20} className="sm:hidden lg:block" />
          <FaWhatsapp size={60} className="sm:block lg:hidden" />
        </button>
        <button onClick={shareViaTelegram} className="bg-indigo-600 text-white px-2 py-2 rounded-full hover:bg-indigo-700">
          <FaTelegram size={20} className="sm:hidden lg:block" />
          <FaTelegram size={60} className="sm:block lg:hidden" />
        </button>
        {/* <button onClick={lineUrl} className="bg-green-600 text-white px-2 py-2 rounded-full hover:bg-green-700">
          <FaLine />
        </button> */}
      </div>
    );
  }

  // const url = 'https://example.com';
  const title = 'Check out this influencer profile!';

  return (
    <div className="">
      <div>
        <button className=""
          onClick={() => setModalVisible(true)}
          title='Share'>
          <Icon path={mdiShareVariant} className="text-[#00A19A] lg:h-[26px] lg:w-[26px] xs:h-[50px] xs:w-[50px] mt-1" />
        </button>
      </div>

      {isModalVisible && (
        <div className="modal-overlay" >
          <div className="model-content">
            <div className="fixed top--6 left-0 sm:w-[300px] sm:h-[300px] lg:w-screen lg:h-screen" ></div>
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
                <SocialShare copiedLink={copiedLink} title={title} />
              </div>
              <div className='sm:p-3 lg:p-1 border border-[#e2e8f0] flex items-center rounded-3xl justify-between w-full'>
                <text className="text-gray-600 font-reg sm:text-[35px] lg:text-[14px] ">{copiedLink}</text>
                <input type="hidden" id="input-url" value="Copied!" />
                <button
                  className="ml-2 sm:text-[25px] lg:text-[14px] copy-button active:scale-95 bg-[#00A19A] hover:bg-teal-500 hover:bg-blue-400 font-bold text-white py-2 px-4 border-none rounded-3xl"
                  onClick={() => {
                    copyToClipboard();
                    // Removed resetModel() call here to keep the modal open
                  }}
                >
                  Copy
                </button>
              </div>

            </div>
          </div>
          {isLinkCopied && ( // Conditionally render the link popup
            <div className="show-link flex justify-center items-center bg-gray-200 absolute sm:bottom-96 lg:bottom-40 rounded-t overflow-hidden shadow-md z-20" data-show-link>
              <div className="bg-white px-6 py-3">
                <p className="pr-6 pl-3 text-gray-600 font-semibold sm:text-[28px] lg:text-sm leading-none">Link copied</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LinkBtn;


