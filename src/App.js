import "./App.css";
import { Outlet } from "react-router-dom";
import axios from "axios";
import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";

axios.defaults.baseURL = "http://localhost:5050";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

export default App;
