import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FaVideo } from "react-icons/fa";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand className={styles.brand}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <FaVideo className={styles.icon} /> Movie application
        </Link>
      </NavbarBrand>
      <Nav className={styles.items} navbar>
        <NavItem>
          <NavLink>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Main Page
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
