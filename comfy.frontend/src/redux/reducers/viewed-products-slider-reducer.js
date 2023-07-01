import { createSlice } from "@reduxjs/toolkit"

const viewedProductsSliderSlice = createSlice({
    name: 'v_product',
    initialState: {
        itemsInViewedProductsSlider: [],
    },
    reducers:{
        setViewedProductToSlider: (state,action) => {
            const index = state.itemsInViewedProductsSlider.findIndex(product => product.id == action.payload.id)
           
            if(index === -1){                                           // adding new product
                                                                        // limit of 10 objects. The new object replaces the old one
                if (state.itemsInViewedProductsSlider.length >= 10) {   
                    state.itemsInViewedProductsSlider.pop()
                }
                state.itemsInViewedProductsSlider.unshift(action.payload) 
            }
            else{                                                       // updating the item in the array

                state.itemsInViewedProductsSlider.splice(index,1)       // deleting
                state.itemsInViewedProductsSlider.unshift(action.payload)  // adding
            }

        },

    }
});

export const { setViewedProductToSlider } = viewedProductsSliderSlice.actions;
export default viewedProductsSliderSlice.reducer;