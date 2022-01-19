import Vote from "../Vote/Vote";
import Input from "../Input/Input";
//Styles
import { Wrapper, Content, Image, Section } from "./Post.styles";

const Post = ({
  content,
  createdAt,
  src,
  username,
  score,
  replyingTo,
  id,
  replyID,
}) => {
  const booleanToggler = (value) => {
    return value ? false : true;
  };

  return (
    <>
      <Wrapper>
        <Vote
          score={score}
          className="vote-component"
          id={id}
          replyID={replyID}
        />
        <Content>
          <Section>
            <Image src={src} />
            <p className="username">{username}</p>
            <p>{createdAt}</p>
            <div
              className="reply"
              onClick={() => {
                console.log("hello");
              }}
            >
              <Image src={"./images/icon-reply.svg"} className="reply-icon" />
              <p>Reply</p>
            </div>
          </Section>
          <p>
            <span className="accent">{replyingTo} </span>
            {content}
          </p>
        </Content>
      </Wrapper>
      <Input />
    </>
  );
};

export default Post;
