const {BlogCategorySchema} = require("./../data-access/schemas/blogCategorySchema");

const getAllBlogCategories = () => {
  return new Promise((resolve, reject) => {
    BlogCategorySchema.find({}, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};

const insertBlogCategory = (blogCatObj) => {
  if (!blogCatObj) return false;
  return new Promise((resolve, reject) => {
    try {
      BlogCategorySchema(blogCatObj)
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

module.exports = { insertBlogCategory, getAllBlogCategories };
