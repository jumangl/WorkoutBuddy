import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Pro</h1>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
