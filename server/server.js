import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { dbConnect } from "./dbConnect/dbConnect.js";
import routes from "./routes/routes.js"


const app = express();
dotenv.config();

app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(express.json())

app.use(routes);

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnect();
});