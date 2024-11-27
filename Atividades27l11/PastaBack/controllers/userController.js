const userModel = require("../models/userModel");

exports.getUsers = (req,res) => {
    userModel.getAllUsers((err, users1) => {
        if (err) {
            res.status(500).send("erro ao buscar usuários");
        } else {
            res.json(users1);
        }
    });
};