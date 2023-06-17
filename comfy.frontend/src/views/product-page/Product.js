import React, { useEffect, useState} from "react";
import { Link, Outlet, useParams, Navigate } from "react-router-dom";
import './Product.scss'
import { ProductService } from "../../service/ProductService";
import { updatePage } from "../../scripts/visual";

const Product = () => { 
  
  const {id} = useParams()
  const [product, setProduct] = useState({})

  useEffect(()=>{
    const fetchData = async () => {    
        const response = await ProductService.getProductByUrl(id)
        setProduct(response)
    }
      
    fetchData()
  }, [])

  if(product == "")
  { 
    return <Navigate to="/404" />; 
  }

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
                <div>
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
              <Link to='video' className="tab-link">
              <div className="link-body">
                <div className="link-text">
                  ВІДЕО
                </div>
              </div>
              </Link>
              <Link to='accessories' className="tab-link">
              <div className="link-body">
                <div className="link-text">
                  АКСЕСУАРИ
                </div>
              </div>
              </Link>
              <Link to='services' className="tab-link">
              <div className="link-body">
                <div className="link-text">
                  СЕРВІСИ
                </div>
              </div>
              </Link>
              <Link to='availability' className="tab-link">
              <div className="link-body">
                <div className="link-text">
                  НАЯВНІСТЬ В МАГАЗИНАХ
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







