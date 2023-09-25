import NoteService from "../services/note.service";
import INote from "../interfaces/note.interface";
import { Request, Response } from "express";

class NoteController {
  async create(req: Request, res: Response) {
    const data: INote = req.body;

    const newNote = await new NoteService().create(data);

    return res.status(201).json(newNote);
  }
}

export default NoteController;
