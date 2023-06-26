import axios from 'axios'

export const ProductService = {

    async getShowcase(){
        const response = await axios.get('http://localhost:20080/api/Showcase')

        return response.data
    },

    async getProductByUrl(url){
        const response = await axios.get(`http://localhost:20080/api/Products/byUrl?url=${url}`)

        return response.data   
    },

    async getReviewsByProductId(id,pageNumber,pageSize){
        const response = await axios.get(`http://localhost:20080/api/Reviews?productId=${id}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

        return response.data   
    }
}