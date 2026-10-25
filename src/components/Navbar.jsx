
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand">Pizzería Mamma Mia!</span>

        <Link to="/">
          <button>🍕 Home</button>
        </Link>

        <Link to="/login">
          <button>🔐 Login</button>
        </Link>

        <Link to="/register">
          <button>🔐 Register</button>
        </Link>

        <Link to="/profile">
          <button>🔓 Profile</button>
        </Link>

        <Link to="/404">
          <button>404</button>
        </Link>
      </div>

      <Link to="/cart">
        <button>
          🛒 Total: ${total.toLocaleString("es-CL")}
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
