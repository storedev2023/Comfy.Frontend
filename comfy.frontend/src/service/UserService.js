import axios from 'axios'
import { ApiAddress } from './Address'

const updateJWT = async (userId,accessToken,refreshToken) => {
    const response = await axios.post(`http://${ApiAddress}/api/Auth/refreshAccessToken`, {
        userId: userId,
        refreshToken: refreshToken,
        accessToken: accessToken
      })
    return await response.data
} 

export const userService = {

    async user_checkCredentialsAndTwoFactor(user){

        if(user === (null || undefined)){
            return false
        }

        const response = await axios.post(`http://${ApiAddress}/api/Auth/checkCredentialsAndTwoFactor`, user)
        return await response.data
    },

    async user_signIn_Password(user){
        const response = await axios.post(`http://${ApiAddress}/api/Auth/signIn-Password`, user)
        return await response.data
    },

    async user_twoFactorAuth_verifyCode(user){
        const response = await axios.post(`http://${ApiAddress}/api/TwoFactorAuth/verifyCode`, user)
        return await response.data
    },

    async user_data(userId,accessToken,refreshToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
          }

          
        try{
            const response = await axios.get(`http://${ApiAddress}/api/User?id=${userId}`, config)
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
            const response = await axios.get(`http://${ApiAddress}/api/Orders/forUser?UserId=${userId}`, config)
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
            const response = await axios.get(`http://${ApiAddress}/api/WishList?UserId=${userId}`, config)
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
            const response = await axios.post(`http://${ApiAddress}/api/WishList`, {userId: userId ,productId: product_id}, config)
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
        console.log({"userId":userId,"product_id":product_id,"accessToken":accessToken,"refreshToken":refreshToken})
        try{
            const response = await axios.delete(`http://${ApiAddress}/api/WishList`, config)
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
        const response = await axios.get(`http://${ApiAddress}/api/Questions/userQuestions?userId=${userId}`)
        return await response.data
    },

    async user_reviews(userId){
        const response = await axios.get(`http://${ApiAddress}/api/Reviews/userReviews?userId=${userId}`)
        return await response.data
    },


    
    
}