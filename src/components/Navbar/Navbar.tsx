import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { FiChevronUp } from "react-icons/fi";
import { HiColorSwatch, HiSun } from "react-icons/hi";
import Modal from "../Modal/Modal";
import Contact from "../../pages/Contact/Contact";

function Navbar() {
  const [contactModalActive, setContactModalActive] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [cmykPalette, setCMYKPalette] = useState(true);

  function setToTopVisibility() {
    const toTop = document.getElementById("to-top");

    if (toTop !== null) {
      if (window.scrollY <= 40) {
        toTop.classList.add("disable");
      } else {
        toTop.classList.remove("disable");
      }
    }
  }

  useEffect(() => {
    setToTopVisibility();

    const toTop = document.getElementById("to-top");
    if (toTop !== null) {
      document.addEventListener("scroll", (e) => {
        setToTopVisibility();
      });
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (cmykPalette) {
      document.documentElement.classList.remove("rgb");
      document.documentElement.classList.add("cmyk");
    } else {
      document.documentElement.classList.remove("cmyk");
      document.documentElement.classList.add("rgb");
    }
  }, [cmykPalette]);

  return (
    <>
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
          <button
            className="link"
            onClick={() => {
              setContactModalActive(true);
            }}
          >
            Contact
          </button>
        </div>
        <div className="icons">
          <HiSun
            className="icon sun"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          />
          <HiColorSwatch
            className="icon colour"
            onClick={() => {
              setCMYKPalette(!cmykPalette);
            }}
          />
        </div>
        <FiChevronUp
          className="to-top disable"
          id="to-top"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </nav>
      <Modal
        active={contactModalActive}
        handleDisable={() => {
          setContactModalActive(false);
        }}
      >
        <Contact />
      </Modal>
    </>
  );
}

export default Navbar;
