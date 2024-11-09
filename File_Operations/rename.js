const fs = require('fs');

fs.rename("NS.txt", "LONI.txt", function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Done");
    }
});