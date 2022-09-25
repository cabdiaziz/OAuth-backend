import usersCard from "../models/usersCard.js";
import { serchCardExpireDates } from "../functions/functions.js";
const getAllUsersCard = (req, res) => {
  res.json({ msg: "get all service" });
};

const createUsersCard = async (req, res) => {
  serchCardExpireDates();

  const newLisenceDate = await new usersCard(req.body);
  console.log("Dates ==", newLisenceDate);

  // newLisenceDate
  //   .save()
  //   .then((result) => {
  //     return res.status(200).json({ msg: "data saved", result });
  //   })
  //   .catch((err) => {
  //     console.log("Error:", err);
  //   });
};

const updateUsersCard = (req, res) => {
  res.json({ msg: "update service" });
};

const showStatus = (req, res) => {
  res.json({ msg: "show service status" });
};

const deleteService = (req, res) => {
  res.json({ msg: "delete service" });
};

export {
  createUsersCard,
  getAllUsersCard,
  deleteService,
  updateUsersCard,
  showStatus,
};
