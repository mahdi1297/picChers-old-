const {
  ImageLikeSchema,
} = require("./../data-access/schemas/imageLikesSchema");

const insertLikeImage = (clientData) => {
  if (!clientData) return false;
  return new Promise((resolve, reject) => {
    try {
      ImageLikeSchema(clientData)
        .save()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    } catch (error) {
      reject(error);
    }
  });
};

const getLikeImagesByImageId = (imageId, userId) => {
  if (!imageId) return false;
  return new Promise((resolve, reject) => {
    ImageLikeSchema.find(
      { imageId: imageId, userId: userId },
      function (error, data) {
        if (data) {
          resolve(data);
        }
        if (error) {
          reject(error);
        }
      }
    );
  });
};

const getLikeImagesByImageIdCount = (imageId) => {
  if (!imageId) return false;

  return new Promise((resolve, reject) => {
    try {
      ImageLikeSchema.countDocuments({ imageId: imageId }, (error, data) => {
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

const getLikeImagesByUserId = (userId) => {
  if (!userId) return false;
  return new Promise((resolve, reject) => {
    try {
      ImageLikeSchema.find({ imageId: userId }, (error, data) => {
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

module.exports = {
  insertLikeImage,
  getLikeImagesByImageId,
  getLikeImagesByUserId,
  getLikeImagesByImageIdCount,
};
