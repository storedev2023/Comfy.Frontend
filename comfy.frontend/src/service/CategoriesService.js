import axios from 'axios'
import { ApiAddress } from './_DefaultService'

export const CategoriesService = {
    async getCategoriesMenu(){
        const response = await axios.get(`http://${ApiAddress}/api/CategoriesMenu`)

        return response.data
    }
}