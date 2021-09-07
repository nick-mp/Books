import { createSlice } from '@reduxjs/toolkit';

export const taskLoadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loading : false    
  },
  reducers: {
    load: (state, data) => {
      state.loading = data;
    }
  }
});

export const { load } = taskLoadingSlice.actions;

export const selectLoad = state => state.loading.loading;

export default taskLoadingSlice.reducer;