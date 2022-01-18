import { Wrapper, Image, TextArea, Button } from "./Input.styles";
import Avatar from "../../images/avatars/image-juliusomo.png";
const Input = () => {
  return (
    <Wrapper>
      <Image src={Avatar}></Image>
      <TextArea rows={3} placeholder={"Add a comment..."} />
      <Button>Send</Button>
    </Wrapper>
  );
};

export default Input;
