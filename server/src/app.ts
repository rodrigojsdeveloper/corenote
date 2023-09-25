import express from "express";
import cors from "cors";
import "dotenv/config";
import { appRoutes } from "./routes";

const app = express();
app.use(express.json());

app.use(cors());

app.disable("x-powered-by");

appRoutes(app, "api");

export { app };
