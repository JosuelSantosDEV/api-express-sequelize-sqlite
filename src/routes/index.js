const express = require("express");

const people = require("./peopleRoute.js");
const category = require("./categoryRoute.js");
const course = require("./courseRoute.js");

module.exports = app => {
    app.use(
        express.json(),
        people,
        category,
        course
    );
};