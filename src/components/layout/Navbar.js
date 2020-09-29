import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styles from "../../css/navbar.module.css";
import { FaAlignRight } from "react-icons/fa";
import NavbarLinks11 from "../../constants/links";
import SocialIcons from "../../constants/social-icons";

import logo from "../../images/igor.svg";

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="igor logo" style={{ width: "100px" }} />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {NavbarLinks11.map(({ title, path }) => (
            <li key={title}>
              <Link to={path}>{title.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {SocialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

const NavbarLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

Navbar.propTypes = {};

export default Navbar;
