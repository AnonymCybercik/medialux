import React from "react";
import "./index.scss";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";
import service5 from "../../assets/images/service5.png";

import { Swiper, SwiperSlide } from "swiper/react";

function index() {
    return (
        <div>
            <div className="services">
                <div className="info-title">
                    Чем мы можем помочь вашему бизнесу?
                </div>
                <div className="info-text">
                    MediaLux – лучшее рекламное агентство Узбекистана,
                    предоставляющее качественный и оперативный сервис по
                    следующим направлениям.
                </div>
                <div className="service-box">
                    <div className="desktop">
                        <div className="service-item">
                            <img src={service1} alt="" />
                            <div className="service-title">
                                Наружная реклама
                            </div>
                            <div className="service-text">
                                Разместив наружную рекламу мы расскажем о ваших
                                товарах или услугах всей Республике!
                            </div>
                        </div>
                        <div className="service-item">
                            <img src={service2} alt="" />
                            <div className="service-title">
                                Широкоформатная печать
                            </div>
                            <div className="service-text">
                                Плакаты, баннеры, уличные перетяжки,
                                изготовленные методом широкоформатной печати,
                                устойчивы к воздействию окружающей среды.
                            </div>
                        </div>
                        <div className="service-item">
                            <img src={service3} alt="" />
                            <div className="service-title">
                                Разработка сайтов
                            </div>
                            <div className="service-text">
                                Разместив наружную рекламу мы расскажем о ваших
                                товарах или услугах всей Республике!
                            </div>
                        </div>
                        <div className="service-item">
                            <img src={service4} alt="" />
                            <div className="service-title">
                                Разработка индивидуального стиля для вашей
                                компании
                            </div>
                            <div className="service-text">
                                Сформируем продающий дизайн упаковки и всей
                                рекламной продукции, а также создадим эффектную
                                презентацию вашего проекта.
                            </div>
                        </div>
                        <div className="service-item">
                            <img src={service5} alt="" />
                            <div className="service-title">
                                Интернет-маркетинг
                            </div>
                            <div className="service-text">
                                Продвижение и реклама ваших товаров или услуг в
                                Интернете посредством поисковой оптимизации,
                                контекстной и баннерной рекламы, SMM, написания
                                и публикации PR-материалов.
                            </div>
                        </div>
                    </div>
                    <div className="mobile">
                        <Swiper slidesPerView="2">
                            <SwiperSlide>
                                <div className="service-item">
                                    <div className="service-title">
                                        Наружная реклама
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="service-item">
                                    <div className="service-title">
                                        Разработка индивидуального стиля
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="service-item">
                                    <div className="service-title">
                                        Широкоформатная печать
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="service-item">
                                    <div className="service-title">
                                        Разработка сайтов
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="service-item">
                                    <div className="service-title">
                                        Интернет-маркетинг
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
