import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import About from "../components/home/About";
import Services from "../components/home/Services";
import StyledHero from "../components/StyledHero";

const IndexPage = ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.file.childImageSharp.fluid}>
      <Banner title="Hi, i am Igor Hristov" info="Web Developer">
        <AniLink
          to="/tours"
          className="btn-white"
          cover
          direction="left"
          duration={3}
          bg="
    url(https://source.unsplash.com/random)
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    white            /* color */
  "
        >
          See my projects
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
);

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

export default IndexPage;
