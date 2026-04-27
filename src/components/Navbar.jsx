import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <nav
        id="mobile-navigation"
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
        <NavLink to="/ai" onClick={() => setMenuOpen(false)}>AI</NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
        <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
        <NavLink to="/locations" onClick={() => setMenuOpen(false)}>Locations</NavLink>

        <button className="connect-btn mobile-btn">Let's Connect</button>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <button className="connect-btn desktop-btn">Let's Connect</button>
    </header>
  );
}