import React from "react";
import Title from "../Title";
import styled from "styled-components";
import services from "../../constants/services";

const Services = () => {
  return (
    <SevicesWrapper>
      <Title title="my" subtitle="services" />
      <div className="center">
        {services.map((item, index) => {
          return (
            <article className="service" key={index}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </SevicesWrapper>
  );
};

const SevicesWrapper = styled.section`
  background: var(--mainGrey);
  padding: 4rem 0;

  .center {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2rem;
  }

  .service {
    margin: 2rem 0;
    text-align: center;

    span {
      background: var(--primaryColor);
      padding: 0.5rem;
      display: inline-block;
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    h4 {
      text-transform: uppercase;
    }


  }

  @media (min-width: 768px) {
    .center {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1200px) {
    .center {
      max-width: 1170px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Services;
