import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FaVideo } from "react-icons/fa";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand className={styles.brand} href="/">
        <FaVideo className={styles.icon} /> Movie application
      </NavbarBrand>
      <Nav className={styles.items} navbar>
        <NavItem>
          <NavLink href="/">Main Page</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
