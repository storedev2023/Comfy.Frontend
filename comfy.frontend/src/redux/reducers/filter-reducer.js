import { createSlice } from "@reduxjs/toolkit"

const FilterSlice = createSlice({
    name: 'filterQuery',
    initialState: {
        filterCheckBox: "",
        filterPrice: { price_from: 0, price_to: 0 },
        filterSort: { sort_tag: "rating", sorting_order: "desc" },
        activeCharacteristicMarks: [],
    },
    reducers: {
        addFilterCheckBox: (state, action) => {
            if (state.filterCheckBox === "") {
                state.filterCheckBox += action.payload
                return
            }
            state.filterCheckBox += ("&" + action.payload)

            let uniqueFilters = Array.from(new Set(state.filterCheckBox.split('&')))
            state.filterCheckBox = uniqueFilters.join('&')
        },

        addFilterPrice: (state, action) => {
            state.filterPrice = action.payload
        },

        addFilterSort: (state, action) => {
            state.filterSort = action.payload
        },

        addFilterMark: (state, action) => {
            console.log(action.payload)
            if (state.activeCharacteristicMarks.findIndex(mark => mark.filter === action.payload.filter) === -1) {
                state.activeCharacteristicMarks.unshift(action.payload)
            }
        },

        deleteFilterCheckBox: (state, action) => {
            let filters = state.filterCheckBox.split('&')
            filters = filters.filter(filter => filter !== action.payload)
            state.filterCheckBox = filters.join('&')
        },

        deleteFilterMark: (state, action) => {
            state.activeCharacteristicMarks = state.activeCharacteristicMarks.filter(mark => mark.filter !== action.payload.filter)
        },

        deleteAllFilters: (state, action) => {
            state.filterCheckBox = ""
            state.filterPrice = { price_from: 0, price_to: 0 }
            state.activeCharacteristicMarks = []
        },
    }
});

export const { addFilterCheckBox, deleteFilterCheckBox, addFilterPrice, addFilterMark, deleteFilterMark, deleteAllFilters, addFilterSort } = FilterSlice.actions;
export default FilterSlice.reducer;