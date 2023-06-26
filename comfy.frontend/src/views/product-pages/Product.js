import React, { useEffect } from "react";
import { Link, Outlet, useParams} from "react-router-dom";
import { useDispatch } from "react-redux";

import { ProductService } from "../../service/ProductService";
import { setProduct } from "../../redux/reducers/product-reducer";


import './Product.scss'

const Product = () => {

  const { id } = useParams()
  const dispatch = useDispatch();


  useEffect(()=>{
    const fetchData = async () => {    
        const response = await ProductService.getProductByUrl(id)
        setProduct(response)
        dispatch(setProduct(response))
    }
      
    fetchData()
  }, [id])


  return (
    <main className="product-page-tabs" id="product-page">
      <div className="product-page-breadcrumbs">
      </div>
      <div className="product-page-tabs-sections">
        <div className="product-page-tabs-links">
          <Link to='' className="tab-link">
            <div className="link-body">
              <div className="link-text">
                ВСЕ ПРО ТОВАР
              </div>
            </div>
          </Link>
          <Link to='characteristics' className="tab-link">
            <div className="link-body">
              <div className="link-text">
                ХАРАКТЕРИСТИКИ
              </div>
            </div>
          </Link>
          <Link to='reviews' className="tab-link">
            <div className="link-body">
              <div className="link-text">
                ВІДГУКИ
              </div>
            </div>
          </Link>
          <Link to='questions' className="tab-link">
            <div className="link-body">
              <div className="link-text">
                ПИТАННЯ
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </main>
  );
}

export default Product;