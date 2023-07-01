import axios from 'axios'

export const searchService = {

    async getPreviewSearch(key){

        const response = await axios.get(
            key !== (undefined || null)
            ? `http://localhost:20080/api/Products/forSearchTab?searchTerm=${key}`
            : `http://localhost:20080/api/Products/forSearchTab`
        )

        return response.data
    },

    async getProductsSearch(key,priceFrom,priceTo,sortColumn,sortOrder,pageNumber,pageSize){

        const response = await axios.get(
            key !== (undefined || null)
            ? `http://localhost:20080/api/Products/forSearchTab?searchTerm=${key}`
            : `http://localhost:20080/api/Products/forSearchTab`
        )

        return response.data
    },

}