require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const PORT = process.env.PORT || 5001;
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./Routes/index");
const cookiesession = require("cookie-session");
const SongApi = require("./Routes/Songs");

const app = express();


// make api for google auth and sending lyrics data
mongoose.connect(process.env.mongo, {
}).then(() => {
    console.log("connected to the mongo!!");
});

// app.use((cors));
app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:3000",
        // methods: "GET,POST,PUT,DELETE",
        credentials: true,
        //optionsSuccessStatus: 200,
    })
);

app.use(
    cookiesession({
        name: "Sessions",
        keys: ["AryaAg"],
        maxAge: 24 * 60 * 60 * 100,
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);
app.use("/SongApi", SongApi);

app.listen(PORT, () => console.log(`Listening to the port ${PORT}`));