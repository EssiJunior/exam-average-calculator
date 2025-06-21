import axios from "axios";

export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

export const defaultOptions = (lottie) => ({
    loop: true,
    speed: 0.1,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
});

export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const serverURL = axios.create({
    // baseURL: "http://localhost:5000/api",
    baseURL: "https://taskify-uozt.onrender.com/api",
});

export default serverURL;