const {models} = require("../models");

exports.index = ( req, res, next) => {
    models.quiz.findAll()
    .then ( quizzes => {
        res.render("quizzes", {quizzes})
    })
    .catch( error => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",error);
        next(error);
    });
};
