import {BrowserRouter, Routes, Route} from 'react-router-dom'

import  Header from "../components/layout/Header/header"
import  Footer from "../components/layout/Footer/footer"
import Home from '../views/Home/Home'

import Product from '../views/product-page/Product'
import Info from '../views/product-page/info-tab/Info'
import Characteristics from '../views/product-page/characteristics-tab/Characteristics'
import Reviews from '../views/product-page/reviews-tab/Reviews'
import Questions from '../views/product-page/question-tab/Questions'
import Video from '../views/product-page/video-tab/Video'
import Accessories from '../views/product-page/accessories-tab/Accessories'
import Services from '../views/product-page/services-tab/Services'
import Availability from '../views/product-page/availability-tab/Availability'

import EmptyPage from '../views/404/404'



const Router = () => {
return <BrowserRouter>
    <Header/>
    <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path='/:id' element={<Product/>}  >
            <Route index element={<Info/>}/>
            <Route path="characteristics"  element={<Characteristics/>} />
            <Route path="reviews" element={<Reviews/>} />
            <Route path="questions" element={<Questions/>}/>
            <Route path="video" element={<Video/>}/>
            <Route path="accessories" element={<Accessories/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="availability" element={<Availability/>}/>
        </Route>
        <Route path='/404' element={<EmptyPage/>}/>
        <Route path='*' element={<EmptyPage/>}/>    
    </Routes>
    <Routes>
        
    </Routes>
    <Footer/>
</BrowserRouter>
}

export default Router;