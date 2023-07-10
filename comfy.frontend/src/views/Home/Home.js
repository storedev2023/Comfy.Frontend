import React, { useEffect, useState } from "react";
//Components
import  Card                from "../../components/card/Card";
import  Icon                from "../../components/icon/icon";
import  Carousel            from 'react-bootstrap/Carousel';
import  CarouselItem        from "react-bootstrap/esm/CarouselItem";
//styles
import './Home.scss'
//Images
import s1 from "../../assets/images/main_carousel/s1.jpg"
import s2 from "../../assets/images/main_carousel/s2.jpg"
import s3 from "../../assets/images/main_carousel/s3.jpg"
import s4 from "../../assets/images/main_carousel/s4.jpg"
import s5 from "../../assets/images/main_carousel/s5.jpg"
import { ProductService } from "../../service/ProductService";
import CarouselProductViewed from "../../components/carousel/product-viewed/Carousel-product-viewed";
import { Link } from "react-router-dom";

function Home() {


    // main carousel
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => { setIndex(selectedIndex); };

    const images = [s1,s2,s3,s4,s5];

    //cards
    const [Showcases,  setShowcases] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const response = await ProductService.getShowcase()   
            setShowcases(response)
        }
        fetchData()
    }, [])

    // about us
    const [isHideAboutUs, setIsHideAboutUs] = useState(false);
    const hideAboutUs = () => {
        setIsHideAboutUs(!isHideAboutUs)

        const info_block = document.querySelector(".about-us-info")
        const about_us_text_last = document.querySelector(".about-us-text-last")

        console.log(info_block,isHideAboutUs )
        if(isHideAboutUs === false){
            info_block.style.height="100%"
            console.log( info_block.classList.remove("after"))
            info_block.style.setProperty('--sq-color', "transparent")
            about_us_text_last.style.setProperty('display','inline-block') 
        }
        else{
            info_block.style.height="128px"
            info_block.style.setProperty('--sq-color', "#EFEFEF")
            about_us_text_last.style.setProperty('display','none')
        }
    }

  return (
        <main id="home-page">
            <div className="body-top" id="body-top">
                <div className="body-top-info">
                    <div className="body-top-info-banners">
                        <Carousel activeIndex={index} onSelect={handleSelect} className="main-carousel">
                            {images.map(image => (
                                <CarouselItem key={images.indexOf(image)}>
                                    <img src={image} alt=""/>
                                </CarouselItem>
                            ))}
                        </Carousel>
                    </div>
                    <div className="body-top-info-links">
                        {/* <div className="info-link">
                            <a>Уцінені товари</a>
                        </div>
                        <div className="info-link">
                            <a>Барахолка до -70%</a>
                            </div>
                        <div className="info-link">
                            <a>Кращий вибiр</a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="body-content">
            { Showcases.map(Showcase =>(
                <section key={Showcase.subcategoryId} className="home-section">
                    <div className="home-section-header">
                        <h3 className="home-section-title">{Showcase.name}</h3>
                        <Link className="home-section-more-link">
                            <span>Дивитися всі</span>
                            <Icon id="body-arrow" className="body-arrow"/>
                        </Link>
                    </div>
                    <div className="home-section-body">
                        <div className="home-section-body-list">
                            {Showcase.products.map(product => (
                                <Card key={product.url} product={product} hit={true} slider={true} hover={true}/>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
            <section className="home-section viewed-products">
                <div className="home-section-header">
                <   div className="home-section-title">
                        Переглянуті товари
                    </div>
                </div>
                <div className="home-section-body">
                    <CarouselProductViewed/>
                </div>
                </section>
            <div className="about-us">
                <div className="about-us-info">
                <p className="about-us-title">Інтернет-магазин битової техніки та електроніки Loffy</p>
                <p className="about-us-text">Компанія Loffy -- спеціалізуємося на продажі якісних товарів за доступними цінами.<br/>Назва "Loffy" походить від англійського слова "lofty", що означає "високий". Це відображає високий рівень якості товарів та послуг, а також прагнення досягти високих результатів та встановлення високих стандартів у сфері електронної комерції.</p>
                <p className="about-us-title-2">Повний комплекс послуг інтернет-магазину Loffy</p>
                <p className="about-us-text">
                Співробітники компанії оперативно обробляють заявки клієнтів та намагаються виконати замовлення у найкоротші терміни. Для покупців інтернет-магазин комп'ютерної техніки надає кілька способів зв'язку: <br/><br/>
                Безкоштовний телефонний номер: 0-800-303-505 <br/>
                Електронна пошта <br/>
                Онлайн чат на сайті компанії <br/>
                Групи у соціальних мережах  <br/><br/>
                Будь-якого дня тижня покупець може звернутися в онлайн магазин техніки Loffy, щоб дізнатися про поточний стан свого замовлення, або уточнити будь-яку інформацію. <br/><br/>
                На сторінках Loffy покупки здійснює не тільки Київ, але й вся Україна завдяки широким можливостям доставки. У штаті компанії працюють виконавчі співробітники, які можуть привезти техніку додому клієнту, встановити її та налаштувати для подальшого використання. Також товар можна забрати самовивозом протягом 24 годин.<br/><br/>
                </p>
                <p className="about-us-title-2">Чому служба доставки Loffy заслуговує на вашу довіру:</p>
                <p className="about-us-text">
                Бригада доставить і підніме на поверх техніку будь-якої ваги та габаритів, навіть якщо не працює ліфт<br/>
                За годину до прибуття фахівці зв'язуються з клієнтом по телефону<br/>
                Loffy несе повну відповідальність за збереження товару в процесі перевезенняПри необхідності вантажники одягнуть бахили, перш ніж увійти до будинку клієнта<br/>
                Перед відправкою фахівці ретельно перевіряють комплектацію замовлення та справність техніки.<br/>
                У разі виявлення будь-яких неполадок у техніці служба доставки безкоштовно привезе новий справний товар з магазину<br/>
                При замовленні кількох товарів одразу Loffy доставляє всю техніку в один день.<br/>
                </p>
                <p className="about-us-title-2">Повний комплекс послуг інтернет-магазину Loffy</p>
                <p className="about-us-text-last">
                Найширша мережа магазинів Loffy розкинулася по всій Україні, проте більшість споживачів воліє здійснювати покупки через офіційний сайт компанії. Чому? В інтернет-магазині перед вами відкривається повний список товарів з усіма доступними послугами додаткового обслуговування. Клієнт може замовити будь-який побутовий прилад або електронний гаджет із швидкою доставкою до свого міста, витративши на це мінімум зусиль та часу.<br/><br/>
                Також, купуючи товар в Loffy ви відчуєте такі переваги, як:<br/><br/>
                Унікальні системи знижок та регулярні розпродажі. На свою електронну пошту покупці отримують акційні промокоди, які можна застосувати просто на сторінці оформлення замовлення.<br/>
                Постійним клієнтам Comfy видає спеціальну картку від Клубу Суперпокупців, на яку нараховуються бонуси. Отримані бали можна використовувати при наступних покупках і заощаджувати чималі суми. <br/>
                Онлайн-магазин надає можливість оплати частинами або придбання техніки в кредит<br/>
                На сайті викладено реальні відгуки покупців. Ви зможете поділитися посиланням товару в соціальній мережі або отримати слушні поради щодо експлуатації техніки від інших споживачів <br/>
                Простий спосіб оформлення замовлення, який не вимагатиме від вас жодної додаткової контактної інформації, крім П.І.Б., адреси доставки та номера телефону <br/><br/>
                Loffy - це провідний інтернет-магазин електроніки, який робить все заради зручності своїх покупців. Він заслужив визнання тисяч українців завдяки високій якості обслуговування та демократичній ціновій політиці. Сучасні технології повинні прийти в будинок кожної сім'ї, тому що це запорука якісного та комфортного життя!<br/><br/>
                </p>
                </div>
                <div className="about-us-btn" onClick={hideAboutUs}>
                   {isHideAboutUs ? <>ПРИХОВАТИ</> : <>ЧИТАТИ ПОВНІСТЮ</>} 
                </div>
            </div>
            </div>
        </main>
  );
}

export default Home;







