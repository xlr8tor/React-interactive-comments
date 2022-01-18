import { Content } from "./Vote.styles";

const Vote = ({ score, onUpvote, onDownvote, id }) => {
  return (
    <Content>
      <img
        src={"./images/icon-plus.svg"}
        className="vote"
        alt="upvote"
        onClick={() => {
          onUpvote(id);
        }}
      />
      <p className="count">{score}</p>
      <img
        src={"./images/icon-minus.svg"}
        className="vote"
        alt="downvote"
        onClick={() => {
          onDownvote(id);
        }}
      />
    </Content>
  );
};

export default Vote;
