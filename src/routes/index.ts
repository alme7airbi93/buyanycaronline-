import express, { Request, Response } from "express";
import logger from "../util/logger";

const router = express.Router();

router.get("/", (Request, Response) => {
  logger.log("info", "API is up and running");
  Response.send({
    message: "API is up and running"
  });
});

export default router;
