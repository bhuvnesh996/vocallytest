
const jwt = require('jsonwebtoken');


const ACCESS_TOKEN_SECRET = 'ihopeigetselected'
const verifyAccessToken = (token) => {
  if (!token) {
    throw new ApiError('Token Not Found', 401);
  }
  let decodedUser = null;
  let myErr = null;
  jwt.verify(token,ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      
      return;
    }
    decodedUser = user;
  });

  if (myErr) {
    throw myErr;
  }
  return decodedUser;
};

module.exports = verifyAccessToken;