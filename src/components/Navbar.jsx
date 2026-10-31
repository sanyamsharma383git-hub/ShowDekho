import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "16px", padding: "12px" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/movie">Movie</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/signup">SignUp</Link>
    </nav>
  );
}

export default Navbar;