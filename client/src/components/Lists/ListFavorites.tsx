import { NoteContext } from "../../contexts/note.context";
import { Container } from "./style";
import { useContext } from "react";
import Note from "../Note";
import MessageEmpty from "../MessageEmpty";

const ListFavorites = () => {
  const { filteredFavorites } = useContext(NoteContext);

  return (
    <Container>
      <h2>Favoritas</h2>

      <menu>
        {filteredFavorites.length > 0 ? (
          filteredFavorites.map((note) => <Note note={note} key={note.id} />)
        ) : (
          <MessageEmpty message="Não há favoritos" />
        )}
      </menu>
    </Container>
  );
};

export default ListFavorites;
