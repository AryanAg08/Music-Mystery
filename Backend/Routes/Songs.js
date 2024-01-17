const router = require("express").Router();

router.get("/getLyricsGame", async (req, res) => {
    const data = [{
        id: "1234",
        song: "The nights",
        lyrics: "He said,'One day you leave this world behind ________ you will remember'",
        ans: "so live a life"  
    }, {
        
    }
    ]
    res.json(data);
})

module.exports = router;