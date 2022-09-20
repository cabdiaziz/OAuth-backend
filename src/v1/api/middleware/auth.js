import admin from "../config/firebase/firebase-config";

const auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log("token ==", token); //* user token displa
  try {
    //* decoding user token from firebase auth using google provider.
    const decodeToken = await admin.auth().verifyIdToken(token);
    if (decodeToken) {
      console.log("user ==", req.user); //* decoded token info.
      return next();
    }
    return res.status(401).json({ msg: "Unauthorized" });
  } catch (err) {
    console.log("error is : ", err.message);
    return res.status(500).json({ msg: "internal error" });
  }
};

module.exports = auth;
