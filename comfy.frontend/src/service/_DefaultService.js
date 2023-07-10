import axios from 'axios'

export const ApiAddress = "localhost:20080" ////localhost:20080 // 54.160.177.25:20080

export const updateJWT = async (userId,accessToken,refreshToken) => {
    const response = await axios.post(`http://${ApiAddress}/api/Auth/refreshAccessToken`, {
        userId: userId,
        refreshToken: refreshToken,
        accessToken: accessToken
      })
    return await response.data
} 