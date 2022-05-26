const mongoose = require ("mongoose");

const bcrypt = require ("bcrypt");

const UserShema = new mongoose.Schema({
    email :{
        type:String,
        required:[true,"Email is required"],
        unique:true,
    },
    password :{
        type:String,
        required:[true,"Password is required"],
    }
})

UserShema.pre("save",async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

UserShema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error("incorrect password");
    }
    throw Error("incorrect email");
  };

const UserModel = mongoose.model("users",UserShema)
module.exports = UserModel;