import { createSlice } from '@reduxjs/toolkit';
import booksArr from '../data/books.json';

export const booksSlice = createSlice({
    name : 'book',
    initialState : {
        books : booksArr
    }
})