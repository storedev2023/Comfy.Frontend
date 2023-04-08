import  React  from "react";
import  Header from "../../../components/layout/Header/header";
import  Footer from "../../../components/layout/Footer/footer";
import  Card   from "../../../components/card/card";

import './HomePage.scss'
import Icon from "../../../components/icon/icon";

function HomePage() {
  return (
    <div className="Main">
        <Header/>
        <main>
            <div className="body-top">
                <div className="body-info">
                    <div className="info-top">
                        <a className="info-top-first-elem">
                            <img/>
                            <p>Уцінені товари</p>
                        </a>
                        <a>                            
                            <img/>
                            <p>Уцінені товари</p>
                        </a>
                        <a>                            
                            <img/>
                            <p>Уцінені товари</p>
                        </a>
                        <a>                            
                            <img/>
                            <p>Уцінені товари</p>
                        </a>
                    </div>
                    <div className="info-main-banners">
                        <div className="banner-prev">
                            <span>{"<"}</span>
                        </div>
                        <div className="slick-list">
                            <div className="slick-track">
                                <div className="story-banner">
                                    <div className="story-banner-body">
                                        <a>
                                            <img/>
                                        </a>
                                    </div>
                                </div>
                                <div className="story-banner">
                                    <div className="story-banner-body">
                                        <a>
                                            <img/>
                                        </a>
                                    </div>
                                </div>
                                <div className="story-banner">
                                    <div className="story-banner-body">
                                        <a>
                                            <img/>
                                        </a>
                                    </div>
                                </div>
                                <div className="story-banner">
                                    <div className="story-banner-body">
                                        <a>
                                            <img/>
                                        </a>
                                    </div>
                                </div>
                                <div className="story-banner">
                                    <div className="story-banner-body">
                                        <a>
                                            <img/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-next">
                            <span>{">"}</span>
                        </div>
                    </div>
                    <div className="info-bottom-brands">
                        <div className="logo-brands">
                            <a>1</a>
                            <a>2</a>
                            <a>3</a>
                            <a>4</a>
                            <a className="all-brands">...</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-content">
            <section className="home-section">
                <div className="home-section-header">
                    <h3 className="home-section-title">Кращий вибiр</h3>
                    <a className="home-section-more-link">
                        <span>Дивитися усі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            <section className="home-section">
                <div className="home-section-header">
                    <h3 className="home-section-title">Смартфони</h3>
                    <a className="home-section-more-link">
                        <span>Дивитися усі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            <section className="home-section">
                <div className="home-section-header">
                    <h3 className="home-section-title">Смартфони</h3>
                    <a className="home-section-more-link">
                        <span>Дивитися усі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            <section className="home-section">
                <div className="home-section-header">
                    <h3 className="home-section-title">Ноутбуки</h3>
                    <a className="home-section-more-link">
                        <span>Дивитися усі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            <section className="home-section">
                <div className="home-section-header">
                    <h3 className="home-section-title">Пральні машини</h3>
                    <a className="home-section-more-link">
                        <span>Дивитися усі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            <section className="home-section">
                <div className="home-section-header">
                    <h3 className="home-section-title">Телевізори</h3>
                    <a className="home-section-more-link">
                        <span>Дивитися усі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            <section className="home-section">
                <div className="home-section-header">
                    <h3 className="home-section-title">Пилососи</h3>
                    <a className="home-section-more-link">
                        <span>Дивитися усі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            <section className="home-section">
                <div className="home-section-header">
                    <h3 className="home-section-title">Переглянуті товари</h3>
                    <a className="home-section-more-link">
                        <span>Дивитися усі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            </div>
        </main>
        <Footer/>
    </div>
  );
}

export default HomePage;
