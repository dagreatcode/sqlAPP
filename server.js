const express = require("express");
const exphbs = require("express-handlebars");
// const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

// MIDDLEWEAR //
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// VIEW ROUTES //
app.get("/", (req, res) => {
  res.render("index");
});
// app.get("/home", (req, res) => {
//   res.render("home");
// });
// app.get("/about-us", (req, res) => {
//     res.render("about-us");
//   });

// API ROUTES
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
