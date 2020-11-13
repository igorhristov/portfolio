import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import StyledHero from "../components/StyledHero";
import ContactComponent from "../components/contact/Contact";
//import SEO from "../components/layout/SEO";

const Contact = ({ data }) => {
  
  return (
    <>
     
      <Layout>
        <StyledHero img={data.file.childImageSharp.fluid} />
        <ContactComponent />
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "contactBg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Contact;
