import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";

const About = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.file.childImageSharp.fluid}>
        <Banner title="about page"></Banner>
      </StyledHero>
      <h1>About page</h1>
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

export default About;
