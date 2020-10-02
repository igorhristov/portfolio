import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import ContactComponent from "../components/contact/Contact";

const Contact = ({ data }) => {
  console.log("hello from contanct");
  return (
    <Layout>
      <StyledHero img={data.file.childImageSharp.fluid} />
      <ContactComponent />
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Contact;
