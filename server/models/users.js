import UserSchema from "./../data-access/schemas/userSChema";

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
          console.log(error);
        }
        resolve(data);
        console.log(data);
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

const insertUser = (imageObj) => {
  return new Promise((resolve, reject) => {
    UserSchema(imageObj)
      .save()
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};

export { getAllUsers, getUserByUsername, insertUser, getUserById, updateUser };
