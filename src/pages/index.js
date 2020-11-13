import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import About from "../components/home/About";
import Services from "../components/home/Services";
import StyledHero from "../components/StyledHero";
import Projects from "../components/home/Projects";
//import SEO from "../components/layout/SEO";

const IndexPage = ({ data }) => (
  <>
 
  <Layout>
    <StyledHero home="true" img={data.file.childImageSharp.fluid}>
      <Banner title="Hi, i am " name="Igor Hristov" info="Web Developer">
        <AniLink
          to="/projects"
          className="btn-white"
          cover
          direction="left"
          duration={3}
          bg="
              url(https://source.unsplash.com/random)
              center / cover  
              no-repeat       
              fixed          
              padding-box      
              content-box     
              white            
              "
        >
          See my projects
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <Projects />
  </Layout>
  </>
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
