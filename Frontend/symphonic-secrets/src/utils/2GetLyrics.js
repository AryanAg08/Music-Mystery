import axios from "axios";

export function getGame1() {
    axios.get("http://localhost:5001/SongApi/getLyricsGame", {
       withCredentials: true,
    })
}