import axios from 'axios'
import { ApiAddress } from './_DefaultService'

export const searchService = {

    async getPreviewSearch(key){

        const response = await axios.get(
            key.trim() !== (undefined || null || "")
            ? `http://${ApiAddress}/api/Products/forSearchTab?searchTerm=${key}`
            : `http://${ApiAddress}/api/Products/forSearchTab`
        )

        return response.data
    },

    async getProductsSearch(
        key,
        priceFrom = 0,
        priceTo = 0,
        sortColumn = null,
        sortOrder = null,
        pageNumber = 0,
        pageSize = 0
        ){      
        let url = `http://localhost:20080/api/Products/bySearchTerm`
        
        if(key !== (undefined || null || "")){
            url += `?searchTerm=${key}`
        }else{
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