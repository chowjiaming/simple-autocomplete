const express = require("express");
const path = require("path");
const app = express();

// Setup API Route
app.use("/autocomplete", require("./api/autocomplete"));

// Use sample frontend
app.use(express.static("sample-frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "sample-frontend", "build", "index.html"));
});

// Set server listening port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
