import INote from "../interfaces/note.interface";

const note: INote = {
  title: "Lorem Ipsum",
  description: "Clique ou arraste o arquivo para esta área para fazer upload",
  is_favorite: true,
  color: "#FFFFFF",
};

const updatedNote: Partial<INote> = {
  is_favorite: false,
  color: "#000000",
};

export { note, updatedNote };
