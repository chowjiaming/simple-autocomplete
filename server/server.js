const express = require("express");
const path = require("path");
const app = express();

// Setup API Route
app.use("/autocomplete", require("./api/autocomplete"));

// Use sample frontend
const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");
app.use(express.static(CLIENT_BUILD_PATH));

// Set server listening port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
