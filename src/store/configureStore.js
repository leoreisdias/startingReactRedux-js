import { configureStore } from '@reduxjs/toolkit';
import { logger } from './middleware/logger';
import  reducer  from './reducers';


const store = configureStore({reducer: reducer, middleware: (getDefault) => getDefault().concat(logger)})

export default store;