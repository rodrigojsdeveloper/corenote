import NoteService from "../services/note.service";
import INote from "../interfaces/note.interface";
import { Request, Response } from "express";

class NoteController {
  async create(req: Request, res: Response) {
    const data: INote = req.body;

    const newNote = await new NoteService().create(data);

    return res.status(201).json(newNote);
  }

  async list(req: Request, res: Response) {
    const notes = await new NoteService().list();

    return res.json(notes);
  }

  async update(req: Request, res: Response) {
    const id: string = req.params.id;

    const data: Partial<INote> = req.body;

    const updatedNote = await new NoteService().update(data, id);

    return res.json(updatedNote);
  }

  async delete(req: Request, res: Response) {
    const id: string = req.params.id;

    await new NoteService().delete(id);

    return res.status(204).json();
  }
}

export default NoteController;
