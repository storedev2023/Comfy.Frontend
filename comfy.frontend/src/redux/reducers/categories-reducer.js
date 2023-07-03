import { createSlice } from "@reduxjs/toolkit"

const categoriesSlice = createSlice({
    name: 'cart',
    initialState: {
        categoriesList: []
    },
    reducers:{
        setCategoriesList: (state,action) => {
            state.categoriesList = action.payload
        }
    }
});

export const { setCategoriesList} = categoriesSlice.actions;
export default categoriesSlice.reducer;