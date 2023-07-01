import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: 'cart',
    initialState: {
        searchHistory: []
    },
    reducers:{
        setHistoryToSearchList: (state,action) => {
            state.searchHistory.push(action.payload)
        },
        deleteHistoryInSearchList: (state,action) => {
            state.searchHistory = state.searchHistory.filter(product => product.id !== action.payload)
        }
    }
});

export const { setHistoryToSearchList, deleteHistoryInSearchList } = searchSlice.actions;
export default searchSlice.reducer;