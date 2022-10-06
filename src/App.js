import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
