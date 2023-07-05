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
import Compare from '../views/compare/Сompare'
import Orders from '../views/order/Order'
import UserPage from '../views/user-profile/UserPage'
import Wishlist from '../views/user-profile/wishlist-page/Wishlist'
import UserPersonalData from '../views/user-profile/personal-data/UserPersonalData'
import OrdersPage from '../views/user-profile/user-orders/Orders'
import ReviewsPage from '../views/user-profile/reviews/UserReviews'
import QuestionsPage from '../views/user-profile/questions/UserQuestions'

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
                        <Route path="/categories/:name/:subName/" element={<ProductsCategoriesPage/>}  />
                        <Route path="/compare/:id" element={<Compare/>}/>
                        <Route  path="/categories/:name/:subName/" element={<ProductsCategoriesPage/>}  />
                        <Route  path="/order" element={<Orders/>}  />
                        <Route path='/profile/' element={<UserPage />}  >
                            <Route index element={<UserPersonalData />} />
                            <Route path="wishlist" element={<Wishlist />} />
                            <Route path="orders" element={<OrdersPage />} />
                            <Route path="reviews" element={<ReviewsPage />} />\
                            <Route path="questions" element={<QuestionsPage />} />
                        </Route>
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