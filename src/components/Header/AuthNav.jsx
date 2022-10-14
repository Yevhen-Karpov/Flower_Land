import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Header.module.css";

export default function AuthNav() {
  const styles = {
    wrap: {
      display: "flex",
      width: 100,
      alignItems: "center",

      marginLeft: 80,
    },
  };

  return (
    <div style={styles.wrap}>
      <NavLink
        to="/register"
        exact
        style={{
          textDecoration: "none",
          fontSize: "16px",
          marginRight: 20,
        }}
        className={s.navNavLink}
        activeClassName={s.active}
      >
        Реєстрація
      </NavLink>

      <NavLink
        to="/login"
        exact
        style={{
          textDecoration: "none",
          fontSize: "16px",
        }}
        className={s.navNavLink}
        activeClassName={s.active}
      >
        Увійти
      </NavLink>
    </div>
  );
}
