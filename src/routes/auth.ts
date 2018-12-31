import express, { Request, Response } from "express";
import passport from "passport";

import * as AuthController from "../controllers/Auth";

const passportconfig = require("../config/passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });

const router = express.Router();

router.post("/register", AuthController.registerUser);
router.post("/login", requireLogin, AuthController.login);
router.get("/protected", requireAuth, (req: Request, res: Response) =>
  res.send({
    message: "This is protected route"
  })
);

export default router;
