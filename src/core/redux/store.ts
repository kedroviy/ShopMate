import {configureStore} from '@reduxjs/toolkit';
import {listReducer} from './reducers/appReducers';

const store = configureStore({
  reducer: {listReducer},
});

export {store};
