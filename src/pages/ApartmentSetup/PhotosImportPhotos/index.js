import React, { useState } from "react";
import { Column, Row, Text, Img, Line, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import GlobalConstant from "constant/global";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";

const PhotosImportPhotosPage = () => {
  const navigate = useNavigate();

  //post images
  const [selectedFile, setSelectedFile] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);


  const handleFileSelect = (event) => {
    // const file = event.target.files[0];
    // setSelectedFile(file);
    // const fileUrl = URL.createObjectURL(file);
    // setImageUrl(fileUrl);

    // const files = event.target.files;
    // setSelectedFile(files);

    // const fileUrl = [];

    // for (let i = 0; i < files.length; i++) {
    //   const file = files[i];
    //   fileUrl.push(URL.createObjectURL(file));
    // }

    // setImageUrl(fileUrl);
    // const files = event.target.files;
    const files = Array.from(event.target.files);
    // setSelectedFile(files);
    setSelectedFile((prevSelectedFile) => [...prevSelectedFile, ...files]);

    const newImageUrls = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newImageUrls.push(URL.createObjectURL(file));
    }

    setImageUrl((prevImageUrls) => [...prevImageUrls, ...newImageUrls]);

  };


  const handleRemoveImage = (index) => {
    // const updatedImageUrl = [...imageUrl];
    // updatedImageUrl.splice(index, 1);
    // setImageUrl(updatedImageUrl);


    const updatedSelectedFile = [...selectedFile];
    const updatedImageUrl = [...imageUrl];

    updatedSelectedFile.splice(index, 1);
    updatedImageUrl.splice(index, 1);

    setSelectedFile(updatedSelectedFile);
    setImageUrl(updatedImageUrl);


    // if (Array.isArray(selectedFile)) {
    //   const updatedSelectedFile = [...selectedFile];
    //   updatedSelectedFile.splice(index, 1);
    //   setSelectedFile(updatedSelectedFile);
    // }
  
    // if (Array.isArray(imageUrl)) {
    //   const updatedImageUrl = [...imageUrl];
    //   updatedImageUrl.splice(index, 1);
    //   setImageUrl(updatedImageUrl);
    // }
   
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();

    console.log("imageUrl: ", imageUrl);
    console.log("selectedFile: ", selectedFile);

    // Create a FormData object
    const formData = new FormData();
    selectedFile.forEach((file) => {
      formData.append("images", file);
    });

    try {
      // Retrieve the property owner ID from local storage
      const propertyId = localStorage.getItem('property_id');
      console.log('Property Id:', propertyId);

      // Send the POST request to the backend API
      // const response = await fetch(`http://localhost:8080/api/property/images/${propertyId}`, {
      //   method: "POST",
      //   body: formData,
      // });

      let check = GlobalConstant.BASE_API + `/api/property/images/${propertyId}`;
      console.log('check: ',check, ' test: ', GlobalConstant.TEST)
      const response = await fetch(GlobalConstant.BASE_API + `/api/property/images/${propertyId}`, {
        method: "POST",
        body: formData,
      });


      // Handle the response as needed
      // ...
    } catch (error) {
      console.error("Error:", error);
    }
  };
  ////


  function handleNavigate73() {
    navigate("/nl1");
  }

  function handleNavigate74() {

    navigate("/hostprofile");
  }
  function handleNavigate12() {
    navigate("/importairbnb");
  }
  function handleNavigate13() {
    navigate("/importairbnb");
  }

  //continue
  function handleNavigate20() {

    const postData = {
      "images": imageUrl
    };

    handleSubmit(postData);
    console.log('post address: ', postData)
    navigate("/pricingandcalendarno");
  }

  //back
  function handleNavigate21() {
    navigate("/hostprofile");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <HeaderOTAAdmin className="w-[100%]" />
          <Column className="items-center justify-start w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="bg-gray_50 items-left justify-evenly pt-6 pb-4 w-[100%]">
                <Row className="bg-gray_50 items-center justify-center w-[19%]">

                  <Stack className="items-center justify center">
                    <Row>
                      <Text className="Step1 cursor-pointer mt-1" variant="body4" onClick={handleNavigate73}>
                        Name and location
                      </Text>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark"
                        alt="checkmark"
                      />
                    </Row>
                    <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[-5px] 3xl:mt-[31px] w-[100%]">
                      <Text className="text-[13px] text-gray_800 underline italic">
                        100% completed
                      </Text>
                    </Row>
                  </Stack>
                </Row>
                <Column className="bg-gray_50 items-center justify-center w-[19%]">
                  <Stack className="items-center justify center">
                    <Row>
                      <Text className="Step2 cursor-pointer 2xl:mt-[9px]" variant="body4" onClick={handleNavigate74}>
                        Property Setup
                      </Text>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark"
                        alt="checkmark"
                      />
                    </Row>
                    <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[1px] 3xl:mt-[31px] w-[100%]">
                      <Text className="text-[13px] text-gray_800 underline italic mr-6">
                        100% completed
                      </Text>
                    </Row>
                  </Stack>
                </Column>
                <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
                  <Stack className="items-center justify center">
                    <Text className="Step2 mb-2.5 2xl:mt-[5px] ml-5" variant="body4">
                      Photos
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[7px] 3xl:mt-[31px] w-[100%]">
                      <Text className="text-[13px] text-gray_800 underline italic">
                        0% completed
                      </Text>
                    </Row>
                  </Stack>
                </Column>
                <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
                  <Text className="Step2 mb-2.5 2xl:mt-[10px]" variant="body4">
                    Pricing and Calendar
                  </Text>
                </Column>
              </Row>
              <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            </Column>
          </Column>
          <Row className="items-start xl:ml-[109px] 2xl:ml-[124px] 3xl:ml-[150px] lg:ml-[90px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[66%]">
            <Column className="justify-start w-[73%]">
              <Row className="items-start justify-between w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="columnrectangleeight xl:ml-[112px] 2xl:ml-[1px] 3xl:ml-[150px] lg:ml-[90px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 mb-4 w-[auto]"
                    variant="body1"
                  >
                    What does your place look like?
                  </Text>
                  <Column className="bg-white_A700 border border-gray_300 border-solid justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[106%]">
                    <Row className="bg-green_50 font-ptsans items-end lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] px-[3px] w-[38%]">
                      <Img
                        src="images/img_combochartico.svg"
                        className="combochartico"
                        alt="combochartico"
                      />
                      <Text
                        className="font-normal mb-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] not-italic text-green_900 w-[auto]"
                        variant="body5"
                      >
                        High impact on bookings
                        <br />
                      </Text>
                    </Row>
                    <Text
                      className="font-roboto font-semibold leading-[normal] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-black_900 w-[86%]"
                      variant="body4"
                    >
                      <span className="text-black_900 font-ptsans font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        Upload at least 5 photos of your property.{" "}
                      </span>
                      <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        The more you upload, the <br />
                        more likely you are to get bookings. You can add more
                        later.
                      </span>
                    </Text>
                    <Stack className="font-ptsans lg:h-[206px] xl:h-[258px] 2xl:h-[290px] 3xl:h-[348px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[28px] 3xl:mt-[29px] w-[93%]">
                      <div className="flex justify-center items-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div className="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                          </div>
                          {/* <form onSubmit={handleSubmit}>
                            <input type="file" multiple onChange={handleFileSelect} />
                          </form> */}

                          <form onSubmit={handleSubmit}>
                            <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileSelect} />
                          </form>
                        </label>
                      </div>
                    </Stack>

                    <div className="imageGridContainer">
                      <div className="imageGrid ">
                        {/* {imageUrl && (
                          <div className={`imageItem column1`}>
                            <img src={imageUrl} alt="Selected" className="image" />
                          </div>
                        )} */}
                        {Array.isArray(imageUrl) && (
                          imageUrl.map((url, index) => (
                            <div key={index} className={`imageItem ${index % 2 === 0 ? 'column1' : 'column2'}`}>
                              <img src={url} alt={`Image ${index + 1}`} className="image" />
                              <button className="removeButton" onClick={() => handleRemoveImage(index)}>X</button>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                    <Row className="font-ptsans items-center justify-center ml-2 lg:mb-[23px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] ml-[auto] lg:mt-[11px] xl:mt-[22px] 2xl:mt-[29px] 3xl:mt-[45px] w-[100%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="common-pointer Idea"
                        onClick={handleNavigate13}
                        alt="bookmark"
                      />
                      <Text
                        className="common-pointer font-normal mb-[4px] lg:mt-[0px] xl:mt-[2px] 2xl:mt-[5px] not-italic text-blue_A700 w-[auto]"
                        variant="body4"
                        onClick={handleNavigate12}
                      >
                        Import photos from your Airbnb listing
                      </Text>
                    </Row>
                  </Column>
                  <Line className="items-center bg-gray_700_33 h-[0.5px] xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[-3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[106%]" />
                  <Row className="items-center xl:ml-[0px] 2xl:ml-[2px] 3xl:ml-[10px] lg:ml-[88px] lg:mt-[-3px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[106%]">
                    <Stack
                      className="common-pointer hover:bg-gray_400 bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                      onClick={handleNavigate21}
                    >
                      <Img
                        src="images/img_expandarrow.png"
                        className="ExpandArrow"
                        alt="ExpandArrow"

                      />
                    </Stack>
                    <Button
                      className="font-bold bg-sky-700 hover:bg-indigo_901 lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                      variant="OutlineLightblue8001_2"
                      onClick={handleNavigate20}
                    >
                      Continue
                    </Button>
                    <Button
                      className="w-[20%] font-bold bg-gray_700 hover:bg-gray_900 ml-4 text-white rounded-full"
                    >
                      Save draft
                    </Button>
                  </Row>
                </Column>

              </Row>
              <Row className="mb-14 items-center ml-4 lg:mt-[15px] xl:mt-[19px] 2xl:mt-[-58px] 3xl:mt-[26px] w-[39%]">

              </Row>
            </Column>

          </Row>
        </Column>
      </Column>
    </>
  );
};

export default PhotosImportPhotosPage;
