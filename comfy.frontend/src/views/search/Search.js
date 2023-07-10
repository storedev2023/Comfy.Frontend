import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import './Search.scss'
import { searchService } from "../../service/SearchService";
import Card from "../../components/card/Card";
import { priceFormat ,getMaxPrice, getMinPrice} from "../../scripts";
import Preloader from "../../components/preloader/Preloader";
import Filter from "../../components/filters/Filter";
import { useSelector} from "react-redux";

const SearchPage = () => {

    const { value } = useParams()
    const [searchProducts, setSearchProducts] = useState([])

  useEffect(()=>{
    const fetchData = async () => {  
        const response = await searchService.getProductsSearch(value)
        setSearchProducts(response)
    }
      
    fetchData()
  }, [value])

  const changeMoneyFormat = (event) => { 
    console.log(event.target.value)
    if(event.target.value === (null || "")){ 
        event.target.value = 0
        return
    }

    let regexp = /\d/g;

    event.target.value = priceFormat(event.target.value.match(regexp).join(''))
  }


    const categories = useSelector(state => state.categories_list.categoriesList)

    const filterQuery = useSelector(state => state.filter_query.filterCheckBox)
    const filterPrice = useSelector(state => state.filter_query.filterPrice)
    const filterSort = useSelector(state => state.filter_query.filterSort)

  const [categoryData, setCategoryData] = useState([])
  const [isFilterClick, setFilterClick]= useState("")


  if(categoryData === null){
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
                                    {categoryData.length !== 0  &&
                                        <Filter filter_query={filterQuery} isActive={setFilterClick} title={"Ціна"} isPrice={true} maxPrice={getMaxPrice(categoryData)} minPrice={getMinPrice(categoryData)} />
                                    }
                                </div>
                            </div>
                            <div className="search-page-section-body-products">
                                <div className="search-page-section-body-products-sort">
        
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