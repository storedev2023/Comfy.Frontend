import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: 'cart',
    initialState: {
        searchHistory: []
    },
    reducers:{
        setHistoryToSearchList: (state,action) => {
            const index = state.searchHistory.findIndex(product => product === action.payload)
            if(index === -1){                               // adding new product
                                                            // limit of 10 objects. The new object replaces the old one
                if (state.searchHistory.length >= 10) {   
                    state.searchHistory.pop()
                }
                state.searchHistory.unshift(action.payload) 
            }
            else{                                             // updating the item in the array

                state.searchHistory.splice(index,1)           // deleting
                state.searchHistory.unshift(action.payload)   // adding
            }
        },
        deleteHistoryInSearchList: (state,action) => {
            console.log(action.payload)
            state.searchHistory = state.searchHistory.filter(history => history !== action.payload)
        }
    }
});

export const { setHistoryToSearchList, deleteHistoryInSearchList } = searchSlice.actions;
export default searchSlice.reducer;