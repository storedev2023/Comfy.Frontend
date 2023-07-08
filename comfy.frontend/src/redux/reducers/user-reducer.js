import { createSlice } from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name: 'User',
    initialState: {
        user_access_data: {
            userId:"",
            accessToken:"",
            refreshToken:"",
        },
        user_data:{},
        user_orders:{},
        user_wishlist:{},
        user_questions:{},
        user_reviews:{},
    },
    reducers: {
        setUserAuth: (state, action) => {
            state.user_access_data = action.payload;
            console.log(action.payload)
            console.log(state.user_access_data)
        },
        setUserData:(state, action) => {
            state.user_data = action.payload;
        },
        setUserOrders:(state, action) => {
            state.user_orders = action.payload;
        },
        setUserWishlist:(state, action) => {
            state.user_orders = action.payload;
        },
        setUserQuestions:(state, action) => {
            state.user_questions = action.payload;
        },
        setUserReviews:(state, action) => {
            state.user_reviews = action.payload;
        },
        logOutUser: (state, action) => {
            state.user_access_data = {userId:"",accessToken:"",refreshToken:"",};
            state.user_data      = {}
            state.user_orders    = {}
            state.user_wishlist  = {}
            state.user_questions = {}
            state.user_reviews   = {}
        },
    }
});

export const { setUserAuth,setUserData,setUserOrders,setUserWishlist,setUserQuestions,setUserReviews,logOutUser } = UserSlice.actions;
export default UserSlice.reducer;