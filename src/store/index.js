import { configureStore } from '@reduxjs/toolkit';
import taskReducerSlice from './booksSlice';
import taskLoadingSlice from './loadingSlice';
import taskResultSlice from './resultSlice'

export default configureStore({
  reducer: {
    taskReducer: taskReducerSlice,
    loading : taskLoadingSlice,
    result : taskResultSlice
  },
});
