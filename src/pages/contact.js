import React from "react";
import Layout from "../components/layout/Layout";
import { graphql } from "gatsby";
import ImagesComponent from "../examples/Images";

const Contact = ({ data }) => {
  console.log("hello from contanct");
  return (
    <Layout>
      <h1>Contact Page</h1>

      <h2>title: {data.site.siteMetadata.title}</h2>
      <ImagesComponent />
    </Layout>
  );
};

export const query = graphql`
  query {
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
