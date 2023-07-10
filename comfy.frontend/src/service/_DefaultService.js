import axios from 'axios'

export const ApiAddress = "http://localhost:20080" ////http://localhost:20080 // https://loffy.pp.ua

export const updateJWT = async (userId,accessToken,refreshToken) => {
    const response = await axios.post(`${ApiAddress}/api/Auth/refreshAccessToken`, {
        userId: userId,
        refreshToken: refreshToken,
        accessToken: accessToken
      })
    return await response.data
} 