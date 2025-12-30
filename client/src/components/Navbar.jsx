import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1 className="logo">DR Detect</h1>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>

        {token ? (
          <>
            <NavLink to="/upload">Upload</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
