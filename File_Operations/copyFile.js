const fs = require('fs');

fs.copyFile("LONI.txt","copy.txt",  function(err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Done");
    }
});