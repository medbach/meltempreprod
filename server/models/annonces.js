const mongoose = require ("mongoose")

const AnnonceShema = new mongoose.Schema({
    title :{
        type:String,
        required:false,

    },
    description :{
        type:String,
        required:false,

    },
    ville :{
        type:String,
        required:false,

    },
    cp:{
        type:Number,
        required:false
    },
    prix:{
        type:Number,
        required:false
    },
    nb_pieces:{
        type:Number,
        required:false,

    },
    nb_sdb:{
        type:Number,
        required:false,

    }
})

const annonceModel = mongoose.model("annonces",AnnonceShema)
module.exports = annonceModel;