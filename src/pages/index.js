import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/Seo";

import { FaAdobe } from "react-icons/fa";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <FaAdobe />
      Hi people from IGOR HRISTOV
    </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
);

export default IndexPage;
