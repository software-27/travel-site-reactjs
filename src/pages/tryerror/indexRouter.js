
// import * as React from 'react';
// import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';

// const TryErrorPage = () => {
//   // const navigate = useNavigate();

//   return (
//     <>
//      <HeaderOTAAdmin />
//      <img
//       src='/images/tryyyyy.png'
//       className='object-cover xs:h-[30em] lg:h-auto w-full'
//       alt="headerInfluencer" />

      
//     </>
//   );
// };

// export default TryErrorPage;

// import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
// import React, { useState } from 'react';
// // import HeaderOTAAdmin from './HeaderOTAAdmin';
// import { useSearchParams } from 'react-router-dom';



// const TryErrorRouterPage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // let [ searchParams, setSearchParams ] = useSearchParams();

//   // console.log(searchParams.get('test'))
//   // console.log(this.props.match.params)
//   console.log(this.props.location.search)

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <div>
//       <HeaderOTAAdmin isLoggedIn={isLoggedIn} />
//       <button onClick={handleLogin}>Log In</button>
//     </div>
//   );
// };

// export default TryErrorRouterPage;

import HeaderOTAAdmin from 'components/Header/HeaderOTAAdmin/index';
import React, { useState } from 'react';
import {  useLocation } from "react-router-dom"

const TryErrorRouterPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const currentPath = useLocation().pathname.replace('/try/','');
  // const currentPath = useLocation().pathname;
  console.log('url: ',currentPath);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <HeaderOTAAdmin isLoggedIn={isLoggedIn} />
      <button onClick={handleLogin}>Log In:</button>
    </div>
  );
};

export default TryErrorRouterPage;