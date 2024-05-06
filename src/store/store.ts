import { configureStore } from '@reduxjs/toolkit';
import { taskReducers } from './reducers/reducers';

// Configure the store using Redux Toolkit
const store = configureStore({
    reducer: taskReducers,
});

// Export RootState and store
export type RootState = ReturnType<typeof store.getState>;
export { store };