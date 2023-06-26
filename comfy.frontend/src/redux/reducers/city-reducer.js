import { createSlice } from "@reduxjs/toolkit"

const citySlice = createSlice({
    name: 'city',
    initialState: {
        currentCity: null
    },
    reducers:{
        setCity: (state,action) => {
            state.initialState = action.payload
        },
    }
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;