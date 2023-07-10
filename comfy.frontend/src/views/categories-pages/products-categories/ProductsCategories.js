import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import "./ProductsCategories.scss"
import { ProductService } from "../../../service/ProductService";
import Card from "../../../components/card/Card";
import Filter from "../../../components/filters/Filter";
import FilterMarks from "../../../components/filters/marks/FilterMarks";
import Sorting from "../../../components/product-sorting/Sorting";
import Preloader from "../../../components/preloader/Preloader";
import { getMaxPrice, getMinPrice } from "../../../scripts";







function ProductsCategoriesPage() {

    const { name, subName } = useParams()

    const [subCategory, setSubCategory] = useState([])
    const [categoryData, setCategoryData] = useState([])
    const [isFilterClick, setFilterClick]= useState("")

    const categories = useSelector(state => state.categories_list.categoriesList)

    const filterQuery = useSelector(state => state.filter_query.filterCheckBox)
    const filterPrice = useSelector(state => state.filter_query.filterPrice)
    const filterSort = useSelector(state => state.filter_query.filterSort)

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
        fetchData(localSub?.id, undefined, undefined,filterSort.sort_tag,filterSort.sorting_order, filterQuery !== null? filterQuery : undefined) 
        
    }, [categories,filterQuery,filterPrice,filterSort,name,subName])

    useEffect(() => {
        const defaultData = () => {
            if(subCategory?.id !== undefined){
                fetchData(subCategory?.id, undefined, undefined, filterSort.sort_tag,filterSort.sorting_order)
            }  
        }

        if(filterQuery !== "" || filterPrice.length !== 0 || filterSort.length !== 0)
        {
            fetchData(subCategory?.id, filterPrice.price_from, filterPrice.price_to, filterSort.sort_tag,filterSort.sorting_order,filterQuery)
        }
        else
        {
            defaultData()
        } 
        

    }, [isFilterClick,filterPrice.length,filterPrice.price_from,filterPrice.price_to,filterQuery,filterSort.length,filterSort.sort_tag,filterSort.sorting_order,subCategory?.id])


    if(categoryData === null || categoryData.length === 0 ){
        return(<Preloader/>)
    }
    else {
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
                                <Filter filter_query={filterQuery} isActive={setFilterClick} title={"Бренд"} isBrand={true} characteristics={categoryData?.brands} />
                            }
                            {categoryData.length !== 0  &&
                                <Filter filter_query={filterQuery} isActive={setFilterClick} title={"Ціна"} isPrice={true} maxPrice={getMaxPrice(categoryData)} minPrice={getMinPrice(categoryData)} />
                            }
                            {categoryData?.characteristics?.map(characteristic => (
                                <div key={characteristic?.name?.id}>
                                    <Filter filter_query={filterQuery} isActive={setFilterClick} filter_id={characteristic?.name?.id} title={characteristic.name.name} isPrice={false} characteristics={characteristic.values} />
                                </div>
                            ))
                            }
                        </div>
                        <div className="product-categories-section-body-products">
                            <div className="product-categories-products-sorting">
                                <div className="active-filters">
                                    <FilterMarks  />
                                </div>
                                <div className="active-select"> 
                                    <Sorting isActive={setFilterClick} sort_name={['За рейтінгом','Від дешевих до дорогих','Від дорогих до дешевих']}/>
                                </div>
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

}

export default ProductsCategoriesPage;
