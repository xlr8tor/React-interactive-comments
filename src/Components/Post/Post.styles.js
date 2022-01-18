import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--White);
  margin-block-end: 1em;
  padding: 1.5em;
  border-radius: 0.625rem;
  color: var(--Grayish-Blue);

  @media (max-width: 425px) {
    flex-flow: column-reverse nowrap;
    padding: 1em;
    font-size: 13px;

    .reply {
      position: absolute;
      right: 1em;
      bottom: 1em;
    }
  }
`;

export const Content = styled.div`
  .accent {
    font-weight: 500;
    color: var(--Moderate-blue);
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  margin-block-end: 0.7em;

  .username {
    margin-inline: 1em;
    font-weight: 700;
    color: var(--Dark-blue);
  }

  .reply {
    display: flex;
    align-items: center;
    margin-left: auto;
    font-weight: 500;
    color: var(--Moderate-blue);
  }

  .reply-icon {
    transform: scale(0.5);
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;
