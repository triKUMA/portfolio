import { Link } from "react-router-dom";
import KUMA from "../KUMA/KUMA";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <p>
          tri/<span>KUMA</span>
        </p>
        <KUMA />
      </div>
      <div className="nav-links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <button className="link">Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
