import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsEnvelope, BsTelephone, BsMenuUp, BsXCircle } from "react-icons/bs";
import logo from "../../images/logo1.png";
import s from "./Header.module.css";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import LoginForm from "../../pages/LoginPage/LoginForm";
import RegisterForm from "../../pages/RegisterPage/RegisterForm";
import UserMenu from "./UserMenu";
import authSelectors from "../../redux/auth/auth-selectors";

// var classNames = require("classnames");

export default function Header() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href="/" className={s.logo}>
          <img src={logo} alt="logo" className={s.logoImg} />
        </a>
        <button className={s.mobileMenuBtn} data-menu-button>
          <BsMenuUp className={s.mobileMenuIcon} />
        </button>

        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>

      {isModalOpen && <LoginForm onClose={toggleModal} />}
      {isModalOpen && <RegisterForm onClose={toggleModal} />}
    </header>
  );
}
