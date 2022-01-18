import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: var(--Very-light-gray);
  padding: 0.8em;
  border-radius: 0.3rem;
  margin-inline-end: 1.5em;
  min-width: 50px;

  img:hover {
    cursor: pointer;
    filter: invert(67%) sepia(16%) saturate(2248%) hue-rotate(200deg)
      brightness(93%) contrast(92%);
  }

  p {
    font-weight: 500;
    padding-block: 0.9em;
    color: var(--Moderate-blue);
  }

  @media (max-width: 425px) {
    flex-flow: row nowrap;
    margin-block-start: 0.7em;

    p {
      padding-block: 0;
      padding-inline: 0.9em;
    }
  }
`;
