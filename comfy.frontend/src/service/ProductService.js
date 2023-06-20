import axios from 'axios'

export const ProductService = {

    async getShowcase(){
        const response = await axios.get('http://localhost:20080/api/Showcase')

        return response.data
    },

    async getProductByUrl(url){
        const response = await axios.get(`http://localhost:20080/api/Products/byUrl?url=${url}`)

        return response.data   
    }
}