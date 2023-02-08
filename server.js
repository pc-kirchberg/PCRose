const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://FlorianB:FlorianB@cluster0.2li1o79.mongodb.net/MainDB', { useNewUrlParser: true }, { useUnifiedTopology: true })

//create a data schema

const mainSchema = {
    name: String,
    P2: String,
    P3: String
}

const Main = mongoose.model("Main", mainSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    let newMain = new Main({
        name: req.body.name,
        P2: req.body.P2,
        P3: req.body.P3
    });
    newMain.save();
    res.redirect("/");
})

app.listen(3000, function() {
    console.log('Server is running on port 3000');
})