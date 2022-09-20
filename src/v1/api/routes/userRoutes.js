import express from "express";
import { login, register, updateUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/login", login);
router.post("/signup", register);
router.put("/updateUser", updateUser);

export default router;
