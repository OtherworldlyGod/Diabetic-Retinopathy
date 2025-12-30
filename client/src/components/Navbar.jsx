import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">DR Detect</h1>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/upload">Upload</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
