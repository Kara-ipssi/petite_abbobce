const express = require("express");
const fetch = require("node-fetch");


const app = express();

app.set("view engine", "ejs");
//app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.redirect("/annonces");
});

app.get("/create", (req, res)=>{
    res.render("pages/creationAnnonce");
})

app.get('/annonces', (req, res)=>{
    fetch("http://127.0.0.1:3000/annonces", {
        headers: { "Content-Type": "application/json" },
    })
        .then((annonces)=>{
            return annonces.json();
        })
        .then((json)=>{
            //console.log(json);
            res.render("pages/annonces", {annonces: json});
        })
        .catch((error) => console.log(error));
})

app.get('/annonce/:id/afficher', (req, res)=>{
    fetch(`http://127.0.0.1:3000/annonce/${req.params.id}`)
        .then((annonce)=>{
            return annonce.json();
        })
        .then((json)=>{
            //console.log(json);
            res.render("pages/annonce", {annonce: json});
        })
        .catch((error) => console.log(error));
})

app.get("/annonce/:id/modifier", (req, res) => {
    fetch(`http://127.0.0.1:3000/annonce/${req.params.id}`)
        .then((annonce)=>{
            return annonce.json();
        })
        .then((json)=>{
            res.render("pages/modificationAnnonce", {annonce: json});
        })
        .catch((error) => console.log(error));
})

app.listen(4000, "127.0.0.1", ()=>{
    console.log("Application is running");
})