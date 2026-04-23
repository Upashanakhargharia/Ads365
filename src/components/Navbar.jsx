import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#/" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#/" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#/" onClick={() => setMenuOpen(false)}>AI</a>
        <a href="#/" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#/" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#/" onClick={() => setMenuOpen(false)}>Locations</a>
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