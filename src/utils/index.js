import axios from "axios";

export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

const serverURL = axios.create({
    // baseURL: "http://localhost:5000/api",
    baseURL: "https://taskify-uozt.onrender.com/api",
});

export default serverURL;