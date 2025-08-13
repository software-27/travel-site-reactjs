import React, { useState } from 'react';
import axios from 'axios';
import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import HeaderOTAMobile from 'components/Header/HeaderOTAMobile/index';
import SignupPage from 'components/SignUp/index';
import LoginPage from 'components/Login/index';

function ExcelUpload() {
  const token = localStorage.getItem("token");
  const tokenType = localStorage.getItem("tokenType");
  const userId = localStorage.getItem("userId");

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


  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('http://localhost:8080/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.error('Error uploading file:', error);
    });
  };

  return (
    <>
      <div className='fixed w-full' style={{ zIndex: 2 }}>
        <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
        <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
        <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />
        <HeaderOTAMobile openPopup1={openPopup1} className="visible fixed overflow-hidden lg:invisible lg:hidden" />
      </div>

      {/* <div style={{ margin: '20px' }}>
        <h1>File Upload</h1>
        <input type="file" onChange={handleFileChange} style={{ padding: '10px' }} />
        {selectedFile && (
          <div style={{ marginTop: '10px' }}>
            <p>File Name: {selectedFile.name}</p>
            <p>File Size: {selectedFile.size} bytes</p>
          </div>
        )}
        <button onClick={handleUpload} disabled={!selectedFile}>Upload</button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Upload Excel File</h2>
          <label className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md cursor-pointer hover:bg-gray-300">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span>Choose a file</span>
            <input type="file" onChange={handleFileChange} className="hidden" />
          </label>
          {selectedFile && <p className="mt-4">Selected file: {selectedFile.name}</p>}
          <button onClick={handleUpload} disabled={!selectedFile} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed">Upload</button>
        </div>
      </div> */}

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 xs:pt-[200px] lg:pt-[132px]">
        <div className="bg-white rounded-lg shadow-lg p-10 w-[500px] h-[300px]">
          <h2 className="text-2xl font-semibold mb-4">Upload Excel File</h2>
          <label className="inline-flex items-center justify-center w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span>Choose a file</span>
            <input type="file" onChange={handleFileChange} className="hidden" />
          </label>

          {/* {selectedFile && <p className="mt-4">Selected file: {selectedFile.name}</p>} */}
          {selectedFile && <p className="mt-4">{selectedFile.name}</p>}

          <button onClick={handleUpload} disabled={!selectedFile} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed">Upload</button>
        </div>
      </div>

    </>
  );
}

export default ExcelUpload;

