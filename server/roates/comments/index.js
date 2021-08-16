const express =require( "express")
const {
  insertComment,
  getCommentsBySlug,
  confirmComment,
  getAllComments,
  removeComment,
}  =require ("./../../models/comments")
const { body, param, validationResult }  =require ("express-validator")

const route = express.Router();


route.get("/", async (req, res) => {
  try {
    const response = await getAllComments();
    res.json({ response });
  } catch (error) {
    return res.status(404).json({ message: "Some bad things happened" });
  }
});

route.get(
  "/:blogSlug",
  param("blogSlug").exists().isLength({ min: 5, max: 3000 }),
  async (req, res) => {
    const blogSlug = req.params.blogSlug;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }

    const response = await getCommentsBySlug(blogSlug);
    res.json({ response });
  }
);

route.post(
  "/confirm-comment",
  body("isConfirmed").exists().isBoolean(),
  body("_id").exists(),
  async (req, res) => {
    const isConfirmed = req.body.isConfirmed;
    const _id = req.body._id;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }

    const request = await confirmComment(_id, isConfirmed);
    res.json({ message: "done successfully", request });
  }
);

route.post(
  "/indicate-comment",
  body("isRemoved").exists().isBoolean(),
  body("_id").exists(),
  async (req, res) => {
    const isRemoved = req.body.isRemoved;
    const _id = req.body._id;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }

    const request = await removeComment(_id, isRemoved);
    res.json({ message: "done successfully", request });
  }
);

route.post(
  "/",
  body("blogSlug").exists().isLength({ min: 2, max: 3000 }),
  body("name").exists().isLength({ min: 2, max: 250 }),
  body("lastname").exists().isLength({ min: 2, max: 250 }),
  body("profileimage").exists().isLength({ min: 2, max: 3000 }),
  body("content").exists().isLength({ min: 2, max: 50000 }),
  async (req, res) => {
    const datas = {
      blogSlug: req.body.blogSlug,
      name: req.body.name,
      lastname: req.body.lastname,
      profileimage: req.body.profileimage,
      content: req.body.content,
    };
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Something wrong happened",
        errors: errors.array(),
      });
    }

    try {
      const response = await insertComment(datas);

      res.json({ message: "comment submited successfully", response });
    } catch (error) {
      return res.status(400).json({ message: "bad request" });
    }
  }
);

module.exports = route;