import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
        itemCounts:[],
    },
    reducers:{
        setItemInCart: (state,action) => {

            console.log(action.payload.id)
            console.log(state.itemCounts)

            state.itemsInCart.push(action.payload)
            state.itemCounts.push({ productId:action.payload.id, count:1 })
        },
        setCountItemInCart: (state,action) => {
            if(state.itemsInCart.findIndex(product => product.id === action.payload.productId) !== -1){
                state.itemCounts = state.itemCounts.map(product => {
                    if(product.productId === action.payload.productId)
                    {
                        return {productId:action.payload.productId,count:action.payload.count}
                    }
                    else{
                        return product
                    }
                })
            }
        },
        deleteItemFromCart: (state,action) => {
            state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload)
            state.itemCounts = state.itemCounts.filter(product => product.productId !== action.payload)
        },
        deleteAllItemFromCart: (state,action) => {
            state.itemsInCart = []
            state.itemCounts = []
        }
    }
});

export const { setCountItemInCart,setItemInCart, deleteItemFromCart,deleteAllItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;