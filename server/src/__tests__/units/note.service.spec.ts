import NoteService from "../../services/note.service";
import { AppDataSource } from "../../data-source";
import { note, updatedNote } from "../../mocks";
import { DataSource } from "typeorm";

describe("Testing all service note methods", () => {
  let connection: DataSource;
  let createdNote: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((error) =>
        console.error("Error during Data Source initialization", error)
      );

    createdNote = await new NoteService().create(note);
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to create a note", async () => {
    expect(createdNote).toHaveProperty("id");
    expect(createdNote).toHaveProperty("title");
    expect(createdNote).toHaveProperty("description");
    expect(createdNote).toHaveProperty("is_favorite");
    expect(createdNote).toHaveProperty("color");
    expect(createdNote).toHaveProperty("created_at");
    expect(createdNote).toHaveProperty("updated_at");
  });

  it("Must be able to list all notes", async () => {
    const result = await new NoteService().list();

    expect(result).toHaveProperty("map");
  });

  it("Must be able to edit a note", async () => {
    const result = await new NoteService().update(updatedNote, createdNote.id);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("is_favorite");
    expect(result).toHaveProperty("color");
    expect(result).toHaveProperty("created_at");
    expect(result).toHaveProperty("updated_at");
  });

  it("Must be able to delete a note", async () => {
    const result = await new NoteService().delete(createdNote.id);

    expect(result).toBeUndefined();
  });
});
