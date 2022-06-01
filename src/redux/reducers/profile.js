import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    profile: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        profile: (state, action) => {
            state.profile = action.payload;
        },
    },
});

export const {profile} = profileSlice.actions;

export default profileSlice.reducer;
