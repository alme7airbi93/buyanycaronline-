import { UserModel } from "./../models/User";
import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import { default as User } from "../models/User";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const localOptions = {
  usernameField: "email"
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload._id, function(err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      done(undefined, user);
    } else {
      done(undefined, false);
    }
  });
});

const localLogin = new LocalStrategy(localOptions, function(
  email: string,
  password: string,
  done
) {
  User.findOne(
    {
      email: email
    },
    function(err, user: UserModel) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(undefined, false, {
          message: "Login failed. Please try again."
        });
      }

      user.comparePassword(password, function(err, isMatch) {
        if (err) {
          return done(err);
        }

        if (!isMatch) {
          return done(undefined, false, {
            message: "Login failed. Please try again."
          });
        }

        return done(undefined, user);
      });
    }
  );
});

passport.use(jwtLogin);
passport.use(localLogin);
