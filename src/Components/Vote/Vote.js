import { useContext } from "react";
import { stateContext } from "../../App";
import { Content } from "./Vote.styles";

const Vote = ({ score, id, replyID }) => {
  const { Upvote, Downvote } = useContext(stateContext);

  return (
    <Content>
      <img
        src={"./images/icon-plus.svg"}
        className="vote"
        alt="upvote"
        onClick={() => {
          Upvote(id, replyID);
        }}
      />
      <p className="count">{score}</p>
      <img
        src={"./images/icon-minus.svg"}
        className="vote"
        alt="downvote"
        onClick={() => {
          Downvote(id, replyID);
        }}
      />
    </Content>
  );
};

export default Vote;
