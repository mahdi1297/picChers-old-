var jwt = require("jsonwebtoken");

const signJwt = (username, email) => {
  return jwt.sign({ username: username, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '2d'
  });
};

module.exports = { signJwt };
