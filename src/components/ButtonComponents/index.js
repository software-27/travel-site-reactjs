// import React, { useState } from 'react';

// const ButtonComponents = () => {
//   const [buttonText, setButtonText] = useState("Tag Product");
//   const [isClicked, setIsClicked] = useState(false);

//   const changeButtonText = () => {
//     setIsClicked((prevIsClicked) => !prevIsClicked);
//     setButtonText((prevButtonText) =>
//       prevButtonText === "Tag Product" ? "Remove Product" : "Tag Product"
//     );
//   };

//   const buttonStyles = {
//     backgroundColor: isClicked ? '#49B9B4' : '#D9D9D9', // Red background after click, blue before click
//     color:isClicked ? '#FCFBFB': '#000000',
//     padding: '5px',
//     borderRadius: '5px',
//     border: 'none',
//     cursor: 'pointer',
//     width: '130px',
//     fontSize: '13px',
//   };


//   return (
//     <button className=""style={buttonStyles} onClick={changeButtonText}>
//       {buttonText}
//     </button>
//   );
// };

// export default ButtonComponents;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalConstant from 'constant/global';

const ButtonComponents = ({ productCode, productAll, onTag, onRemove, onClick }) => {
  const [buttonText, setButtonText] = useState("Tag Product");
  const [isClicked, setIsClicked] = useState(false);

  //we need token, user id
  const token = localStorage.getItem("token");
  const tokenType = localStorage.getItem("tokenType");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://halaltravel.ai/ht/api/product/${userId}`,
        {
          headers: {
            // Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbm1oZzE5OTBAZ21haWwuY29tIiwidXNlcklkIjoxLCJpYXQiOjE2OTExMjAwOTgsImV4cCI6MTY5MTcyNDg5OH0.hUdDDzADo3u-ahSZbxewfRZRoo7DbWlFhKNmHn_K63GjSLl_0gYHsPP1r9pzSnKRb6hu2jre-E8etPfUFDPDsw"
            Authorization: `Bearer ${token}`
          },
          params: {
            pageSize: 1000,
          }
        })
        const apiData = response.data;
        const userProducts = apiData.elements.map((userProducts) => ({
          productCode: userProducts.product.code,
        }));

        // console.log('productCode:', productCode);
        // console.log('productsData:', userProducts);

        if (userProducts.some((item) => item.productCode === productCode)) {
          setIsClicked(true);
          setButtonText("Remove Product");
        } else {
          setIsClicked(false);
          setButtonText("Tag Product");
        }
      } catch (error) {
        console.error('Error fetching creator data:', error);
      }
    };

    fetchData();
  }, [productCode, userId]);


  // const buttonStyles = {
  //   backgroundColor: isClicked ? '#49B9B4' : '#D9D9D9', 
  //   color: isClicked ? '#FCFBFB' : '#000000',
  //   padding: '5px',
  //   borderRadius: '5px',
  //   border: 'none',
  //   cursor: 'pointer',
  //   width: '130px',
  //   fontSize: '13px',
  // };


  // *TAG PRODUCTS*
  const handleButtonClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    setButtonText((prevButtonText) =>
      prevButtonText === "Tag Product" ? "Remove Product" : "Tag Product"
    );

    // Call the appropriate API function based on the button's state
    if (buttonText === "Tag Product") {
      onTag(productAll);
    } else {
      onRemove(productCode);
    }
  };


  return (
    <button 
    className={`px-1 py-1 ${isClicked ? 'bg-teal-500 text-white' : 'bg-gray-300 text-black'} rounded cursor-pointer 2xl:w-32 xl:w-32 lg:w-32 md:w-32 sm:w-22 xs:w-22 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs xs:text-xs`}
    // style={buttonStyles} 
    onClick={handleButtonClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonComponents;