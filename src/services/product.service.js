import axios from "axios";

export const getProducts = () => axios.get("/api/products");
