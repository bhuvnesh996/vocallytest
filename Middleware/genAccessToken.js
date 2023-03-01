const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = 'ihopeigetselected'
const genAccessToken = (user, expiry) => {
  return jwt.sign(user,ACCESS_TOKEN_SECRET, {expiresIn: expiry});
};

module.exports = genAccessToken;