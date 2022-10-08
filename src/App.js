import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import data from "./assets/shared/data";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home data={data} />} />
        <Route path="/crew" element={<Crew data={data} />} />
        <Route path="/destination" element={<Destination data={data} />} />
        <Route path="/technology" element={<Technology data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
