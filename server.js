const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");

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
  connection.query("SELECT * FROM user", (err, data) => {
    console.table(data);
  });
  res.render("index", { name: "Vincent Kendrick" });
});

// API ROUTES
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
