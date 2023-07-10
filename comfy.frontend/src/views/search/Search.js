import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import './Search.scss'
import { searchService } from "../../service/SearchService";
import Card from "../../components/card/Card";
import { getMaxPrice, getMinPrice} from "../../scripts";
import Preloader from "../../components/preloader/Preloader";
import Filter from "../../components/filters/Filter";
import { useSelector} from "react-redux";
import Sorting from "../../components/product-sorting/Sorting";

const SearchPage = () => {

    const { value } = useParams()
    const [searchProducts, setSearchProducts] = useState([])
    const [isFilterClick, setFilterClick]= useState("")

    const filterPrice = useSelector(state => state.filter_query.filterPrice)
    const filterSort = useSelector(state => state.filter_query.filterSort)

    // eslint-disable-next-line
    const fetchData = async (
        string = value,
        priceForm = undefined,
        priceTo = undefined,
        sortColumn = undefined,
        sortOrder = undefined,
        pageNumber = undefined,
        pageSize = undefined

        ) => {
        const response = await searchService.getProductsSearch(
            string,
            priceForm,
            priceTo,
            sortColumn,
            sortOrder,
            pageNumber,
            pageSize
            )
        setSearchProducts(response)
    }

    useEffect(() => {
        
        const defaultData = () => {
            if(value !== undefined){
                fetchData(value, undefined, undefined, filterSort.sort_tag,filterSort.sorting_order)
            }  
        }

        if(filterPrice.length !== 0 || filterSort.length !== 0)
        {
            fetchData(value, filterPrice.price_from, filterPrice.price_to, filterSort.sort_tag,filterSort.sorting_order)
        }
        else
        {
            defaultData()
        } 
        

    }, [fetchData,isFilterClick,filterPrice.length,filterPrice.price_from,filterPrice.price_to,filterSort.length,filterSort.sort_tag,filterSort.sorting_order,value])


  useEffect(()=>{
    const fetchData = async () => {  
        const response = await searchService.getProductsSearch(value, undefined, undefined, filterSort.sort_tag,filterSort.sorting_order)
        setSearchProducts(response)
    }
      
    fetchData()
  }, [value,filterSort.sort_tag,filterSort.sorting_order])







  if(searchProducts === null){
    return(<Preloader/>)
    }
    else{
        return (
            <main className="search-page" id="search-page">
                { searchProducts?.products?.length === 0 
                    ?<div className="search-page-empty">
                        <div className="search-page-empty-title">
                        По запиту "{ value }" немає результатів
                        </div>
                        <div className="search-page-empty-text">
                            Можливо, ви ввели некоректний запит. Перевірте правильність написання.
                        </div>
                    </div>
                    :<div className="search-page-section">
                        <div className="search-page-section-header">
                            <div className="search-page-section-header-title">
                                По запиту "{ value }" знайшлося
                            </div>
                            <div className="search-page-section-header-count">
                                {searchProducts?.products?.length} моделей 
                            </div>
                        </div>
                        <div className="search-page-section-body">
                            <div className="search-page-section-body-filter">
                                <div className="search-page-section-body-filter-price">
                                    {searchProducts.length !== 0  &&
                                        <Filter isActive={setFilterClick} title={"Ціна"} isPrice={true} maxPrice={getMaxPrice(searchProducts)} minPrice={getMinPrice(searchProducts)} />
                                    }
                                </div>
                            </div>
                            <div className="search-page-section-body-products">
                                <div className="search-page-section-body-products-sort">
                                    <Sorting isActive={setFilterClick} sort_name={['За рейтінгом','Від дешевих до дорогих','Від дорогих до дешевих']}/>
                                </div>
                                <div className="search-page-section-body-products-catalog">
                                    {searchProducts?.products?.map(product => (
                                        <Card product={product} slider={true} hover={true}  key={product.id}/>
                                    ))}
                                </div>
                                <div className="search-page-section-body-products-pagination">
        
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </main>
          );
    }

}

export default SearchPage;