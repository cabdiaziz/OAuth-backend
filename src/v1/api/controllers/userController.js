import User from "../models/user.js";

const login = async (req, res) => {
  try {
    //needs a validation here. with joi.
    const user = await User.findOne(req.body.email);
    if (!user) return res.status(401).send({ msg: "Unauthorized" });

    return res.status(200).json({ user: user });
  } catch (error) {
    console.log("Error : ", error.message);
    return res.status(500).json(error.message);
  }
};
const register = async (req, res) => {
  try {
    //needs a validation here. with joi.
    const { email } = req.body.user;
    const user = await User.findOne({ email });
    if (user) return res.status(200).send({ msg: "you are already registerd" });

    const newUser = await new User(req.body.user);
    newUser.userName = req.body.user.userName;

    return newUser
      .save()
      .then(() => {
        return res.status(201).json({ newUser });
      })
      .catch((err) => {
        return res.status(400).json(err.message);
      });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const updateUser = (req, res) => {
  res.json({ msg: "update user" });
};

export { login, register, updateUser };
