import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  
  const { author, description, title } = data.site.siteMetadata;
  return (
    <div>
      <h1>title: {title}</h1>
      <h1>description: {description}</h1>
      <h1>author:{author}</h1>
    </div>
  );
};

export default Header;
