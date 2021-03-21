const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

let errorhandler = require('errorhandler');

const createAnnoncesRoutes = require("./routes");

mongoose.connect("mongodb://localhost:27017/immo", { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

const app = express();

app.use(errorhandler({ dumpExceptions: true, showStack: true }));
app.use(bodyParser.json());
app.use(cors());

createAnnoncesRoutes(app);


app.listen(3000, "localhost", () => {
    console.log("server is Running");
});

