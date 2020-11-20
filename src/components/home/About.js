import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Image from "gatsby-image";
import Title from "../Title";
import Githubchart from "../github/githubcontibution";

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "coding.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage);

  return (
    <AboutWrapper>
      <Title title="about" subtitle="me" />
      <div className="about-center">
        <article className="about-img">
          <div className="img-container">
            <Image
              fluid={aboutImage.childImageSharp.fluid}
              alt="great background"
            />
          </div>
        </article>

        <article className="about-info">
          <h4>something about me </h4>
          <p>
            Highly motivated and enthusiastic web developer who always want to
            learn more and something new. Over 2 years learning with passion
            HTML, CSS, Bootstrap, JavaScript, Node, Express, React, MongoDB, Gatsby and headless CMS and doing personal
            projects. Seeking to learn as much as i can to become the next Full
            Stack Web Developer.
          </p>
          <p>
            <a href="https://github.com/igorhristov" target="_blank" rel="noreferrer">@igorhristov</a> on GitHub
            <Githubchart />
          </p>

          <AniLink fade to="/about" className="btn-primary">
            Read more
          </AniLink>
        </article>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: 4rem 0;

  .about-center {
    width: 80vw;
    margin: 0 auto;
  }

  .about-img {
    margin: 3rem 0;
    position: relative;

    img {
      width: 100%;
      display: block;
      box-shadow: var(--lightShadow);
    }

    div {
      box-shadow: var(--lightShadow);
    }
  }

  .about-info {
    margin-top: 3rem;

    h4 {
      font-size: 1.9rem;
      text-transform: uppercase;
    }
  }

  @media (min-width: 768px) {
    .about-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      margin-top: 3rem;
    }

    .about-img,
    .about-info {
      margin: 0;
    }
    .about-img img {
      max-height: 500px;
    }
    .img-container {
      max-height: 500px;
    }
    .about-info p {
      width: 80%;
    }
  }

  @media (min-width: 992px) {
    .img-container::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid var(--primaryColor);
      box-sizing: border-box;
      top: -16px;
      left: -16px;
      z-index: -1;
    }
  }

  @media (min-width: 1200px) {
    .about-center {
      width: 95vw;
      max-width: 1170px;
    }
  }
`;

export default About;
