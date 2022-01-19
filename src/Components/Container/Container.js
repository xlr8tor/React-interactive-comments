import Input from "../Input/Input";
import Post from "../Post/Post";

import { Wrapper } from "./Container.styles";
import React from "react";

const Container = ({ state }) => {
  return (
    <Wrapper>
      {state.comments.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            <Post
              content={comment.content}
              createdAt={comment.createdAt}
              src={comment.user.image.png}
              username={comment.user.username}
              score={comment.score}
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
                id={comment.id}
                replyID={reply.id}
                key={reply.id}
              />
            ))}
          </React.Fragment>
        );
      })}
      <Input />
    </Wrapper>
  );
};

export default Container;
