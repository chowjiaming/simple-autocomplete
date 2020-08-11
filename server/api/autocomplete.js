const express = require("express");
const router = express.Router();
const readFile = require("../utils/parseFile");

// Set text file path here
const URL = "public/words.txt";

// Returns relevant results as array object 
router.get("/:partial", (req, res) => {
  // reads file and filters out just the words that start with query
  let results = readFile(URL).filter((words) => {
    return words.startsWith(req.params.partial);
  });
  res.json({ results });
});

// Returns empty array if empty string query is sent
router.get("/", (req, res) => {
  res.json({ results: [] });
});

module.exports = router;
