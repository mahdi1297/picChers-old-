const { BlogSchema } = require("./../data-access/schemas/blogScehma");

const getAllBlogs = () => {
  return new Promise((resolve, reject) => {
    try {
      BlogSchema.find(
        {},
        { content: 0, description: 0, mainimage: 0 },
        (error, data) => {
          if (error) reject(error);
          resolve(data);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};
const getAllBlogsByPagination = (limit, skip) => {
  if (!limit || !skip) return false;
  return new Promise((resolve, reject) => {
    try {
      BlogSchema.find(
        {},
        { content: 0, description: 0, mainimage: 0 },
        (error, data) => {
          if (error) reject(error);
          resolve(data);
        }
      )
        .limit(limit)
        .skip(skip);
    } catch (error) {
      reject(error);
    }
  });
};

const getBlogBySlug = (slug) => {
  if (!slug) return false;

  return new Promise((resolve, reject) => {
    try {
      BlogSchema.find({ slug: slug }, (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

const updateBlog = (blogObj, slug) => {
  if (!blogObj || !slug) return false;
  return new Promise((resolve, reject) => {
    BlogSchema.findOneAndUpdate({ slug: slug }, blogObj, (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
};

const createBlog = (blogObj) => {
  if (!blogObj) return false;
  return new Promise((resolve, reject) => {
    try {
      BlogSchema(blogObj)
        .save()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getAllBlogsByPagination,
  getAllBlogs,
  createBlog,
  getBlogBySlug,
  updateBlog,
};
