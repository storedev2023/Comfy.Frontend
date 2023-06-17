import axios from 'axios'

export const CategoriesService = {
    async getCategoriesMenu(){
        const response = await axios.get('http://localhost:20080/api/CategoriesMenu')

        return response.data
    }

}