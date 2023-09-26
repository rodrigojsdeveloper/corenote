import noteRepository from "../repositories/note.repository";
import { NotFoundError } from "../errors/notFound.error";
import INote from "../interfaces/note.interface";
import Note from "../entities/note.entity";

class NoteService {
  async create(note: INote): Promise<Note> {
    const newNote = new Note();
    newNote.title = note.title;
    newNote.description = note.description;
    newNote.is_favorite = note.is_favorite;
    newNote.color = note.color;

    noteRepository.create(newNote);
    await noteRepository.save(newNote);

    return newNote;
  }

  async list(): Promise<ReadonlyArray<Note>> {
    const notes = await noteRepository.find();

    return notes;
  }

  async update(note: Partial<INote>, id: string): Promise<Note> {
    const findNote = await noteRepository.findOneBy({ id });

    if (!findNote) {
      throw new NotFoundError("Note");
    }

    let updatedIsFavorite: boolean;

    if (typeof note.is_favorite === "boolean") {
      updatedIsFavorite = note.is_favorite;
    } else {
      updatedIsFavorite = findNote.is_favorite;
    }

    await noteRepository.update(findNote.id, {
      title: note.title ? note.title : findNote.title,
      description: note.description ? note.description : findNote.description,
      is_favorite: updatedIsFavorite,
      color: note.color ? note.color : findNote.color,
    });

    const updatedNote = await noteRepository.findOneBy({
      id: findNote.id,
    });

    return updatedNote!;
  }

  async delete(id: string): Promise<void> {
    const note = await noteRepository.findOneBy({ id });

    if (!note) {
      throw new NotFoundError("Note");
    }

    await noteRepository.delete(note!.id);
  }
}

export default NoteService;
