import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux"
import "./ProductsCategories.scss"
import { ProductService } from "../../../service/ProductService";
import Card from "../../../components/card/Card";

function ProductsCategoriesPage() {

  const { name, subName } = useParams()

  const [subCategory, setSubCategory] = useState([])
  const [categoryData, setCategoryData] = useState([])

  const categories = useSelector(state => state.categories_list.categoriesList)

  useEffect(()=>{
    const localSub = categories?.filter(category => category?.url === name)[0]?.categories?.filter(subcategory => subcategory?.url === subName)[0]
    setSubCategory(localSub)
    console.log(localSub?.id)
    const fetchData = async () => {  
        const response = await ProductService.getProductsInCategory(localSub?.id)
        console.log(response)
        setCategoryData(response)
    }
      
    fetchData()
  }, [categories])



  return (
    <main className="product-categories-page">
        <div>

        </div>
        <div className="product-categories-section">
            <div className="product-categories-section-header">
                <div className="product-categories-section-header-title">
                    { subCategory?.name }
                </div>
                 <div className="product-categories-section-header-count">
                    { categoryData?.totalProductsNumber } моделей 
                </div>
            </div>
            <div className="product-categories-section-body">
                <div className="product-categories-section-body-filters">
                    <div className="product-categories-filter">
                        <div className="product-categories-filter-title">
                            
                        </div>
                        <div className="product-categories-filter-count">
                            
                        </div>
                    </div>
                </div>
                <div className="product-categories-section-body-products">
                    <div className="product-categories-products-filter-btn">

                    </div>
                    <div className="product-categories-products-catalog">
                        {categoryData?.products?.map(product =>(
                                <Card product={product} slider={true} hover={true} key={product.id}/>
                        ))}
                    </div>
                    <div className="product-categories-products-pagination">

                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default ProductsCategoriesPage;
