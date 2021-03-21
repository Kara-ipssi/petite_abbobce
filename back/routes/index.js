const {getAnnonces, getAnnonce, createAnnonce, updateAnnonce, deleteAnnonce} = require("../controllers");

const createAnnoncesRoutes = (app) =>{
    app.get("/annonces", getAnnonces);

    app.get("/annonce/:id", getAnnonce);

    app.post("/annonce", createAnnonce);

    app.put("/annonce/:id", updateAnnonce);

    app.delete("/annonce/:id", deleteAnnonce);
};

module.exports = createAnnoncesRoutes;