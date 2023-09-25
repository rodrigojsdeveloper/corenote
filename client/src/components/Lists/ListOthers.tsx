import { NoteContext } from "../../contexts/note.context";
import { Container } from "./style";
import { useContext } from "react";
import Note from "../Note";

const ListOthers = () => {
  const { filteredNotes } = useContext(NoteContext);

  return (
    <Container>
      <h2>Outras</h2>

      <menu>
        {filteredNotes.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </menu>
    </Container>
  );
};

export default ListOthers;
