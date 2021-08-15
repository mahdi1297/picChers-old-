const {
  ImageCategorySceham,
} = require("./../data-access/schemas/imageCategoryScehama");

const getAll = async () => {
  return new Promise((resolve, reject) => {
    try {
      ImageCategorySceham.find({}, (error, data) => {
        if (error) reject(error);
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getSuitable = async () => {
  return new Promise((resolve, reject) => {
    try {
      ImageCategorySceham.find({ isRemoved: false }, (error, data) => {
        if (error) reject(error);
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};
const getByTitle = async (title) => {
  if (!title) return false;
  const regex = new RegExp(title, "i");
  return new Promise((resolve, reject) => {
    try {
      ImageCategorySceham.find(
        { title: { $regex: regex }, isRemoved: false },
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
const getBySlug = async (slug) => {
  if (!slug) return false;
  const regex = new RegExp(slug, "i");
  return new Promise((resolve, reject) => {
    try {
      ImageCategorySceham.find(
        { slug: { $regex: regex }, isRemoved: false },
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

const create = async (imageCategory) => {
  if (!imageCategory) return false;

  return new Promise((resolve, reject) => {
    try {
      ImageCategorySceham(imageCategory)
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

const update = (_id, isRemoved) => {
  if (!_id) return false;
  return new Promise((resolve, reject) => {
    ImageCategorySceham.findOneAndUpdate(
      { _id: _id },
      { isRemoved: isRemoved },
      { new: true },
      (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      }
    );
  });
};

module.exports = { getSuitable, getAll, create, update, getByTitle, getBySlug };
