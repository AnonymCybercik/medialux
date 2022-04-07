import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import fb from "../../assets/images/fb.png";
import insta from "../../assets/images/insta.png";
import yt from "../../assets/images/yt.png";
import tg from "../../assets/images/tg.png";
import whatsup from "../../assets/images/whatsup.png";

import "./index.scss";

function index() {
    return (
        <div>
            <Header></Header>

            <div className="advertisement"></div>

            <div className="news-title">Контакты нашего офиса </div>
            <div className="social-title">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</div>
            <section className="social">
                <a href="https://m.facebook.com/1724270991130096/">
                    <img src={fb} alt="" />
                </a>
                <a href="https://t.me/Medialuux">
                    <img src={tg} alt="" />
                </a>
                <a href="">
                    <img src={whatsup} alt="" />
                </a>
            </section>
            <br />
            <br />
            <br />

            <div className="social-title">ТЕЛЕФОН ОФИСА</div>

            <section className="phones">
                <div>+998 71 230 48 48</div>
                <div>+998 95 342 48 48</div>
                <div>+998 95 341 48 48</div>
            </section>
            <br />
            <br />
            <br />
            <div className="social-title">
                г. Ташкент, Яккасарайский район, 2-й проезд улицы Ж.Шоший, дом
                1/10.
            </div>
            <br />
            <br />
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2131.4343298145736!2d69.24974352513495!3d41.28576651635591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4646d31423%3A0x462a6bf0b0b7602c!2zTWVkaWFsdXgudXogLSDQoNC10LrQu9Cw0LzQvdC-0LUg0LDQs9C10L3RgtGB0YLQstC-INCyINCj0LfQsdC10LrQuNGB0YLQsNC90LU!5e1!3m2!1sru!2sus!4v1647346135376!5m2!1sru!2sus"
                    width="1196px"
                    height="617px"
                    style={{ border: 0, borderRadius: "27px" }}
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default index;
