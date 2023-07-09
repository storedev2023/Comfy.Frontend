import axios from 'axios'
import { ApiAddress } from './Address'

export const ProductService = {

    async getShowcase(){
        const response = await axios.get(`http://${ApiAddress}/api/Showcase`)
        return response.data
    },

    async getProductByUrl(url){
        const response = await axios.get(`http://${ApiAddress}/api/Products/byUrl?url=${url}`)
        return response.data   
    },

    async getReviewsByProductId(id,pageNumber,pageSize){
        const response = await axios.get(`http://${ApiAddress}/api/Reviews?productId=${id}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        return response.data   
    },

    async getProductsInCategory(
        id,
        priceFrom = 0,
        priceTo = 0,
        sortColumn = null,
        sortOrder = null,
        filterQuery = null,
        pageNumber = 0,
        pageSize = 0
        ){
            
        let url = `http://${ApiAddress}/api/Products`

        if(id !== (undefined && null && ""))
        {
            url += `?subcategoryId=${id}`
        }
        else{
            return null
        }

        if(priceFrom !== (undefined || null || 0)){
            url += `&priceFrom=${priceFrom}`
        }
        if(priceTo !== (undefined || null || 0)){
            url += `&priceTo=${priceTo}`
        }
        if(sortColumn !== (undefined || null || "")){
            url += `&sortColumn=${sortColumn}`
        } 
        if(sortOrder !== (undefined || null || "")){
            url += `&sortOrder=${sortOrder}`
        }
        if(filterQuery !== (undefined || null || "")){
            url += `&filterQuery=${encodeURIComponent(filterQuery)}`
        }
        if(pageNumber !== (undefined || null || 0)){
            url += `&pageNumber=${pageNumber}`
        }
        if(pageSize !== (undefined || null || 0)){
            url += `&pageSize=${pageSize}`
        }

        
        const response = await axios.get(url)

        return response.data
    },
}