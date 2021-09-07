import { configureStore } from '@reduxjs/toolkit';
import taskReducerSlice from './booksSlice';
import taskLoadingSlice from './loadingSlice';
import taskResultSlice from './resultSlice'
import taskCardsSlice from './CardsSlice';

export default configureStore({
  reducer: {
    taskReducer: taskReducerSlice,
    loading : taskLoadingSlice,
    result : taskResultSlice,
    card : taskCardsSlice
  },
});
