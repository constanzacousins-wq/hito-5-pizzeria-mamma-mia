
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1>🍕 Error 404</h1>
      <h2>¡Esta pizza no existe!</h2>
      <p>La página que buscas no está disponible.</p>

      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default NotFound;
