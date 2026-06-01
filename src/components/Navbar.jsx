import { useState, useEffect } from "react";
import "./Navbar.css";

const links = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <span className="nav-logo">
        <span className="bracket">&lt;</span>Gendhi Ramona Prastyo<span className="bracket">/&gt;</span>
      </span>

      <button
        className="hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
