const { UserSchema } = require("./../data-access/schemas/userSChema");
const { ImagesSchema } = require("./../data-access/schemas/imagesSchema");

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    UserSchema.find({}, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};

const updateUser = (id, objectToUpdate) => {
  if (!id || !objectToUpdate) return false;
  
  const username = objectToUpdate.username;
  const name = objectToUpdate.name;
  const lastname = objectToUpdate.lastname;
  const description = objectToUpdate.description;
  const profileimage = objectToUpdate.profileimage;
  const permission = objectToUpdate.permission;

  return new Promise((resolve, reject) => {
    UserSchema.findOneAndUpdate(
      { _id: id },
      {
        username: username,
        name: name,
        lastname: lastname,
        description: description,
        profileimage: profileimage,
        permission: permission,
      },
      (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      }
    );
  });
};

const getUserByUsername = (username) => {
  if (!username) return false;
  return new Promise((resolve, reject) => {
    try {
      UserSchema.findOne({ username: username }, (error, data) => {
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

const getUserByUsernameAndEmail = (username, email) => {
  if (!username || !email) return false;
  return new Promise((resolve, reject) => {
    try {
      UserSchema.findOne({ username: username, email: email }, (error, data) => {
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

const getUserById = (_id) => {
  if (!_id) return false;
  return new Promise((resolve, reject) => {
    try {
      UserSchema.findOne({ _id: _id }, (error, data) => {
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
const getImagesCreatedByUser = (_id) => {
  return new Promise((resolve, reject) => {
    try {
      ImagesSchema.find({ ownerId: _id }, (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      }).count();
    } catch (error) {
      reject(error);
    }
  });
};

const insertUser = (imageObj) => {
  return new Promise((resolve, reject) => {
    UserSchema(imageObj)
      .save()
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

module.exports = {
  getAllUsers,
  getUserByUsername,
  insertUser,
  getUserById,
  updateUser,
  getImagesCreatedByUser,
  getUserByUsernameAndEmail
};
