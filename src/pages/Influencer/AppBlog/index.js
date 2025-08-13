import React, { useState } from 'react';
import { data } from 'data/data';
import { MdSearch } from 'react-icons/md';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { IoPricetagSharp } from 'react-icons/io5';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import InfluencerCreator from 'pages/Influencer/InfluencerCreator/index';

const AppBlog = () => {
  // console.log(data)
  const [foods, setFoods] = useState(data);

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


  return (
    <div className='max-w-[1640px] m-auto px-4 p-12'>
      {/* <h1>Top Rated Menu Items</h1> */}

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>

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
          className='m-1 border border-teal-500 hover:bg-teal-500 hover:text-white focus:bg-[#00A19A] focus:text-white rounded-xl px-5 py-1'>All</button>
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
          <div className='bg-gray-200 rounded-full inline-flex items-center h-fit py-1 px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <MdSearch className='text-[#00A19A]' size={20} />
            <input class='bg-transparent p-1 w-full focus:outline-none border-none' 
            type='text' placeholder='Search' />
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
          {/* {isProduct ? (
              <MdChevronLeft
                className='opacity-50 cursor-pointer absolute top-[80px] left-[1100px]'
                onClick={slideLeft}
                size={40}
              />
            ) : null}  */}
            <div id='slider' className='w-full h-full inline-block overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
              {foods.filter (data => data.category === 'product').map(filteredFood => (
                <img className='w-[220px] inline-block p-2 cursor-pointer'
                src={filteredFood.img} 
                alt='/' 
                />
              ))}   
            </div>
          {/* {isProduct ? (
              <MdChevronRight
                className='opacity-50 cursor-pointer absolute top-[80px]'
                onClick={slideRight}
                size={40}
              />
            ) : null} */}
        </div>
        
        {/* blog display */}
        <div>
          {isBlog ? (
            <div className='p-5'>
              <div className='place-content-center'>
                <img 
                  src='https://images.unsplash.com/photo-1609766418178-cc976c0fa435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGplanUlMjBpc2xhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                  className='object-center items-center relative max-w-sm'
                  alt='blog-jeju' 
                />
              </div>
              
<figure class="items-center justify-center relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
  <a href="">
    <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
  </a>
  <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Do you want to get notified when a new component is added to Flowbite?</p>
  </figcaption>
</figure>

            </div>
          ) : null}
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

export default AppBlog;