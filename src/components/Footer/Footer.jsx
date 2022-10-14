import React from "react";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import Modal from "../Modal/Modal";
import Logo from "../../images/olx-329.svg";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="">
          <a href="/" className="logo footer__logo">
            Flowers<span className="footer__span">Shop</span>
          </a>
          <address className="footer__address">
            <p className="footer__address-text">
              м. Харків, вул. Сергія Грицевця, буд.50
            </p>
            <ul className="list">
              <li className="footer__contact">
                <a
                  href="mailto:info@devstudio.com"
                  className="footer__contact-link"
                >
                  info@devstudio.com
                </a>
              </li>
              <li className="footer__contact">
                <a href="tel:+380961111111" className="footer__contact-link">
                  +38 097-19-24-130
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="footer__social">
          <h3 className="footer__social-title">Приєднуйтесь</h3>
          <ul className="list social">
            <li className="social__item">
              <a href="#" className="social__link footer__social-link">
                {/* <svg className="social__icon footer__icon" width="44" height="44">
                  <use href="./images/sprite.svg#icon-insta"></use>
                </svg> */}
                <FaInstagram className="social__icon footer__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link footer__social-link">
                {/* <svg className="social__icon footer__icon" width="44" height="44">
                  <use href="./images/sprite.svg#icon-twit"></use>
                </svg> */}
                <FaFacebookF className="social__icon footer__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link footer__social-link">
                {/* <svg className="social__icon footer__icon" width="44" height="44">
                  <use href="./images/sprite.svg#icon-facebook"></use>
                </svg> */}
                <FaTelegramPlane className="social__icon footer__icon" />
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link footer__social-link">
                {/* <svg className="social__icon footer__icon" width="44" height="44">
                  <use href="../../images/olx-329.svg"></use>
                </svg> */}
                {/* <img src="../../images/olx-329.svg" alt="linkedin" /> */}
                <img
                  src={Logo}
                  className="social__icon footer__icon"
                  alt="linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__form">
          <form className="form-subscription" name="subscription">
            <p className="footer__form-text">Підписуйтесь на розсилку</p>
            <input
              type="email"
              className="footer__form-email"
              placeholder="E-mail"
            />
            <button
              type="button"
              className="footer__form-btn"
              onClick={toggleModal}
            >
              Підписатися
              {/* <svg className="submit-icon" width="24" height="24">
                <use href="./images/sprite.svg#icon-send"></use>
              </svg> */}
              <FaTelegramPlane className="submit-icon" />
            </button>
          </form>
        </div>
      </div>
      {isModalOpen && <Modal onClose={toggleModal} />}
    </footer>
  );
}
