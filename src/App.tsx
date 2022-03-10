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
      <div className="circle one" />
      <div className="circle two" />
      <div className="circle three" />
      <div className="green">
        <p className="text">This is random text.</p>
        <div className="grid" />
      </div>
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
