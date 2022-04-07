import React from "react";

import img16 from "../../assets/images/16.png";
import img1070 from "../../assets/images/1070.png";
import img1028 from "../../assets/images/1028.png";
import img134 from "../../assets/images/134.png";

import "./index.scss";

function index() {
    return (
        <div className="advantage-box">
            <div className="title">Наши приемущества</div>
            <div className="advantage-bg">
                <div className="advantage-items">
                    <div>Более</div>
                    <div><img src={img16} alt="" className="img1" /></div>
                    <div>Лет опыта</div>
                </div>
                <div className="advantage-items">
                    <div><img src={img1070} alt="" className="img2" /></div>
                    <div>Рекламных полей</div>
                </div>
                <div className="advantage-items">
                    <div><img src={img1028} alt="" className="img3" /></div>
                    <div>Доверенныx клиентoв</div>
                </div>
                <div className="advantage-items">
                    <div><img src={img134} width="245px" height="91px" alt="" className="img4" /></div>
                    <div>ЕЖЕМЕСЯЧНОЙ АУДИТОРИИ</div>
                </div>
            </div>
        </div>
    );
}

export default index;
