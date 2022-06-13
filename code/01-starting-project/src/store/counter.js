import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        showCount: true
    },
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        change(state, action) {
            state.count = state.count + action.payload;
        },
        toggle(state) {
            state.showCount = !state.showCount;
        },
    }
});

export const countActions = countSlice.actions;
export default countSlice.reducer;