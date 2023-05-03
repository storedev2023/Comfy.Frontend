import React, { useEffect, useState } from "react";
//Components
import  Card   from "../../components/card/card";
import  Icon   from "../../components/icon/icon";
import  Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import { useInView } from 'react-intersection-observer'
//styles
import './HomePage.scss'
//Images
import s1 from "../../assets/images/main_carousel/s1.jpg"
import s2 from "../../assets/images/main_carousel/s2.jpg"
import s3 from "../../assets/images/main_carousel/s3.jpg"
import s4 from "../../assets/images/main_carousel/s4.jpg"
import s5 from "../../assets/images/main_carousel/s5.jpg"





function HomePage() {

    //Header sticky
    const [ref, inView] = useInView({threshold: 0});
    useEffect(()=>{
        var header_bottom = document.getElementById("header-bottom")
        var categories_menu = document.getElementById("categories-menu-block")
        if(inView)
        {
            header_bottom.classList.remove('sticky');
            categories_menu.classList.remove('display-none');
        }
        else{
            header_bottom.classList.add('sticky');
            categories_menu.classList.add('display-none');
        }
    })

   

    // main carousel
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => { setIndex(selectedIndex); };

    const imgs = [s1,s2,s3,s4,s5];

    let imgList = [];

    imgs.forEach((img, index) => {
        imgList.push(<CarouselItem key={index}><img src={img}/></CarouselItem>);
    });

  return (
        <main id="home-page">
            <div className="body-top" id="body-top" ref={ref}>
                <div className="body-top-info">
                    <div className="body-top-info-banners">
                        <Carousel activeIndex={index} onSelect={handleSelect} className="main-carousel">
                            {imgList}
                        </Carousel>
                    </div>
                    <div className="body-top-info-links">
                        <div className="info-link">
                            <a>Уцінені товари</a>
                        </div>
                        <div className="info-link">
                            <a>Барахолка до -70%</a>
                            </div>
                        <div className="info-link">
                            <a>Кращий вибiр</a>
                        </div>
                    </div>
                    <div className="body-top-info-brands">
                    </div>
                </div>
            </div>
            <div className="body-content">
            <section className="home-section">
                <div className="home-section-header">
                    <h3 className="home-section-title">Кращий вибiр</h3>
                    <a className="home-section-more-link">
                        <span>Дивитися всі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
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
                        <span>Дивитися всі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
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
                        <span>Дивитися всі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
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
                        <span>Дивитися всі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
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
                        <span>Дивитися всі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
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
                        <span>Дивитися всі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
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
                        <span>Дивитися всі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
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
                        <span>Дивитися всі</span>
                        <Icon id="body-arrow" className="body-arrow"/>
                    </a>
                </div>
                <div className="home-section-body">
                    <div className="home-section-body-list">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            </div>
        </main>
  );
}

export default HomePage;







