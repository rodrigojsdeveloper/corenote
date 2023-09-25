import { NoteContext } from "../../contexts/note.context";
import { Container } from "./style";
import { useContext } from "react";
import Note from "../Note";

const ListFavorites = () => {
  const { filteredFavorites } = useContext(NoteContext);

  return (
    <Container>
      <h2>Favoritas</h2>

      <menu>
        {filteredFavorites.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </menu>
    </Container>
  );
};

export default ListFavorites;
