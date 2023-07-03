import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store,  { persister } from "../redux/store"
import { PersistGate } from 'redux-persist/integration/react'

// Header and Footer
import Header from "../components/layout/Header/header"
import Footer from "../components/layout/Footer/footer"

// Pages
import Home from '../views/Home/Home'
import Product from '../views/product-pages/Product'
import Info from '../views/product-pages/info-tab/Info'
import Characteristics from '../views/product-pages/characteristics-tab/Characteristics'
import Reviews from '../views/product-pages/reviews-tab/Reviews'
import Questions from '../views/product-pages/question-tab/Questions'
import EmptyPage from '../views/404/404'
import SearchPage from '../views/search/Search'
import SubcategoriesPage from '../views/categories-pages/Subcategories/Subcategories'
import ProductsCategoriesPage from '../views/categories-pages/products-categories/ProductsCategories'

const Router = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/product/:id/' element={<Product />}  >
                            <Route index element={<Info />} />
                            <Route path="characteristics" element={<Characteristics />} />
                            <Route path="reviews" element={<Reviews />} />
                            <Route path="questions" element={<Questions />} />
                        </Route>
                        <Route path="/search/:value/" element={<SearchPage/>}/>
                        <Route path="/categories/:name/" element={<SubcategoriesPage/>} />
                        <Route  path="/categories/:name/:subName/" element={<ProductsCategoriesPage/>}  />
                        <Route path='/404' element={<EmptyPage />} /> {/* for wrong data  */}
                        <Route path='*' element={<EmptyPage />} />    {/* for invalid url data */}
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )

}

export default Router;