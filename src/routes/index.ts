import express, { Request, Response } from "express";
import logger from "../util/logger";

import AuthRoutes from "./auth";

const router = express.Router();

router.get("/", (Request, Response) => {
  logger.log("info", "API is up and running");
  Response.send({
    message: "API is up and running"
  });
});

router.use("/auth", AuthRoutes);

export default router;
