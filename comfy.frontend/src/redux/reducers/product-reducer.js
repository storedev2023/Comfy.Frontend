import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'product',
    initialState: {
        currentProduct: null
    },
    reducers:{
        setProduct: (state,action) => {
            state.currentProduct = action.payload
        },
    }
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;