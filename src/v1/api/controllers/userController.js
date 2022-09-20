import User from "../models/user.js";
// const User = require("../models/user.js");
const login = async (req, res) => {
  try {
    //needs a validation here. with joi.
    const user = await User.findOne(req.body.email);
    console.log("User Email", user);
    if (!user) return res.status(400).send({ msg: "Unauthorized" });

    return res.status(200).json({ user: user });
  } catch (error) {
    console.log("Error : ", error.message);
    return res.status(500).json(error.message);
  }
};
const register = (req, res) => {
  res.json({ msg: "register user" });
};
const updateUser = (req, res) => {
  res.json({ msg: "update user" });
};

export { login, register, updateUser };
