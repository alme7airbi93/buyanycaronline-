var mongoose = require('mongoose'),
    passport = require('passport');
const User = mongoose.model('User');

exports.register = (req, res) => {
        if (!req.body.username || !req.body.hash) {
            return res.status(400).json({message: "All fields required"});
        }
        const user = new User();
        user.username = req.body.username;
        user.setPassword(req.body.hash);
        console.log("username", user.username + user.salt + user.hash + user);
        user.save((err) => {
            if (err) {
                res.status(404).json(err);
            } else {
                // @ts-ignore
                const token = user.generateJwt();
                res.status(200).json({token});
            }
    });
};

exports.login = (req, res) => {
        if (!req.body.username || !req.body.hash) {
            return res.status(400).json({message: "All fields required"});
        }
        passport.authenticate("local", (err, user, info) => {
            let token;
            if (err) {
                return res.status(404).json(err);
            }
            if (user) {
                token = user.generateJwt();
                res.status(200).json({token});
            } else {
                res.status(401).json(info);
            }
        })(req, res);
};
