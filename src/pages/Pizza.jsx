
import { useState, useEffect } from "react";
import { pizzas as pizzasLocales } from "../pizzas";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const obtenerPizza = async () => {
      try {
        const respuesta = await fetch("https://hito-4-pizzeria-api.onrender.com/api/pizzas/p001");

        if (!respuesta.ok) {
          throw new Error("Error al cargar la pizza");
        }

        const datos = await respuesta.json();

        const pizzaLocal = pizzasLocales.find(
          (item) => item.id.toLowerCase() === datos.id.toLowerCase()
        );

        setPizza({
          ...datos,
          img: pizzaLocal?.img || datos.img,
        });
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    obtenerPizza();
  }, []);

  if (error) {
    return <p className="pizza-mensaje">No se pudo cargar la pizza.</p>;
  }

  if (!pizza) {
    return <p className="pizza-mensaje">Cargando pizza...</p>;
  }

  return (
    <main className="pizza-detail-container">
      <div className="pizza-detail-card">
        <div className="pizza-detail-image">
          <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
        </div>

        <div className="pizza-detail-info">
          <h2>Pizza {pizza.name}</h2>

          <p className="pizza-description">{pizza.desc}</p>

          <h3>Ingredientes:</h3>

          <ul>
            {pizza.ingredients.map((ingrediente) => (
              <li key={ingrediente}>{ingrediente}</li>
            ))}
          </ul>

          <div className="pizza-detail-bottom">
            <h3>Precio: ${pizza.price.toLocaleString("es-CL")}</h3>

            <button type="button" className="pizza-detail-button">
              Añadir al carrito 🛒
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pizza;
