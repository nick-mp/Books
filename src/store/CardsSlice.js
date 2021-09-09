import { createSlice } from '@reduxjs/toolkit';

export const taskCardsSlice = createSlice({
  name: 'card',
  initialState: {
    cards : 0    
  },
  reducers: {
    cards: (state, data) => {
      state.cards +=  data.payload;
    },
    start: (state, data) => {
      state.cards = data.payload
      console.log('data = ', data.payload)
    }
  }
});

export const { cards, start } = taskCardsSlice.actions;

export const selectCards = state => state.card.cards;

export default taskCardsSlice.reducer;