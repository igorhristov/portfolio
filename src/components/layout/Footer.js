import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from "../../css/footer.module.css";
import links from "../../constants/links";
import SocialIcons from "../../constants/social-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink
              cover
              direction="left"
              duration={2}
              bg="
      url(https://source.unsplash.com/random)
      center / cover   /* position / size */
      no-repeat        /* repeat */
      fixed            /* attachment */
      padding-box      /* origin */
      content-box      /* clip */
      white            /* color */
    "
              key={index}
              to={item.path}
            >
              {item.title}
            </AniLink>
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
        &copy;Igor Hristov {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
