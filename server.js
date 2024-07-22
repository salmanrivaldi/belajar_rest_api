const express = require("express");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoutes = require("./apps/routes/user.route");

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
const { NODE_ENV } = process.env;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.send("Welcome to my API!");
});

// const routesDirectory = "./routers/";
// const routes = fs
//   .readdirSync(routesDirectory)
//   .filter((file) => file.endsWith(".routes.js"))
//   .map((file) => [`/${file.replace(".routes.js", "")}`, require(path.join(__dirname, routesDirectory, file))]);

app.use("/users", userRoutes);

module.exports = app.listen(port, () => {
  process.stdout.write(`Active Port: ${port} \n`);
  process.stdout.write(`Environment: ${NODE_ENV} \n`);
});
