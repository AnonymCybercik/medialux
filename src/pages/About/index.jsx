import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ml from "../../assets/images/image11.png";

import "./index.scss";

function index() {
    return (
        <div>
            <Header></Header>

            <section className="about-banner">
                <div className="about-caption">
                    <div className="about-title">О компании MEDIALUX</div>
                    <div className="about-text">
                        Media Lux — рекламное агентство, предоставляющее широкий
                        спектр рекламных услуг
                    </div>
                </div>
            </section>

            <section className="about-info-box">
                <span className="about-info-item">
                    <div className="title">Миссия</div>
                    <div className="text">
                        Делать ваш бизнес заметнее, упрощать поиск потенциальных
                        потребителей и повышать KPI
                    </div>
                </span>
                <span className="about-info-item">
                    <div className="title">Цель</div>
                    <div className="text">
                        Разработать качественные рекламные решения и получить
                        эффективные результаты для развития вашей компании
                    </div>
                </span>
                <span className="about-info-item">
                    <div className="title">Философия</div>
                    <div className="text">
                        Создавать не просто рекламу, а налаживать прямой контакт
                        между людьми и брендами
                    </div>
                </span>
            </section>

            <div className="about-title">
                Наше агентство активно развивает такие направления, как:
            </div>

            <section className="directions">
                <div className="text">
                    <ul>
                        <li>Наружная реклама по всей Республике.</li>
                        <li>Реклама в метрополитене г. Ташкент.</li>
                        <li>
                            SMM продвижение в социальных сетях, таких как
                            Facebook и Instagram, разработк а бренда, начиная от
                            названия и стратегии развития, до медиапланирования
                            и размещения рекламы.
                        </li>
                        <li>Продвижение сайта в поисковых системах.</li>
                        <li>Изготовление широкоформатной печати.</li>
                        <li>Изготовление и разработка дизайна.</li>
                    </ul>
                </div>
                <img src={ml} alt="" />
            </section>

            <div className="about-title">
                Комплексная рекламная кoмпания по Узбекистану
            </div>
            <div className="about-sub-title">
                Наше агентство Media Lux является владельцем самых заметных
                рекламных конструкций. Вам будут предложен весь комплекс
                наружной рекламы в городе Ташкенте и Ташкентской области, а
                именно реклама на:
            </div>

            <section className="kompleks">
                <ul>
                    <li>билборды</li>
                    <li>призматроны</li>
                    <li>LED-мониторы</li>
                    <li>брандмаурные панно</li>
                    <li>крышные конструкции</li>
                </ul>
                <ul>
                    <li>билборды</li>
                    <li>призматроны</li>
                    <li>LED-мониторы</li>
                    <li>брандмаурные панно</li>
                    <li>крышные конструкции</li>
                </ul>
            </section>

            <section className="info-block">
                <div className="block-item light">
                    <div className="title-green">Дизайн и креатив</div>{" "}
                    <div className="text-light">
                        Для успешных инвестиций в бизнес, необходимо сделать
                        качественный брендинг вашей компании. Наша команда
                        профессионалов подготовит брендбуки и гайдлайны с вашим
                        индивидуальным фирменным стилем.
                    </div>
                </div>
                <div className="block-item dark">
                    <div className="title">Digital Media</div>{" "}
                    <div className="text-dark">
                        Каждый день доля Digital только растет, соответственно
                        продвижение бизнеса в интернет-пространстве становится
                        как никогда важно.Реклама на всех площадках, таких как:
                        Facebook, Google, Яндекс Директ, MyTarget, LinkedIn, App
                        Store, Play Market.
                    </div>
                </div>
                <div className="block-item light">
                    <div className="title-green ">Исследование и аналитика</div>{" "}
                    <div className="text-light">
                        Вложение денег в бизнес – это всегда риски. Для
                        минимизации рисков, наши маркетологи разработают
                        маркетинговую стратегию, которая будет включать в себя:
                        анализ рынка и конкурентов, целевую аудиторию,
                        брнед-стратегию и каналы продаж.
                    </div>
                </div>
                <div className="block-item dark">
                    <div className="title">Продакшн и печать</div>{" "}
                    <div className="text-dark">
                        Media Lux- агентство полного цикла. Специальное
                        подразделение производства готово предложить свои услуги
                        по широкоформатной и интерьерной печати.
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default index;
