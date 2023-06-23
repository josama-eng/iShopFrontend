import axios from "axios";

export const registerUser = (payload) => axios.post("/api/register", payload);

export const logUser = (payload) => axios.post("/api/login", payload);

export const logoutUser = () => {
  const persistedState = JSON.parse(localStorage.getItem("persist:root"));
  const cartState = persistedState ? persistedState.cart : null;

  localStorage.setItem("persist:root", JSON.stringify({ cart: cartState }));
};
