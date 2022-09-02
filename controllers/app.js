//Jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");


const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname, "../public"));
app.set("views", "../views");


app.use(express.json());

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about",(req, res) => {
    res.render("about");
});

const PORT = process.env.PORT || 6969;

app.listen (PORT, () =>{
    console.log("Server started on http://localhost:6969/");
});