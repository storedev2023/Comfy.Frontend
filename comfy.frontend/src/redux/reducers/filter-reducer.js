import { createSlice } from "@reduxjs/toolkit"

const FilterSlice = createSlice({
    name: 'filterQuery',
    initialState: {
        filterCheckBox: "",
        filterPrice:[],
    },
    reducers:{
        addFilterCheckBox: (state,action) => {
            if(state.filterCheckBox === "") 
            {
                state.filterCheckBox += action.payload
                return
            } 
            state.filterCheckBox += ("&" + action.payload)

            let uniqueFilters = Array.from(new Set(state.filterCheckBox.split('&')))
            state.filterCheckBox = uniqueFilters.join('&')
        },
        addFilterPrice: (state,action) => {
            state.filterPrice = action.payload
        },
        deleteFilterCheckBox: (state,action) => {  
            let filters = state.filterCheckBox.split('&')
            filters = filters.filter(filter => filter !== action.payload)
            state.filterCheckBox = filters.join('&')
        },
        deleteFilterPrice: (state,action) => {
            
        },
        deleteAllFilters:(state,action) => {
            
        },
    }
});

export const { addFilterCheckBox,deleteFilterCheckBox,addFilterPrice,deleteFilterPrice,deleteAllFilters } = FilterSlice.actions;
export default FilterSlice.reducer;