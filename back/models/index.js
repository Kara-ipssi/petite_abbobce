const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnnonceSchema = new Schema({
    titre:{
        type: String,
    },
    description:{
        type: String,
    },
    adresse:{
        type: String,
    },
    code_postal:{
        type: Number,
    },
    ville:{
        type: String,
    },
    prix:{
        type: Number,
    },
    image:{
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",
    }
});

const Annonce = mongoose.model("annonce", AnnonceSchema);

module.exports = Annonce;