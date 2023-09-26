import { NoteContext } from "../../contexts/note.context";
import { Container } from "./style";
import { useContext } from "react";
import Note from "../Note";
import MessageEmpty from "../MessageEmpty";

const ListOthers = () => {
  const { filteredNotes } = useContext(NoteContext);

  return (
    <Container>
      <h2>Outras</h2>

      {filteredNotes.length > 0 ? (
        <menu>
          {filteredNotes.map((note) => (
            <Note note={note} key={note.id} />
          ))}
        </menu>
      ) : (
        <MessageEmpty message="Não há outras notas" />
      )}
    </Container>
  );
};

export default ListOthers;
