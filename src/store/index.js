import { configureStore } from "@reduxjs/toolkit";
import elementReducer from './elementsSlice'

const store = configureStore({
    reducer: {
        elements: elementReducer,
    }
});

export default store;