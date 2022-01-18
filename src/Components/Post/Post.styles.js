import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--White);
  margin-block-end: 1em;
  padding: 1.5em;
  border-radius: 0.625rem;
  color: var(--Grayish-Blue);
`;

export const Content = styled.div``;

export const Section = styled.section`
  display: flex;
  align-items: center;

  .username {
    margin-inline: 1em;
    font-weight: 700;
    color: var(--Dark-blue);
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;
