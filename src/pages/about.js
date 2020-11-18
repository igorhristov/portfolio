import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import StyledHero from "../components/StyledHero";
import Title from "../components/Title";

import CV from "../../static/IgorHristovCV.pdf";
const About = ({ data, className }) => {
  return (
    <Layout>
      <StyledHero img={data.file.childImageSharp.fluid} />

      <div className={className}>
        <div
          id="Iframe-Master-CC-and-Rs"
          className="set-margin set-padding set-border set-box-shadow center-block-horiz"
        >
          <Title title="preview my" subtitle="CV" />

          <a
            className="btn-primary"
            download="IgorHristovCV.pdf"
            href="/IgorHristovCV.pdf"
          >
            Download
          </a>
          <div
            className="responsive-wrapper 
     responsive-wrapper-wxh-572x612"
            style={{ webkitOverflowScrolling: "touch", overflow: "auto" }}
          >
            <iframe
              title="CV"
              src={CV}
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "backgroundCoding.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default styled(About)`
  #Iframe-Master-CC-and-Rs {
    max-width: 850px;
    max-height: 100%;
    overflow: hidden;
    /* margin-top: -5px; */
    /* margin-top: 0; */
  }

  /* inner wrapper: make responsive */
  .responsive-wrapper {
    position: relative;
    height: 0; /* gets height from padding-bottom */
  }

  .responsive-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;
    border: none;
  }

  /* padding-bottom = h/w as % -- sets aspect ratio */
  /* YouTube video aspect ratio */
  .responsive-wrapper-wxh-572x612 {
    padding-bottom: 142%;
  }

  /* general styles */
  /* ============== */
  .set-border {
    /* border: 5px inset #4f4f4f; */
  }
  .set-box-shadow {
    /* -webkit-box-shadow: 4px 4px 14px #4f4f4f;
    -moz-box-shadow: 4px 4px 14px #4f4f4f;
    box-shadow: 4px 4px 14px #4f4f4f; */
  }
  .set-padding {
    padding: 40px 10px;
  }
  .set-margin {
    margin: 30px 0;
  }
  .center-block-horiz {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  iframe {
  }
`;
