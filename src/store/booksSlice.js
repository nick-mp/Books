import { createSlice } from '@reduxjs/toolkit';

export const taskReducerSlice = createSlice({
  name: 'book',
  initialState: {
    value: []
  },
  reducers: {
    add: (state, data) => {
      state.value = data;
    }
  }
});

export const { add } = taskReducerSlice.actions;

export const selectValue = state => state.taskReducer.value;

export default taskReducerSlice.reducer;
