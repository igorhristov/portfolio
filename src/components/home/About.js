import React from "react";
import Title from "../Title";
import styled from "styled-components";
import img from "../../images/defaultBcg.jpg";
const About = () => {
  return (
    <AboutWrapper>
      <Title title="about" subtitle="me" />
      <div className="about-center">
        <article className="about-img">
          <div className="img-container">
            <img src={img} alt="about me" />
          </div>
        </article>

        <article className="about-info">
          <h4>some hystory about me </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            rutrum commodo tellus. Maecenas congue aliquet eros vel fermentum.
            Vestibulum vel rutrum massa, non tempor tellus. Cras posuere nibh at
            nisi tempor ultricies. Mauris dapibus, odio in iaculis tempor, felis
            dui ornare magna, non tristique velit lectus ut metus. Integer
            facilisis metus non metus imperdiet, in pharetra nisi sagittis. Nunc
            at gravida justo. Nulla congue tristique sodales. Cras rhoncus erat
            sapien, sed porta enim euismod eget.{" "}
          </p>
          <p>
            Aenean eleifend sapien ac dignissim maximus. Morbi sed ipsum est.
            Duis quis felis ornare, malesuada lorem at, sodales nisl. Vivamus
            laoreet aliquam hendrerit. Maecenas at massa non erat interdum
            molestie vel non metus. Duis ullamcorper, turpis non mattis iaculis, risus et dictum varius, risus enim pulvinar
            ligula, et fermentum velit dolor eu ex.{" "}
          </p>
          <button className="btn-primary">Read more</button>
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
