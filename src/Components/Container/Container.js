import Input from "../Input/Input";
import Post from "../Post/Post";

import data from "../../data.json";

import { Wrapper } from "./Container.styles";

const Container = () => {
  return (
    <Wrapper>
      {data.comments.map((comment) => {
        return (
          <Post
            content={comment.content}
            createdAt={comment.createdAt}
            src={comment.user.image.png}
            username={comment.user.username}
            key={comment.id}
          />
        );
      })}
      <Input />
    </Wrapper>
  );
};

export default Container;
