import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    fontSize: "18px",
    color: "var(--secondary-color)",
  },
  activeLink: {
    color: "var(--title-color)",
    textShadow: "var(--secondary-color) 1px 0 10px",
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Main
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
