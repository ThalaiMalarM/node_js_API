const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.login = async (req, res) => {
    const { email } = req.body;
    const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: "1h"});

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "Lax",
        secure: false,
    });
    res.json({message: "Logged in Successfully", token});
};