import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import led from "../../assets/images/service/ledekran.png"
import city from "../../assets/images/service/cityformat.png"
import supersayt from "../../assets/images/service/supersayt.png"
import priz from "../../assets/images/service/prizmatron.png"
import breand from "../../assets/images/service/brentmaur.png"
import krish from "../../assets/images/service/krishnie.png"

import "./index.scss"

function index() {
    return (
        <div>
            <Header></Header>

            <div className="news-title" style={{ width: "1216px" }}>
                Мы предлагаем более 1 тыс. поверхностей для вашей рекламы
            </div>

            <div className="services-box">
                <a href="/service/led" className="service-item">
                    <div className="img-box">
                        <div style={{ background:`url(${led})`}} className="services-image" ></div>
                    </div>
                    <div className="text">
                        Led экраны от 2 484 000 до 10.350 000 сум
                    </div>
                </a>
                <a href="/service/led" className="service-item">
                    <div className="img-box">
                        <div style={{ background:`url(${city})`}} className="services-image" ></div>
                    </div>
                    <div className="text">Сити-форматы - от 920 000 сум</div>
                </a>
                <a href="/service/led" className="service-item">
                    <div className="img-box">
                        <div style={{ background:`url(${supersayt})`}} className="services-image" ></div>
                    </div>
                    <div className="text">Суперсайт - от 13 200 000 сум</div>
                </a>
                <a href="/service/led" className="service-item">
                    <div className="img-box">
                        <div style={{ background:`url(${priz})`}} className="services-image" ></div>
                    </div>
                    <div className="text">Призматроны - от 2 400 000 сум</div>
                </a>
                <a href="/service/led" className="service-item">
                    <div className="img-box">
                        <div style={{ background:`url(${breand})`}} className="services-image" ></div>
                    </div>
                    <div className="text">Брандмауэр - от 8 500 000 сум</div>
                </a>
                <a href="/service/led" className="service-item">
                    <div className="img-box">
                        <div style={{ background:`url(${krish})`}} className="services-image" ></div>
                    </div>
                    <div className="text">Крышные - от 8 500 00 сум</div>
                </a>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default index;
