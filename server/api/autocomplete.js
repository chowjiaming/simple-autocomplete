const express = require("express");
const router = express.Router();
const parseFile = require("../utils/parseFile");

module.exports = (wordPool) => {
  // Returns empty array if empty string query is sent
  router.get("/", (req, res) => {
    res.json({ results: [] });
  });
  // Returns relevant results as array object
  router.get("/:partial", (req, res) => {
    // reads file and filters out just the words that start with query
    let results = wordPool.filter((words) => {
      return words.startsWith(req.params.partial);
    });
    res.json({ results });
  });
  return router;
};
