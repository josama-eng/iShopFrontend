import axios from "axios";

export const saveOrder = (payload) => axios.post("/api/orders", payload);
