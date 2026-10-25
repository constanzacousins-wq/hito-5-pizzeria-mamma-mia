
import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { pizzas as pizzasLocales } from "../pizzas";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const respuesta = await fetch("https://hito-4-pizzeria-api.onrender.com/api/pizzas");

        if (!respuesta.ok) {
          throw new Error("Error al cargar las pizzas");
        }

        const datos = await respuesta.json();

        const pizzasConImagen = datos.map((pizza) => {
          const pizzaLocal = pizzasLocales.find(
            (item) => item.id.toLowerCase() === pizza.id.toLowerCase()
          );

          return {
            ...pizza,
            img: pizzaLocal?.img || pizza.img,
          };
        });

        setPizzas(pizzasConImagen);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerPizzas();
  }, []);

  return (
    <>
      <Header />

      <div className="pizza-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
