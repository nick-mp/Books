import { createSlice } from '@reduxjs/toolkit';

export const taskResultSlice = createSlice({
  name: 'result',
  initialState: {
    result : 30    
  },
  reducers: {
    count: (state, data) => {
      state.result = data;
    }
  }
});

export const { count } = taskResultSlice.actions;

export const selectResult = state => state.result.result;

export default taskResultSlice.reducer;