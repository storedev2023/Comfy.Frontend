import axios from 'axios'
import { ApiAddress } from './_DefaultService'

export const ProductService = {

    async getShowcase(){
        const response = await axios.get(`http://${ApiAddress}/api/Showcase`)
        return response.data
    },

    async getProductByUrl(url){
        const response = await axios.get(`http://${ApiAddress}/api/Products/byUrl?url=${url}`)
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

    async getReviewsByProductId(id,pageNumber = 0,pageSize = 0){

        let url  = `http://${ApiAddress}/api/Reviews?productId=${id}`

        if(pageNumber !== (0 || null || undefined)){
            url+=`&pageNumber=${pageNumber}`
        }
        if(pageSize  !== (0 || null || undefined)){
            url+=`&pageSize=${pageSize}`
        }

        const response = await axios.get(url)
        return response.data   
    },

    async getQuestionsByProductId(id,pageNumber,pageSize){

        let url  = `http://${ApiAddress}/api/Questions?productId=${id}`

        if(pageNumber !== (0 || null || undefined)){
            url+=`&pageNumber=${pageNumber}`
        }
        if(pageSize  !== (0 || null || undefined)){
            url+=`&pageSize=${pageSize}`
        }

        const response = await axios.get(url)
        return response.data   
    },
}