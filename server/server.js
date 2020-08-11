const express = require("express");
const path = require("path");
const parseFile = require("./utils/parseFile");
const app = express();

// File URL is relative to the utils folder
const URL = "../public/words.txt";

// Read, process and sets an array variable with wordpool
let wordPool = parseFile(URL);

// Setup API Route
app.use("/autocomplete", require("./api/autocomplete")(wordPool));

// Use sample frontend
const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");
app.use(express.static(CLIENT_BUILD_PATH));

// Set server listening port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
