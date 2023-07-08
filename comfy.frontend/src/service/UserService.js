import axios from 'axios'


const updateJWT = async (userId,accessToken,refreshToken) => {
    const response = await axios.post('http://localhost:20080/api/Auth/refreshAccessToken', {
        userId: userId,
        refreshToken: refreshToken,
        accessToken: accessToken
      })
      //console.log(response)
    return await response.data
} 

export const userService = {

    async user_checkCredentialsAndTwoFactor(user){

        if(user === (null || undefined)){
            return false
        }

        const response = await axios.post('http://localhost:20080/api/Auth/checkCredentialsAndTwoFactor', user)
        console.log(response.data)

        return await response.data
    },

    async user_signIn_Password(user){
        const response = await axios.post('http://localhost:20080/api/Auth/signIn-Password', user)
        return await response.data
    },

    async user_twoFactorAuth_verifyCode(user){
        const response = await axios.post('http://localhost:20080/api/TwoFactorAuth/verifyCode', user)
        return await response.data
    },

    async user_data(userId,accessToken,refreshToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
          }

        const response = await axios.get(`http://localhost:20080/api/User?id=${userId}`, config)
        .catch((error) => {
            updateJWT(userId,accessToken,refreshToken)
        });

        return await response.data
    },

    async user_orders(userId,accessToken,refreshToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
          }

        const response = await axios.get(`http://localhost:20080/api/Orders/forUser?UserId=${userId}`, config)
        .catch((error) => {
            updateJWT(userId,accessToken,refreshToken)
        });
        
        return await response.data
    },

    async user_wishlist(userId,accessToken,refreshToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
        }

        const response = await axios.get(`http://localhost:20080/api/WishList?UserId=${userId}`, config)
        // .catch((error) => {
        //     updateJWT(userId,accessToken,refreshToken)
        // });

        return await response.data
    },

    async user_add_wishlist(userId,product_id,accessToken,refreshToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
        }

        const response = await axios.post('http://localhost:20080/api/WishList', {userId: userId ,productId: product_id}, config)
        // .catch((error) => {
        //     updateJWT(userId,accessToken,refreshToken)
        // });
        
        console.log(response.data)
        return await response.data
    },

    async user_delete_wishlist(userId,product_id,accessToken,refreshToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
        }
        console.log(userId,product_id,accessToken)
        const response = await axios.delete('http://localhost:20080/api/WishList', {userId: userId ,productId: product_id} , config)
        // .catch((error) => {
        //     updateJWT(userId,accessToken,refreshToken)
        // });
        console.log(response)
        return await response.data
    },

    async user_questions(userId,accessToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
        }

        const response = await axios.get(`http://localhost:20080/api/User?id=${userId}`, config)
        console.log(response)
        return await response.data
    },

    async user_reviews(userId,accessToken){

        let config = {
            headers: {
                Authorization: `Bearer ${accessToken}` ,
            }
        }

        const response = await axios.get(`http://localhost:20080/api/User?id=${userId}`, config)
        console.log(response)
        return await response.data
    },


    
    
}