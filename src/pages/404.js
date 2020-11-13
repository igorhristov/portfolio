import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Banner from "../components/Banner";
import styled from "styled-components";
// import SEO from "../components/layout/SEO";

const NotFoundPage = () => (
  <>
    {/* <SEO title="404: Not Found" /> */}
    <ErrorWrapper>
      <Banner
        name="404: Not Found"
        info="You just hit a route that doesn&#39;t exist..."
      >
        <AniLink fade to="/" className="btn-white">
          {" "}
          back to home page
        </AniLink>
      </Banner>
    </ErrorWrapper>
  </>
);

const ErrorWrapper = styled.div`
  background-color: #fbb034;
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
  min-height: calc(100vh - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  p {
    margin: 0 auto 20px;
  }
`;

export default NotFoundPage;
