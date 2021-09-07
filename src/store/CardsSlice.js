import { createSlice } from '@reduxjs/toolkit';

export const taskCardsSlice = createSlice({
  name: 'card',
  initialState: {
    cards : 30    
  },
  reducers: {
    cards: (state, data) => {
      let articul = data.payload;
      state.cards[articul] = state.cards[articul] + 30;
    }
  }
});

export const { put } = taskCardsSlice.actions;

export const selectCards = state => state.card.cards;

export default taskCardsSlice.reducer;