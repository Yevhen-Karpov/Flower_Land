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
            style={{
              textDecoration: "none",
            }}
            exact
            to="/"
            activeClassName={s.active}
          >
            Головна
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/achimenes"
            activeClassName={s.active}
          >
            Колекція ахіменесів
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/violets"
            activeClassName={s.active}
          >
            Колекція фіалок
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/gerans"
            activeClassName={s.active}
          >
            Колекція гераней
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={s.navItem}>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/collections"
              activeClassName={s.active}
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
