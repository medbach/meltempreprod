const mongoose = require ("mongoose")

const ContactShema = new mongoose.Schema({
    nom :{
        type:String,
        required:false,
    },
    prenom :{
        type:String,
        required:false,
    },
    email :{
        type:String,
        required:[false,"email required"],
        unique:true,
    },
    password :{
        type:String,
        required:[false,"password required"],
    },
    telephone :{
        type:String,
        required:false,
    },
    message :{
        type:String,
        required:false,
    }
})

const contactModel = mongoose.model("contacts",ContactShema)
module.exports = contactModel;