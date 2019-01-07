const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");
const path = require("path");

let app = express(); //call express with app

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

app.use(express.static(path.join(__dirname, "../client")));

app.listen(3000);
