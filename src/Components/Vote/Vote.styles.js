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
  }

  p {
    font-weight: 500;
    padding-block: 0.9em;
    color: var(--Moderate-blue);
  }
`;
