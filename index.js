const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Hello NS LONI");
})

app.get("/profile", function(req, res){
    res.send("It's NS LONI Profile")
})

app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});