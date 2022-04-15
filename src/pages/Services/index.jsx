import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.scss";

import ml from "../../assets/images/ML.png";
import service from "../../assets/images/servicepic.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

function index() {
    return (
        <section>
            <Header></Header>

            <div className="advertisement"></div>

            <section className="our-services">
                <div className="title">Наши Услуги</div>
                <div className="service-box">
                    <ul>
                        <li className="outdoor">НАРУЖНАЯ РЕКЛАМА</li>
                        <li className="metro">
                            РЕКЛАМА В МЕТРОПОЛИТЕНЕ Г. ТАШКЕНТ
                        </li>
                        <li className="tv">РЕКЛАМА НА ТЕЛЕВИДЕНИИ</li>
                        <li className="biglater">ШИРОКОФОРМАТНАЯ ПЕЧАТЬ</li>
                        <li className="eskiz">РАЗРЕШЕНИЕ НА ЭСКИЗ</li>
                        <li className="sites">РАЗРАБОТКА САЙТОВ</li>
                        <li className="design">ДиЗАЙНЕРСКИЕ УСЛУГИ</li>
                    </ul>
                    <img className="imagebox" src={ml} alt="" />
                </div>
            </section>

            <section className="service-info">
                <div>
                    Наружная реклама - это наиболее распространенный способ
                    охвата большой аудитории потенциальных клиентов и
                    покупателей, используя для этого открытые пространства улиц,
                    автомагистралей, площадей и проспектов.
                </div>
            </section>

            <section className="price">
                <div className="imgs">
                    <Swiper
                        modules={[Autoplay, Scrollbar]}
                        scrollbar={{ draggable: true }}
                        slidesPerView={1}
                        autoplay
                    >
                        <SwiperSlide className="slide-item">
                            <img
                                src={service}
                                height="520px"
                                width="820px"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <img
                                src={service}
                                height="520px"
                                width="820px"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <img
                                src={service}
                                height="520px"
                                width="820px"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <img
                                src={service}
                                height="520px"
                                width="820px"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <img
                                src={service}
                                height="520px"
                                width="820px"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <img
                                src={service}
                                height="520px"
                                width="820px"
                                alt=""
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="text">
                    <div className="main-title">Преимущества и особенности</div>
                    <div className="title">
                        К основным преимуществам относятся:
                    </div>
                    <ul>
                        <li>Низкая стоимость</li>
                        <li>Регулярность воздействия</li>
                        <li>Разнообразие видов</li>
                        <li>Наличие целевой аудитории</li>
                        <li>Доступность</li>
                        <li>Хорошее восприятие</li>
                        <li>Высокое качество подачи информации</li>
                        <li>Географическое таргетирование рекламы</li>
                    </ul>
                </div>
            </section>

            <Footer></Footer>
        </section>
    );
}

export default index;
