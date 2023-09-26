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
          const dateA = new Date(a.updated_at);
          const dateB = new Date(b.updated_at);
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
      .catch((error) => console.error(error))
  }, [notes, filteredNotes, filteredFavorites]);

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

  const handleCreateNote = (isFavorite: boolean, data: Partial<INoteProps>) => {
    isFavorite ? (data.is_favorite = true) : (data.is_favorite = false);
    data.color = "#FFFFFF";

    api
      .post("notes", data)
      .then((res) => addNote(res.data))
      .catch((error) => console.error(error));
  };

  const handleUpdateNote = (
    id: string,
    data: Partial<INoteProps>,
    currentNote: INoteProps
  ) => {
    api
      .patch(`notes/${id}`, data)
      .then(() => {
        const newNote = { ...currentNote };

        const newListNotes = filteredNotes.filter(
          (note) => note.id !== currentNote.id
        );

        setFilteredNotes([newNote, ...newListNotes]);
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteNote = (id: string) => {
    api
      .delete(`notes/${id}`)
      .then(() => {
        setFilteredFavorites(
          filteredFavorites.filter((note) => note.id !== id)
        );
        setFilteredNotes(filteredNotes.filter((note) => note.id !== id));
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateColor = (color: string, id: string) => {
    api
      .patch(`notes/${id}`, { color })
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleUpdateFavorite = (is_favorite: boolean, id: string) => {
    api
      .patch(`notes/${id}`, { is_favorite })
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleUpdate = (title: string, description: string, id: string) => {
    api
      .patch(`notes/${id}`, { title, description })
      .then(() => {})
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
        handleUpdateNote,
        handleDeleteNote,
        handleUpdateColor,
        handleUpdateFavorite,
        handleUpdate,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
