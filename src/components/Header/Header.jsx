import React from "react";
import { NavLink } from "react-router-dom";
import { BsEnvelope, BsTelephone, BsMenuUp, BsXCircle } from "react-icons/bs";
import logo from "../../images/pngwing.png";
import s from "./Header.module.css";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import LoginForm from "../../pages/LoginPage/LoginForm";
import RegisterForm from "../../pages/RegisterPage/RegisterForm";

// var classNames = require("classnames");

export default function Header() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href="/" className={s.logo}>
          <img src={logo} alt="logo" className={s.logoImg} />
        </a>
        <button className={s.mobileMenuBtn} data-menu-button>
          <BsMenuUp className={s.mobileMenuIcon} />
        </button>
        {/* <Navigation /> */}
        <nav>
          <ul className={s.nav}>
            <li className={s.navItem}>
              <NavLink
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                }}
                exact
                to="/"
                className={s.navNavLink}
                activeClassName={s.active}
              >
                Головна
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                }}
                to="/achimenes"
                className={s.navNavLink}
                activeClassName={s.active}
              >
                Колекція ахіменесів
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                }}
                to="/violets"
                className={s.navNavLink}
                activeClassName={s.active}
              >
                Колекція фіалок
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                }}
                to="/gerans"
                className={s.navNavLink}
                activeClassName={s.active}
              >
                Колекція гераней
              </NavLink>
            </li>
          </ul>
        </nav>
        <AuthNav />
      </div>
      <div className="mobile-menu" data-menu>
        <div className="container mobile-menu__container">
          <button
            type="button"
            className="mobile-menu__close-btn"
            data-menu-close
          >
            <svg className="modal-close-icon" width="18" height="18">
              <use href="../images/sprite.svg#icon-close"></use>
            </svg>
          </button>
          <ul className="list mobile-menu__nav">
            <li className="mobile-menu__nav-list">
              <a
                href="../index.html"
                className="mobile-menu__Navlink Navlink active"
              >
                Студия
              </a>
            </li>
            <li className="mobile-menu__nav-list">
              <a
                href="../portfolio.html"
                className="mobile-menu__Navlink Navlink"
              >
                Портфолио
              </a>
            </li>
            <li className="mobile-menu__nav-list">
              <a href="#" className="mobile-menu__Navlink Navlink">
                Контакты
              </a>
            </li>
          </ul>
          <ul className="list mobile-menu__contact">
            <li className="mobile-menu__contact-item">
              <a
                href="tel:+380961111111"
                className="mobile-menu__contact-Navlink1 Navlink"
              >
                +38 096 111 11 11
              </a>
            </li>
            <li className="mobile-menu__contact-item">
              <a
                href="mailto:info@devstudio.com"
                className="mobile-menu__contact-Navlink2 Navlink"
              >
                info@devstudio.com
              </a>
            </li>
          </ul>
          <ul className="mobile-menu__social list">
            <li className="mobile-menu__social-list">
              <a href="#" className="mobile-menu__social-Navlink Navlink">
                Instagram
              </a>
            </li>
            <li className="mobile-menu__social-list">
              <a href="#" className="mobile-menu__social-Navlink Navlink">
                Twitter
              </a>
            </li>
            <li className="mobile-menu__social-list">
              <a href="#" className="mobile-menu__social-Navlink Navlink">
                Facebook
              </a>
            </li>
            <li className="mobile-menu__social-list">
              <a href="#" className="mobile-menu__social-Navlink Navlink">
                NavLinkedIn
              </a>
            </li>
          </ul>
        </div>
        {isModalOpen && <LoginForm onClose={toggleModal} />}
        {isModalOpen && <RegisterForm onClose={toggleModal} />}
      </div>
    </header>
  );
}
