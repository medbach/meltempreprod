const UserModel = require("../models/users");

const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60 
const createToken = (id) =>{
    return jwt.sign({id},"Kishan sheth super secret key",{
        expiresIn:maxAge
    });
}

const handleErrors = (err) => {
    let errors = { email: "", password: "" };
  
    console.log(err);

    if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
    }

    if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
    }
    if (err.code === 11000) {
      errors.email = "Email is already registered";
      return errors;
    }
  
    if (err.message.includes("users validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
          console.log("properties.path => bach",properties.path);
          console.log("properties.message => bach",properties.message);
          console.log("err.errors=> bach",err.errors);
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  };


module.exports.register = async(req,res,next) =>{
    try{
        const {email,password} = req.body;
        const user = await UserModel.create({email,password});
        const token = createToken(user._id);
        res.cookie("jwt", token ,{
            withCrdentials:true,
            httpOnly:false,
            maxAge:maxAge*1000
        });
        res.status(201).json({user:user._id,created:true});
    }catch (err) {
        const errors = handleErrors(err);
        res.json({ errors, status: false });
        console.log(err);
    }
};

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.login(email, password);
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id, status: true });
    } catch (err) {
      const errors = handleErrors(err);
      res.json({ errors, status: false });
    }
  };