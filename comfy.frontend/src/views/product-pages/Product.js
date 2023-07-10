import React, { useEffect } from "react";
import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";

import { ProductService } from "../../service/ProductService";
import { setProduct, setReviews, setQuestions } from "../../redux/reducers/product-reducer";


import './Product.scss'
import { upPage } from "../../scripts";
import { setViewedProductToSlider } from "../../redux/reducers/viewed-products-slider-reducer";

const Product = () => {

  const { id } = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
    const fetchData = async () => {  

          const product = await ProductService.getProductByUrl(id)
          if(product === (null || undefined || ""))
          {
            return navigate("/404")
          }
          dispatch(setProduct(product))

          const product_reviews = await ProductService.getReviewsByProductId(product?.id)
          dispatch(setReviews(product_reviews))
          const product_questions = await ProductService.getQuestionsByProductId(product?.id)
          dispatch(setQuestions(product_questions))
          

          dispatch(setViewedProductToSlider(product))
    }
      
    fetchData()
  }, [id,dispatch,navigate])

  useEffect(()=>{
    upPage()
  })


  return (
    <main className="product-page-tabs" id="product-page">
      <div className="product-page-breadcrumbs">
      </div>
      <div className="product-page-tabs-sections">
        <div className="product-page-tabs-links">
          <NavLink to={`/product/${id}/`} className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>
            <div className="link-body">
              <div className="link-text">
                ВСЕ ПРО ТОВАР
              </div>
            </div>
          </NavLink>
          <NavLink to='characteristics' className={({ isActive }) => isActive ? "tab-link active" : "tab-link"} >
            <div className="link-body">
              <div className="link-text">
                ХАРАКТЕРИСТИКИ
              </div>
            </div>
          </NavLink>
          <NavLink to='reviews' className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>
            <div className="link-body">
              <div className="link-text">
                ВІДГУКИ
              </div>
            </div>
          </NavLink>
          <NavLink to='questions' className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>
            <div className="link-body">
              <div className="link-text">
                ПИТАННЯ
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </main>
  );
}

export default Product;