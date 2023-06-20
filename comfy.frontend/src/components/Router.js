import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "../redux/index"
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
import Video from '../views/product-pages/video-tab/Video'
import Accessories from '../views/product-pages/accessories-tab/Accessories'
import Services from '../views/product-pages/services-tab/Services'
import Availability from '../views/product-pages/availability-tab/Availability'
import EmptyPage from '../views/404/404'


const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/:id' element={<Product />}  >
                        <Route index element={<Info />} />
                        <Route path="characteristics" element={<Characteristics />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="questions" element={<Questions />} />
                        <Route path="video" element={<Video />} />
                        <Route path="accessories" element={<Accessories />} />
                        <Route path="services" element={<Services />} />
                        <Route path="availability" element={<Availability />} />
                    </Route>
                    <Route path='/404' element={<EmptyPage />} /> {/* for wrong data  */}
                    <Route path='*' element={<EmptyPage />} />    {/* for invalid url data */}
                </Routes>
                <Routes>
                </Routes>
                <Footer />
            </BrowserRouter>
        </Provider>
    )

}

export default Router;