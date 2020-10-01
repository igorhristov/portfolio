import React from "react";
import { StaticQuery, graphql } from "gatsby";

const getSiteData = graphql`
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

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={(data) => {
          return (
          <div>
            <h1>hello from regular header</h1>
            <h2>{data.site.siteMetadata.author}</h2>
          </div>
        );
      }}
    />
  );
};

export default RegularHeader;
