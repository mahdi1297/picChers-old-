const express = require("express");
const route = express.Router();
const {
  insertComment,
  getCommentsBySlug,
  confirmComment,
  getAllComments,
  removeComment,
} = require("./../../models/comments");

route.get("/", async (req, res) => {
  try {
    const response = await getAllComments();
    res.json({ response });
  } catch (error) {
    return res.status(404).json({ message: "Some bad things happened" });
  }
});

route.get("/:blogSlug", async (req, res) => {
  const blogSlug = req.params.blogSlug;
  if (!blogSlug) return res.status(400).json({ message: "bad request" });
  const response = await getCommentsBySlug(blogSlug);
  res.json({ response });
});

route.post("/confirm-comment", async (req, res) => {
  const isConfirmed = req.body.isConfirmed;
  const _id = req.body._id;
  if (!_id) return res.status(400).json({ message: "bad request" });
  const request = await confirmComment(_id, isConfirmed);
  res.json({ message: "done successfully", request });
});

route.post("/indicate-comment", async (req, res) => {
  const isRemoved = req.body.isRemoved;
  const _id = req.body._id;
  if (!_id) return res.status(400).json({ message: "bad request" });
  const request = await removeComment(_id, isRemoved);
  res.json({ message: "done successfully", request });
});

route.post("/", async (req, res) => {
  const datas = {
    blogSlug: req.body.blogSlug,
    name: req.body.name,
    lastname: req.body.lastname,
    profileimage: req.body.profileimage,
    content: req.body.content,
    // likes: 0,
    // creationDate: req.body.creationDate,
  };
  if (!datas) {
    return res.status(400).json({ message: "Bad request" });
  }
  try {
    const response = await insertComment(datas);

    res.json({ message: "comment submited successfully", response });
  } catch (error) {
    return res.status(400).json({ message: "bad request" });
  }
});

module.exports = route;
