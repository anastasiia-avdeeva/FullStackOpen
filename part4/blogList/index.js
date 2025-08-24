require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blogs");

const app = express();

const mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl);

app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Blog List</h1>");
});

// app.get("/api/blogs", (request, response) => {
//   Blog.find({}).then((blogs) => {
//     response.json(blogs);
//   });
// });

// app.post("/api/blogs", (request, response) => {
//   const blog = new Blog(request.body);

//   blog.save().then((result) => {
//     response.status(201).json(result);
//   });
// });

app.use("/api/blogs", blogsRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
