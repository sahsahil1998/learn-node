const fs = require("fs");
fs.readFile("./operations/data.txt", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
    // Only delete the file after it has been read
    try {
      fs.unlinkSync("./operations/data.txt"); // delete the file
      console.log("File deleted successfully.");
    } catch (deleteErr) {
      console.log(deleteErr.message);
    }
  }
});
