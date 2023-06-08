import axios from "axios";

export const registerUser = (payload) => axios.post("/api/register", payload);
