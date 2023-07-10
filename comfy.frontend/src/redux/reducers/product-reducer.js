import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'product',
    initialState: {
        currentProduct: null,
        product_reviews:{},
        product_questions:{},
    },
    reducers:{
        setProduct: (state,action) => {
            state.currentProduct = action.payload
        },
        setReviews: (state,action) => {
            state.product_reviews = action.payload
        },
        setQuestions: (state,action) => {
            state.product_questions = action.payload
        },
    }
});

export const { setProduct,setReviews,setQuestions } = productSlice.actions;
export default productSlice.reducer;