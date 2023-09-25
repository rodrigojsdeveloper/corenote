import { Router } from "express";

import NoteController from "../controllers/note.controller";

const routes = Router();

const noteRoutes = (): Router => {
  routes.post("", new NoteController().create);

  return routes;
};

export default noteRoutes;
