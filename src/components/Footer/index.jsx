import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function index() {
    return (
        <>
            <section className="footer">
                <div className="footer-section">
                    <div className="title">Наш офис</div>
                    <div>
                        Адрес г. Ташкент, Яккасарайский район, 2-й проезд улицы
                        Ж.Шоший, дом 1/10.
                        <br />
                        <br />
                        Будние дни Пн. - Пт. 9:00–18:00
                        <br />
                        <br />
                        Перерыв c 13-00 дo 14-00
                        <br />
                        <br />
                        Выходные суббота, воскресенье.
                        <br />
                        Email info@medialux.uz
                        <br />
                        Телефон +998 71 230 48 48
                        <br />
                        +998 95 341 48 48
                        <br />
                        +998 95 342 48 48
                    </div>
                </div>
                <div className="footer-section">
                    <div className="title">Последние новости</div>
                    <div>
                        Не теряйте, мы переехали!
                        <br />
                        2022-01-31
                        <br />
                        <br />
                        У нас пополнение!
                        <br /> Новые конструкции в самых
                        <br /> оживленных местах города!
                        <br />
                        2022-02-10
                        <br />
                    </div>
                </div>
                <div className="footer-section">
                    <div className="title">Sitemap</div>
                    <div>
                        <Link to="/">Главная</Link>
                        <Link to="/about">О нас</Link>
                        <Link to="/services">Наши услуги</Link>
                        <Link to="/news">Новости</Link>
                        <Link to="/contact">Контакты</Link>
                    </div>
                </div>
            </section>

            <section className="footer-mobile">
                <div className="footer-section">
                    <div className="title">Наш офис</div>
                    <div>
                        Адрес г. Ташкент, Яккасарайский район, 2-й проезд улицы
                        Ж.Шоший, дом 1/10.
                        <br />
                        <br />
                        Будние дни Пн. - Пт. 9:00–18:00 Перерыв c 13-00 дo 14-00
                        <br />
                        <br />
                        Выходные суббота, воскресенье.
                    </div>
                </div>
                <div className="footer-section">
                    <div className="title">E-mail</div>
                    <div>info@medialux.uz</div>
                </div>
                <div className="footer-section">
                    <div className="title">Телефоны</div>
                    <div>
                        +998 71 230 48 48
                        <br />
                        +998 95 341 48 48
                        <br />
                        +998 95 342 48 48
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;
