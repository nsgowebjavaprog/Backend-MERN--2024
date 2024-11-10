const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Hello NS LONI");
})

//Error Handling - inside code

app.get("/profile", function(req, res, next){
    return next(new Error("wend wrong in code"));
});

//Error Handling - screen

app.use((err, req, res, next) =>{
    console.error(err.stack)
    res.status(500).send('Something error in the code')
})

app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});