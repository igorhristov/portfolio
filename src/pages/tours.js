import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout/Layout";
import Header from "../examples/Header";

const tour = (props) => {
  return (
    <Layout>
      hello from tours page
      <Header />
    </Layout>
  );
};

tour.propTypes = {};

export default tour;
