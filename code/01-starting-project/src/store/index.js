import { configureStore } from '@reduxjs/toolkit';
import countReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: {
        count: countReducer,
        auth: authReducer
    }
});

export default store;