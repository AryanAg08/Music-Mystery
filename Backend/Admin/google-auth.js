const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const Guser = require("../Models/1.Google.js");


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await Guser.findOne({ id });
        return user ? done(null, user): done(null, null);
    } catch (err) {
        console.log(err);
        done(err, null);
    }
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.Client_Id,
        clientSecret: process.env.Client_secret,
        callbackURL: "/google/callback",
        scope: ["profile", "email"],
        //  passReqToCallback: true,
    }, async (accessToken, refreshToken, profile, done) => {
        const { sub, name, picture, email } = profile._json;
        console.log( sub, name, picture, email);
        try {
            const finduser = await Guser.findOneAndUpdate({
                id: sub,
            },{
                name: name,
                picture: picture,
                email: email,
            },{
                new: true,
            });
            if ( finduser ) {
                return done(null, finduser);
            } else {
                const newUser = await Guser.create({
                    id: sub,
                    name: name,
                    picture: picture,
                    email: email,
                });
                return done(null, newUser);
            }
        } catch (err) {
            return done(err, null);
        }
    })
);
