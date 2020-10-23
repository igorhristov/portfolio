import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from "../../css/navbar.module.css";
import { FaAlignRight } from "react-icons/fa";
import NavbarLinks from "../../constants/links";
import SocialIcons from "../../constants/social-icons";

import logo from "../../images/logo.svg";

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to="/">
            <img src={logo} alt="igor logo" style={{ width: "100px" }} />
          </AniLink>
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
          {NavbarLinks.map(({ title, path }) => (
            <li key={title}>
              <AniLink fade to={path}>
                {title.toUpperCase()}
              </AniLink>
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

export default Navbar;
