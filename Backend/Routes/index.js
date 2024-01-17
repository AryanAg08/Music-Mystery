require("dotenv").config();
const router = require("express").Router();
require("../Admin/google-auth");
const passport = require("passport");
const Loginn = require("../Models/2.login");

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

router.get("/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect(`http://localhost:3000/dashboard/9r3u9493`);
    // res.send("this is working!!");
});


router.post("/login", async (req, res) => {
    console.log(req.body);

    res.json({ code: 200, status: "Message Sent"});
    const { email, password } = req.body;

     const Blog_Create = {
        email,
        password
     }

     const B1 = await new Loginn(Blog_Create).save();


});



module.exports = router;