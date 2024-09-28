import express from "express";
import morgan from "morgan";
import main_router from "./routes/main";

const app = express();

app.use(morgan("dev"));

// Ejemplo básico de un Middleware
app.use((_req, _res, next) => {
  console.log("Hello from the middleware");
  next();
});

app.use(express.json());

app.use("/api", main_router);

export const server = app;