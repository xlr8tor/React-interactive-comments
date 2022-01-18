import Vote from "../Vote/Vote";
//Styles
import { Wrapper, Content, Image, Section } from "./Post.styles";
const Post = ({
  content,
  createdAt,
  src,
  username,
  score,
  replyingTo,
  onUpvote,
  onDownvote,
  id,
}) => {
  return (
    <Wrapper>
      <Vote
        score={score}
        className="vote-component"
        onUpvote={onUpvote}
        onDownvote={onDownvote}
        id={id}
      />
      <Content>
        <Section>
          <Image src={src} />
          <p className="username">{username}</p>
          <p>{createdAt}</p>
          <div className="reply">
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
  );
};

export default Post;
