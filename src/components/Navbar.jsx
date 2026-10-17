import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "16px", padding: "12px" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;