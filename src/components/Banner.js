import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Banner = ({ title, info, children, name }) => {
  return (
    <BannerWrapper>
      <h1>
        {title} <span className="mark">{name}</span>
      </h1>
      <p>{info}</p>
      {children}
    </BannerWrapper>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};

const BannerWrapper = styled.div`
  text-align: center;
  letter-spacing: var(--mainSpacing);
  color: var(--mainWhite);

  h1 {
    font-size: 3.3rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 6px;
    color: var(--mainWhite);
  }

  .mark {
    color: var(--primaryColor);
    text-shadow: 3px 3px 2px black;
  }

  p {
    font-size: 2rem;
    width: 70%;
    margin: 0 auto 20px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
    }

    p {
      width: 70%;
    }
  }
`;

export default Banner;
