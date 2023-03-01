const User =  require('../../models/User')

const registerUser = async (req, res, next) => {
    try {
      const {username, password} = req.body;
      //validation on request
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new User({
        Username,
        Password: hashedPassword,
      });
      const createdUser = await user.save();
    
      res.status(201).json({
        Error: false,
        Message: 'User created successfully',
        User: {
          Username: createdUser.Username,
          
        },
      });
    } catch (err) {
      if (err.code === 11000) {
        return next(
          new ApiError(
            `${req.body.email} is already registered! Please Login to continue`,
            409
          )
        );
      }
      return next(err);
    }
  };
  
module.exports = registerUser;