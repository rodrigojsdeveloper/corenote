import { Express } from "express";

import noteRoutes from "./note.routes";
import termsRoutes from "./terms.routes";

import SwaggerDocs from "../../docs/swagger.json";
import SwaggerUi from "swagger-ui-express";

const appRoutes = (app: Express, endPoint: string): void => {
  app.use(`/${endPoint}/notes`, noteRoutes());
  app.use(`/${endPoint}/terms`, termsRoutes());
  app.use(`/${endPoint}/docs`, SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs));
};

export { appRoutes };
