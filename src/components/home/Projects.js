import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";
import Title from "../Title";

const getProjectImage = graphql`
  query projectImage {
    projectsImages: file(relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Projects = () => {
  const { projectsImages } = useStaticQuery(getProjectImage);
  return (
    <ProjectsWrapper>
      <Title title="My" subtitle="Projects" />
      <section>
        <div className="projects-center">
          <article className="projects-img">
            <div className="img-container">
              <Image
                fluid={projectsImages.childImageSharp.fluid}
                alt="projects"
              />
            </div>
          </article>
          <article className="projects-info">
            <h4>react app</h4>
            <p>React Application with node js and express Rest full API</p>
            <div style={{ display: "flex" }}>
              <a
                href="https://react-blog-igor.herokuapp.com/"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div className="projects-center">
          <article className="projects-img">
            <div className="img-container">
              <Image
                fluid={projectsImages.childImageSharp.fluid}
                alt="projects"
              />
            </div>
          </article>
          <article className="projects-info">
            <h4>PSD to HTML Page </h4>
            <p>Convert psd file to html </p>
            <div style={{ display: "flex" }}>
              <a
                href="https://igor-psd-to-html.netlify.app/"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div className="projects-center">
          <article className="projects-img">
            <div className="img-container">
              <Image
                fluid={projectsImages.childImageSharp.fluid}
                alt="projects"
              />
            </div>
          </article>
          <article className="projects-info">
            <h4>Tribute Page </h4>
            <p>Tribute Page for George Lucas made from my own design</p>
            <div style={{ display: "flex" }}>
              <a
                href="https://igortributepage.netlify.app/"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </article>
        </div>
      </section>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  padding: 4rem 0;

  .projects-center {
    width: 80vw;
    margin: 0 auto;
  }

  .projects-img {
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

  .projects-info {
    margin-top: 3rem;

    h4 {
      font-size: 1.9rem;
      text-transform: uppercase;
    }
  }

  @media (min-width: 768px) {
    .projects-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      margin-top: 3rem;
    }
    article:nth-of-type(1) {
      order: 2;
    }
    article:nth-of-type(2) {
      order: 1;
    }

    .projects-img,
    .projects-info {
      margin: 0;
    }
    .projects-img img {
      max-height: 500px;
    }
    .img-container {
      max-height: 500px;
    }
    .projects-info p {
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
    .projects-center {
      width: 95vw;
      max-width: 1170px;
    }
  }
`;

export default Projects;
