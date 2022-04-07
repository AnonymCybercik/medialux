import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import News from "../../components/NewsCard";

import "./index.scss";

function index() {
    return (
        <div>
            <Header></Header>

            <div className="advertisement"></div>

            <div className="news-title">Новости</div>
            <div className="news-box">
                <News></News>
                <News></News>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default index;
