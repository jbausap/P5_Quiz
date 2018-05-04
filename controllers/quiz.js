const {models} = require("../models");

exports.index = ( req, res, next) => {
    models.quizzes.findAll()
        .then ( quizzes => {
            res.render("quizzes.js", {quizzes})

        })
        .catch( error => next (error));
}
