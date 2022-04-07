import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "../../components/Services";
import Advantages from "../../components/Advantages";
import News from "../../components/News";
import "./index.scss";
import tg from "../../assets/images/Telegram.png";
import call from "../../assets/images/call.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

function index() {
    return (
        <div>
            <Header></Header>

            <section className="banner">
                <div className="banner-box">
                    <div className="title">С нами вы заметнее!</div>
                    <div className="pred">
                        <a href="/">CMOTPEТЬ ПРЕЗЕНТАЦИЮ ЭКРАНОВ</a>
                        <a href="/">CMOTPETЬ ПРЕЗЕНТАЦИЮ</a>
                        <a href="/">СМОТРЕТЬ КП</a>
                    </div>
                </div>
            </section>

            <Services></Services>

            <section className="additional-info-box">
                <span>
                    <div className="add-title">
                        Рекламное агентство “Media Lux”
                    </div>
                    <div className="add">since 2006</div>
                </span>
                <span>
                    <div className="add call">Позвонить</div>
                    <div>
                        <img src={call} alt="" />
                    </div>
                </span>
                <span>
                    <div className="add tg ">Написать в Telegram</div>
                    <div>
                        <img src={tg} alt="" />
                    </div>
                </span>
            </section>

            <section className="trans-bg">
                <Advantages></Advantages>

                <div className="partners">
                    <div className="title">Hаши партнеры:</div>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        autoplay
                        className="slide"
                    >
                        <SwiperSlide className="slide-item">
                            <img src={tg} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <img src={tg} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <img src={tg} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <img src={tg} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <img src={tg} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="slide-item">
                            <img src={tg} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <News></News>

            <div className="footer-image"></div>

            <Footer></Footer>
        </div>
    );
}

export default index;
