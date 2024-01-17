import axios from "axios";

export function getUserDetails() {
    return (
        axios.get('http://localhost:5001/user/googleAuth', {
            withCredentials: true,
        })
    )
}