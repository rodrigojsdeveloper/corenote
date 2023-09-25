import { INoteProps, INoteContextData, IChildren } from "../interfaces";
import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const NoteContext = createContext({} as INoteContextData);

export const NoteContextProvider = ({ children }: IChildren) => {
  const [notes, setNotes] = useState<Array<INoteProps>>([]);

  const [filteredNotes, setFilteredNotes] = useState<Array<INoteProps>>([]);

  const [filteredFavorites, setFilteredFavorites] = useState<Array<INoteProps>>(
    []
  );

  const addNote = (note: INoteProps) => setNotes([...notes, note]);

  useEffect(() => {
    api
      .get("notes")
      .then((res) => {
        setNotes(res.data);
        setFilteredNotes(res.data);
      })
      .catch((error) => console.error(error));
  }, [setNotes]);

  const handleSearchNote = (title: string) => {
    setFilteredNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  };

  const handleCreateNote = (isFavorite: boolean, data: any) => {
    isFavorite ? (data.is_favorite = true) : (data.is_favorite = false);
    data.color = "#FFFFFF";

    api
      .post("notes", data)
      .then((res) => addNote(res.data))
      .catch((error) => console.error(error));
  };

  const handleFavoritesNote = () => {
    console.log(notes.filter((note) => note.is_favorite === true))
    setFilteredFavorites(notes.filter((note) => note.is_favorite === true));
  };

  useEffect(() => {
    handleFavoritesNote();
  }, []);

  return (
    <NoteContext.Provider
      value={{
        notes,
        handleSearchNote,
        filteredNotes,
        filteredFavorites,
        handleCreateNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
