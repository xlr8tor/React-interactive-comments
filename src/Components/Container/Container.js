import Input from "../Input/Input";
import Post from "../Post/Post";

import data from "../../data.json";

import { Wrapper } from "./Container.styles";

const Container = ({ state, onUpvote, onDownvote }) => {
  return (
    <Wrapper>
      {state.comments.map((comment) => {
        return (
          <>
            <Post
              key={comment.id}
              content={comment.content}
              createdAt={comment.createdAt}
              src={comment.user.image.png}
              username={comment.user.username}
              score={comment.score}
              onDownvote={onDownvote}
              onUpvote={onUpvote}
              id={comment.id}
            />
            {comment.replies.map((reply) => (
              <Post
                replyingTo={"@" + reply.replyingTo}
                content={reply.content}
                score={reply.score}
                src={reply.user.image.png}
                username={reply.user.username}
                createdAt={reply.createdAt}
                key={reply.id}
                $mode
              />
            ))}
          </>
        );
      })}
      <Input />
    </Wrapper>
  );
};

export default Container;
