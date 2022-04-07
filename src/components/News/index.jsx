import React from "react";
import "./index.scss";

function index() {
    return (
        <section>
            <div className="news-bg">
                <div className="news-title">Новости</div>
                <div className="news">
                    <div className="news-box">
                        <div className="newsImage"></div>
                        <div className="title">Мы переехали</div>
                        <div className="box">
                            <div className="second-title">
                                Не теряйте, мы переехали!
                            </div>
                            <br />
                            <div className="text">
                                Уважаемые клиенты. С большой радостью сообщаем
                                вам, что наша компания растет и развивается,
                                именно п...
                            </div>
                        </div>
                    </div>
                    <div className="news-box">
                        <div className="newsImage"></div>

                        <div className="title">Мы переехали</div>
                        <div className="box">
                            <div className="second-title">
                                Не теряйте, мы переехали!
                            </div>
                            <br />
                            <div className="text">
                                Уважаемые клиенты. С большой радостью сообщаем
                                вам, что наша компания растет и развивается,
                                именно п...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default index;
