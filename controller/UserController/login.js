
const genAccessToken = require('../../Middleware/genAccessToken')

const loginUser = async (req, res, next) => {
    try {
      const {Username, Password} = req.body;
      const user = await User.findOne({Username:Username});
      if (!user) {
        throw new ApiError(`User with email ${Username} does not exist`, 404);
      }
      //console.log("????",user)
     
      const verified = await bcrypt.compare(Password, user.Password);
      if (!verified) {
        throw new ApiError(`Invalid password`, 403);
      }
      if (verified) {
        const accessToken = genAccessToken(
          {
            Username: user.Username,
        },'3d'
        );
        await user.save();
        res.status(200).json({
          Error: false,
          Message: 'Successfully logged in.',
          AccessToken: accessToken,
          AccessTokenExpiry: '1h',
          User: {
            Username: user.Username,
          },
        });
      }
    } catch (err) {
      return next(err);
    }
  };
  module.exports = loginUser;