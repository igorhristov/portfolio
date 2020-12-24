import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import StyledHero from "../components/StyledHero";
import Title from "../components/Title";
import Image from "gatsby-image";

import CV from "../../static/IgorHristovCV.pdf";
const About = ({ data, className }) => {
  return (
    <Layout>
      <StyledHero img={data.file.childImageSharp.fluid} />

      <div className={className}>
        <Title title="preview my" subtitle="CV" />

        <a
          className="btn-primary"
          download="IgorHristovCV.pdf"
          href="/IgorHristovCV.pdf"
        >
          Download
        </a>
        <div style={{ marginTop: "2rem" }}>
          <Image fluid={data.cv.childImageSharp.fluid} alt="cv" style={{margin: '0 auto'}} />
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

    cv: file(relativePath: { eq: "cv.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;

export default styled(About)`
  padding: 3rem;
  text-align: center;
`;
