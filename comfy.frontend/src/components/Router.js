import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from '../views/Home/HomePage'
import ProductPage from '../views/Product/ProductPage'
import EmptyPage from '../views/404/404'

const Router = () => {
return <BrowserRouter>
    <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<ProductPage/>} path='/product'/>
        <Route path='*' element={<EmptyPage/>}/>
    </Routes>
</BrowserRouter>
}

export default Router;