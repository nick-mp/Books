import { configureStore } from '@reduxjs/toolkit';
import taskReducerSlice from './booksSlice';

export default configureStore({
  reducer: {
    taskReducer: taskReducerSlice
  },
});
