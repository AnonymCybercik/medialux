import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./index.scss";
import {useState} from "react";

function Header() {

    const [menubar, setMenubar] = useState(true)

    function menuswitcher(){
        var menu = document.getElementById("mobile__menu")
    
        if (menubar) {
            menu.style.left = "0%"
            setMenubar(false)
        }
        else{
            menu.style.left = "-100%"
            setMenubar(true)
        }
    }


    return (

        <div>
            <nav className="header">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} width="143px" height="84px" alt="" />
                    </Link>
                    <i className="fa fa-bars" onClick={() => menuswitcher()}></i>
                </div>
                <ul id="mobile__menu">
                    <Link to="/">Главная</Link>
                    <Link to="/about">О нас</Link>
                    <Link to="/services">Наши услуги</Link>
                    <Link to="/news">Новости</Link>
                    <Link to="/contact">Контакты</Link>
                    <Link to="/contact">Скидки</Link>
                    <Link to="/constructions">Посмотреть конструкции</Link>
                </ul>
            </nav>
        </div>
    );
}
export default Header;
