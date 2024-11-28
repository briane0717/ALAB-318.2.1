const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
// const index = require("./routes/index");
// const profile = require("./routes/profile");

// Set view engine as EJS
app.set("view engine", "ejs");

//middleware to parse HTML form (url-encoded form data)
app.use(express.urlencoded({ extended: true }));

// Set up static folder
app.use(express.static(path.join(__dirname, "public")));

// Use routes
// app.use("/", index);
// app.use("/profile", profile);

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
