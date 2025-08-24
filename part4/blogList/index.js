const express = require("express");
const mongoose = require("mongoose");
const config = require("./utils/config");
const blogsRouter = require("./controllers/blogs");
const logger = require("./utils/logger");

const app = express();

mongoose
  .connect(config.MONGODB_URI)
  .then((result) => {
    logger.info(result);
    logger.info("Connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Blog List</h1>");
});

app.use("/api/blogs", blogsRouter);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
