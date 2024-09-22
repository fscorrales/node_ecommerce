const express = require("express");
const morgan = require("morgan");
const main_router = require("./routes/main");

const app = express();

app.use(morgan("dev"));

// Ejemplo básico de un Middleware
app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
});

app.use(express.json());

app.use("/api", main_router);

module.exports = app;
