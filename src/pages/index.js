import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/Layout";
import SimpleHero from "../components/SimpleHero";
import Banner from "../components/Banner";

const IndexPage = () => (
  <Layout>
    <SimpleHero>
      <Banner title="Hi, i am Igor Hristov" info="Web Developer">
        <Link to="/tour" className="btn-white">
          See my project
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
);

export default IndexPage;
