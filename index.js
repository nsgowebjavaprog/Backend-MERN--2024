const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
// Set up view engine
app.set('view engine', 'ejs');

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Route setup
app.get('/', function(req, res){
   fstat.readdir(`./files`, function(err, files){
    res.render("index", {files: files});
   })
})
//store file name = df df df ==> dfdfdf.txt
app.get('/create', function(req, res){
    fstat.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/");
    })
})

app.listen(3000);