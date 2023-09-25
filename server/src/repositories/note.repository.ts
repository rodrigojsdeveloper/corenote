import { AppDataSource } from "../data-source";
import Note from "../entities/note.entity";
import { Repository } from "typeorm";

const noteRepository: Repository<Note> = AppDataSource.getRepository(Note);

export default noteRepository;
