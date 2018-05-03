const {models} = require("../models");

exports.index = ( req, res, next) => {
    models.findAll()
        .then ( quizzes => {
            res.render("quizzes.js", {quizzes})

        })
        .cacth( error => next (error));
}