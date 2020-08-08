const fs = require("fs");

module.exports = (URL) => {
  try {
    // separates all the words in text file into array
    return fs.readFileSync(URL, "utf-8").split(" ");
  } catch (error) {
    throw error;
  }
};
