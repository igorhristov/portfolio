import React from "react";
import { Link } from "gatsby";
import styles from "../../css/footer.module.css";
import links from "../../constants/links";
import SocialIcons from "../../constants/social-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className={styles.icons}>
        {SocialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {item.icon}
            </a>
          );
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Igor Hristov {new Date().getFullYear()} all right
        reserver
      </div>
    </footer>
  );
};

export default Footer;
