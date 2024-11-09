const fs = require('fs');

fs.writeFile("NS.txt", "Hello NS Loni GM/GN", function(err){

    if(err) {
        console.error(err);
    }
    else {
        console.log("Done");
    }
});