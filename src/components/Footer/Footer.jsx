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
            Flower<span className="footer__span">Land</span>
          </a>
          <address className="footer__address">
            <p className="footer__address-text">
              м. Харків, вул. Сергія Грицевця
            </p>

            <ul className="list">
              <li className="footer__contact">
                <a
                  href="mailto:helenkarp777@gmail.com"
                  className="footer__contact-link"
                >
                  helenkarp777@gmail.com
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
          <h3 className="footer__social-title">Подивись на </h3>
          <ul className="list social">
            <li className="social__item">
              <a
                href="https://instagram.com/helen_ka_flowers?igshid=ZDdkNTZiNTM="
                target={"_blank"}
                className="social__link footer__social-link"
              >
                <FaInstagram className="social__icon footer__icon" />
              </a>
            </li>
            {/* <li className="social__item">
              <a href="#" className="social__link footer__social-link">
                <FaFacebookF className="social__icon footer__icon" />
              </a>
            </li> */}
            {/* <li className="social__item">
              <a href="#" className="social__link footer__social-link">
                <FaTelegramPlane className="social__icon footer__icon" />
              </a>
            </li> */}
            <li className="social__item">
              <a
                href="https://www.olx.ua/d/uk/list/user/1rUvz/"
                target={"_blank"}
                className="social__link footer__social-link"
              >
                <img
                  src={Logo}
                  className="social__icon footer__icon"
                  alt="olx logo"
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
              <FaTelegramPlane className="submit-icon" />
            </button>
          </form>
        </div>
      </div>
      {isModalOpen && <Modal onClose={toggleModal} />}
    </footer>
  );
}
