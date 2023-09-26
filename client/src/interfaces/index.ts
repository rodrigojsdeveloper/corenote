export interface INoteProps {
  id: string;
  title: string;
  description: string;
  color: string;
  is_favorite: boolean;
  created_at: string;
}

export interface INote {
  note: INoteProps;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface INoteContextData {
  handleSearchNote: (title: string) => void;
  filteredNotes: Array<INoteProps>;
  filteredFavorites: Array<INoteProps>;
  notes: Array<INoteProps>;
  handleCreateNote: (isFavorite: boolean, data: Partial<INoteProps>) => void;
  handleUpdateNote: (
    id: string,
    data: Partial<INoteProps>,
    currentNote: INoteProps
  ) => void;
  handleDeleteNote: (id: string) => void;
  handleUpdateColor: (color: string, id: string) => void;
  handleUpdateFavorite: (is_favorite: boolean, id: string) => void;
  handleUpdate: (title: string, description: string, id: string) => void;
}

export interface IMessageEmpty {
  message: string;
}
