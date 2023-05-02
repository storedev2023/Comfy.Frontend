import React from "react";
import HomePage from "./views/Home/HomePage/HomePage";
import  Header from "./components/layout/Header/header";
import  Footer from "./components/layout/Footer/footer";

import './index.scss'

function Main() {
  return (
    <>
      <Header />
      <HomePage/>
      <Footer />
    </>
  );
}

export default Main;
