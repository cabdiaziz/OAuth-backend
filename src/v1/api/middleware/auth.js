import admin from "../config/firebase/firebase-config.js";

const auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    //* decoding user token from firebase auth using google provider.
    const decodeToken = await admin.auth().verifyIdToken(token);
    if (decodeToken) {
      return next();
    }
    return res.status(401).json({ msg: "Unauthorized" });
  } catch (err) {
    return res.status(500).json({ msg: "internal error" });
  }
};

export default auth;
