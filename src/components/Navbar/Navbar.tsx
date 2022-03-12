import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { FiChevronUp } from "react-icons/fi";
import { HiColorSwatch, HiSun } from "react-icons/hi";
import Modal from "../Modal/Modal";
import Contact from "../../pages/Contact/Contact";

function Navbar() {
  const [contactModalActive, setContactModalActive] = useState(false);
  const [colourTheme, setColourTheme] = useState(true);
  const [colourPalette, setColourPalette] = useState(true);

  function toggleColourTheme() {
    setColourTheme(!colourTheme);

    if (colourTheme) {
      document.documentElement.style.setProperty(
        "--background-colour",
        "black"
      );
      document.documentElement.style.setProperty("--text-colour", "white");
    } else {
      document.documentElement.style.setProperty(
        "--background-colour",
        "white"
      );
      document.documentElement.style.setProperty("--text-colour", "black");
    }
  }

  function toggleColourPalette() {
    setColourPalette(!colourPalette);

    if (colourPalette) {
      document.documentElement.style.setProperty("--primary-col-1", "#dbd82c");
      document.documentElement.style.setProperty("--primary-col-2", "#e02463");
      document.documentElement.style.setProperty("--primary-col-3", "#0073d1");
      // document.documentElement.style.setProperty("--primary-col-1", "#dbd82c");
      // document.documentElement.style.setProperty("--primary-col-2", "#e54c7f");
      // document.documentElement.style.setProperty("--primary-col-3", "#0078d7");
    } else {
      document.documentElement.style.setProperty("--primary-col-1", "#00ff00");
      document.documentElement.style.setProperty("--primary-col-2", "#ff0000");
      document.documentElement.style.setProperty("--primary-col-3", "#0000ff");
    }
  }

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
    toggleColourTheme();
    toggleColourPalette();
    setToTopVisibility();

    const toTop = document.getElementById("to-top");
    if (toTop !== null) {
      document.addEventListener("scroll", (e) => {
        setToTopVisibility();
      });
    }
  }, []);

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
              toggleColourTheme();
            }}
          />
          <HiColorSwatch
            className="icon colour"
            onClick={() => {
              toggleColourPalette();
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
