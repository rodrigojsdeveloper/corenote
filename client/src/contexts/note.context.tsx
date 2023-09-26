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

  const addNote = (note: INoteProps) => {
    if (note.is_favorite) {
      setFilteredFavorites([note, ...filteredFavorites]);
    } else {
      setFilteredNotes([note, ...filteredNotes]);
    }
  };

  useEffect(() => {
    api
      .get("notes")
      .then((res) => {
        const filteredNotFavorites = res.data.filter(
          (note: INoteProps) => note.is_favorite !== true
        );

        const filteredFavorites = res.data.filter(
          (note: INoteProps) => note.is_favorite === true
        );

        filteredNotFavorites.sort((a: INoteProps, b: INoteProps) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateB.getTime() - dateA.getTime();
        });

        filteredFavorites.sort((a: INoteProps, b: INoteProps) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateB.getTime() - dateA.getTime();
        });

        setNotes(filteredNotFavorites);
        setFilteredNotes(filteredNotFavorites);
        setFilteredFavorites(filteredFavorites);
      })
      .catch((error) => console.error(error));
  }, [setNotes]);

  const handleSearchNote = (title: string) => {
    setFilteredNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(title.toLowerCase())
      )
    );

    setFilteredFavorites(
      filteredFavorites.filter((note) =>
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
