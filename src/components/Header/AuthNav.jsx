import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  const styles = {
    wrap: {
      display: "flex",
      width: 100,
      alignItems: "center",
      gap: 20,
      marginLeft: 80,
    },
  };

  return (
    <div style={styles.wrap}>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "active" : "pending";
        }}
        to="/register"
      >
        Реєстрація
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) => {
          return isActive ? "active" : "pending";
        }}
      >
        Увійти
      </NavLink>
    </div>
  );
}
