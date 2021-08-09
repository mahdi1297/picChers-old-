import bcrypt from "bcrypt"
const saltRounds = 10;

const hashPassword = (plainPassword) => {
  return new Promise((resolve) => {
    resolve(bcrypt.hashSync(plainPassword, saltRounds));
  });
};

const comparePassword = (plainPassword, passwordFromDb) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainPassword, passwordFromDb, function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

export {
  hashPassword,
  comparePassword,
};
