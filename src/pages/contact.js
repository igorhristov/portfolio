import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";

const Contact = ({ data }) => {
  console.log("hello from contanct");
  return (
    <Layout>
      <StyledHero img={data.file.childImageSharp.fluid}>
        <Banner title="contact page"></Banner>
      </StyledHero>

      <h2>title: {data.site.siteMetadata.title}</h2>
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

    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export default Contact;
