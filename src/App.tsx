import { Route, Routes } from "react-router-dom";
import "./App.css";
import KUMA from "./components/KUMA/KUMA";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <KUMA />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
