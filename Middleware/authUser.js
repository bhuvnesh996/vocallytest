const verifyAccessToken = require('./verfiyToken');


const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    // console.log('tokenn', token);
    const user = verifyAccessToken(token);
    if (user.role === 'user') {
      req.user = user;
      console.log('access token authenticated');
      return next();
    }
    
  } catch (err) {
    next(err);
  }
};
module.exports = authenticateUser