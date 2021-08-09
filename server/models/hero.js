const {HeroSchema} = require("./../data-access/schemas/heroSchema");

const getHeroImage = () => {
  return new Promise((resolve, reject) => {
    try {
      HeroSchema.find({}, (error, data) => {
        if (error) reject(error);
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const insertHeroImage = (image) => {
  if (!image) return false;
  return new Promise((resolve, reject) => {
    HeroSchema(image)
      .save()
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

module.exports =  { getHeroImage, insertHeroImage };
