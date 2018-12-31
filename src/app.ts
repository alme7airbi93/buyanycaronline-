import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import expressValidator from "express-validator";
import bluebird from "bluebird";
import { MONGODB_URI } from "./util/secrets";
import ApiRoute from "./routes";

dotenv.config({ path: ".env" });

const app = express();

const mongoUrl = MONGODB_URI;
(<any>mongoose).Promise = bluebird;
mongoose
  .connect(
    mongoUrl,
    { useMongoClient: true }
  )
  .then(() => {
    console.log("Mongo is connected");
  })
  .catch(err => {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + err
    );
    process.exit();
  });

app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(expressValidator());

app.use("/api", ApiRoute);

export default app;
