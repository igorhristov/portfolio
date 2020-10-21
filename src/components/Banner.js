import React from "react";
import PropTypes from "prop-types";
import styles from "../css/banner.module.css";

const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};

export default Banner;
