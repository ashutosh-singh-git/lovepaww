import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rescue: true,
};

export const rescueSlice = createSlice({
    name: 'rescue',
    initialState,
    reducers: {
        rescue: (state, action) => {
            state.rescue = action.payload;
        },
    },
});

export const { rescue } = rescueSlice.actions;

export default rescueSlice.reducer;
