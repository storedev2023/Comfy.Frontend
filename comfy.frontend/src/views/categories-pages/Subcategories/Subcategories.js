import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import "./Subcategories.scss"

function SubcategoriesPage() {

  const { name } = useParams()
  const navigate = useNavigate();
  const [subCategories, setSubCategories] = useState([])
  const categories = useSelector(state => state.categories_list.categoriesList)

  useEffect(() => {
    setSubCategories(categories?.filter(category => category.url === name)[0]?.categories)

  }, [categories])

  return (
    <main className="subcategories-page">
      <div className="subcategories-section">
        {subCategories?.map(category => (
          <div className="subcategory-blok" key={category.id}>
            <div className={`subcategory-blok-image ${category.url}`}>
              { category.imageUrl !== "" ?
                <img src={category.imageUrl} alt=""/>
                :<></>
              }     
            </div>
            <div className="subcategory-blok-title">
              <Link to={`/categories/${name}/${category.url}/`} reloadDocument={true}>
                  {category.name}
              </Link>
            </div>
            <div className="subcategory-blok-filters">
              {category.filters.map(filter => (
                <div className="subcategory-blok-filters-filter">
                  <Link to={`/categories/${name}/${category.url}/`} reloadDocument={true}>
                    {filter.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default SubcategoriesPage;
