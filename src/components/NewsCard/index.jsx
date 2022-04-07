import React from "react";
import "./index.scss";
import img from "../../assets/images/newsimg.jpg";

function index() {
    return (
        <div className="news-card">
            <div >
                <img src={img} alt="" />

                <div className="title">Не теряйте, мы переехали!</div>

                <div className="text">
                    Уважаемые клиенты. С большой радостью сообщаем вам, что наша
                    компания растет и развивается, именно п...
                </div>
            </div>
        </div>
    );
}

export default index;
