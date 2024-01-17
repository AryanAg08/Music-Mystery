require("dotenv").config();
const router = require("express").Router();
require("../Admin/google-auth");
const passport = require("passport");

router.get("/home" , async (req, res) => {
    res.send("This is main page!!");
    console.log("working!!");
})

router.get("/google", passport.authenticate("google"));

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect(`http://localhost:3000/dashboard/${req.user.id}`);
    // res.send("this is working!!");
});

router.get("/user/googleAuth", (req, res) => {
    console.log(req.user);
    if (req.user) {
        res.send(req.user);
    }
    else {
        res.status(401).send('Unauthorized!!');
    }
});

router.get("/logout" , (req, res) => {
    req.logOut();
    res.redirect("/");
});



module.exports = router;