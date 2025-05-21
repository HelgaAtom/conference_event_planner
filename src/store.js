import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';

//This code creates a global Redux store using the @reduxjs/toolkit\ 
//configureStore() function so all components in the application can 
//access the state managed by the venueReducer().
export default configureStore({
    reducer: {
        venue: venueReducer,
        av: avReducer,
        meals: mealsReducer,
    },
});
