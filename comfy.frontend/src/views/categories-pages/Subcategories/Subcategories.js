import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import "./Subcategories.scss"
import { addFilterCheckBox } from "../../../redux/reducers/filter-reducer";

function SubcategoriesPage() {

  const { name } = useParams();
  const dispatch = useDispatch();
  const [subCategories, setSubCategories] = useState([]);
  const categories = useSelector(state => state.categories_list.categoriesList);

  useEffect(() => {
    setSubCategories(categories?.filter(category => category.url === name)[0]?.categories)

  }, [categories,name])

  const addFiltersPage= (filterQuery) =>{
    dispatch(addFilterCheckBox(filterQuery))
  }
  return (
    <main className="subcategories-page">
      <div className="subcategories-section">
        {subCategories?.map(category => (
          <div className="subcategory-blok" key={category.url}>
            <div className={`subcategory-blok-image ${category.url}`}>
              { category.imageUrl !== "" ?
                <img src={category.imageUrl} alt=""/>
                :<></>
              }     
            </div>
            <Link to={`/categories/${name}/${category.url}/`} reloadDocument={true}>
              <div className="subcategory-blok-title">
                {category.name}
              </div>
            </Link>
            <div className="subcategory-blok-filters">
              {category.filters.map(filter => (
                <Link key={filter.name} to={`/categories/${name}/${category.url}/`} onClick={() => addFiltersPage(filter.filterQuery)}>
                  <div className="subcategory-blok-filters-filter">
                      {filter.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default SubcategoriesPage;
