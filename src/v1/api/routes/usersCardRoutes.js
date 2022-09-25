import express from "express";
import {
  createUsersCard,
  getAllUsersCard,
  showStatus,
  updateUsersCard,
  deleteService,
} from "../controllers/usersCardController.js";
const router = express.Router();

router.post("/create", createUsersCard);
router.get("/", getAllUsersCard);
router.get("/status", showStatus);
router.put("/:id", updateUsersCard);
router.delete("/:id", deleteService);

export default router;
