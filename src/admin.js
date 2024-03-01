import {  legacy_createStore as createStore, combineReducers } from 'redux';

import userReducer from './slices/userSlices';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
 