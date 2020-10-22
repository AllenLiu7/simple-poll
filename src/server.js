const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const polldata = require("./data.json");



const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/polldata", function(req, res) {
    res.send(polldata);    
})

app.post("./vote", function(req, res){
    if(req.body){
        fs.writeFileSync(polldata, JSON.stringify(req.body))
        res.send({message: "data saved"})
    } else {
        res.status(400).send({
            message: "No data is saved"
        })
    }
})



app.listen(5000, () => console.log("Server Running...")); 