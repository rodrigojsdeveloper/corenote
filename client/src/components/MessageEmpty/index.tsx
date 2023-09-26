import { IMessageEmpty } from "../../interfaces";
import { Container } from "./style";

const MessageEmpty = ({ message }: IMessageEmpty) => {
  return <Container>{message}</Container>;
};

export default MessageEmpty;
