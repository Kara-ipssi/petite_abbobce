const Annonce = require("../models");

const getAnnonce = (req, res, next) =>{
    let id = req.params.id;

    Annonce.findById(id)
        .then((annonce)=>{
            res.send(annonce);
        })
        .catch(next);
}

const getAnnonces = (req, res, next) =>{
    Annonce.find()
        .then((annonces)=>{
            res.send(annonces);
        })
        .catch(next);
}

const createAnnonce = (req, res, next) =>{
    let annonce = req.body;

    Annonce.create(annonce)
        .then((newAnnonce)=>{
            res.send(newAnnonce);
        })
        .catch(next);
}

const updateAnnonce = (req, res, next) =>{
    let id = req.params.id;
    let annonce = req.body;

    Annonce.findByIdAndUpdate(id, annonce)
        .then((updatedAnnonce)=>{
            Annonce.findById(updatedAnnonce._id)
                .then((annonce)=>{
                    res.send(annonce);
                })
                .catch(next);
        })
        .catch(next);
}

const deleteAnnonce = (req, res, next) =>{
    let {id} = req.params;

    Annonce.findByIdAndDelete(id)
        .then((deletedAnnonce)=>{
            res.send(deletedAnnonce)
        })
        .catch(next);
}

module.exports = {getAnnonce, getAnnonces, updateAnnonce, deleteAnnonce, createAnnonce};