require("./settings");
const express = require("express");
const path = require("path");
const app = express();
const port = setting.PORT || 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the home page
app.get("/", (req, res) => res.render("index"));

// Start the server
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
