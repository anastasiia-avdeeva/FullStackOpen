const express = require("express");
const mongoose = require("mongoose");
const config = require("./utils/config");
const blogsRouter = require("./controllers/blogs");

const app = express();

mongoose.connect(config.MONGODB_URI);

app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Blog List</h1>");
});

app.use("/api/blogs", blogsRouter);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
