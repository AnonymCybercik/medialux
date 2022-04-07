import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import service from "../../assets/images/servicepic.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import led from "../../assets/images/service/ledekran.png";

import { Autoplay } from "swiper";

import "./index.scss";
function index() {
    return (
        <div>
            <Header></Header>

            <div className="news-title">Led экраны</div>

            <section className="single-service">
                <div className="info-section">
                    Расположение на основных магистралях и улицах городов
                    <br />
                    <br />
                    Эффективное воздействие на транспортные потоки
                    <br />
                    <br />
                    Гарантированное освещение в ночное время Пакетное размещение
                    <br />
                    <br />
                    Идеальный инструмент для эффективной коммуникации
                    <br />
                </div>
                <div className="info-section-img">
                    <img src={led} alt="" />
                </div>
            </section>
            <div className="imgs">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={5}
                    autoplay
                    className="sviper"
                >
                    <SwiperSlide className="slide-item">
                        <img
                            src={service}
                            height="209"
                            width="297px"
                            style={{ borderRadius: "37px" }}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <img
                            src={service}
                            height="209"
                            width="297px"
                            style={{ borderRadius: "37px" }}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <img
                            src={service}
                            height="209"
                            width="297px"
                            style={{ borderRadius: "37px" }}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <img
                            src={service}
                            height="209"
                            width="297px"
                            style={{ borderRadius: "37px" }}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <img
                            src={service}
                            height="209"
                            width="297px"
                            style={{ borderRadius: "37px" }}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <img
                            src={service}
                            height="209"
                            width="297px"
                            style={{ borderRadius: "37px" }}
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <section className="price-section">
                <div className="price">
                    <div className="price-title">
                        Стоимость размещение рекламы на светодиодных экранах с
                        учетом ндс:
                    </div>
                    <div className="text">
                        <pre>
                            5 секунд - 2 484 000 сум;
                            <br />
                            10 секунд - 3 312 000 сум;
                            <br />
                            15 секунд - 3 967 000 сум;
                            <br />
                            20 секунд видео - 3 967 000 сум
                        </pre>
                    </div>
                </div>
                <div className="price">
                    <div className="price-title">
                        Стоимость размещение рекламы на светодиодных экранах
                        размером 12х6, 16х6 с учетом ндс:
                    </div>
                    <div className="text">
                        <pre>
                            5 секунд - 8 050 000 сум;
                            <br />
                            10 секунд - 9 200 000 сум; <br />
                            15 секунд - 9 775 000 сум;
                            <br />
                            20 секунд видео -10 350 000 сум
                        </pre>
                    </div>
                </div>
            </section>

            <div className="map-title">Место нахождения конструкции</div>
            <div className="map map-bg">
                <iframe
                    className="map"
                    src="https://www.google.com/maps/d/u/0/embed?mid=10-GI8tV-LkiYWQqM3fWiL7_B6JyzvZV_&ehbc=2E312F"
                    width="1385px"
                    style={{ border: 0 ,marginTop:"50px"}}
                    height="742px"
                ></iframe>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default index;
