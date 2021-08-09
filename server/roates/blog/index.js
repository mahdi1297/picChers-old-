const express =require( "express")
const {
  getAllBlogsByPagination,
  createBlog,
  getBlogBySlug,
  getAllBlogs,
  updateBlog,
} =require("./../../models/blog");
const {
  insertBlogCategoryToDb,
  getAllImages,
} = require("./../../models/blogCategory");
const { body, param, query, validationResult } = require("express-validator");

const route = express.Router();

route.get("/", (req, res) => {
  res.json({ message: "this is home blog" });
});

route.get(
  "/all-blogs/pagination",
  query("limit").exists().isNumeric(),
  query("skip").exists().isNumeric(),
  async (req, res) => {
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Something wrong happened",
        errors: errors.array(),
      });
    }

    const blogs = await getAllBlogsByPagination(limit, skip);
    return res.status(200).json({ message: "this are the blogs", blogs });
  }
);

route.get("/all-blogs", async (req, res) => {
  const blogs = await getAllBlogs();
  if (!blogs || blogs.length === 0)
    return res.status(404).json({ message: "no blog found" });
  res.json({ blogs });
});

route.get("/blog-categories", async (req, res) => {
  const categories = await getAllImages();
  if (!categories || categories.length === 0)
    return res.status(404).json({ message: "no blog found" });
  res.json({ categories });
});

route.get(
  "/:slug",
  param("slug").exists().isLength({ min: 5, max: 3000 }),
  async (req, res) => {
    const slug = req.params.slug;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Something wrong happened",
        errors: errors.array(),
      });
    }

    try {
      const getSlug = await getBlogBySlug(slug);
      if (getSlug.length === 0)
        return res.status(404).json({ message: "blog not found" });
      res.json({ message: "blog is found successfully", getSlug });
    } catch (error) {
      res.status(400).json({ message: "something wrong happend" });
    }
  }
);

route.post(
  "/update-blog",
  body("slug").exists().isLength({ min: 5, max: 3000 }),
  async (req, res) => {
    const blogObj = req.body;
    const slug = blogObj.slug;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Something wrong happened",
        errors: errors.array(),
      });
    }

    const request = await updateBlog(blogObj, slug);
    res.json({ message: "ok", request });
  }
);

route.post(
  "/new-blog",
  body("blogObject").exists().isLength({ min: 5, max: 3000 }),
  async (req, res) => {
    const blogObject = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Something wrong happened",
        errors: errors.array(),
      });
    }
    try {
      const blogCreator = await createBlog(blogObject);
      res.json({ message: "blog created successfully", blogCreator });
    } catch (err) {
      return res.status(400).json({ message: "please use a unique title" });
    }
  }
);

route.post("/blog-category", async (req, res) => {
  const blogCategoryObj = req.body;
  if (!blogCategoryObj) return res.status(400).json({ message: "Bad Request" });
  const createblogCategory = await insertBlogCategoryToDb(blogCategoryObj);
  if (!createblogCategory)
    return res.status(400).json({ message: "Bad Request" });
  res.json({
    message: "Blog category created successfully",
    createblogCategory,
  });
});

module.exports = route;
