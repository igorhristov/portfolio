import React from "react";
import styled from "styled-components";
import Title from "../Title";
import ProjectImg from "../Image/ProjectImg";

const SingleProject = ({ imgName, imgAlt, title, info, liveUrl, codeUrl }) => {
  return (
    <section>
      <div className="projects-center">
        <article className="projects-img">
          <div className="img-container">
            <ProjectImg filename={imgName} alt={imgAlt} />
          </div>
        </article>
        <article className="projects-info">
          <h4>{title}</h4>
          <p>{info}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href={liveUrl}
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            {codeUrl ? (
              <a
                className="btn-code"
                href={codeUrl}
                // className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            ) : (
              ""
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

const ProjectsData = [
  {
    imgName: "react.png",
    imgAlt: "react project",
    title: "react app",
    info: "React Application with node js and express Rest full API",
    liveUrl: "https://react-blog-igor.herokuapp.com/",
  },
  {
    imgName: "kancona.jpg",
    imgAlt: "restaurant website",
    title: "Restaurant App",
    info: "Restaurant website for a client",
    liveUrl: "https://kancona.netlify.app/",
  },
  {
    imgName: "beauty.png",
    imgAlt: "beauty website",
    title: "Beauty App",
    info: "Beauty Salon website for a client",
    liveUrl: "https://ritual.mk/",
  },
  {
    imgName: "psdtohtml.png",
    imgAlt: "psd to html project",
    title: "PSD to HTML Page",
    info: "Convert psd file to html web page with corensponding css styles",
    liveUrl: "https://igor-psd-to-html.netlify.app/",
    codeUrl: "https://github.com/igorhristov/homework-7",
  },

  {
    imgName: "tribute.jpg",
    imgAlt: "george lucas tribute page",
    title: "Tribute Page",
    info: "Tribute Page for George Lucas made with my own design",
    liveUrl: "https://igor-tribute-page.netlify.app/",
  },
  {
    imgName: "elements.png",
    imgAlt: "igor utility page",
    title: "Elements & Small Projects",
    info: "Collection of elements and small projects with HTML5/CSS3, JavaScript and React",
    liveUrl: "https://igor-utility.netlify.app/",
  },
];

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Title title="My" subtitle="Projects" />
      {ProjectsData.map(({ ...projects }) => (
        <>
          <SingleProject {...{ ...projects }} />
          <hr
            style={{
              width: "90%",
              margin: "1rem auto",
              border: "1px dotted #00C3C3",
              opacity: "0.5"
            }}
          />
        </>
      ))}
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
