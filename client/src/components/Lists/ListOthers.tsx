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

      <menu>
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => <Note note={note} key={note.id} />)
        ) : (
          <MessageEmpty message="Não há outras notas" />
        )}
      </menu>
    </Container>
  );
};

export default ListOthers;
