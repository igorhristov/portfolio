import React from "react";
import { Link } from "gatsby";
import SEO from "../components/layout/Seo";
import Layout from "../components/layout/Layout";
import styles from "../css/error.module.css";
import Banner from "../components/Banner";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <header className={styles.error}>
      <Banner
        title="404: Not Found"
        info="You just hit a route that doesn&#39;t exist... the sadness."
      >
        <Link to="/" className="btn-white">
          {" "}
          back to home page
        </Link>
      </Banner>
    </header>
    <p></p>
  </Layout>
);

export default NotFoundPage;
