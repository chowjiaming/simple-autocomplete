const fs = require("fs");
const path = require("path");

module.exports = (URL) => {
  try {
    // Synchronously reads and then parses word file before server starts
    let wordFile = fs.readFileSync(path.resolve(__dirname, URL), "utf8");
    // separates all the words in text file into array
    return wordFile.split(" ");
  } catch (error) {
    throw error;
  }
};
