import { Router } from "express";

import NoteController from "../controllers/note.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";

import noteSchema from "../schemas/note.schema";

const routes = Router();

const noteRoutes = (): Router => {
  routes.post(
    "",
    schemaValidationMiddleware(noteSchema),
    new NoteController().create
  );

  routes.get("", new NoteController().list);

  return routes;
};

export default noteRoutes;
