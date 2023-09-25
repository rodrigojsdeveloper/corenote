import { INoteProps, INoteContextData, IChildren } from "../interfaces";
import { createContext, useEffect, useState } from "react";

export const NoteContext = createContext({} as INoteContextData);

export const NoteContextProvider = ({ children }: IChildren) => {
  const [notes, setNotes] = useState<Array<INoteProps>>([]);

  const [filteredNotes, setFilteredNotes] = useState<Array<INoteProps>>([]);

  const [filteredFavorites, setFilteredFavorites] = useState<Array<INoteProps>>(
    []
  );

  const handleSearchNote = (title: string) => {
    setFilteredNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  };

  const handleFavoriteNotes = () => {
    setFilteredFavorites(notes.filter((note) => note.is_favorite === true));
  };

  return (
    <NoteContext.Provider
      value={{
        handleSearchNote,
        filteredNotes,
        handleFavoriteNotes,
        filteredFavorites,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
