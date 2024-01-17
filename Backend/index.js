// require = require('esm')(module /*, options*/);

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
const axios = require('axios');
const bodyParser = require('body-parser');
// const open = require("open");
const player  = require("play-sound")(opts = {});
const app = express();


// make api for google auth and sending lyrics dat
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

app.use(bodyParser.json());

const CLIENT_ID = process.env.spotifyid;
const CLIENT_SECRET = process.env.spotifysecret;

const AUTH_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search';

async function getAccessToken() {
  const authResponse = await axios.post(AUTH_ENDPOINT, null, {
    params: {
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    },
  });

  return authResponse.data.access_token;
}

app.get('/search', async (req, res) => {
//   const { songName } = req.body;
  
  try {
    const accessToken = await getAccessToken();

    const searchResponse = await axios.get(SEARCH_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: "shape of you",
        type: 'track',
      },
    });

    const tracks = searchResponse.data.tracks.items[0];
 
    const song = tracks

    //res.json({ message: 'Song Playback initiated!' });
    if (song && song.preview_url) {
         console.log(song.preview_url);
         res.redirect(song.preview_url)
    }

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => console.log(`Listening to the port ${PORT}`));
