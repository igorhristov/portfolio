import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer>
      <ul>
        <li>informations</li>
      </ul>
      <p>
        {" "}
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="#">Gatsby</a> by Igor Hristov
      </p>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
