import { Express } from "express";

import noteRoutes from "./note.routes";

const appRoutes = (app: Express, endPoint: string): void => {
  app.use(`/${endPoint}/notes`, noteRoutes());
};

export { appRoutes };
