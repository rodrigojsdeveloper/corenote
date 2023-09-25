export interface INoteProps {
  title: string;
  description: string;
  color: string;
  is_favorite: boolean;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface INoteContextData {
  handleSearchNote: (title: string) => void;
  filteredNotes: Array<INoteProps>;
  handleFavoriteNotes: () => void;
  filteredFavorites: Array<INoteProps>;
}
