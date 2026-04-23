export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <nav className="nav-links">
        <a href="#/">Work</a>
        <a href="#/">About Us</a>
        <a href="#/">AI</a>
        <a href="#/">Services</a>
        <a href="#/">Blog</a>
        <a href="#/">Locations</a>
      </nav>

      <button className="connect-btn">Let's Connect</button>
    </header>
  );
}