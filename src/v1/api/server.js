import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//? my imports
import databaseConnection from "./config/db.js";

import notFoundMiddleware from "./middleware/notFoundPage.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

import userRouter from "./routes/userRoutes.js";
import usersCardRouter from "./routes/usersCardRoutes.js";

//*database connection
databaseConnection();

//* middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// *routes
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Home hello" });
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/service", usersCardRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
