import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        FluentFace <span>AI</span>
      </div>

      <ul className="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;