import mongoose from "mongoose";
const usersCardSchema = new mongoose.Schema({
  username: { type: String, required: true },
  cardName: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  issueDate: { type: Date, required: true }, //?'2002-12-09'
  expDate: { type: Date, required: true },
});

const usersCard = mongoose.model("usersCard", usersCardSchema);
export default usersCard;
