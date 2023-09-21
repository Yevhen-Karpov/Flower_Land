import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "./Header.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <ul className={s.nav}>
        <li className={s.navItem}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "pending";
            }}
            to="/"
          >
            Головна
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "pending";
            }}
            to="/achimenes"
          >
            Колекція ахіменесів
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "pending";
            }}
            to="/violets"
          >
            Колекція фіалок
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "pending";
            }}
            to="/gerans"
          >
            Колекція геранів
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "pending";
            }}
            to="/comments"
          >
            Коментарі
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={s.navItem}>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "active" : "pending";
              }}
              to="/collections"
            >
              Приватна колекція
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
