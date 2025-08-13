// store.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { dataReducer2,addRestaurantReducer } from './reducer2';
// import { addRestaurantReducer } from './reducer2';

const rootReducer = {
  data: dataReducer2,
  restaurant:addRestaurantReducer,
  // other reducers...
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
