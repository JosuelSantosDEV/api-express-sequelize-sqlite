const express = require("express");

const people = require("./peopleRoute.js");
const category = require("./categoryRoute.js");

module.exports = app => {
    app.use(
        express.json(),
        people,
        category
    );
};