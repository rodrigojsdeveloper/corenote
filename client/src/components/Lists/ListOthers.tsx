import { Container } from "./style";
import Note from "../Note";

const ListOthers = () => {
  return (
    <Container>
      <h2>Outras</h2>

      <menu>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </menu>
    </Container>
  );
};

export default ListOthers;
