import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { FiChevronUp } from "react-icons/fi";

function Navbar() {
  useEffect(() => {
    const toTop = document.getElementById("to-top");

    if (toTop !== null) {
      document.addEventListener("scroll", (e) => {
        if (window.scrollY <= 40) {
          toTop.classList.add("disable");
          console.log("at top");
        } else {
          toTop.classList.remove("disable");
        }
      });
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <p>
          tri/<span>KUMA</span>
        </p>
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
      <FiChevronUp
        className="to-top disable"
        id="to-top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </nav>
  );
}

export default Navbar;
