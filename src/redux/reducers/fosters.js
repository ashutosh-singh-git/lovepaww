import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    fosters: true,
};

export const fostersSlice = createSlice({
    name: 'fosters',
    initialState,
    reducers: {
        fosters: (state, action) => {
            state.fosters = action.payload;
        },
    },
});

export const {fosters} = fostersSlice.actions;

export default fostersSlice.reducer;
