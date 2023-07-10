import axios from 'axios'
import { ApiAddress, updateJWT } from './_DefaultService'



export const userService = {

    async user_createNewOrder(order, accessToken, refreshToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
        }


        try{
            const response = await axios.post(`${ApiAddress}/api/Orders`, order, config)
            console.log(response)
            return response.status
        }
        catch(error){
            if(error.response.status === 401)
            {
                return {newAccessToken: await updateJWT(order.userId,accessToken,refreshToken) }
            }
            else{
                console.log(error)
            }
        }
       
    },


    async user_checkCredentialsAndTwoFactor(user){

        if(user === (null || undefined)){
            return false
        }

        const response = await axios.post(`${ApiAddress}/api/Auth/checkCredentialsAndTwoFactor`, user)
        return await response.data
    },

    async user_signIn_Password(user){
        const response = await axios.post(`${ApiAddress}/api/Auth/signIn-Password`, user)
        return await response.data
    },

    async user_twoFactorAuth_verifyCode(user){
        const response = await axios.post(`${ApiAddress}/api/TwoFactorAuth/verifyCode`, user)
        return await response.data
    },

    async user_data(userId,accessToken,refreshToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
          }

        try{
            const response = await axios.get(`${ApiAddress}/api/User?id=${userId}`, config)
            return await response.data
        }
        catch(error){
            if(error.response.status === 401)
            {
                return {newAccessToken: await updateJWT(userId,accessToken,refreshToken) }
            }
            else{
                console.log(error)
            }
        }
    },

    async user_orders(userId,accessToken,refreshToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
          }

        try{
            const response = await axios.get(`${ApiAddress}/api/Orders/forUser?UserId=${userId}`, config)
            return await response.data
        }
        catch(error){
            if(error.response.status === 401)
            {
                updateJWT(userId,accessToken,refreshToken)
            }
            else{
                console.log(error)
            }
        }
    },

    async user_wishlist(userId,accessToken,refreshToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
        }

        try{
            const response = await axios.get(`${ApiAddress}/api/WishList?UserId=${userId}`, config)
            return await response.data
        }
        catch(error){
            if(error.response.status === 401)
            {
                updateJWT(userId,accessToken,refreshToken)
            }
            else{
                console.log(error)
            }
        }
        
    },

    async user_add_wishlist(userId,product_id,accessToken,refreshToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
        }

        try{
            const response = await axios.post(`${ApiAddress}/api/WishList`, {userId: userId ,productId: product_id}, config)
            return await response.data
        }
        catch(error){
            if(error.response.status === 401)
            {
                updateJWT(userId,accessToken,refreshToken)
            }
            else{
                console.log(error)
            }
        }
    },

    async user_delete_wishlist(userId,product_id,accessToken,refreshToken){

        let config = {
            data:{
                "userId": userId,
                "productId": product_id   
            },
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
        }
        try{
            const response = await axios.delete(`${ApiAddress}/api/WishList`, config)
            return await response.data
        }
        catch(error){
            if(error.response.status === 401)
            {
                updateJWT(userId,accessToken,refreshToken)
            }
            else{
                console.log(error)
            }
        }
    },

    async user_questions(userId){
        const response = await axios.get(`${ApiAddress}/api/Questions/userQuestions?userId=${userId}`)
        return await response.data
    },

    async user_reviews(userId){
        const response = await axios.get(`${ApiAddress}/api/Reviews/userReviews?userId=${userId}`)
        return await response.data
    },


    
    
}