import { Outlet } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";

axios.defaults.baseURL = "https://ishop-0956f618a0f9.herokuapp.com/";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

export default App;
