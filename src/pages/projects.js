import React from "react";
import Layout from "../components/layout/Layout";
import Projects from "../components/home/Projects";
import { Helmet } from "react-helmet";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Igor Portfolio | Projects</title>
      </Helmet>
      <Layout>
        <Projects />
      </Layout>
    </>
  );
};

export default ProjectsPage;
