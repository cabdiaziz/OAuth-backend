import express from "express";
import { login, register, updateUser } from "../controllers/userController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/login", auth, login);
router.post("/signup", register);
router.put("/updateUser", auth, updateUser);

export default router;
