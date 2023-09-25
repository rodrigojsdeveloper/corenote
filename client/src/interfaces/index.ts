export interface INoteProps {
  id: string;
  title: string;
  description: string;
  color: string;
  is_favorite: boolean;
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
  handleCreateNote: (isFavorite: boolean, data: any) => void;
}
