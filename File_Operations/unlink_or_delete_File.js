const fs = require('fs');

fs.unlink("unlink_or_delete.txt", function(err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Removed");
    }
});