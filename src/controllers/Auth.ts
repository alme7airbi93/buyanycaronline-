import { JWT, UserPostData } from "./../types/index.d";
import { Request, Response, NextFunction } from "express";
import { default as User, UserModel } from "../models/User";
import jwt from "jsonwebtoken";

const generateToken = (user: JWT) => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: 6000
  });
};

const setUserInfo = (user: UserModel): JWT => {
  return {
    _id: user._id,
    email: user.email,
    type: user.type
  };
};

export const registerUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userPostData = <UserPostData>req.body;

  if (!userPostData.email) {
    return res.status(422).send({ error: "You must enter an email address" });
  }

  if (!userPostData.password) {
    return res.status(422).send({ error: "You must enter a password" });
  }

  User.findOne({ email: userPostData.email }, function(
    err,
    existingUser: UserModel
  ) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res
        .status(422)
        .send({ error: "That email address is already in use" });
    }

    const user = new User(userPostData);

    user.save(function(err, user: UserModel) {
      if (err) {
        return next(err);
      }

      const userInfo = setUserInfo(user);

      res.status(201).json({
        token: "Bearer " + generateToken(userInfo),
        user: userInfo
      });
    });
  });
};

export const login = (req: Request, res: Response) => {
  const userInfo = setUserInfo(req.user);

  res.status(200).json({
    token: "Bearer " + generateToken(userInfo),
    user: userInfo
  });
};
