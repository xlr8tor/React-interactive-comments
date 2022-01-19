import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--White);
  padding: 1.5em;
  border-radius: 0.625rem;
  margin-block-end: 1em;

  @media (max-width: 540px) {
    align-items: center;
    flex-wrap: wrap;
    padding: 1em;

    textarea {
      order: -1;
      min-width: 100%;
      margin-inline: 0;
      margin-block-end: 1em;
      font-size: 12px;
    }

    img {
      width: 30px;
      height: 30px;
    }

    button {
      font-size: 0.9rem;
    }
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const TextArea = styled.textarea`
  margin-inline: 1em;
  width: 100%;
  font-size: 1rem;
  border: 1px solid var(--Light-gray);
  border-radius: 0.45rem;
  padding-block: 0.6em;
  padding-inline: 1.2em;
  outline: none;
  color: var(--Grayish-Blue);

  ::placeholder {
    color: var(--Grayish-Blue);
  }

  &:hover {
    cursor: pointer;
    border: 1px solid var(--Moderate-blue);
  }
`;

export const Button = styled.button`
  font-size: 1.125rem;
  font-weight: 500;
  text-transform: uppercase;
  background-color: var(--Moderate-blue);
  color: var(--White);
  border: none;
  outline: none;
  padding-block: 0.6em;
  padding-inline: 1.5em;
  border-radius: 0.45rem;

  &:hover {
    cursor: pointer;
    background: var(--Light-grayish-blue);
  }
`;
