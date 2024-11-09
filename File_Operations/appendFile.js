const fs = require('fs');

fs.appendFile("NS.txt", " Reply Karoo.. Baiyaaa.....", "utf8", function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Done");
    }
});