import { Link } from "react-router-dom";
import s from "./Header.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <Link exact to="/" className={s.navLink} activeClassName={s.active}>
        Головна
      </Link>
      <Link to="/achimenes" className={s.navLink} activeClassName={s.active}>
        Колекція ахіменесів
      </Link>
      <Link to="/violets" className={s.navLink} activeClassName={s.active}>
        Колекція фіалок
      </Link>
      <Link to="/geran" className={s.navLink} activeClassName={s.active}>
        Колекція геранів
      </Link>
    </nav>
  );
};
export default Navigation;
