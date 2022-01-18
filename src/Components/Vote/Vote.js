import { Content } from "./Vote.styles";

const Vote = ({ score }) => {
  return (
    <Content>
      <img src={"./images/icon-plus.svg"} className="vote" alt="upvote" />
      <p className="count">{score}</p>
      <img src={"./images/icon-minus.svg"} className="vote" alt="downvote" />
    </Content>
  );
};

export default Vote;
