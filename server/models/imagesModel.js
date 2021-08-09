import ImagesSchema from "./../data-access/schemas/imagesSchema";

const getImageById = (_id) => {
  if (!_id) return false;
  return new Promise((resolve, reject) => {
    try {
      ImagesSchema.findOne({ _id: _id }, (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAllImages = () => {
  return new Promise((resolve, reject) => {
    ImagesSchema.find({}, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};
const getRelatedImages = (category) => {
  if (!category) return false;

  return new Promise((resolve, reject) => {
    ImagesSchema.find({ tags: { $in: [category] } }, (err, data) => {
      if (err) {
        reject(err);
        console.log(err);
      }
      resolve(data);
      console.log(data);
    });
  });
};
const insertImage = (imageObj) => {
  return new Promise((resolve, reject) => {
    ImagesSchema(imageObj)
      .save()
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

const getUserByOwnerId = (ownerId) => {
  if (!ownerId) return false;
  return new Promise((resolve, reject) => {
    try {
      ImagesSchema.find({ ownerId: ownerId }, (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const updateImageByLike = (imageId, likes) => {
  if (!likes) return false;
  return new Promise((resolve, reject) => {
    ImagesSchema.findOneAndUpdate(
      { _id: imageId },
      { likes: likes },
      (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      }
    );
  });
};

export {
  getImageById,
  insertImage,
  getAllImages,
  getRelatedImages,
  getUserByOwnerId,
  updateImageByLike,
};
