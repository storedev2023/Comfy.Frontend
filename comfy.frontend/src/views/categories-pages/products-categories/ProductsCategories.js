import React, { useEffect, useRef, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux"
import "./ProductsCategories.scss"
import { ProductService } from "../../../service/ProductService";
import Card from "../../../components/card/Card";
import Filter from "../../../components/filters/Filter";
import { priceFormat } from "../../../scripts";
import Sorting from "../../../components/product-sorting/Sorting";



const getMaxPrice = (categoryData) =>{
    return categoryData?.products?.reduce((max, product) => (product.price > max ? product.price : max), 0)
}

const getMinPrice = (categoryData) =>{
    return categoryData?.products?.reduce((min, product) => (product.price < min ? product.price : min), getMaxPrice(categoryData))
}




function ProductsCategoriesPage() {

    const { name, subName } = useParams()

    const [subCategory, setSubCategory] = useState([])
    const [categoryData, setCategoryData] = useState([])
    const [isFilterClick, setFilterClick]= useState("")

    const categories = useSelector(state => state.categories_list.categoriesList)
    const filterQuery = useSelector(state => state.filter_query.filterCheckBox)
    const filterPrice = useSelector(state => state.filter_query.filterPrice)

    const fetchData = async (
        id,
        priceForm = undefined,
        priceTo = undefined,
        sortColumn = undefined,
        sortOrder = undefined,
        filterQuery = undefined,
        pageNumber = undefined,
        pageSize = undefined

        ) => {
        const response = await ProductService.getProductsInCategory(
            id,
            priceForm,
            priceTo,
            sortColumn,
            sortOrder,
            filterQuery,
            pageNumber,
            pageSize
            )
        setCategoryData(response)
    }


    useEffect(() => {
        if(categories === null || categories.length === 0 ){
          return 
        }

        const localSub = categories?.filter(category => category?.url === name)[0]?.categories?.filter(subcategory => subcategory?.url === subName)[0]
        setSubCategory(localSub)
        fetchData(localSub?.id) 
        
    }, [categories])

    useEffect(() => {

        const defaultData = () => {
            if(subCategory?.id !== undefined){
                fetchData(subCategory?.id)
            }  
        }

        if(filterQuery !== "" || filterPrice.length !== 0)
        {
            fetchData(subCategory?.id,filterPrice[0],filterPrice[1],undefined,undefined,filterQuery)
        }
        else
        {
            defaultData()
        } 
        

    }, [isFilterClick])
   

    return (
        <main className="product-categories-page">
            <div className="product-categories-section">
                <div className="product-categories-section-header">
                    <div className="product-categories-section-header-title">
                        {subCategory.name}
                    </div>
                    <div className="product-categories-section-header-count">
                        {categoryData?.totalProductsNumber} моделей
                    </div>
                </div>
                <div className="product-categories-section-body">
                    <div className="product-categories-section-body-filters">

                        {categoryData.length !== 0 &&
                            <Filter isActive={setFilterClick} title={"Бренд"} isBrand={true} characteristics={categoryData?.brands} maxView={10} />
                        }
                        {categoryData.length !== 0  &&
                            <Filter isActive={setFilterClick} title={"Ціна"} isPrice={true} maxPrice={getMaxPrice(categoryData)} minPrice={getMinPrice(categoryData)} />
                        }
                        {categoryData?.characteristics?.map(characteristic => (
                            <div key={characteristic?.name?.id}>
                                <Filter isActive={setFilterClick} filter_id={characteristic?.name?.id} title={characteristic.name.name} isPrice={false} characteristics={characteristic.values} maxView={10} />
                            </div>
                        ))
                        }
                    </div>
                    <div className="product-categories-section-body-products">
                        <div className="product-categories-products-sorting">
                            <Sorting/>
                        </div>
                        { categoryData?.products?.length !== 0 ?
                            <div className="product-categories-products-catalog">
                                {categoryData?.products?.map(product => (
                                    <div key={product.url} >
                                        <Card product={product} slider={true} hover={true} />
                                    </div>
                                ))}
                            </div>
                        : <div className="product-categories-products-catalog-empty">
                                Товарів не знайдено 
                            </div>
                        }

                        <div className="product-categories-products-pagination">

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductsCategoriesPage;
