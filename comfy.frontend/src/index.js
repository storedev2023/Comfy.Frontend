import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router'
import  Header from "./components/layout/Header/header";
import  Footer from "./components/layout/Footer/footer";

import './index.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Router/>
    <Footer/>
  </React.StrictMode>
);

