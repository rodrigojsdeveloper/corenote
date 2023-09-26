import { AppDataSource } from "../../data-source";
import { note, updatedNote } from "../../mocks";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";

describe("Testing all note routes", () => {
  let connection: DataSource;
  let createdNote: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );

    createdNote = await request(app).post("/api/notes").send(note);
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a note", async () => {
    expect(createdNote.status).toBe(201);
    expect(createdNote.body).toHaveProperty("id");
    expect(createdNote.body).toHaveProperty("title");
    expect(createdNote.body).toHaveProperty("description");
    expect(createdNote.body).toHaveProperty("is_favorite");
    expect(createdNote.body).toHaveProperty("color");
    expect(createdNote.body).toHaveProperty("created_at");
    expect(createdNote.body).toHaveProperty("updated_at");
  });

  test("Must be able to list all notes", async () => {
    const response = await request(app).get("/api/notes");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Must be able to edit a note", async () => {
    const response = await request(app)
      .patch(`/api/notes/${createdNote.body.id}`)
      .send(updatedNote);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("is_favorite");
    expect(response.body).toHaveProperty("color");
    expect(response.body).toHaveProperty("created_at");
    expect(response.body).toHaveProperty("updated_at");
  });

  test("Must be able to prevent editing a note with invalid id", async () => {
    const response = await request(app)
      .patch("/api/notes/05a429c8-ca25-4007-8854-25c25f734167")
      .send(updatedNote);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to delete a note", async () => {
    const response = await request(app).delete(
      `/api/notes/${createdNote.body.id}`
    );

    expect(response.status).toBe(204);
  });

  test("Must be able to prevent deleting a note with invalid id", async () => {
    const response = await request(app).delete(
      "/api/notes/05a429c8-ca25-4007-8854-25c25f734167"
    );

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });
});
