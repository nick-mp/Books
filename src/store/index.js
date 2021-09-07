import { configureStore } from '@reduxjs/toolkit';
import taskReducerSlice from './booksSlice';
import taskLoadingSlice from './loadingSlice';

export default configureStore({
  reducer: {
    taskReducer: taskReducerSlice,
    loading : taskLoadingSlice
  },
});
