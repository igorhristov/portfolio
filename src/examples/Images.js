import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";
import img from "../images/defaultBcg.jpg";

const getImages = graphql`
  query Images {
    file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 200) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }

    file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);

  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} className="basic" width="300" height="100" />
        <p>data text nekoj</p>
      </article>

      <article>
        <h3>fixed image</h3>
        <Image fixed={data.file.childImageSharp.fixed} className="basic" />
        <p>data text nekoj</p>
      </article>

      <article>
        <h3>basic image</h3>
        <Image fluid={data.file.childImageSharp.fluid} className="basic" />

        <div className="fluid">
          <Image fluid={data.file.childImageSharp.fluid} className="basic" />
        </div>
        <p>data text nekoj</p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;

  article {
    border: 3px solid darkblue;
    padding: 1rem 0;
  }

  .basic {
    width: 100%;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }

  .fluid {
    width: 200px;
  }
`;

export default Images;
