import { Wrapper, Content, Image, Section } from "./Post.styles";
const Post = ({ content, createdAt, src, username }) => {
  console.log(username);
  return (
    <Wrapper>
      <Content>
        <Section>
          <Image src={src} />
          <p className="username">{username}</p>
          <p className="bold">{createdAt}</p>
        </Section>
        <p>{content}</p>
      </Content>
    </Wrapper>
  );
};

export default Post;
