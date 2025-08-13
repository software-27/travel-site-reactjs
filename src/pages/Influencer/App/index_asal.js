import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { data } from 'data/data';
import { MdSearch } from 'react-icons/md';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { IoPricetagSharp } from 'react-icons/io5';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { GrAddCircle } from 'react-icons/gr';
import { useEffect } from 'react';
// import InfluencerCreator from 'pages/Influencer/InfluencerCreator/index';

const App = () => {
  // console.log(data)
  const [foods, setFoods] = useState(data);
  const navigate = useNavigate(); 

  function handleNavigate1() {
    navigate("/blog-title");
  }

  useEffect(() => {
    setIsProduct(true);
    setIsBlog(true);
    setIsPhoto(true);
    setIsVideo(true);
    setIsLivestream(true);
  }, []);

  //   Filter Type blog/photos/etc
  const filterType = (category) => {
    setFoods(
      data.filter((filteredFood) => {
        return filteredFood.category === category;
      })
    );
  };

  //condition for each category
  const [isProduct, setIsProduct] = useState(false);
  const [isBlog, setIsBlog] = useState(false);
  const [isPhoto, setIsPhoto] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [isLivestream, setIsLivestream] = useState(false);


  //slide img product
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

    // Function to group the images into sets of four
    const chunkArray = (array, size) => {
      const result = [];
      for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
      }
      return result;
    };
  
    // Calculate the slides containing four images each
    const slides = chunkArray(
      foods.filter((data) => data.category === 'product'),
      4
    );


  return (
    <div className='max-w-[1640px] m-auto px-4 p-12'>
      {/* <h1>Top Rated Menu Items</h1> */}

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between mb-6'>

        {/* Filter type */}
        <div className='flex flex-wrap'>
          <button
            onClick={() => {
            setFoods(data);
            setIsProduct(true);
            setIsBlog(true);
            setIsPhoto(true);
            setIsVideo(true);
            setIsLivestream(true);
          }}
          className={`m-1 border ${isProduct ? 'bg-teal-500 text-white' : 'border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white'} rounded-xl px-5 py-1`}>All</button>
          <button
            onClick={() => {
              filterType('blog');
              setIsProduct(false);
              setIsBlog(true);
              setIsPhoto(false);
              setIsVideo(false);
              setIsLivestream(false);
            }}
          className='m-1 border border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white rounded-xl px-5 py-1'>Blog</button>
          <button
            onClick={() => {
            filterType('photos');
            setIsProduct(false);
            setIsBlog(false);
            setIsPhoto(true);
            setIsVideo(false);
            setIsLivestream(false);
          }}
          className='m-1 border border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white rounded-xl px-5 py-1'>Photos</button>
          <button 
            onClick={() => {
              filterType('videos');
              setIsProduct(false);
              setIsBlog(false);
              setIsPhoto(false);
              setIsVideo(true);
              setIsLivestream(false);
            }}
          className='m-1 border border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white rounded-xl px-5 py-1'>Videos</button>
          <button 
            onClick={() => {
              filterType('livestreams');
              setIsProduct(false);
              setIsBlog(false);
              setIsPhoto(false);
              setIsVideo(false);
              setIsLivestream(true);
            }}
          className='m-1 border border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white rounded-xl px-5 py-1'>Livestreams</button>
        </div>

        {/* Searchbar */}
        <div className='flex gap-4'>
          <div className='bg-gray-200 justify-between rounded-full inline-flex items-center h-fit py-1 px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <input class='bg-transparent p-1 w-full focus:outline-none border-none' 
            type='text' placeholder='Search' />
            <MdSearch className='text-[#00A19A]' size={20} />
          </div>

          <div className='items-center justify-center'>
          <button className='m-1 border border-[#00A19A] bg-[#00A19A] text-white rounded-xl px-5 py-1'>Search</button>
          </div>
        </div>

      </div>

      {/* Display contents */}
      <div>
        {/* product display /> */}
        <div className='relative flex items-center'>
          {isProduct ? (
              <MdChevronLeft
                className='opacity-50 cursor-pointer absolute top-[80px] left-[1100px]'
                onClick={slideLeft}
                size={40}
              />
            ) : null} 
            <div id='slider' className='w-full h-full cols-4 inline-block overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
              {foods.filter (data => data.category === 'product').map(filteredFood => (
                <img className='w-[220px] inline-block p-2 cursor-pointer'
                src={filteredFood.img} 
                alt='/' 
                />
              ))}   
            </div>
          {isProduct ? (
              <MdChevronRight
                className='opacity-50 cursor-pointer absolute top-[80px]'
                onClick={slideRight}
                size={40}
              />
            ) : null}
        </div>
        
        {/* blog display */}
        <div>
          {isBlog ? (
            <p className='font-bold text-gray-700 m-2'>Blog</p>
          ) : null}
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pb-3'>
          {isBlog ? (
                  <div className='cursor-pointer border flex flex-col items-center justify-center shadow-lg rounded-lg hover:scale-105 duration-300'
                  onClick={handleNavigate1}>
                    <GrAddCircle size={25} className="items-center text-center" />
                    <p className='font-bold'>Create Your Blog</p>
                  </div>
                ) : null}
            {foods.filter (data => data.category === 'blog').map(filteredFood => (
              
              <div>
                {/* <p>{filteredFood.category}</p> */}
                <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                {/* <img
                  src={filteredFood.image}
                  alt={filteredFood.name}
                  className='w-full h-[200px] object-cover rounded-t-lg'
                /> */}
                <div className='items-center justify-center px-2 py-4'>
                  <p className='text-center font-bold'>{filteredFood.name}</p>
                  <p className='text-center opacity-70'>{filteredFood.date}</p>
                  <p className='text-justify px-4'>{filteredFood.description}</p>
                  <p className='px-4 text-center'>
                  <button className='inline-flex gap-1 items-center justify-center text-xs border border-[#00A19A] bg-[#00A19A] text-white rounded-lg px-3 py-2'>
                  Read More
                  <AiOutlineDoubleRight size={10} /></button>
                  </p>
                </div>
                </div>
              </div>
              
            ))}

                
                {/* <div className='cursor-pointer border flex flex-col items-center justify-center shadow-lg rounded-lg hover:scale-105 duration-300'
                onClick={handleNavigate1}>
                  <GrAddCircle size={25} className="items-center text-center" />
                  <p className='font-bold'>Create Your Blog</p>
                </div> */}
          </div>
        </div>
        
        {/* photos display */}
        <div>
        {isPhoto ? (
            <p className='font-bold text-gray-700 m-2'>Photos</p>
          ) : null}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pb-3'>
          {foods.filter (data => data.category === 'photos').map(filteredFood => (
            <div>
              <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
               <img
                src={filteredFood.image}
                alt={filteredFood.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
              />
              <div className='flex items-center gap-2 px-2 py-4'>
                <IoPricetagSharp />
                <p className='font-bold'>{filteredFood.name}</p>

              </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* videos display */}
        <div>
        {isVideo ? (
            <p className='font-bold text-gray-700 m-2'>Videos</p>
          ) : null}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pb-3'>
            {foods.filter (data => data.category === 'videos').map(filteredFood => (
              <div>
                <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                <img
                  src={filteredFood.image}
                  alt={filteredFood.name}
                  className='w-full h-[200px] object-cover rounded-t-lg'
                />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* livestream display */}
        <div>
        {isLivestream ? (
            <p className='font-bold text-gray-700 m-2'>Livestreams</p>
          ) : null}
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pb-3'>
            {foods.filter (data => data.category === 'livestreams').map(filteredFood => (
              <div>
                <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                <img
                  src={filteredFood.image}
                  alt={filteredFood.name}
                  className='w-full h-[200px] object-cover rounded-t-lg'
                />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

  )
}

export default App;