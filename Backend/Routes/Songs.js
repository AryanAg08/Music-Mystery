const router = require("express").Router();
const axios = require("axios");

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

router.get("/getLyricsGame", async (req, res) => {
   var SSOng;
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
             //res.redirect(song.preview_url)
             SSOng = song.preview_url;
            
        }
    
        const data = {
            song: SSOng,
            lyrics: "Come on now, follow ______ I may be crazy, dont mind me ",
            ans: "my lead"  
        }   
      
    res.json(data);
})


module.exports = router;